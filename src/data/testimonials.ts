import type { Testimonial } from "@/components/ui/circular-testimonials";
import { activityImages } from "@/data/media";

export const testimonialsNotice =
  "Testimonios de ejemplo con nombres y citas ficticios. Las fotos muestran actividades de la fundación.";

export const testimonials = [
  {
    name: "Claudia M.",
    designation: "Familiar de una participante",
    quote: "Mi mamá empezó a contarme con quién había almorzado y qué habían hecho juntas. Me alegró volver a oírla hablar con tantas ganas de lo que haría al día siguiente.",
    src: activityImages[3],
  },
  {
    name: "Jorge R.",
    designation: "Padrino ANDA",
    quote: "Me acerqué porque quería ayudar con los almuerzos. Cuando pude compartir una tarde con el grupo, entendí lo importante que era también sentarse a conversar y escuchar.",
    src: activityImages[6],
  },
  {
    name: "Marta L.",
    designation: "Voluntaria",
    quote: "En el taller llevé hilos para enseñar un punto nuevo. Terminé aprendiendo otro de una de las abuelas. Ahora, cuando hay taller, siempre le pido que me guarde un asiento.",
    src: activityImages[5],
  },
  {
    name: "Andrés P.",
    designation: "Familiar de un participante",
    quote: "Al principio mi papá decía que solo iría a conocer. Ahora deja lista su camisa la noche anterior. Para él, encontrarse con los demás es parte de la alegría de la semana.",
    src: activityImages[0],
  },
  {
    name: "Lucía G.",
    designation: "Madrina ANDA",
    quote: "Lo que más recuerdo de mi primera visita es que me hicieron sitio en la mesa. Cada vez que vuelvo, alguien me pregunta cómo está mi familia. Ese cariño me hace querer volver.",
    src: activityImages[8],
  },
] as const satisfies readonly Testimonial[];
