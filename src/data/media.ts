const imagesDirectory = `${import.meta.env.BASE_URL}images`;

export type SiteImage = {
  src: string;
  alt: string;
};

export const logo = {
  src: `${imagesDirectory}/logo/logo_fondo_blanco.png`,
  alt: "Logotipo de la Fundación ANDA",
} as const satisfies SiteImage;

export const activityPhotos = [
  {
    src: `${imagesDirectory}/actividades/actividad-1.jpeg`,
    alt: "Personas mayores compartiendo el almuerzo en el corredor de la Fundación",
  },
  {
    src: `${imagesDirectory}/actividades/actividad-2.jpeg`,
    alt: "Comensales en las mesas del corredor de la Fundación",
  },
  {
    src: `${imagesDirectory}/actividades/actividad-3.jpeg`,
    alt: "Personas reunidas alrededor de una mesa en la Fundación",
  },
  {
    src: `${imagesDirectory}/actividades/actividad-4.jpeg`,
    alt: "Comensales compartiendo una comida en el salón",
  },
  {
    src: `${imagesDirectory}/actividades/actividad-5.jpeg`,
    alt: "Personas mayores sentadas alrededor de la mesa del almuerzo",
  },
  {
    src: `${imagesDirectory}/actividades/actividad-6.jpeg`,
    alt: "Cuatro participantes en una celebración con vestidos y accesorios de colores",
  },
  {
    src: `${imagesDirectory}/actividades/actividad-7.jpeg`,
    alt: "Participantes reunidos al aire libre bajo los árboles",
  },
  {
    src: `${imagesDirectory}/actividades/actividad-8.jpeg`,
    alt: "Participantes reunidos al aire libre bajo los árboles",
  },
  {
    src: `${imagesDirectory}/actividades/actividad-9.jpeg`,
    alt: "Foto grupal de la comunidad en el salón de la Fundación",
  },
] as const satisfies readonly SiteImage[];

export const pageImages = {
  inicio: activityPhotos[0],
  quienesSomos: activityPhotos[4],
  historia: activityPhotos[8],
  equipo: activityPhotos[6],
  actividades: activityPhotos[3],
  apadrine: activityPhotos[1],
} as const;
