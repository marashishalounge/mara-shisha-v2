
"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        <h2
          className="text-5xl md:text-7xl font-bold mb-6"
          style={{ color: "#B08D57" }}
        >
          {t.hero.titulo}
        </h2>

        <p
          className="text-xl md:text-2xl mb-10"
          style={{ color: "#B08D57" }}
        >
          {t.hero.descripcion}
        </p>

        <a
          href="#menu"
          className="inline-block px-8 py-4 rounded-full border-2 transition duration-300 hover:bg-white/10"
          style={{
            color: "#B08D57",
            borderColor: "#B08D57",
          }}
        >
          {t.hero.botonMenu}
        </a>

      </div>
    </section>
  );
}
