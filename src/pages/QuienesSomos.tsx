import { Feather, Gift, HandHeart, Handshake, Heart, Scale, Star } from "lucide-react";

import { ActionLink, Callout, Hero, Panel, Section } from "@/components/content";
import { whatsapp } from "@/data/contact";
import { pageImages } from "@/data/media";

const values = [
  {
    title: "Amor",
    description: "Mostrando un afecto sincero y un trato cordial entre afiliados, voluntarios y padrinos.",
    icon: Heart,
  },
  {
    title: "Respeto",
    description: "Ejerciendo el buen trato entre todos los integrantes para una convivencia armoniosa.",
    icon: Handshake,
  },
  {
    title: "Tolerancia",
    description: "Comprendiendo y aceptando las diferentes formas de pensar y actuar de cada individuo.",
    icon: Feather,
  },
  {
    title: "Igualdad",
    description: "Reconociéndonos como individuos con iguales derechos y deberes sociales.",
    icon: Scale,
  },
  {
    title: "Dedicación",
    description: "Asumiendo nuestra tarea y trabajo con amor en el servicio al prójimo.",
    icon: Star,
  },
  {
    title: "Solidaridad",
    description: "Colaborando en las tareas comunes para el bien de la Fundación y sus beneficiarios.",
    icon: HandHeart,
  },
  {
    title: "Generosidad",
    description: "Sirviendo espontáneamente y con desprendimiento en beneficio a la causa de la Fundación.",
    icon: Gift,
  },
];

export function QuienesSomos() {
  return (
    <>
      <Hero
        title="Quiénes Somos"
        description="Nuestra misión, visión y los valores que guían cada acción de la Fundación ANDA"
        image={pageImages.quienesSomos}
      />

      <Section title="Objetivos" className="max-w-4xl">
        <Panel>
          <h3 className="mb-3 text-2xl font-bold text-anda-wine-dark">Nuestros Objetivos</h3>
          <div className="prose-copy">
            <ul>
              <li>Defender y proteger los derechos de los adultos mayores con el apoyo necesario para la satisfacción de sus necesidades básicas, a través de programas de atención integral.</li>
              <li>Mejorar la calidad de vida de nuestros ancianos y ancianas mediante programas de asistencia humanitaria.</li>
              <li>Canalizar donaciones y gestionar proyectos sociales y productivos con el fin de que sean autosostenibles para el sostenimiento de los programas sociales de la Fundación.</li>
            </ul>
          </div>
        </Panel>
      </Section>

      <Section tone="paper" title="Misión" className="max-w-4xl">
        <Panel>
          <h3 className="mb-3 text-2xl font-bold text-anda-wine-dark">Nuestra Misión</h3>
          <div className="prose-copy">
            <ul>
              <li>Propiciar y fortalecer la labor social con los adultos mayores, acogiéndolos con respeto y cariño, brindándoles el calor humano y familiar que muchas veces les falta, logrando así su dignificación como seres humanos.</li>
              <li>Buscar apoyo en entidades, grupos y personas que quieran unirse a nuestra labor para la ejecución y desarrollo de los programas a favor del adulto mayor.</li>
              <li>Obtener los recursos necesarios para ampliar la cobertura y mejorar la calidad de los programas en atención integral, especialmente el de nutrición que beneficia a 80 adultos mayores de lunes a viernes.</li>
              <li>Fomentar el espíritu de solidaridad e integración entre la Fundación, los abuelos beneficiarios, colaboradores y padrinos, así como con la sociedad en general.</li>
              <li>Conseguir un padrino o madrina para cada uno de los abuelos beneficiarios de la Fundación.</li>
              <li>Lograr que cada padrino o madrina conozca nuestra Fundación y la labor que desarrollamos en pro de sus ahijados.</li>
            </ul>
          </div>
        </Panel>
      </Section>

      <Section title="Visión" className="max-w-4xl">
        <Panel>
          <h3 className="mb-3 text-2xl font-bold text-anda-wine-dark">Nuestra Visión</h3>
          <div className="prose-copy">
            <p>
              La Fundación ANDA se posicionará como un Centro de vital importancia en los próximos cinco años en
              el barrio Ciudad Modesto y sus alrededores, para brindar una atención de calidad a todos sus
              afiliados a través de una planta física ampliada con áreas de estudio, patio para recreación y
              deportes, talleres de manualidades y confección, y enfermería totalmente acondicionada.
            </p>
            <p>
              Será autosostenible gracias a los aportes de un mayor número de padrinos, la venta de productos
              elaborados por los propios ancianos capacitados, y la apertura de una tienda donde se comercialicen
              esos y otros productos al público.
            </p>
            <p>
              La Fundación contará además con un personal administrativo remunerado que trabaje por su
              consolidación y buena marcha.
            </p>
          </div>
        </Panel>
      </Section>

      <Section tone="paper" title="Filosofía" className="max-w-4xl">
        <Panel>
          <h3 className="mb-3 text-2xl font-bold text-anda-wine-dark">Nuestra Filosofía</h3>
          <div className="prose-copy">
            <p>
              La Fundación brinda espacios acordes a las necesidades del adulto mayor donde predominan el amor, el
              respeto, la tolerancia y el esparcimiento, en un ambiente de armonía, sana convivencia y ocupación
              productiva. En ellos, los abuelos pueden ser ellos mismos y sentirse importantes y activos, a través
              de una atención personalizada y humana en pro del mejoramiento de su calidad de vida.
            </p>
          </div>
        </Panel>
      </Section>

      <Section title="Nuestros Valores" intro="Los principios que guían cada decisión y cada acción de la Fundación." tone="rose">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ title, description, icon: Icon }) => (
            <Panel key={title}>
              <Icon aria-hidden="true" className="mb-3 size-6 text-anda-wine" />
              <h3 className="mb-2 text-2xl font-bold text-anda-wine-dark">{title}</h3>
              <p>{description}</p>
            </Panel>
          ))}
        </div>
      </Section>

      <Callout
        title="¿Compartes nuestros valores?"
        actions={
          <>
            <ActionLink to={whatsapp("Hola, quiero ser voluntario en la Fundación ANDA")} variant="whatsapp">Ser voluntario</ActionLink>
            <ActionLink to="/apadrine" variant="light">Ser padrino</ActionLink>
          </>
        }
      >
        Únete como voluntario o padrino y sé parte de esta hermosa labor.
      </Callout>
    </>
  );
}
