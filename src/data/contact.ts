export const organization = {
  name: 'Fundación en Defensa del Anciano "ANDA"',
  shortName: "Fundación ANDA",
  subtitle: "Hogar Centro de Vida",
  nit: "802.002.058-5",
  slogan: "Con el paso de los años nos vamos haciendo débiles, volvemos a ser niños",
  phones: [
    { label: "300 646 5727", number: "+573006465727" },
    { label: "323 333 9106", number: "+573233339106" },
  ],
  email: "fundacionanda@hotmail.com",
  address: "Calle 99D #14A-84, Barrio La Paz, Barranquilla",
  hours: "Lunes a viernes, de la mañana hasta las 2:00 PM",
} as const;

export const sponsorshipAccount = {
  bank: "Banco Colpatria (Red Multicanal)",
  number: "1000226983",
  holder: organization.shortName,
} as const;

export function whatsapp(message?: string) {
  const link = `https://wa.me/${organization.phones[0].number.slice(1)}`;
  return message ? `${link}?text=${encodeURIComponent(message)}` : link;
}
