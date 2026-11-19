import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { hash, key, pathname } = useLocation();
  const previousPath = useRef(pathname);

  useLayoutEffect(() => {
    const pathChanged = pathname !== previousPath.current;
    previousPath.current = pathname;

    const target = hash && document.getElementById(hash.slice(1));
    if (target) {
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: "start", behavior: "instant" });
      return;
    }

    if (pathChanged) {
      document.getElementById("contenido-principal")?.focus({ preventScroll: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [hash, key, pathname]);

  return null;
}
