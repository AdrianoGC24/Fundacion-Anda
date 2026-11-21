const imagesDirectory = `${import.meta.env.BASE_URL}images`;

export type SitePhoto = {
  src: string;
  srcSet: string;
  alt: string;
};

export const logo = {
  src: `${imagesDirectory}/logo/logo_fondo_blanco.png`,
  alt: "Logotipo de la Fundación ANDA",
} as const;

function activityPhoto(number: number, alt: string): SitePhoto {
  const filename = `actividad-${number}.webp`;
  const src = `${imagesDirectory}/actividades/grandes/${filename}`;
  const thumbnail = `${imagesDirectory}/actividades/miniaturas/${filename}`;
  return { src, srcSet: `${thumbnail} 640w, ${src} 1440w`, alt };
}

export const activityPhotos = {
  almuerzoCorredor: activityPhoto(1, "Personas mayores compartiendo el almuerzo en el corredor de la Fundación"),
  comensalesCorredor: activityPhoto(2, "Comensales en las mesas del corredor de la Fundación"),
  encuentroCorredor: activityPhoto(3, "Personas reunidas alrededor de una mesa en el corredor de la Fundación"),
  almuerzoSalon: activityPhoto(4, "Comensales compartiendo una comida en el salón"),
  mesaCompartida: activityPhoto(5, "Personas mayores sentadas alrededor de una mesa durante el almuerzo"),
  celebracion: activityPhoto(6, "Cuatro participantes en una celebración con vestidos y accesorios de colores"),
  encuentroAlAireLibre: activityPhoto(7, "Participantes reunidos al aire libre bajo los árboles"),
  comunidad: activityPhoto(9, "Foto grupal de la comunidad en el salón de la Fundación"),
} as const;

export const pageImages = {
  inicio: activityPhotos.almuerzoCorredor,
  quienesSomos: activityPhotos.comunidad,
  historia: activityPhotos.comunidad,
  equipo: activityPhotos.comunidad,
  actividades: activityPhotos.almuerzoSalon,
  apadrine: activityPhotos.comensalesCorredor,
} as const;

export const newsletterPhoto = activityPhotos.encuentroAlAireLibre;
