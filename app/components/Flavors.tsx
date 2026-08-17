"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const favorites = [
  {
    name: "🍓 Love 66",
    badge: {
      es: "⭐ Más pedido",
      en: "? Most popular",
    },
    description: {
      es: "Una mezcla tropical, dulce y refrescante. Uno de los sabores favoritos de nuestros clientes.",
      en: "A tropical, sweet and refreshing blend. One of our customers' favourite flavours.",
    },
  },
  {
    name: "🍓 Frutos Rojos",
    badge: {
      es: "⭐ Más pedido",
      en: "? Most popular",
    },
    description: {
      es: "Una combinación intensa de frutas rojas con un aroma elegante y equilibrado.",
      en: "An intense combination of red berries with an elegant and balanced aroma.",
    },
  },
  {
    name: "🥭 Mango",
    badge: {
      es: "⭐ Más pedido",
      en: "? Most popular",
    },
    description: {
      es: "Dulce y tropical, perfecto para una fumada suave y agradable.",
      en: "Sweet and tropical, perfect for a smooth and enjoyable session.",
    },
  },
  {
    name: "🍉 Sandía",
    badge: {
      es: "⭐ Más pedido",
      en: "? Most popular",
    },
    description: {
      es: "Fresca, ligera y refrescante para disfrutar en cualquier momento.",
      en: "Fresh, light and refreshing to enjoy at any time.",
    },
  },
  {
    name: "🍬 Chicle",
    badge: {
      es: "? Especial",
      en: "? Special",
    },
    description: {
      es: "Un sabor divertido y diferente con un toque dulce y nostálgico.",
      en: "A fun and different flavour with a sweet and nostalgic touch.",
    },
  },
];

const flavors = [
  {
    name: "🍓 Love 66",
    badge: {
      es: "Tropical",
      en: "Tropical",
    },
    description: {
      es: "Mezcla tropical con un equilibrio perfecto entre dulzor y frescura.",
      en: "A tropical blend with the perfect balance between sweetness and freshness.",
    },
  },
  {
    name: "🍓 Frutos Rojos",
    badge: {
      es: "Frutal",
      en: "Fruity",
    },
    description: {
      es: "Aroma intenso de frutos rojos con una fumada elegante.",
      en: "An intense red berry aroma with an elegant smoking experience.",
    },
  },
  {
    name: "🌿 Menta",
    badge: {
      es: "Fresco",
      en: "Fresh",
    },
    description: {
      es: "Sensación fría y limpia, perfecta para combinar.",
      en: "A cool and clean sensation, perfect for mixing.",
    },
  },
  {
    name: "🥭 Mango",
    badge: {
      es: "Tropical",
      en: "Tropical",
    },
    description: {
      es: "Dulce y exótico con un sabor suave.",
      en: "Sweet and exotic with a smooth flavour.",
    },
  },
  {
    name: "🥭 Maracuyá",
    badge: {
      es: "Exótico",
      en: "Exotic",
    },
    description: {
      es: "Toque cítrico tropical con mucha personalidad.",
      en: "A tropical citrus touch with plenty of character.",
    },
  },
  {
    name: "🌿 Menta Suave",
    badge: {
      es: "Ligero",
      en: "Light",
    },
    description: {
      es: "Refrescante pero más delicado que la menta clásica.",
      en: "Refreshing but more delicate than classic mint.",
    },
  },
  {
    name: "🍇 Uva",
    badge: {
      es: "Intenso",
      en: "Intense",
    },
    description: {
      es: "Dulce y profundo con un aroma elegante.",
      en: "Sweet and deep with an elegant aroma.",
    },
  },
  {
    name: "🫐 Arándanos",
    badge: {
      es: "Premium",
      en: "Premium",
    },
    description: {
      es: "Sabor suave, dulce y muy aromático.",
      en: "Smooth, sweet and highly aromatic flavour.",
    },
  },
  {
    name: "🌿 Hierbabuena",
    badge: {
      es: "Natural",
      en: "Natural",
    },
    description: {
      es: "Frescor herbal con un toque diferente.",
      en: "Herbal freshness with a distinctive touch.",
    },
  },
  {
    name: "🍉 Sandía",
    badge: {
      es: "Refrescante",
      en: "Refreshing",
    },
    description: {
      es: "Ligera, dulce y muy agradable.",
      en: "Light, sweet and very enjoyable.",
    },
  },
  {
    name: "🍈 Melón",
    badge: {
      es: "Dulce",
      en: "Sweet",
    },
    description: {
      es: "Suave y equilibrado para cualquier combinación.",
      en: "Smooth and balanced for any combination.",
    },
  },
  {
    name: "🍍 Piña",
    badge: {
      es: "Caribe",
      en: "Caribbean",
    },
    description: {
      es: "Tropical con un toque ácido muy agradable.",
      en: "Tropical with a pleasant tangy touch.",
    },
  },
  {
    name: "🥥 Coco",
    badge: {
      es: "Exótico",
      en: "Exotic",
    },
    description: {
      es: "Cremoso y diferente para mezclas especiales.",
      en: "Creamy and distinctive for special mixes.",
    },
  },
  {
    name: "🍋 Lima",
    badge: {
      es: "Cítrico",
      en: "Citrus",
    },
    description: {
      es: "Fresca e intensa con un toque ácido.",
      en: "Fresh and intense with a tangy touch.",
    },
  },
  {
    name: "🍬 Chicle",
    badge: {
      es: "Especial",
      en: "Special",
    },
    description: {
      es: "Dulce y divertido, ideal para mezclas creativas.",
      en: "Sweet and fun, ideal for creative mixes.",
    },
  },
  {
    name: "🍰 Tarta de Queso",
    badge: {
      es: "Exclusivo",
      en: "Exclusive",
    },
    description: {
      es: "Una mezcla cremosa inspirada en un clásico de la repostería.",
      en: "A creamy blend inspired by a classic dessert.",
    },
  },
];

export default function Flavors() {
  const { language, t } = useLanguage();

  const [favoriteCurrent, setFavoriteCurrent] = useState(0);
  const [flavorCurrent, setFlavorCurrent] = useState(0);

  const [favoriteTouchStart, setFavoriteTouchStart] = useState<number | null>(null);
  const [favoriteTouchEnd, setFavoriteTouchEnd] = useState<number | null>(null);
  const [flavorTouchStart, setFlavorTouchStart] = useState<number | null>(null);
  const [flavorTouchEnd, setFlavorTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleFavoriteTouchStart = (e: React.TouchEvent) => {
    setFavoriteTouchStart(e.targetTouches[0].clientX);
    setFavoriteTouchEnd(null);
  };

  const handleFavoriteTouchMove = (e: React.TouchEvent) => {
    setFavoriteTouchEnd(e.targetTouches[0].clientX);
  };

  const handleFavoriteTouchEnd = () => {
    if (favoriteTouchStart === null || favoriteTouchEnd === null) return;

    const distance = favoriteTouchStart - favoriteTouchEnd;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      nextFavorite();
    } else {
      previousFavorite();
    }
  };

  const handleFlavorTouchStart = (e: React.TouchEvent) => {
    setFlavorTouchStart(e.targetTouches[0].clientX);
    setFlavorTouchEnd(null);
  };

  const handleFlavorTouchMove = (e: React.TouchEvent) => {
    setFlavorTouchEnd(e.targetTouches[0].clientX);
  };

  const handleFlavorTouchEnd = () => {
    if (flavorTouchStart === null || flavorTouchEnd === null) return;

    const distance = flavorTouchStart - flavorTouchEnd;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      nextFlavor();
    } else {
      previousFlavor();
    }
  };

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
            {t.flavors.titulo}
          </h2>

          <p
            className="mt-5 max-w-3xl mx-auto"
            style={{ color: "#d8c59a" }}
          >
            {t.flavors.subtitulo}
          </p>

        </div>

        {/* SABORES MÁS PEDIDOS */}

        <div className="mb-20">

          <h3
            className="text-3xl font-bold text-center mb-10"
            style={{ color: "#B08D57" }}
          >
            {language === "es"
              ? "⭐ Sabores más pedidos"
              : "⭐ Most popular flavours"}
          </h3>

          <div className="relative max-w-xl mx-auto">

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
                {favorite.description[language]}
              </p>

            </div>

            {/* FLECHA IZQUIERDA */}

            <button
              type="button"
              onClick={previousFavorite}
              aria-label={
                language === "es"
                  ? "Sabor más pedido anterior"
                  : "Previous popular flavour"
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
              style={{ color: "#B08D57" }}
            >
              <ChevronLeft size={26} />
            </button>

            {/* FLECHA DERECHA */}

            <button
              type="button"
              onClick={nextFavorite}
              aria-label={
                language === "es"
                  ? "Siguiente sabor más pedido"
                  : "Next popular flavour"
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
                aria-label={
                  language === "es"
                    ? `Ir al sabor más pedido ${index + 1}`
                    : `Go to popular flavour ${index + 1}`
                }
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

        {/* TODOS LOS SABORES */}

        <h3
          className="text-3xl font-bold text-center mb-10"
          style={{ color: "#B08D57" }}
        >
          {language === "es"
            ? "Todos nuestros sabores"
            : "All our flavours"}
        </h3>

        <div className="relative max-w-xl mx-auto">

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
              {flavor.badge[language]}
            </span>

            <p
              className="mt-5 text-base leading-7 max-w-md mx-auto"
              style={{ color: "#e6d8bb" }}
            >
              {flavor.description[language]}
            </p>

          </div>

          {/* FLECHA IZQUIERDA */}

          <button
            type="button"
            onClick={previousFlavor}
            aria-label={
              language === "es"
                ? "Sabor anterior"
                : "Previous flavour"
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
            style={{ color: "#B08D57" }}
          >
            <ChevronLeft size={26} />
          </button>

          {/* FLECHA DERECHA */}

          <button
            type="button"
            onClick={nextFlavor}
            aria-label={
              language === "es"
                ? "Siguiente sabor"
                : "Next flavour"
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
              aria-label={
                language === "es"
                  ? `Ir al sabor ${index + 1}`
                  : `Go to flavour ${index + 1}`
              }
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











