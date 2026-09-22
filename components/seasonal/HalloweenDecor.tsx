import Image from "next/image";
import styles from "./HalloweenSeason.module.css";

export function HalloweenDecor({ placement }: { placement: "hero" | "footer" }) {
  const isHero = placement === "hero";

  return (
    <div
      className={isHero ? styles.heroDecoration : styles.footerDecoration}
      aria-hidden={isHero ? undefined : true}
    >
      {isHero && (
        <div className={styles.greeting}>
          <p className={styles.greetingTitle}>Happy Halloween</p>
          <p className={styles.greetingFrom}>from Tow-N-Go Trailers</p>
          <p className={styles.greetingNote}>All treats. No hauling tricks.</p>
        </div>
      )}
      <Image
        src={`/images/seasonal/halloween-${isHero ? "pumpkins" : "skeleton"}.webp`}
        width={isHero ? 720 : 420}
        height={isHero ? 480 : 525}
        alt=""
        sizes={isHero ? "(min-width: 1280px) 340px, 180px" : "120px"}
        className={styles.decorationImage}
        draggable={false}
      />
    </div>
  );
}
