import type { CSSProperties } from "react";
import styles from "./HalloweenBats.module.css";

// Fixed paths keep the first client render deterministic, with no animation loop in JS.
const flights = [
  { level: "23%", size: "38px", duration: "29s", delay: "-4s", rise: "-38px", tone: "gold" },
  { level: "42%", size: "30px", duration: "37s", delay: "-18s", rise: "44px", tone: "black" },
  { level: "66%", size: "34px", duration: "33s", delay: "-10s", rise: "-52px", tone: "gold" },
  { level: "81%", size: "27px", duration: "43s", delay: "-29s", rise: "-28px", tone: "black" },
  { level: "32%", size: "24px", duration: "41s", delay: "-23s", rise: "32px", tone: "black" },
] as const;

/** Small, purely decorative silhouettes; the season wrapper owns motion preferences. */
export function HalloweenBats() {
  return (
    <div className={styles.sky} aria-hidden="true">
      {flights.map((flight, index) => (
        <span
          key={flight.level}
          className={`${styles.flight} ${index % 2 ? styles.reverse : ""}`}
          style={{
            "--flight-level": flight.level,
            "--flight-size": flight.size,
            "--flight-duration": flight.duration,
            "--flight-delay": flight.delay,
            "--flight-rise": flight.rise,
            "--wing-rate": `${0.62 + index * 0.09}s`,
          } as CSSProperties}
        >
          <svg
            className={`${styles.bat} ${flight.tone === "gold" ? styles.gold : styles.black}`}
            viewBox="0 0 100 52"
            fill="currentColor"
            strokeLinejoin="round"
            focusable="false"
          >
            <g className={styles.leftWing}>
              <path d="M47 23C34 21 20 9 5 3 9 16 8 28 2 37c10-6 17-5 22 3 7-7 13-5 23 8Z" />
            </g>
            <g className={styles.rightWing}>
              <path d="M53 23C66 21 80 9 95 3 91 16 92 28 98 37c-10-6-17-5-22 3-7-7-13-5-23 8Z" />
            </g>
            <path className={styles.body} d="m44 23 1-12 5 6 5-6 1 12c5 8 2 20-6 27-8-7-11-19-6-27Z" />
          </svg>
        </span>
      ))}
    </div>
  );
}
