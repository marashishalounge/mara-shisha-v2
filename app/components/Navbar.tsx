
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { language, setLanguage, t } =
    useLanguage();

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-[#B08D57]/20">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}

        <a
          href="#inicio"
          className="text-2xl font-bold tracking-wide transition-all duration-300 hover:scale-105"
          style={{ color: "var(--bronze)" }}
        >
          Mara Shisha lounge
        </a>

        {/* MENÚ ESCRITORIO */}

        <div className="hidden md:flex items-center gap-8">

          <a
            href="#inicio"
            style={{ color: "var(--bronze)" }}
          >
            {t.nav.inicio}
          </a>

          <a
            href="#menu"
            style={{ color: "var(--bronze)" }}
          >
            {t.menu.titulo}
          </a>

          <a
            href="#shishas"
            style={{ color: "var(--bronze)" }}
          >
            {t.nav.shishas}
          </a>

          <a
            href="#sabores"
            style={{ color: "var(--bronze)" }}
          >
            {t.menu.sabores}
          </a>

          <a
            href="#copas"
            style={{ color: "var(--bronze)" }}
          >
            {t.nav.copas}
          </a>

          <a
            href="#bebidas"
            style={{ color: "var(--bronze)" }}
          >
            {t.nav.bebidas}
          </a>

          <a
            href="#galeria"
            style={{ color: "var(--bronze)" }}
          >
            {t.nav.galeria}
          </a>

          <a
            href="#contacto"
            style={{ color: "var(--bronze)" }}
          >
            {t.nav.contacto}
          </a>

          {/* SELECTOR DE IDIOMA */}

          <div className="flex items-center gap-1 ml-2 border border-[#B08D57]/40 rounded-full px-2 py-1">

            <button
              type="button"
              onClick={() => setLanguage("es")}
              className={`text-xs font-bold px-2 py-1 rounded-full transition ${
                language === "es"
                  ? "bg-[#B08D57] text-black"
                  : "text-[#B08D57] hover:bg-[#B08D57]/10"
              }`}
            >
              🇪🇸 ES
            </button>

            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`text-xs font-bold px-2 py-1 rounded-full transition ${
                language === "en"
                  ? "bg-[#B08D57] text-black"
                  : "text-[#B08D57] hover:bg-[#B08D57]/10"
              }`}
            >
              🇬🇧 EN
            </button>

          </div>

        </div>

        {/* BOTÓN HAMBURGUESA */}

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ color: "var(--bronze)" }}
          aria-label={
            open ? "Cerrar menú" : "Abrir menú"
          }
        >
          {open ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>

      </div>

      {/* MENÚ MÓVIL */}

      {open && (

        <div className="md:hidden bg-black border-t border-[#B08D57]/20">

          <a
            href="#inicio"
            onClick={() => setOpen(false)}
            className="block px-6 py-4"
            style={{ color: "var(--bronze)" }}
          >
            {t.nav.inicio}
          </a>

          <a
            href="#menu"
            onClick={() => setOpen(false)}
            className="block px-6 py-4"
            style={{ color: "var(--bronze)" }}
          >
            {t.menu.titulo}
          </a>

          <a
            href="#shishas"
            onClick={() => setOpen(false)}
            className="block px-6 py-4"
            style={{ color: "var(--bronze)" }}
          >
            {t.nav.shishas}
          </a>

          <a
            href="#sabores"
            onClick={() => setOpen(false)}
            className="block px-6 py-4"
            style={{ color: "var(--bronze)" }}
          >
            {t.menu.sabores}
          </a>

          <a
            href="#copas"
            onClick={() => setOpen(false)}
            className="block px-6 py-4"
            style={{ color: "var(--bronze)" }}
          >
            {t.nav.copas}
          </a>

          <a
            href="#bebidas"
            onClick={() => setOpen(false)}
            className="block px-6 py-4"
            style={{ color: "var(--bronze)" }}
          >
            {t.nav.bebidas}
          </a>

          <a
            href="#galeria"
            onClick={() => setOpen(false)}
            className="block px-6 py-4"
            style={{ color: "var(--bronze)" }}
          >
            {t.nav.galeria}
          </a>

          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block px-6 py-4"
            style={{ color: "var(--bronze)" }}
          >
            {t.nav.contacto}
          </a>

          {/* IDIOMA MÓVIL */}

          <div className="px-6 py-5 border-t border-[#B08D57]/20">

            <p className="text-xs text-gray-500 mb-3 tracking-widest">
              LANGUAGE / IDIOMA
            </p>

            <div className="flex gap-2">

              <button
                type="button"
                onClick={() => {
                  setLanguage("es");
                  setOpen(false);
                }}
                className={`px-4 py-2 rounded-full text-sm font-bold transition ${
                  language === "es"
                    ? "bg-[#B08D57] text-black"
                    : "border border-[#B08D57]/40 text-[#B08D57]"
                }`}
              >
                🇪🇸 Español
              </button>

              <button
                type="button"
                onClick={() => {
                  setLanguage("en");
                  setOpen(false);
                }}
                className={`px-4 py-2 rounded-full text-sm font-bold transition ${
                  language === "en"
                    ? "bg-[#B08D57] text-black"
                    : "border border-[#B08D57]/40 text-[#B08D57]"
                }`}
              >
                🇬🇧 English
              </button>

            </div>

          </div>

        </div>

      )}

    </nav>
  );
}