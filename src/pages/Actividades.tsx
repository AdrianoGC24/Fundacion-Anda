import { ActionLink, Callout, Hero, Photo, Section } from "@/components/content";
import { whatsapp } from "@/data/contact";
import { activityPhotos, newsletterPhoto, pageImages } from "@/data/media";

const galleryPhotos = Object.values(activityPhotos).filter(
  (photo) => photo !== pageImages.actividades && photo !== newsletterPhoto,
);

const programs = [
  {
    title: "Alimentación",
    description: "Garantizamos una alimentación nutritiva y completa para los abuelos que más lo necesitan.",
    items: [
      "Almuerzos de lunes a viernes",
      "80 adultos mayores beneficiados diariamente",
      "Menús nutritivos y equilibrados",
    ],
  },
  {
    title: "Salud",
    description: "Atención básica en salud para quienes no tienen acceso a servicios médicos con regularidad.",
    items: [
      "Entrega de medicamentos primarios",
      "Toma de presión arterial",
      "Brigadas de salud y vacunación",
      "Charlas y capacitaciones en salud",
    ],
  },
  {
    title: "Educación",
    description: "La edad no es un límite para aprender. Fomentamos la educación y el crecimiento personal en nuestros abuelos.",
    items: [
      "Alfabetización: martes a jueves",
      "Evangelización: todos los martes y el último domingo del mes",
      "Sala de lectura (biblioteca)",
    ],
  },
  {
    title: "Recreación y Deportes",
    description: "El bienestar emocional es tan importante como el físico. Creamos momentos de alegría y movimiento.",
    items: [
      "Mesas de juego",
      "Grupos de baile",
      "Festejo de fechas especiales",
      "Salidas de campo al exterior",
      "Ejercicios físicos guiados",
    ],
  },
  {
    title: "Ocio Productivo",
    description: "Los abuelos activos crean con sus manos productos que les generan satisfacción y propósito de vida.",
    items: [
      "Talleres de manualidades: lunes a viernes",
      "Confección de tapetes y bajillas",
      "Elaboración de artesanías",
    ],
  },
];

export function Actividades() {
  return (
    <>
      <Hero
        title="Nuestras Actividades"
        description="Programas de atención integral que dignifican la vida de nuestros abuelos, de lunes a viernes"
        image={pageImages.actividades}
      />

      <Section className="max-w-4xl">
        <p className="border-l-2 border-anda-rose-dark pl-5 text-xl leading-relaxed">
          La atención integral que brindamos cubre las necesidades esenciales del adulto mayor: alimentación,
          salud, educación, recreación y ocupación productiva. Porque creemos que cada abuelo merece vivir con
          dignidad, alegría y propósito.
        </p>
      </Section>

      <Section title="Nuestros Programas" tone="paper">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ title, description, items }) => (
            <article className="overflow-hidden rounded-2xl border border-anda-border bg-white shadow-sm" key={title}>
              <div className="prose-copy p-5 sm:p-6">
                <h3 className="text-2xl font-bold text-anda-wine-dark">{title}</h3>
                <p>{description}</p>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Momentos de nuestra Fundación" intro="Imágenes que cuentan nuestra historia mejor que cualquier palabra.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {galleryPhotos.map((photo) => (
            <Photo
              key={photo.src}
              className="aspect-[4/3] w-full rounded-xl object-cover object-[center_45%]"
              image={photo}
              sizes="(min-width: 72rem) 352px, (min-width: 40rem) 31vw, 46vw"
            />
          ))}
        </div>
      </Section>

      <Callout
        title="Ayúdanos a sostener estos programas"
        actions={
          <>
            <ActionLink to="/apadrine" variant="light">Quiero apoyar</ActionLink>
            <ActionLink to={whatsapp()} variant="whatsapp">Contáctanos</ActionLink>
          </>
        }
      >
        Cada almuerzo, cada medicamento, cada taller depende del apoyo de personas como tú.
      </Callout>
    </>
  );
}
