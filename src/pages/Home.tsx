import { BadgeCheck, HandHeart, HeartHandshake, History, Sparkles, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";

import { ContactDetails } from "@/components/contact-details";
import { ActionLink, Callout, Hero, More, Panel, Section, textLink } from "@/components/content";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { SupportForm } from "@/components/support-form";
import { whatsapp } from "@/data/contact";
import { pageImages } from "@/data/media";
import { testimonials, testimonialsNotice } from "@/data/testimonials";

const pages = [
  {
    title: "Quiénes Somos",
    description: "Nuestra misión, visión, filosofía y los valores que guían cada acción de la Fundación.",
    details: "Conoce nuestros objetivos, la filosofía de atención personalizada y humana, y los 7 valores que definen nuestra forma de trabajar: amor, respeto, tolerancia, igualdad, dedicación, solidaridad y generosidad.",
    label: "Ir a la página",
    to: "/quienes-somos",
    icon: UsersRound,
  },
  {
    title: "Historia",
    description: "Más de 35 años de lucha y dedicación por los adultos mayores de Barranquilla.",
    details: "Todo comenzó en octubre de 1988, cuando 9 mujeres del barrio La Manga y Ciudad Modesto decidieron organizarse para proteger a los ancianos de su sector. Desde entonces, la Fundación no ha cerrado sus puertas ni un solo día.",
    label: "Ir a la página",
    to: "/historia",
    icon: History,
  },
  {
    title: "Equipo de Trabajo",
    description: "15 voluntarios diarios que dedican su tiempo y corazón al bienestar de los abuelos.",
    details: "Contamos con voluntarios en áreas administrativas, directivas y de coordinación de actividades. Además de colaboradores externos que aportan en especie, servicios profesionales y financiamiento.",
    label: "Ir a la página",
    to: "/equipo",
    icon: HandHeart,
  },
  {
    title: "Actividades",
    description: "Programas de alimentación, salud, educación, recreación y ocio productivo de lunes a viernes.",
    details: "Los abuelos reciben almuerzos diarios, atención en salud, clases de alfabetización, actividades físicas y talleres de manualidades donde crean tapetes y otros artículos, manteniéndose activos y con propósito.",
    label: "Ir a la página",
    to: "/actividades",
    icon: Sparkles,
  },
  {
    title: "Apadrine un Anciano",
    description: "Conviértete en padrino o madrina de uno de nuestros abuelos con un aporte mensual desde $50.000.",
    details: "Tu contribución puede ser en efectivo o en especie. Puedes consignar en la cuenta Colpatria No. 1000226983 a nombre de la Fundación ANDA, o contactarnos directamente. Como padrino, podrás visitar a tu ahijado en eventos especiales.",
    label: "Ir a la página",
    to: "/apadrine",
    icon: HeartHandshake,
  },
  {
    title: "Certificación",
    description: "Las empresas que nos apoyan pueden acceder a beneficios tributarios según la Ley Colombiana.",
    details: "La Fundación ANDA está autorizada para certificar donaciones de empresas y compañías, permitiéndoles acceder a descuentos sobre las rentas establecidos por la legislación colombiana vigente.",
    label: "Más información",
    to: "/apadrine#certificacion",
    icon: BadgeCheck,
  },
];

export function Home() {
  return (
    <>
      <Hero
        title="Dignificando la vida del adulto mayor"
        description="Más de 35 años acompañando a los abuelos y abuelas de Ciudad Modesto con amor, alimentación, salud y esparcimiento."
        image={pageImages.inicio}
        eyebrow="Barranquilla, Colombia — Desde 1988"
        home
      >
        <ActionLink to="/apadrine">Quiero apoyar</ActionLink>
        <ActionLink to="#quienes-somos" variant="outline">Conoce más</ActionLink>
      </Hero>

      <Section title="¿Qué es la Fundación ANDA?" id="quienes-somos" className="max-w-4xl">
        <div className="prose-copy">
          <p>
            La <strong>Fundación en Defensa del Anciano "ANDA"</strong> es una entidad sin ánimo de lucro. Es un
            hogar de paso donde personas mayores asisten de lunes a viernes, recibiendo alimentación, atención
            básica en salud, esparcimiento y talleres — siendo tratados con amor y tolerancia.
          </p>
          <More>
            <p>
              <strong>¿Qué es un Centro de Vida?</strong>
            </p>
            <p>
              Un Centro de Vida es una casa o sede donde el adulto mayor permanece durante el día. Es una
              organización centrada en el desarrollo social con programas de atención integral: alimentación,
              salud, recreación, educación y talleres ocupacionales.
            </p>
            <p>
              <strong>¿A qué se dedica la Fundación ANDA?</strong>
            </p>
            <p>
              La Fundación ANDA trabaja por la dignificación del adulto mayor del barrio Ciudad Modesto y sectores
              aledaños en el Suroccidente de Barranquilla, desde hace más de 35 años, sin dejar de trabajar un
              solo día por la comunidad.
            </p>
            <p>
              <strong>¿A quién beneficia?</strong>
            </p>
            <p>
              Beneficia a más de 100 abuelos y abuelas desprotegidos, de escasos recursos y enfermos del barrio
              Ciudad Modesto y sus alrededores.
            </p>
          </More>
          <div className="mt-4">
            <ActionLink to="/quienes-somos" variant="outline">Quiénes Somos</ActionLink>
          </div>
        </div>
      </Section>

      <Section title="¿Por qué existimos?" tone="paper" className="max-w-4xl">
        <div className="prose-copy">
          <p>
            El adulto mayor de nuestro sector vive en una zona marginada de la ciudad, en su mayoría de estrato
            1. Son personas entre 60 y 95 años, desprotegidas y en muchos casos abandonadas, que no cuentan con
            apoyo familiar ni recursos suficientes.
          </p>
          <More>
            <p>
              Muchos de ellos son personas activas, con capacidades para realizar labores productivas y
              manualidades. Pero al no contar con los recursos necesarios, se crean sentimientos de impotencia y
              desánimo.
            </p>
            <p>
              La Fundación ANDA cuenta actualmente con más de 100 abuelos beneficiarios. El programa de
              alimentación (almuerzo) beneficia a 80 adultos mayores de lunes a viernes, y otros participan en los
              programas de salud y recreación.
            </p>
          </More>
          <div className="mt-4">
            <ActionLink to="/historia" variant="outline">Nuestra Historia</ActionLink>
          </div>
        </div>
      </Section>

      <Section title="Conoce la Fundación" intro="Descubre todo lo que hacemos por nuestros abuelos y cómo puedes ser parte de esta labor." tone="rose">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map(({ title, description, details, to, label, icon: Icon }) => (
            <Panel className="flex flex-col" key={title}>
              <span className="mb-4 grid size-11 place-items-center rounded-full bg-anda-rose-pale text-anda-wine">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mb-2 text-2xl font-bold text-anda-wine-dark">{title}</h3>
              <p>{description}</p>
              <More><p>{details}</p></More>
              <div className="mt-auto pt-3">
                <Link className={textLink} to={to} aria-label={`${label}: ${title}`}>{label}</Link>
              </div>
            </Panel>
          ))}
        </div>
      </Section>

      <Section id="donar" title="Haz parte de esta misión" intro="Personas y empresas pueden apoyar nuestra labor mediante donaciones, voluntariado o ayudas en especie." className="max-w-4xl">
        <SupportForm />
      </Section>

      <Section id="testimonios" title="Voces que nos inspiran" intro={testimonialsNotice} tone="paper">
        <CircularTestimonials testimonials={testimonials} />
      </Section>

      <Callout
        title="¿Quieres unirte a nuestra causa?"
        actions={
          <>
            <ActionLink to={whatsapp("Hola, quiero apoyar a la Fundación ANDA")} variant="whatsapp">Contáctanos por WhatsApp</ActionLink>
            <ActionLink to="/apadrine" variant="light">Ver cómo donar</ActionLink>
          </>
        }
      >
        Personas, familias y empresas pueden marcar una diferencia en la vida de nuestros abuelos. Cada
        aporte, grande o pequeño, transforma vidas.
      </Callout>

      <Section id="contacto" title="Contacto" tone="paper">
        <ContactDetails />
      </Section>
    </>
  );
}
