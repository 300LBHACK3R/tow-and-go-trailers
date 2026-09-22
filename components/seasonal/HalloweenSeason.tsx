"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { halloweenSeason, isHalloweenSeasonActive } from "@/lib/seasonal";
import styles from "./HalloweenSeason.module.css";

const preferenceKey = "tng-halloween-fog-paused";
const preferenceEvent = "tng-halloween-fog-change";
let pausedWithoutStorage: boolean | null = null;

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
  window.addEventListener("storage", onChange);
  window.addEventListener(preferenceEvent, onChange);

  return () => {
    query.removeEventListener("change", onChange);
    document.removeEventListener("visibilitychange", onChange);
    window.removeEventListener("storage", onChange);
    window.removeEventListener(preferenceEvent, onChange);
  };
}

function getPausedPreference() {
  if (pausedWithoutStorage !== null) return pausedWithoutStorage;
  try {
    return window.localStorage.getItem(preferenceKey) === "true";
  } catch {
    return false;
  }
}

function getMotionSnapshot() {
  return !getPausedPreference()
    && !document.hidden
    && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerMotionSnapshot() {
  return false;
}

export function HalloweenSeason({ children }: { children: ReactNode }) {
  const active = useSyncExternalStore(subscribeToSeason, getSeasonSnapshot, () => false);
  const moving = useSyncExternalStore(subscribeToMotion, getMotionSnapshot, getServerMotionSnapshot);

  function toggleFog() {
    const paused = !getPausedPreference();
    try {
      window.localStorage.setItem(preferenceKey, String(paused));
      pausedWithoutStorage = null;
    } catch {
      // The current visit still works when browser storage is unavailable.
      pausedWithoutStorage = paused;
    }
    window.dispatchEvent(new Event(preferenceEvent));
  }

  return (
    <div
      className={`${styles.season} relative isolate flex min-h-screen flex-col overflow-x-clip bg-[#050505]`}
      data-season={active ? "halloween" : undefined}
      data-seasonal-motion={moving ? "on" : "off"}
    >
      {children}
      {active && (
        <>
          <div className={styles.fog} aria-hidden="true">
            <div className={styles.fogNear} />
            <div className={styles.fogFar} />
          </div>
          <button
            className={styles.motionControl}
            type="button"
            onClick={toggleFog}
            aria-label={moving ? "Pause Halloween fog" : "Play Halloween fog"}
          >
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" fill="currentColor">
              {moving ? <path d="M4 3h3v10H4zm5 0h3v10H9z" /> : <path d="m5 3 8 5-8 5z" />}
            </svg>
            <span>{moving ? "Pause fog" : "Play fog"}</span>
          </button>
        </>
      )}
    </div>
  );
}
