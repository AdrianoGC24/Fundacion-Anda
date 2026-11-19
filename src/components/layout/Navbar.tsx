import { Heart, Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { container } from "@/components/content";
import { organization } from "@/data/contact";
import { logo } from "@/data/media";
import { sections } from "@/data/sections";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { key } = useLocation();
  const [openForLocation, setOpenForLocation] = useState<string>();
  const opened = openForLocation === key;
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="sticky top-0 z-30 border-b border-anda-border bg-white shadow-sm"
      onKeyDown={(event) => {
        if (opened && event.key === "Escape") {
          setOpenForLocation(undefined);
          toggle.current?.focus();
        }
      }}
    >
      <div className={cn(container, "flex min-h-[4.75rem] flex-wrap items-center justify-between gap-x-4 py-2 lg:flex-nowrap")}>
        <Link className="flex items-center gap-2.5 rounded-sm" onClick={() => setOpenForLocation(undefined)} to="/">
          <img alt="" className="size-11 rounded-full border border-anda-border bg-white object-contain sm:size-12" src={logo} />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold whitespace-nowrap text-anda-wine-dark sm:text-xl">{organization.shortName}</span>
            <span className="text-sm font-bold text-muted-foreground">{organization.subtitle}</span>
          </span>
        </Link>
        <button
          aria-controls="navegacion-principal"
          aria-expanded={opened}
          aria-label={opened ? "Cerrar menú" : "Abrir menú"}
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-anda-border text-anda-wine hover:bg-anda-rose-pale lg:hidden"
          onClick={() => setOpenForLocation(opened ? undefined : key)}
          ref={toggle}
          type="button"
        >
          {opened ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav
          aria-label="Navegación principal"
          className={cn("max-h-[calc(100dvh-5rem)] w-full flex-col gap-1 overflow-y-auto border-t border-anda-border py-3 lg:flex lg:w-auto lg:flex-row lg:items-center lg:overflow-visible lg:border-0 lg:py-0", opened ? "flex" : "hidden")}
          id="navegacion-principal"
        >
          {sections.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end
              onClick={() => setOpenForLocation(undefined)}
              className={({ isActive }) => cn(
                "inline-flex min-h-11 items-center justify-start gap-2 rounded-full px-3 py-2 text-base leading-tight font-bold whitespace-nowrap xl:px-4",
                path === "/apadrine"
                  ? cn("mt-1 justify-center bg-anda-wine px-5 text-white hover:bg-anda-wine-dark lg:mt-0 lg:ml-2", isActive && "bg-anda-wine-dark underline underline-offset-4")
                  : isActive ? "bg-anda-rose-pale text-anda-wine" : "text-foreground hover:bg-anda-rose-pale",
              )}
            >
              {path === "/apadrine" && <Heart aria-hidden="true" size={17} />}
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
