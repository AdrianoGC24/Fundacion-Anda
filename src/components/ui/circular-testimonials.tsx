import { motion, useInView, useReducedMotion } from "framer-motion";
import type { Transition, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  alt?: string;
};

type TestimonialColors = {
  button?: string;
  buttonHover?: string;
  name?: string;
  designation?: string;
  quote?: string;
};

type CircularTestimonialsProps = {
  testimonials: readonly Testimonial[];
  autoplay?: boolean;
  colors?: TestimonialColors;
};

const autoplayDelay = 6_000;
const cardTransition: Transition = { type: "spring", stiffness: 200, damping: 28 };
const wordReveal: Variants = {
  hidden: { filter: "blur(10px)", opacity: 0, y: 5 },
  shown: { filter: "blur(0px)", opacity: 1, y: 0 },
};
const arrowClass =
  "grid size-12 cursor-pointer place-items-center rounded-full bg-(--testimonial-button) text-white transition-colors hover:bg-(--testimonial-hover) active:bg-(--testimonial-hover) motion-reduce:transition-none";

function cardPosition(index: number, activeIndex: number, count: number) {
  if (index === activeIndex) return 0;
  if (index === (activeIndex + 1) % count) return 1;
  if (index === (activeIndex - 1 + count) % count) return -1;
  return 2;
}

export function CircularTestimonials(props: CircularTestimonialsProps) {
  if (props.testimonials.length === 0) return null;

  return <TestimonialsCarousel {...props} />;
}

function TestimonialsCarousel({
  testimonials,
  autoplay = true,
  colors,
}: CircularTestimonialsProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const inView = useInView(carouselRef, { amount: 0.3 });
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [paused, setPaused] = useState(false);

  const count = testimonials.length;
  const activeIndex = index % count;
  const active = testimonials[activeIndex];
  const canAutoplay = autoplay && count > 1 && !reducedMotion;
  const playing = canAutoplay && inView && !paused && !hovered && !focused;

  useEffect(() => {
    if (!playing) return;

    const timer = window.setTimeout(() => setIndex((activeIndex + 1) % count), autoplayDelay);
    return () => window.clearTimeout(timer);
  }, [activeIndex, count, playing]);

  const palette = {
    "--testimonial-button": colors?.button ?? "#241a20",
    "--testimonial-hover": colors?.buttonHover ?? "var(--anda-wine, #80374f)",
    "--testimonial-name": colors?.name ?? "var(--anda-wine-dark, #572437)",
    "--testimonial-designation": colors?.designation ?? "var(--muted-foreground, #66545b)",
    "--testimonial-quote": colors?.quote ?? "var(--foreground, #4a3a40)",
  } as CSSProperties;

  const move = (step: number) => {
    setIndex((currentIndex) => (currentIndex + step + count) % count);
  };

  return (
    <div
      aria-label="Testimonios"
      aria-roledescription="carrusel"
      className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-2 lg:gap-12"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      onFocus={() => setFocused(true)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={carouselRef}
      role="group"
      style={palette}
    >
      <div
        className="relative mx-auto aspect-[5/4] w-full max-w-[28rem] [perspective:1000px]"
      >
        {testimonials.map(({ src, alt }, cardIndex) => {
          const position = cardPosition(cardIndex, activeIndex, count);
          const visible = position !== 2;
          const front = position === 0;
          const side = visible ? position : 0;

          return (
            <motion.img
              key={`${cardIndex}-${src}`}
              alt={alt ?? "Fotografía ilustrativa del testimonio"}
              aria-hidden={!front}
              animate={{
                x: `${side * 25}%`,
                scale: front ? 1 : visible ? 0.85 : 0.74,
                rotateY: side * -14,
                rotateZ: side * 6,
                opacity: front ? 1 : visible ? 0.92 : 0,
              }}
              className="pointer-events-none absolute inset-y-[6%] left-[15%] h-[88%] w-[70%] rounded-3xl bg-anda-rose-pale object-cover shadow-2xl"
              draggable={false}
              initial={false}
              loading="lazy"
              src={src}
              style={{ zIndex: front ? 3 : visible ? 2 : 1 }}
              transition={reducedMotion ? { duration: 0 } : cardTransition}
            />
          );
        })}
      </div>

      <div className="min-w-0">
        <div aria-atomic="true" aria-live={playing ? "off" : "polite"}>
          <div key={activeIndex}>
            <h3 className="text-2xl font-bold wrap-anywhere text-(--testimonial-name) md:text-3xl">{active.name}</h3>
            <p className="mt-1 text-base text-(--testimonial-designation)">{active.designation}</p>
            <blockquote className="mt-4 text-lg leading-relaxed wrap-anywhere text-(--testimonial-quote) lg:text-xl">
              <span className="sr-only">«{active.quote}»</span>
              <motion.span
                aria-hidden="true"
                animate={inView || reducedMotion ? "shown" : undefined}
                initial={reducedMotion ? false : "hidden"}
                variants={reducedMotion ? {} : { shown: { transition: { staggerChildren: 0.028 } } }}
              >
                {`«${active.quote}»`.split(/\s+/).map((word, wordIndex) => (
                  <Fragment key={wordIndex}>
                    {wordIndex > 0 ? " " : null}
                    <motion.span
                      className="inline-block max-w-full"
                      transition={{ duration: 0.24, ease: "easeOut" }}
                      variants={reducedMotion ? undefined : wordReveal}
                    >
                      {word}
                    </motion.span>
                  </Fragment>
                ))}
              </motion.span>
            </blockquote>
          </div>
        </div>

        {count > 1 && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button aria-label="Testimonio anterior" className={arrowClass} onClick={() => move(-1)} type="button">
              <ArrowLeft aria-hidden="true" size={22} />
            </button>
            <button aria-label="Testimonio siguiente" className={arrowClass} onClick={() => move(1)} type="button">
              <ArrowRight aria-hidden="true" size={22} />
            </button>
            {canAutoplay && (
              <button
                className="min-h-11 cursor-pointer rounded-sm px-1 text-sm font-semibold text-(--testimonial-name) underline underline-offset-4"
                onClick={() => setPaused((current) => !current)}
                type="button"
              >
                {paused ? "Reanudar el carrusel" : "Pausar el carrusel"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
