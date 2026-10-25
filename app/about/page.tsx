import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className="overflow-x-clip bg-[#090a09]">
      <PageHero
        eyebrow="About Tow-N-Go Trailers"
        title="Built on resilience, family, and doing things the right way."
        description="Tow-N-Go Trailers is a family-owned business built to provide safe, dependable trailer rentals with honest service, strong values, and a long-term vision for growth."
        breadcrumb="About"
        image={{
          src: "/images/heroes/fleet-premium.webp",
          alt: "Black enclosed, dump and flatdeck trailers overlooking the Okanagan at sunset",
          position: "68% 60%",
          mobilePosition: "90% 58%",
        }}
      />

      <section className={styles.content}>
        <Container>
          <article aria-labelledby="our-story-heading" className={styles.story}>
              <div className={styles.storyIntro}>
                <p className={styles.eyebrow}>01 / Our beginning</p>
                <h2 id="our-story-heading" className={styles.heading}>Our Story</h2>
                <div aria-hidden="true" className={styles.storyPhoto}>
                  <Image
                    src="/images/heroes/fleet-premium.webp"
                    alt=""
                    fill
                    sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), (max-width: 1279px) 40vw, 460px"
                    className={styles.photo}
                  />
                </div>
              </div>
              <div className={styles.storyCopy}>
                <p className={styles.lead}>
                  Tow-N-Go Trailers was built through resilience, persistence, and a
                  genuine desire to create something meaningful for our family and the
                  community we serve.
                </p>
                <p>
                  After a life-changing accident in 2018, our path forward looked very
                  different than originally planned. Overnight, there was a complete
                  shift in what the future would look like. Instead of giving up, Chad
                  and Melissa began exploring how they could build something of their
                  own — something practical, dependable, and worth growing.
                </p>
                <p>
                  Through that process, Chad returned to school and completed a
                  Business Management degree, while Melissa supported both the family
                  and the vision every step of the way.
                </p>
                <p>
                  Together, Tow-N-Go Trailers was built with one clear goal: to
                  deliver a better rental experience — one defined by quality
                  equipment, reliability, and genuine customer care.
                </p>
                <p className={styles.promise}>
                  We’re proud to serve the Okanagan with a standard of service we
                  would expect ourselves.
                </p>
              </div>
          </article>
          <article aria-labelledby="why-we-started-heading" className={styles.purpose}>
              <div className={styles.purposeCopy}>
                <p className={styles.eyebrow}>02 / Our purpose</p>
                <h2 id="why-we-started-heading" className={styles.heading}>Why We Started</h2>
                <div className={styles.purposeText}>
                <p>
                  We saw a gap in the market. Trailer rentals were often overpriced,
                  poorly maintained, limited in selection, and frustrating to deal
                  with.
                </p>
                <p>
                  We wanted to offer something different — a clean, safe, and
                  dependable option with real customer service behind it.
                </p>
                <p>
                  Whether someone is moving, hauling equipment, or dealing with a
                  stressful situation, the last thing they should worry about is the
                  trailer they rented.
                </p>
                </div>
              </div>
              <div aria-hidden="true" className={styles.purposePhoto}>
                <Image
                  src="/images/tow-and-go-royal-cargo-enclosed-trailer-okanagan-interior-empty-02.png"
                  alt=""
                  fill
                  sizes="(max-width: 639px) calc(100vw - 80px), (max-width: 1023px) calc(100vw - 128px), (max-width: 1279px) 38vw, 456px"
                  className={styles.photo}
                />
              </div>
          </article>
        </Container>
      </section>
    </main>
  );
}
