"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { halloweenSeason, isHalloweenSeasonActive } from "@/lib/seasonal";
import styles from "./HalloweenSeason.module.css";

function subscribeToSeason(onChange: () => void) {
  let timer: ReturnType<typeof setTimeout>;

  const update = () => {
    clearTimeout(timer);
    onChange();
    const now = Date.now();
    const nextBoundary = now < halloweenSeason.startsAt
      ? halloweenSeason.startsAt
      : halloweenSeason.endsAt;

    if (now < nextBoundary) {
      // Browser timers cannot exceed about 24.8 days.
      timer = setTimeout(update, Math.min(nextBoundary - now + 100, 2_147_483_647));
    }
  };

  update();
  document.addEventListener("visibilitychange", update);
  window.addEventListener("focus", update);

  return () => {
    clearTimeout(timer);
    document.removeEventListener("visibilitychange", update);
    window.removeEventListener("focus", update);
  };
}

function getSeasonSnapshot() {
  return isHalloweenSeasonActive(Date.now());
}

function subscribeToMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  document.addEventListener("visibilitychange", onChange);

  return () => {
    query.removeEventListener("change", onChange);
    document.removeEventListener("visibilitychange", onChange);
  };
}

function getMotionSnapshot() {
  return !document.hidden
    && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerMotionSnapshot() {
  return false;
}

export function HalloweenSeason({ children }: { children: ReactNode }) {
  const active = useSyncExternalStore(subscribeToSeason, getSeasonSnapshot, () => false);
  const moving = useSyncExternalStore(subscribeToMotion, getMotionSnapshot, getServerMotionSnapshot);

  return (
    <div
      className={`${styles.season} relative isolate flex min-h-screen flex-col overflow-x-clip bg-[#050505]`}
      data-season={active ? "halloween" : undefined}
      data-seasonal-motion={moving ? "on" : "off"}
    >
      {children}
      {active && (
        <div className={styles.fog} aria-hidden="true">
          <div className={styles.fogNear} />
          <div className={styles.fogFar} />
        </div>
      )}
    </div>
  );
}
