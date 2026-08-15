"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Beers() {
  const { language } = useLanguage();

  const [current, setCurrent] = useState(0);

  const beerCategories =
    language === "en"
      ? [
          {
            title: "🍺 Draft",
            items: [
              ["🍺 Amstel Pint", "€1.80"],
              ["🍺 Amstel Jug", "€3.00"],
            ],
          },
          {
            title: "🇪🇸 National",
            items: [
              ["🍺 Estrella Galicia 1/5", "€1.90"],
              ["🍺 Amstel 1/3", "€2.50"],
            ],
          },
          {
            title: "🌍 International",
            items: [
              ["🍺 Heineken", "€3.00"],
              ["🍺 Corona", "€3.00"],
              ["🍺 Budweiser", "€3.00"],
            ],
          },
        ]
      : [
          {
            title: "🍺 Barril",
            items: [
              ["🍺 Amstel Caña", "1,80€"],
              ["🍺 Amstel Jarra", "3,00€"],
            ],
          },
          {
            title: "🇪🇸 Nacionales",
            items: [
              ["🍺 Estrella Galicia 1/5", "1,90€"],
              ["🍺 Amstel 1/3", "2,50€"],
            ],
          },
          {
            title: "🌍 Internacionales",
            items: [
              ["🍺 Heineken", "3,00€"],
              ["🍺 Corona", "3,00€"],
              ["🍺 Budweiser", "3,00€"],
            ],
          },
        ];

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === beerCategories.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? beerCategories.length - 1 : prev - 1
    );
  };

  const beer = beerCategories[current];

  return (
    <section
      id="cervezas"
      className="bg-zinc-950 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITULO */}

        <h2
          className="text-4xl font-bold text-center mb-4"
          style={{ color: "#B08D57" }}
        >
          🍺 {language === "en" ? "Beers" : "Cervezas"}
        </h2>

        <p
          className="text-center mb-14"
          style={{ color: "#B08D57" }}
        >
          {language === "en"
            ? "Enjoy our selection of cold beers at Mara Shisha Lounge."
            : "Una selección de cervezas frías para disfrutar en Mara Shisha Lounge."}
        </p>

        {/* CARRUSEL */}

        <div className="relative max-w-xl mx-auto">

          {/* TARJETA */}

          <div
            className="
              bg-black
              border
              border-[#B08D57]/40
              rounded-3xl
              p-8
              md:p-10
              min-h-[330px]
              flex
              flex-col
              justify-center
            "
          >

            <h3
              className="text-3xl font-semibold mb-8 text-center"
              style={{ color: "#B08D57" }}
            >
              {beer.title}
            </h3>

            <div className="space-y-5">

              {beer.items.map(([name, price]) => (

                <div
                  key={name}
                  className="
                    flex
                    justify-between
                    items-center
                    border-b
                    border-[#B08D57]/20
                    pb-3
                  "
                >

                  <span
                    style={{ color: "#e6d8bb" }}
                  >
                    {name}
                  </span>

                  <span
                    className="font-semibold"
                    style={{ color: "#B08D57" }}
                  >
                    {price}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* FLECHA IZQUIERDA */}

          <button
            type="button"
            onClick={previousSlide}
            aria-label={
              language === "en"
                ? "Previous beer category"
                : "Categoría de cerveza anterior"
            }
            className="
              absolute
              left-[-18px]
              md:left-[-60px]
              top-1/2
              -translate-y-1/2
              w-12
              h-12
              rounded-full
              border
              border-[#B08D57]/60
              bg-black
              flex
              items-center
              justify-center
              hover:bg-[#B08D57]
              hover:text-black
              transition
              z-10
            "
            style={{
              color: "#B08D57",
            }}
          >
            <ChevronLeft size={26} />
          </button>

          {/* FLECHA DERECHA */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label={
              language === "en"
                ? "Next beer category"
                : "Siguiente categoría de cerveza"
            }
            className="
              absolute
              right-[-18px]
              md:right-[-60px]
              top-1/2
              -translate-y-1/2
              w-12
              h-12
              rounded-full
              border
              border-[#B08D57]/60
              bg-black
              flex
              items-center
              justify-center
              hover:bg-[#B08D57]
              hover:text-black
              transition
              z-10
            "
            style={{
              color: "#B08D57",
            }}
          >
            <ChevronRight size={26} />
          </button>

        </div>

        {/* INDICADORES */}

        <div className="flex justify-center gap-2 mt-8">

          {beerCategories.map((_, index) => (

            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={
                language === "en"
                  ? `Go to beer category ${index + 1}`
                  : `Ir a categoría ${index + 1}`
              }
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width:
                  current === index
                    ? "32px"
                    : "8px",
                backgroundColor:
                  current === index
                    ? "#B08D57"
                    : "#5f5545",
              }}
            />

          ))}

        </div>

        {/* CONTADOR */}

        <p
          className="text-center text-xs mt-4"
          style={{ color: "#8f856f" }}
        >
          {current + 1} / {beerCategories.length}
        </p>

      </div>
    </section>
  );
}