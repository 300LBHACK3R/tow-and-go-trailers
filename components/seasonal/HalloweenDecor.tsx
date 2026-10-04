import Image from "next/image";
import styles from "./HalloweenSeason.module.css";

function Bat({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 96 42" fill="currentColor" focusable="false" aria-hidden="true">
      <path d="M48 18 43 9 40 17C29 16 18 10 5 2c1 11 1 20-5 28 12-6 20-6 27 2 7-6 13-6 21 10 8-16 14-16 21-10 7-8 15-8 27-2-6-8-6-17-5-28C78 10 67 16 56 17l-3-8-5 9Z" />
    </svg>
  );
}

function Cobweb({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.8" focusable="false" aria-hidden="true">
      <path d="M0 0v200M0 0l76 185M0 0l141 141M0 0l185 76M0 0h200" />
      <path d="M0 38q8-7 15-2 2-10 12-9-1-10 9-12-5-7 2-15M0 76q15-13 29-6 4-19 25-16-3-21 16-25-7-14 6-29M0 114q24-19 44-9 6-30 37-24-6-31 24-37-10-20 9-44M0 152q32-25 58-12 8-39 50-32-7-42 32-50-13-26 12-58M0 190q40-32 73-15 10-50 61-41-9-51 41-61-17-33 15-73" />
    </svg>
  );
}

/** Decorative edge accents for a relative, isolated page header. */
export function HalloweenPageDecor() {
  return (
    <div className={styles.pageDecoration} aria-hidden="true">
      <Cobweb className={styles.pageWeb} />
      <Bat className={styles.pageBatNear} />
      <Bat className={styles.pageBatFar} />
      <div className={styles.pagePumpkins}>
        <Image
          src="/images/seasonal/halloween-pumpkins.webp"
          width={720}
          height={480}
          alt=""
          sizes="150px"
          className={styles.decorationImage}
          draggable={false}
        />
      </div>
      <div className={styles.pageEdge} />
    </div>
  );
}

export function HalloweenDecor({ placement }: { placement: "hero" | "footer" }) {
  const isHero = placement === "hero";

  return (
    <div
      className={isHero ? styles.heroDecoration : styles.footerDecoration}
      aria-hidden={isHero ? undefined : true}
    >
      {isHero && (
        <div className={styles.greeting}>
          <div className={styles.greetingOrnament} aria-hidden="true">
            <span />
            <svg viewBox="0 0 20 20" fill="currentColor" focusable="false">
              <path d="M10 0 12 8 20 10 12 12 10 20 8 12 0 10 8 8Z" />
            </svg>
            <span />
          </div>
          <p className={styles.greetingTitle}>Happy Halloween</p>
          <p className={styles.greetingFrom}>from Tow-N-Go Trailers</p>
          <p className={styles.greetingNote}>All treats. No hauling tricks.</p>
        </div>
      )}
      <div className={isHero ? styles.pumpkinArrangement : styles.footerArrangement}>
        <Bat className={styles.arrangementBat} />
        <Image
          src={`/images/seasonal/halloween-${isHero ? "pumpkins" : "skeleton"}.webp`}
          width={isHero ? 720 : 420}
          height={isHero ? 480 : 525}
          alt=""
          sizes={isHero ? "(min-width: 1536px) 280px, (min-width: 640px) 175px, 140px" : "132px"}
          className={styles.decorationImage}
          draggable={false}
        />
      </div>
    </div>
  );
}
