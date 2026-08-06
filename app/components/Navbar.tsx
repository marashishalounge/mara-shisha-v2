"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-[#B08D57]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <a
          href="#inicio"
          className="text-2xl font-bold tracking-wide transition-all duration-300 hover:scale-105"
          style={{ color: "var(--bronze)" }}
        >
          Mara Shisha
        </a>

        {/* MENÚ ESCRITORIO */}
        <div className="hidden md:flex items-center gap-8">

          <a href="#inicio" style={{ color: "var(--bronze)" }}>
            Inicio
          </a>

          <a href="#menu" style={{ color: "var(--bronze)" }}>
            Menú
          </a>

          <a href="#shishas" style={{ color: "var(--bronze)" }}>
            Shishas
          </a>

          <a href="#sabores" style={{ color: "var(--bronze)" }}>
            Sabores
          </a>

          <a href="#copas" style={{ color: "var(--bronze)" }}>
            Copas
          </a>

          <a href="#bebidas" style={{ color: "var(--bronze)" }}>
            Bebidas
          </a>

          <a href="#galeria" style={{ color: "var(--bronze)" }}>
            Galería
          </a>

          <a href="#contacto" style={{ color: "var(--bronze)" }}>
            Contacto
          </a>

        </div>

        {/* BOTÓN HAMBURGUESA */}

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ color: "var(--bronze)" }}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
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
            Inicio
          </a>

          <a
            href="#menu"
            onClick={() => setOpen(false)}
            className="block px-6 py-4"
            style={{ color: "var(--bronze)" }}
          >
            Menú
          </a>

          <a
            href="#shishas"
            onClick={() => setOpen(false)}
            className="block px-6 py-4"
            style={{ color: "var(--bronze)" }}
          >
            Shishas
          </a>

          <a
            href="#sabores"
            onClick={() => setOpen(false)}
            className="block px-6 py-4"
            style={{ color: "var(--bronze)" }}
          >
            Sabores
          </a>

          <a
            href="#copas"
            onClick={() => setOpen(false)}
            className="block px-6 py-4"
            style={{ color: "var(--bronze)" }}
          >
            Copas
          </a>

          <a
            href="#bebidas"
            onClick={() => setOpen(false)}
            className="block px-6 py-4"
            style={{ color: "var(--bronze)" }}
          >
            Bebidas
          </a>

          <a
            href="#galeria"
            onClick={() => setOpen(false)}
            className="block px-6 py-4"
            style={{ color: "var(--bronze)" }}
          >
            Galería
          </a>

          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block px-6 py-4"
            style={{ color: "var(--bronze)" }}
          >
            Contacto
          </a>

        </div>

      )}

    </nav>
  );
}