import { HashRouter, Route, Routes } from "react-router-dom";

import { ActionLink, Section } from "@/components/content";
import { Layout } from "@/components/layout/Layout";
import { Actividades } from "@/pages/Actividades";
import { Apadrine } from "@/pages/Apadrine";
import { Equipo } from "@/pages/Equipo";
import { Historia } from "@/pages/Historia";
import { Home } from "@/pages/Home";
import { QuienesSomos } from "@/pages/QuienesSomos";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="historia" element={<Historia />} />
          <Route path="equipo" element={<Equipo />} />
          <Route path="actividades" element={<Actividades />} />
          <Route path="apadrine" element={<Apadrine />} />
          <Route path="*" element={
            <Section>
              <h1 className="mb-5 text-4xl font-bold">Página no encontrada</h1>
              <ActionLink to="/">Volver al inicio</ActionLink>
            </Section>
          } />
        </Route>
      </Routes>
    </HashRouter>
  );
}
