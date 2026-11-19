import { MapPin } from "lucide-react";

import { ContactDetails } from "@/components/contact-details";
import { ActionLink, Callout, Hero, Panel, Section } from "@/components/content";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { organization, sponsorshipAccount, whatsapp } from "@/data/contact";
import { pageImages } from "@/data/media";
import { testimonials, testimonialsNotice } from "@/data/testimonials";

const steps = [
  {
    title: "Elige ser padrino",
    description: "Cualquier persona, familia o empresa puede ser padrino o madrina. Solo necesitas el deseo de ayudar.",
  },
  {
    title: "Haz tu aporte",
    description: "Contribuye de forma mensual, quincenal o puntual, en efectivo o en especie. Desde $50.000 en adelante.",
  },
  {
    title: "Conoce a tu ahijado",
    description: "Como padrino, puedes visitar a tu ahijado en eventos especiales y compartir un momento especial con él o ella.",
  },
];

export function Apadrine() {
  return (
    <>
      <Hero
        title="Apadrine un Anciano Hoy"
        description="Tu aporte mensual puede transformar la vida de un abuelo que más lo necesita"
        image={pageImages.apadrine}
      />

      <Section className="max-w-4xl">
        <div className="border-l-2 border-anda-rose-dark pl-5 text-xl leading-relaxed">
          <p>
            La Fundación ANDA desea que la paz y el amor de nuestro Señor estén sobre usted y su familia. Hoy
            tocamos las puertas de su corazón para solicitarle un aporte que ayude a la alimentación y atención
            de un anciano o anciana.
          </p>
          <p className="mt-3 text-anda-wine">
            <strong>"Lo que usted está sembrando hoy, en un futuro lo recibirá multiplicado."</strong>
          </p>
        </div>
      </Section>

      <Section title="¿Cómo funciona el proyecto?" tone="paper">
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map(({ title, description }, index) => (
            <li key={title}>
              <Panel className="h-full">
                <span aria-hidden="true" className="mb-3 grid size-10 place-items-center rounded-full bg-anda-rose-pale font-bold text-anda-wine">
                  {index + 1}
                </span>
                <h3 className="mb-2 text-2xl font-bold text-anda-wine-dark">{title}</h3>
                <p>{description}</p>
              </Panel>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="preguntas-frecuentes" title="Todo lo que necesitas saber">
        <div className="grid gap-4 md:grid-cols-2">
          <Panel>
            <div className="prose-copy">
              <h3 className="text-2xl font-bold text-anda-wine-dark">¿En qué consiste?</h3>
              <p>
                El proyecto consiste en apadrinar a un adulto mayor a través de una contribución mensual en efectivo
                o en especie. Si es en efectivo, puedes hacer tu contribución:
              </p>
              <ul>
                <li>De forma personal en las instalaciones de la Fundación</li>
                <li>Consignando en la cuenta bancaria indicada abajo</li>
                <li>Una persona puede recoger tu cuota cuando tú lo solicites</li>
              </ul>
            </div>
          </Panel>
          <Panel>
            <div className="prose-copy">
              <h3 className="text-2xl font-bold text-anda-wine-dark">¿Cuánto puedo aportar?</h3>
              <p>
                El valor del aporte mínimo mensual es de <strong>$50.000</strong>, hasta lo que desees aportar.
                También puedes hacer tu contribución <strong>en especie</strong> (alimentos, medicamentos,
                materiales para talleres, etc.).
              </p>
              <div className="my-4 rounded-xl bg-anda-rose-pale p-4">
                <p className="font-bold text-anda-wine-dark">{sponsorshipAccount.bank}</p>
                <p>Cuenta de Ahorros No. <strong>{sponsorshipAccount.number}</strong></p>
                <p>A nombre de: <strong>{sponsorshipAccount.holder}</strong></p>
              </div>
              <p>
                Después de consignar, envíanos el comprobante por WhatsApp para registrar tu aporte y hacerte llegar
                tu certificado.
              </p>
            </div>
          </Panel>
          <Panel>
            <div className="prose-copy">
              <h3 className="text-2xl font-bold text-anda-wine-dark">¿Quién puede ser padrino o madrina?</h3>
              <p>
                Un padrino o madrina puede ser <strong>una sola persona o un grupo</strong> que se reúna para
                sostener a un anciano en su alimentación y atención integral. El proyecto está dirigido a:
              </p>
              <ul>
                <li>Personas naturales con deseo de ayudar</li>
                <li>Familias que quieran compartir esta labor</li>
                <li>Empresas y organizaciones solidarias</li>
                <li>Grupos de amigos, iglesias, comunidades</li>
              </ul>
            </div>
          </Panel>
          <Panel className="md:col-span-2">
            <div className="prose-copy" id="certificacion">
              <h3 className="text-2xl font-bold text-anda-wine-dark">Certificación para Empresas</h3>
              <p>
                La Fundación ANDA está <strong>autorizada para certificar</strong> las donaciones de empresas y
                compañías que nos apoyen. Esto les permite acceder a los <strong>beneficios tributarios</strong>
                establecidos por la Ley Colombiana, a través de un descuento sobre las rentas.
              </p>
              <p className="rounded-xl bg-anda-rose-pale p-4 font-bold text-anda-wine-dark">
                Base legal: Ley Colombiana 1276 de 2009 y Ley 1251 de 2008
              </p>
              <p>
                Contáctanos para obtener más información sobre el proceso de certificación de tu donación.
              </p>
            </div>
          </Panel>
        </div>
      </Section>

      <Section title="¿Listo para ser padrino?" intro="Contáctanos y te explicamos todo el proceso para que puedas elegir a tu ahijado." tone="rose">
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <Panel>
            <h3 className="mb-2 text-2xl font-bold text-anda-wine-dark">Por WhatsApp</h3>
            <p>La forma más rápida. Escríbenos y te respondemos a la brevedad.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <ActionLink to={whatsapp("Hola, quiero apadrinar a un anciano de la Fundación ANDA")} variant="whatsapp">Escribir ahora</ActionLink>
            </div>
          </Panel>
          <Panel>
            <h3 className="mb-2 text-2xl font-bold text-anda-wine-dark">Por Teléfono</h3>
            <p>Llámanos directamente y con gusto te atendemos.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {organization.phones.map(({ label, number }) => (
                <ActionLink key={number} to={`tel:${number}`} variant="outline">{label}</ActionLink>
              ))}
            </div>
          </Panel>
        </div>
        <Panel className="mb-4 flex items-start gap-3">
          <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-anda-wine" />
          <div>
            <h3 className="mb-1 text-xl font-bold text-anda-wine-dark">También puedes visitarnos:</h3>
            <p>{organization.address} — Colombia</p>
            <p>{organization.hours}</p>
          </div>
        </Panel>
        <ContactDetails />
      </Section>

      <Section id="testimonios" title="Testimonios" intro={testimonialsNotice} tone="paper">
        <CircularTestimonials testimonials={testimonials} />
      </Section>

      <Callout
        title="Cada abuelo merece ser amado"
        actions={
          <>
            <ActionLink to={whatsapp("Hola, quiero apadrinar un anciano")} variant="whatsapp">Quiero ser padrino</ActionLink>
            <ActionLink to="/actividades" variant="light">Ver nuestras actividades</ActionLink>
          </>
        }
      >
        Recuerda: "Lo que usted siembra hoy, en un futuro lo recogerá multiplicado."
      </Callout>
    </>
  );
}
