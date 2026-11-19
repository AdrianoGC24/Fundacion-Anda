import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { FooterColumn } from "@/components/ui/footer-column";
import { whatsapp } from "@/data/contact";
import { sections } from "@/data/sections";

export function Layout() {
  const { pathname } = useLocation();
  const normalizedPath = pathname.replace(/\/$/, "") || "/";
  const section = sections.find(({ path }) => path === normalizedPath);

  useEffect(() => {
    document.title = normalizedPath === "/"
      ? "Fundación ANDA — Hogar Centro de Vida"
      : `${section?.label ?? "Página no encontrada"} — Fundación ANDA`;
  }, [normalizedPath, section]);

  return (
    <div className="flex min-h-dvh flex-col">
      <a className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-40 focus:rounded-md focus:bg-white focus:p-3" href="#contenido-principal">
        Saltar al contenido
      </a>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1" id="contenido-principal" tabIndex={-1}>
        <Outlet />
      </main>
      <FooterColumn />
      <a
        aria-label="Contactar por WhatsApp"
        className="fixed right-4 bottom-4 z-20 grid size-12 place-items-center rounded-full border border-white bg-anda-leaf text-white shadow-lg hover:bg-anda-leaf-dark sm:right-6 sm:bottom-6"
        href={whatsapp(normalizedPath === "/" ? "Hola, quiero saber cómo apoyar a la Fundación ANDA" : undefined)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden="true" size={23} />
      </a>
    </div>
  );
}
