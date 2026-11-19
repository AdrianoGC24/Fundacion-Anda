import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

import { container } from "@/components/content";
import { organization, whatsapp } from "@/data/contact";
import { activityImages, logo } from "@/data/media";
import { cn } from "@/lib/utils";

const navigation = [
  {
    title: "Nosotros",
    links: [
      { label: "Quiénes Somos", to: "/quienes-somos" },
      { label: "Nuestra Historia", to: "/historia" },
      { label: "Nuestro Equipo", to: "/equipo" },
    ],
  },
  {
    title: "Programas y Ayuda",
    links: [
      { label: "Actividades", to: "/actividades" },
      { label: "Apadrine un Abuelo", to: "/apadrine" },
      { label: "Voluntariado / Donaciones", to: "/#donar" },
    ],
  },
] as const;

const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${organization.address}, Colombia`)}`;
const footerLink = "inline-block rounded-sm py-1 leading-snug text-anda-wine-dark underline-offset-4 hover:underline focus-visible:underline";
const columnHeading = "mb-2 font-sans text-base font-bold text-anda-wine-dark";

function requestSubscription(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const email = String(new FormData(event.currentTarget).get("email") ?? "").trim();
  const subject = encodeURIComponent("Suscripción a las novedades de Fundación ANDA");
  const body = encodeURIComponent(`Hola, quiero recibir novedades de la Fundación ANDA en este correo: ${email}.`);
  window.location.href = `mailto:${organization.email}?subject=${subject}&body=${body}`;
}

function Newsletter() {
  return (
    <section aria-labelledby="footer-novedades" className="bg-anda-wine-dark text-white">
      <div className={cn(container, "grid items-center gap-8 py-9 sm:py-12 md:grid-cols-[1.5fr_1fr] md:gap-12")}>
        <div className="max-w-xl">
          <h2 id="footer-novedades" className="text-3xl font-bold sm:text-4xl">Novedades de la Fundación ANDA</h2>
          <p className="mt-3 text-lg text-anda-rose-pale">
            Recibe noticias sobre nuestras actividades y formas de apoyar.
          </p>
          <form className="mt-5" onSubmit={requestSubscription}>
            <label className="mb-1 block font-bold" htmlFor="correo-novedades">Correo electrónico</label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                aria-describedby="envio-novedades"
                autoComplete="email"
                className="min-h-12 min-w-0 flex-1 rounded-lg bg-white px-3.5 text-foreground focus-visible:outline-white"
                id="correo-novedades"
                name="email"
                required
                type="email"
              />
              <button className="min-h-12 cursor-pointer rounded-lg bg-anda-rose-pale px-5 font-bold text-anda-wine-dark hover:bg-anda-rose-soft focus-visible:outline-white" type="submit">
                Solicitar suscripción
              </button>
            </div>
            <p className="mt-2 text-sm text-anda-rose-pale" id="envio-novedades">
              Se abrirá tu aplicación de correo para enviar la solicitud.
            </p>
          </form>
        </div>
        <div className="mx-auto w-full max-w-80 px-4 py-2">
          <img
            alt="Participantes de una actividad al aire libre de la Fundación ANDA"
            className="aspect-[16/10] w-full rotate-4 rounded-2xl border-4 border-anda-rose-pale object-cover shadow-xl"
            loading="lazy"
            src={activityImages[6]}
          />
        </div>
      </div>
    </section>
  );
}

export function FooterColumn() {
  return (
    <footer className="overflow-hidden rounded-t-xl bg-secondary">
      <Newsletter />
      <div className={cn(container, "pt-10 sm:pt-12")}>
        <div className="grid gap-8 pb-9 lg:grid-cols-3 lg:gap-10">
          <div className="max-w-sm">
            <Link className="inline-flex items-center gap-3 rounded-sm text-anda-wine-dark" to="/">
              <img alt="" className="size-14 shrink-0 rounded-full bg-white object-contain" height={56} loading="lazy" src={logo} width={56} />
              <span className="font-serif text-lg leading-snug font-bold">{organization.name}</span>
            </Link>
            <p className="mt-2">{organization.subtitle} · NIT {organization.nit}</p>
            <p className="mt-2 italic">«{organization.slogan}»</p>
          </div>
          <nav aria-label="Enlaces del pie de página" className="grid min-w-0 gap-6 min-[440px]:grid-cols-2 lg:col-span-2 xl:grid-cols-4">
            {navigation.map(({ title, links }) => (
              <div key={title}>
                <h2 className={columnHeading}>{title}</h2>
                <ul className="space-y-1">
                  {links.map(({ label, to }) => (
                    <li key={to}><Link className={footerLink} to={to}>{label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className={columnHeading}>Enlaces Útiles</h2>
              <ul className="space-y-1">
                <li><Link className={footerLink} to="/apadrine#preguntas-frecuentes">Preguntas Frecuentes</Link></li>
                <li><a className={footerLink} href={directions} rel="noopener noreferrer" target="_blank">Cómo Llegar</a></li>
                <li>
                  <a className={cn(footerLink, "inline-flex items-center gap-2")} href={whatsapp()} rel="noopener noreferrer" target="_blank">
                    <span aria-hidden="true" className="relative flex size-2.5 shrink-0">
                      <span className="absolute inset-0 rounded-full bg-anda-leaf/70 motion-safe:animate-ping" />
                      <span className="relative size-full rounded-full bg-anda-leaf" />
                    </span>
                    Contacto / WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div className="min-w-0">
              <h2 className={columnHeading}>Contáctanos</h2>
              <address className="space-y-2 not-italic">
                <div className="flex items-start gap-2">
                  <Mail aria-hidden="true" className="mt-1.5 size-4 shrink-0 text-anda-wine" />
                  <a className={cn(footerLink, "min-w-0 wrap-anywhere")} href={`mailto:${organization.email}`}>{organization.email}</a>
                </div>
                <div className="flex items-start gap-2">
                  <Phone aria-hidden="true" className="mt-1.5 size-4 shrink-0 text-anda-wine" />
                  <ul>
                    {organization.phones.map(({ label, number }) => (
                      <li key={number}><a className={footerLink} href={`tel:${number}`}>{label}</a></li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin aria-hidden="true" className="mt-1.5 size-4 shrink-0 text-anda-wine" />
                  <a className={footerLink} href={directions} rel="noopener noreferrer" target="_blank">
                    {organization.address}, Colombia
                  </a>
                </div>
              </address>
            </div>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-anda-wine/25 pt-4 pr-12 pb-6 text-sm text-anda-wine-dark">
          <p>© {new Date().getFullYear()} {organization.name}. Todos los derechos reservados.</p>
          <a className="grid size-10 place-items-center rounded-full border border-anda-wine/30 hover:bg-white" aria-label="WhatsApp de Fundación ANDA" href={whatsapp()} rel="noopener noreferrer" target="_blank">
            <MessageCircle aria-hidden="true" size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}
