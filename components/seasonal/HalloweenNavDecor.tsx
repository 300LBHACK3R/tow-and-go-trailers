import styles from "./HalloweenNavDecor.module.css";

/** Lightweight seasonal ornament; it never receives focus or pointer events. */
export function HalloweenNavDecor() {
  return (
    <div className={styles.decoration} aria-hidden="true">
      <svg
        className={styles.web}
        viewBox="0 0 120 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path d="M120 0H0m120 0L9 31m111-31L35 58m85-58L75 76m45-76v80" />
        <path d="M95 0q1 7 2 7-2 5 5 5 0 6 9 3 4 3 9 2M70 0q2 13 4 13-3 12 10 11 1 12 17 8 9 5 19 1M43 0q3 20 6 20-4 18 21 18 1 16 20 12 14 7 30 1M15 0q4 27 7 28-5 25 29 26 2 19 29 13 18 10 40 1" />
      </svg>

      <svg
        className={styles.spider}
        viewBox="0 0 44 94"
        fill="none"
        focusable="false"
      >
        <path className={styles.silk} d="M22 0v43" />
        <g className={styles.legs}>
          <path d="m19 51-8-7-5-12m13 23L7 52 2 42m17 16L7 65 3 79m17-17-8 13 1 15" />
          <path d="m25 51 8-7 5-12m-13 23 12-3 5-10m-17 16 12 7 4 14M24 62l8 13-1 15" />
        </g>
        <ellipse className={styles.body} cx="22" cy="64" rx="9" ry="13" />
        <ellipse className={styles.body} cx="22" cy="49" rx="5" ry="6" />
        <path className={styles.sheen} d="M17 60q-2 6 1 10" />
        <path className={styles.hourglass} d="m18.5 58 3.5 5 3.5-5ZM18.5 68l3.5-5 3.5 5Z" />
      </svg>
    </div>
  );
}
