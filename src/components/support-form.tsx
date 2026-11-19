import type { FormEvent } from "react";

import { Panel } from "@/components/content";
import { whatsapp } from "@/data/contact";

const helpTypes = [
  "Donación económica",
  "Donación en especie",
  "Voluntariado",
  "Patrocinio empresarial",
];
const field = "min-h-12 w-full rounded-lg border border-anda-field bg-white px-3.5 py-2 text-base text-foreground";

function openWhatsApp(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const company = form.get("company");
  const message = [
    "Hola, quiero apoyar a la Fundación ANDA.",
    `Nombre completo: ${form.get("name")}`,
    company && `Empresa: ${company}`,
    `Teléfono: ${form.get("phone")}`,
    `Tipo de ayuda: ${form.get("kind")}`,
    form.get("message"),
  ].filter(Boolean).join("\n");

  window.open(whatsapp(message), "_blank", "noopener,noreferrer");
}

export function SupportForm() {
  return (
    <Panel>
      <form className="grid min-w-0 gap-4 sm:grid-cols-2" onSubmit={openWhatsApp}>
        <label className="grid gap-1 font-bold">
          Nombre completo
          <input autoComplete="name" className={field} name="name" required />
        </label>
        <label className="grid gap-1 font-bold">
          Empresa (opcional)
          <input autoComplete="organization" className={field} name="company" />
        </label>
        <label className="grid gap-1 font-bold">
          Teléfono
          <input autoComplete="tel" className={field} name="phone" required type="tel" />
        </label>
        <label className="grid gap-1 font-bold">
          Tipo de ayuda
          <select className={field} defaultValue="" name="kind" required>
            <option disabled value="">Selecciona una opción</option>
            {helpTypes.map((kind) => <option key={kind}>{kind}</option>)}
          </select>
        </label>
        <label className="grid gap-1 font-bold sm:col-span-2">
          Escribe tu mensaje
          <textarea className={field} name="message" rows={4} />
        </label>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:col-span-2">
          <button
            aria-describedby="ayuda-whatsapp"
            className="min-h-12 cursor-pointer rounded-full bg-anda-wine px-5 py-2.5 font-bold text-white hover:bg-anda-wine-dark"
            type="submit"
          >
            Quiero ayudar
          </button>
          <p className="text-muted-foreground" id="ayuda-whatsapp">
            Se abrirá WhatsApp con tu mensaje para que puedas enviarlo.
          </p>
        </div>
      </form>
    </Panel>
  );
}
