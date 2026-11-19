import { ChevronDown, MessageCircle } from "lucide-react";
import { useId, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

export const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
export const textLink = "rounded-sm font-bold text-anda-wine underline decoration-anda-rose-dark underline-offset-4 hover:decoration-current";

export function ActionLink({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "whatsapp" | "light";
}) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-center text-base font-bold leading-snug transition-colors",
    {
      primary: "bg-anda-wine text-white hover:bg-anda-wine-dark",
      outline: "border border-anda-wine/60 text-anda-wine hover:bg-anda-rose-pale",
      whatsapp: "bg-anda-leaf text-white hover:bg-anda-leaf-dark",
      light: "bg-white text-anda-wine hover:bg-anda-rose-pale",
    }[variant],
  );

  if (to.startsWith("/") || to.startsWith("#")) {
    return <Link className={classes} to={to}>{children}</Link>;
  }

  const opensNewTab = to.startsWith("https://");
  return (
    <a
      className={classes}
      href={to}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
    >
      {variant === "whatsapp" && <MessageCircle aria-hidden="true" size={19} />}
      {children}
    </a>
  );
}

export function Hero({
  title,
  description,
  image,
  eyebrow,
  children,
  home = false,
}: {
  title: string;
  description: string;
  image: string;
  eyebrow?: string;
  children?: ReactNode;
  home?: boolean;
}) {
  return (
    <section className="border-b border-anda-border bg-anda-paper">
      <div className={cn(container, "grid items-center gap-8 py-11 sm:py-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12", home && "lg:py-17")}>
        <div className="max-w-xl">
          {eyebrow && (
            <p className="mb-4 border-l-2 border-anda-rose-dark pl-3 font-bold text-anda-wine">
              {eyebrow}
            </p>
          )}
          <h1 className={cn("text-4xl leading-[1.1] font-bold tracking-tight text-anda-wine-dark sm:text-5xl", home && "lg:text-[clamp(3.35rem,5vw,4.9rem)]")}>
            {title}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">{description}</p>
          {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
        </div>
        <img
          alt=""
          className={cn("h-full max-h-96 min-h-48 w-full rounded-[1.75rem] object-cover shadow-md", home ? "aspect-[4/3] lg:max-h-120" : "aspect-[16/9]")}
          fetchPriority={home ? "high" : "auto"}
          src={image}
        />
      </div>
    </section>
  );
}

export function Section({
  id,
  title,
  intro,
  tone = "white",
  children,
  className,
}: {
  id?: string;
  title?: string;
  intro?: string;
  tone?: "white" | "rose" | "paper";
  children: ReactNode;
  className?: string;
}) {
  const headingId = useId();

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={cn("py-11 sm:py-15", { white: "bg-white", rose: "bg-anda-rose-pale", paper: "bg-anda-paper" }[tone])}
    >
      <div className={cn(container, className)}>
        {title && (
          <header className="mb-7 max-w-3xl sm:mb-9">
            <h2 id={headingId} className="text-3xl font-bold tracking-tight text-anda-wine-dark sm:text-4xl">{title}</h2>
            {intro && <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-anda-border bg-white p-5 shadow-sm sm:p-7", className)}>
      {children}
    </div>
  );
}

export function More({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();

  return (
    <div>
      <div id={contentId} hidden={!expanded} className="prose-copy mt-4 border-t border-anda-border pt-4">
        {children}
      </div>
      <button
        aria-controls={contentId}
        aria-expanded={expanded}
        className="mt-3 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-sm font-bold text-anda-wine underline decoration-anda-rose-dark underline-offset-4 hover:decoration-current"
        onClick={() => setExpanded(!expanded)}
        type="button"
      >
        {expanded ? "Ver menos" : "Ver más"}
        <ChevronDown aria-hidden="true" className={cn("size-4", expanded && "rotate-180")} />
      </button>
    </div>
  );
}

export function Callout({
  title,
  children,
  actions,
}: {
  title: string;
  children: ReactNode;
  actions: ReactNode;
}) {
  return (
    <section className="bg-anda-wine-dark py-11 text-white sm:py-15">
      <div className={cn(container, "grid items-center gap-6 lg:grid-cols-[1fr_auto]")}>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg leading-relaxed text-anda-rose-pale">{children}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">{actions}</div>
      </div>
    </section>
  );
}
