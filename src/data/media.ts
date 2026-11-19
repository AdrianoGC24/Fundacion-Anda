const imagesDirectory = `${import.meta.env.BASE_URL}images`;

export const logo = `${imagesDirectory}/logo/logo_fondo_blanco.png`;

export const activityImages = [
  `${imagesDirectory}/actividades/actividad-1.jpeg`,
  `${imagesDirectory}/actividades/actividad-2.jpeg`,
  `${imagesDirectory}/actividades/actividad-3.jpeg`,
  `${imagesDirectory}/actividades/actividad-4.jpeg`,
  `${imagesDirectory}/actividades/actividad-5.jpeg`,
  `${imagesDirectory}/actividades/actividad-6.jpeg`,
  `${imagesDirectory}/actividades/actividad-7.jpeg`,
  `${imagesDirectory}/actividades/actividad-8.jpeg`,
  `${imagesDirectory}/actividades/actividad-9.jpeg`,
] as const;

const photoDescriptions = [
  "Personas mayores compartiendo el almuerzo en el corredor de la Fundación",
  "Comensales en las mesas del corredor de la Fundación",
  "Grupo de personas reunidas alrededor de una mesa en la Fundación",
  "Comensales compartiendo una comida en una de las mesas del salón",
  "Personas mayores sentadas alrededor de la mesa del almuerzo",
  "Cuatro personas en una celebración con vestidos y accesorios de colores",
  "Asistentes reunidos al aire libre bajo los árboles",
  "Asistentes reunidos al aire libre bajo los árboles",
  "Foto grupal de la comunidad en el salón de la Fundación",
] as const;

export const activityPhotos = activityImages.map((src, index) => ({
  src,
  alt: photoDescriptions[index],
}));

export const pageImages = {
  inicio: activityImages[0],
  quienesSomos: activityImages[4],
  historia: activityImages[8],
  equipo: activityImages[6],
  actividades: activityImages[3],
  apadrine: activityImages[1],
} as const;
