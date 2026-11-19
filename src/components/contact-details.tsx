import { Mail, MapPin, Phone } from "lucide-react";

import { Panel, textLink } from "@/components/content";
import { organization } from "@/data/contact";

export function ContactDetails() {
  return (
    <Panel className="grid gap-5 md:grid-cols-[1fr_1.2fr] md:gap-8">
      <div>
        <p className="font-heading text-xl font-bold text-anda-wine-dark">{organization.name}</p>
        <p>{organization.subtitle} · NIT: {organization.nit}</p>
        <p className="mt-3 italic text-muted-foreground">«{organization.slogan}»</p>
      </div>
      <address className="space-y-2 not-italic">
        <div className="flex items-start gap-3">
          <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-anda-wine" />
          <div className="flex flex-wrap gap-x-5">
            {organization.phones.map(({ label, number }) => (
              <a key={number} className={textLink} href={`tel:${number}`}>{label}</a>
            ))}
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-anda-wine" />
          <a className={textLink} href={`mailto:${organization.email}`}>{organization.email}</a>
        </div>
        <div className="flex items-start gap-3">
          <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-anda-wine" />
          <p>{organization.address}, Colombia</p>
        </div>
      </address>
    </Panel>
  );
}
