import { ActionLink, Callout, Hero, Panel, Section } from "@/components/content";
import { whatsapp } from "@/data/contact";
import { pageImages } from "@/data/media";

type Team = {
  title: string;
  people: { name?: string; role: string; description: string }[];
};

const teams: Team[] = [
  {
    title: "Área Directiva",
    people: [
      {
        name: "Elvia Escobar Acosta",
        role: "Representante Legal",
        description: "Fundadora y líder de la Fundación ANDA desde sus inicios en 1988.",
      },
    ],
  },
  {
    title: "Área Administrativa",
    people: [
      {
        role: "Contaduría",
        description: "Profesional en contaduría que apoya la gestión financiera de la Fundación.",
      },
      {
        role: "Comunicación Social",
        description: "Apoya la comunicación y visibilidad de la Fundación en medios y redes.",
      },
      {
        role: "Administración",
        description: "Gestiona los recursos y procesos internos del día a día de la Fundación.",
      },
    ],
  },
  {
    title: "Coordinación de Actividades",
    people: [
      {
        role: "Docente Voluntario",
        description: "Apoya los programas de alfabetización y educación para los abuelos.",
      },
      {
        role: "Recreación y Deportes",
        description: "Coordina las actividades físicas, juegos y celebraciones especiales.",
      },
      {
        role: "Talleres de Manualidades",
        description: "Guía los talleres de ocio productivo: tapetes, costura y otras actividades.",
      },
    ],
  },
];

const collaborators = [
  {
    title: "En Especie",
    items: [
      "Padre Ciyrilo Swinne",
      "Banco de Occidente — Fondo de Empleados (donación en diciembre)",
      "Varias empresas que apoyan mensualmente con alimentos no perecederos",
      "Fundación Senderos de Paz — almuerzos el último domingo de cada mes y aportes en época de navidad",
    ],
  },
  {
    title: "Proyecto Apadrine",
    items: [
      "Familia Pinilla Abuchaibe",
      "Familia Vengal Insignares",
      "Familia Galvis del Verchior",
      "Paola Cruz",
      "Familia Solano",
      "Fernando Hadad",
      "Angélica Pérez",
      "Empresas: Proveedor Naval y Grescaribe",
    ],
  },
];

export function Equipo() {
  return (
    <>
      <Hero
        title="Equipo de Trabajo"
        description="Las personas que cada día hacen posible nuestra labor — todos voluntarios"
        image={pageImages.equipo}
      />

      <Section className="max-w-4xl">
        <p className="border-l-2 border-anda-rose-dark pl-5 text-xl leading-relaxed">
          <strong>15 personas</strong> trabajan en la Fundación diariamente en diferentes áreas, de manera
          voluntaria y con un compromiso admirable. Gracias a ellas, los abuelos reciben atención continua y
          de calidad.
        </p>
      </Section>

      {teams.map(({ title, people }, index) => (
        <Section key={title} title={title} tone={index % 2 === 0 ? "paper" : "white"}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {people.map(({ name, role, description }) => (
              <Panel key={role}>
                <h3 className="mb-2 text-2xl font-bold text-anda-wine-dark">{name ?? role}</h3>
                {name && <p className="mb-1 font-semibold text-anda-wine">{role}</p>}
                <p>{description}</p>
              </Panel>
            ))}
          </div>
        </Section>
      ))}

      <Section title="Colaboradores" intro="Personas y organizaciones que generosamente apoyan nuestra labor." tone="rose">
        <div className="grid gap-4 md:grid-cols-2">
          {collaborators.map(({ title, items }) => (
            <Panel key={title}>
              <h3 className="mb-3 text-2xl font-bold text-anda-wine-dark">{title}</h3>
              <ul className="prose-copy">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Panel>
          ))}
        </div>
      </Section>

      <Callout
        title="¿Quieres ser voluntario?"
        actions={
          <>
            <ActionLink to={whatsapp("Hola, quiero ser voluntario en la Fundación ANDA")} variant="whatsapp">Quiero ser voluntario</ActionLink>
            <ActionLink to="/apadrine" variant="light">Ser padrino</ActionLink>
          </>
        }
      >
        Tu tiempo y talento pueden transformar la vida de un abuelo. Escríbenos y cuéntanos cómo quieres
        colaborar.
      </Callout>
    </>
  );
}
