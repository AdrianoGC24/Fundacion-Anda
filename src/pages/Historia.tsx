import { ActionLink, Callout, Hero, Section } from "@/components/content";
import { whatsapp } from "@/data/contact";
import { pageImages } from "@/data/media";

const milestones = [
  {
    year: "1988",
    description: (
      <p>
        El 3 de octubre, 9 mujeres de los barrios La Manga y Ciudad Modesto se organizan para proteger los
        derechos de los ancianos de su sector, muchos en estado de total abandono. Nace el Comité CODA,
        atendiendo inicialmente a 50 abuelos con ayuda del Centro de Salud San Camilo, el Hospital de la
        Manga y el ICBF.
      </p>
    ),
  },
  {
    year: "1991",
    description: (
      <p>
        Se inaugura formalmente la organización. Continúan los programas de salud, alimentación y
        recreación. Con el apoyo de la Pastoral Social Asoviche se consolida la sede física donde hoy
        funciona la Fundación.
      </p>
    ),
  },
  {
    year: "1994",
    description: (
      <p>
        Se canaliza un proyecto con el ICBF para beneficiar a 10 grupos en programas de atención integral al
        adulto mayor.
      </p>
    ),
  },
  {
    year: "1995",
    description: (
      <p>
        Se obtiene la <strong>personería jurídica y NIT</strong> como Asociación en Defensa del Anciano
        "ANDA", formalizando legalmente la labor de la organización.
      </p>
    ),
  },
  {
    year: "1996",
    description: (
      <p>
        El Estado retira toda la ayuda durante el gobierno Pastrana. Los programas están a punto de
        desaparecer, pero esto impulsa el nacimiento del proyecto <strong>"Apadrine un Anciano
        Hoy"</strong>. Los primeros padrinos fueron Paulina Insignares y Ana Quin De Valiente.
      </p>
    ),
  },
  {
    year: "1999",
    description: (
      <p>
        Se vincula la familia Pinilla y la Fundación Senderos de Paz, apoyando diferentes actividades y
        fortaleciendo la red de colaboradores de la Fundación.
      </p>
    ),
  },
  {
    year: "2005",
    description: (
      <p>
        El programa PNAAM ("Almuerzos Calientes") comienza a funcionar en el Centro de Vida, beneficiando
        inicialmente a <strong>200 ancianos</strong>. El programa es dirigido por el ICBF y administrado por
        Cooprosperar.
      </p>
    ),
  },
  {
    year: "2006",
    description: (
      <p>
        La Alcaldía Distrital otorga ayudas a través de CODAFE, mejorando la calidad de los servicios a los
        ancianos y la estructura de la planta física de la asociación.
      </p>
    ),
  },
  {
    year: "2007",
    description: (
      <p>
        Apoyo de la Alcaldía Distrital durante la administración de Alejandro Char por tres meses. La
        Fundación brinda desayunos, atención médica, alfabetización y eventos especiales.
      </p>
    ),
  },
  {
    year: "2010",
    description: (
      <p>
        La razón social cambia a <strong>Fundación en Defensa del Anciano Hogar Centro de Vida
        "ANDA"</strong>. El programa de Almuerzos Calientes finaliza a nivel nacional. El Gobierno lo
        reemplaza con un subsidio de $75.000 mensuales, pero la Fundación continúa ofreciendo almuerzos para
        70 beneficiarios con sus propios recursos.
      </p>
    ),
  },
  {
    year: "2019 – 2020",
    description: (
      <p>
        La pandemia reduce significativamente los recursos. Algunos padrinos y madrinas se alejan o
        fallecen. A pesar de las dificultades, la Fundación sigue atendiendo a sus beneficiarios sin cerrar
        sus puertas.
      </p>
    ),
  },
  {
    year: "Hoy",
    description: (
      <p>
        La Fundación continúa su labor con más de <strong>100 abuelos beneficiarios</strong>, 15 voluntarios
        diarios y la solidaridad de personas y empresas comprometidas con la dignidad del adulto mayor.
      </p>
    ),
  },
];

export function Historia() {
  return (
    <>
      <Hero
        title="Nuestra Historia"
        description="Más de 35 años de amor, lucha y dedicación por los adultos mayores de Barranquilla"
        image={pageImages.historia}
      />

      <Section className="max-w-4xl">
        <p className="border-l-2 border-anda-rose-dark pl-5 text-xl leading-relaxed">
          Todo comenzó con la valentía de 9 mujeres que se negaron a mirar hacia otro lado. Desde octubre de
          1988, la Fundación ANDA no ha cerrado sus puertas ni un solo día por los abuelos y abuelas de su
          comunidad.
        </p>
      </Section>

      <Section title="Línea del Tiempo" tone="paper" className="max-w-4xl">
        <ol className="border-l-2 border-anda-rose-dark pl-5 sm:pl-8">
          {milestones.map(({ year, description }) => (
            <li className="relative border-b border-anda-border py-5 last:border-0" key={year}>
              <span aria-hidden="true" className="absolute top-8 -left-[27px] size-3 rounded-full bg-anda-wine ring-4 ring-anda-paper sm:-left-[39px]" />
              <h3 className="mb-2 text-2xl font-bold text-anda-wine">{year}</h3>
              {description}
            </li>
          ))}
        </ol>
      </Section>

      <Callout
        title="Sé parte de nuestra historia"
        actions={
          <>
            <ActionLink to="/apadrine" variant="light">Quiero apoyar</ActionLink>
            <ActionLink to={whatsapp()} variant="whatsapp">Contáctanos</ActionLink>
          </>
        }
      >
        Cada padrino, cada donación, cada voluntario escribe un nuevo capítulo en esta historia de amor.
      </Callout>
    </>
  );
}
