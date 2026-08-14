"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const favorites = [
  {
    name: "💎 Love 66",
    badge: "⭐ Más pedido",
    description:
      "Una mezcla tropical, dulce y refrescante. Uno de los sabores favoritos de nuestros clientes.",
  },
  {
    name: "🍓 Frutos Rojos",
    badge: "⭐ Más pedido",
    description:
      "Una combinación intensa de frutas rojas con un aroma elegante y equilibrado.",
  },
  {
    name: "🥭 Mango",
    badge: "⭐ Más pedido",
    description:
      "Dulce y tropical, perfecto para una fumada suave y agradable.",
  },
  {
    name: "🍉 Sandía",
    badge: "⭐ Más pedido",
    description:
      "Fresca, ligera y refrescante para disfrutar en cualquier momento.",
  },
  {
    name: "🍬 Chicle",
    badge: "⭐ Especial",
    description:
      "Un sabor divertido y diferente con un toque dulce y nostálgico.",
  },
];

const flavors = [
  {
    name: "💎 Love 66",
    badge: "Tropical",
    description:
      "Mezcla tropical con un equilibrio perfecto entre dulzor y frescura.",
  },
  {
    name: "🍓 Frutos Rojos",
    badge: "Frutal",
    description:
      "Aroma intenso de frutos rojos con una fumada elegante.",
  },
  {
    name: "❄️ Menta",
    badge: "Fresco",
    description:
      "Sensación fría y limpia, perfecta para combinar.",
  },
  {
    name: "🥭 Mango",
    badge: "Tropical",
    description:
      "Dulce y exótico con un sabor suave.",
  },
  {
    name: "🍈 Maracuyá",
    badge: "Exótico",
    description:
      "Toque cítrico tropical con mucha personalidad.",
  },
  {
    name: "🌿 Menta Suave",
    badge: "Ligero",
    description:
      "Refrescante pero más delicado que la menta clásica.",
  },
  {
    name: "🍇 Uva",
    badge: "Intenso",
    description:
      "Dulce y profundo con un aroma elegante.",
  },
  {
    name: "🫐 Arándanos",
    badge: "Premium",
    description:
      "Sabor suave, dulce y muy aromático.",
  },
  {
    name: "🌱 Hierbabuena",
    badge: "Natural",
    description:
      "Frescor herbal con un toque diferente.",
  },
  {
    name: "🍉 Sandía",
    badge: "Refrescante",
    description:
      "Ligera, dulce y muy agradable.",
  },
  {
    name: "🍈 Melón",
    badge: "Dulce",
    description:
      "Suave y equilibrado para cualquier combinación.",
  },
  {
    name: "🍍 Piña",
    badge: "Caribe",
    description:
      "Tropical con un toque ácido muy agradable.",
  },
  {
    name: "🥥 Coco",
    badge: "Exótico",
    description:
      "Cremoso y diferente para mezclas especiales.",
  },
  {
    name: "🍋 Lima",
    badge: "Cítrico",
    description:
      "Fresca e intensa con un toque ácido.",
  },
  {
    name: "🍬 Chicle",
    badge: "Especial",
    description:
      "Dulce y divertido, ideal para mezclas creativas.",
  },
  {
    name: "🧀🍰 Tarta de Queso",
    badge: "Exclusivo",
    description:
      "Una mezcla cremosa inspirada en un clásico de la repostería.",
  },
];

export default function Flavors() {
  const [favoriteCurrent, setFavoriteCurrent] = useState(0);
  const [flavorCurrent, setFlavorCurrent] = useState(0);

  const nextFavorite = () => {
    setFavoriteCurrent((prev) =>
      prev === favorites.length - 1 ? 0 : prev + 1
    );
  };

  const previousFavorite = () => {
    setFavoriteCurrent((prev) =>
      prev === 0 ? favorites.length - 1 : prev - 1
    );
  };

  const nextFlavor = () => {
    setFlavorCurrent((prev) =>
      prev === flavors.length - 1 ? 0 : prev + 1
    );
  };

  const previousFlavor = () => {
    setFlavorCurrent((prev) =>
      prev === 0 ? flavors.length - 1 : prev - 1
    );
  };

  const favorite = favorites[favoriteCurrent];
  const flavor = flavors[flavorCurrent];

  return (
    <section
      id="sabores"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* CABECERA */}

        <div className="text-center mb-16">

          <span
            className="uppercase tracking-[5px] text-sm"
            style={{ color: "#B08D57" }}
          >
            Mara Shisha Lounge
          </span>

          <h2
            className="text-5xl font-bold mt-4"
            style={{ color: "#B08D57" }}
          >
            Sabores
          </h2>

          <p
            className="mt-5 max-w-3xl mx-auto"
            style={{ color: "#d8c59a" }}
          >
            Descubre nuestra selección de sabores
            clásicos, exóticos y exclusivos.
          </p>

        </div>

        {/* =========================================
            SABORES MÁS PEDIDOS
        ========================================= */}

        <div className="mb-20">

          <h3
            className="text-3xl font-bold text-center mb-10"
            style={{ color: "#B08D57" }}
          >
            ⭐ Sabores más pedidos
          </h3>

          <div className="relative max-w-xl mx-auto">

            {/* TARJETA */}

            <div
              className="
                rounded-3xl
                border
                border-[#B08D57]/40
                bg-zinc-950
                p-8
                md:p-10
                min-h-[300px]
                flex
                flex-col
                justify-center
                text-center
              "
            >

              <span
                className="text-xs uppercase tracking-wider"
                style={{ color: "#d8c59a" }}
              >
                {favorite.badge}
              </span>

              <h4
                className="text-3xl font-bold mt-4 mb-5"
                style={{ color: "#B08D57" }}
              >
                {favorite.name}
              </h4>

              <p
                className="text-base leading-7 max-w-md mx-auto"
                style={{ color: "#e6d8bb" }}
              >
                {favorite.description}
              </p>

            </div>

            {/* FLECHA IZQUIERDA */}

            <button
              type="button"
              onClick={previousFavorite}
              aria-label="Sabor más pedido anterior"
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
              style={{ color: "#B08D57" }}
            >
              <ChevronLeft size={26} />
            </button>

            {/* FLECHA DERECHA */}

            <button
              type="button"
              onClick={nextFavorite}
              aria-label="Siguiente sabor más pedido"
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
              style={{ color: "#B08D57" }}
            >
              <ChevronRight size={26} />
            </button>

          </div>

          {/* INDICADORES */}

          <div className="flex justify-center gap-2 mt-8">

            {favorites.map((_, index) => (

              <button
                key={index}
                type="button"
                onClick={() => setFavoriteCurrent(index)}
                aria-label={`Ir al sabor más pedido ${index + 1}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width:
                    favoriteCurrent === index
                      ? "32px"
                      : "8px",
                  backgroundColor:
                    favoriteCurrent === index
                      ? "#B08D57"
                      : "#5f5545",
                }}
              />

            ))}

          </div>

          <p
            className="text-center text-xs mt-4"
            style={{ color: "#8f856f" }}
          >
            {favoriteCurrent + 1} / {favorites.length}
          </p>

        </div>

        {/* =========================================
            TODOS LOS SABORES
        ========================================= */}

        <h3
          className="text-3xl font-bold text-center mb-10"
          style={{ color: "#B08D57" }}
        >
          Todos nuestros sabores
        </h3>

        <div className="relative max-w-xl mx-auto">

          {/* TARJETA */}

          <div
            className="
              rounded-3xl
              border
              border-[#B08D57]/30
              bg-zinc-950
              p-8
              md:p-10
              min-h-[300px]
              flex
              flex-col
              justify-center
              text-center
            "
          >

            <h4
              className="text-3xl font-semibold mb-4"
              style={{ color: "#B08D57" }}
            >
              {flavor.name}
            </h4>

            <span
              className="text-sm"
              style={{ color: "#d8c59a" }}
            >
              {flavor.badge}
            </span>

            <p
              className="mt-5 text-base leading-7 max-w-md mx-auto"
              style={{ color: "#e6d8bb" }}
            >
              {flavor.description}
            </p>

          </div>

          {/* FLECHA IZQUIERDA */}

          <button
            type="button"
            onClick={previousFlavor}
            aria-label="Sabor anterior"
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
            style={{ color: "#B08D57" }}
          >
            <ChevronLeft size={26} />
          </button>

          {/* FLECHA DERECHA */}

          <button
            type="button"
            onClick={nextFlavor}
            aria-label="Siguiente sabor"
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
            style={{ color: "#B08D57" }}
          >
            <ChevronRight size={26} />
          </button>

        </div>

        {/* INDICADORES */}

        <div className="flex justify-center gap-2 mt-8">

          {flavors.map((_, index) => (

            <button
              key={index}
              type="button"
              onClick={() => setFlavorCurrent(index)}
              aria-label={`Ir al sabor ${index + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width:
                  flavorCurrent === index
                    ? "32px"
                    : "8px",
                backgroundColor:
                  flavorCurrent === index
                    ? "#B08D57"
                    : "#5f5545",
              }}
            />

          ))}

        </div>

        <p
          className="text-center text-xs mt-4"
          style={{ color: "#8f856f" }}
        >
          {flavorCurrent + 1} / {flavors.length}
        </p>

      </div>
    </section>
  );
}