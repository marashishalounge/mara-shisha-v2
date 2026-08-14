"use client";

import { useEffect, useState } from "react";
import {
  Star,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const reviews = [
  {
    name: "Sergio",
    text: "Siempre que venimos mi grupo y yo se siente como en casa. Muchas gracias por tenernos como clientes, ¡lo pasamos genial! 👍",
  },
  {
    name: "sandra nicole b ortos",
    text: "Me encantó el sitio y la chica es súper maja. Es un ambiente tranquilo y muy buena vibra, le doy un 5 porque no le puedo dar un 10.",
  },
  {
    name: "Luilli_7863",
    text: "Lugar perfecto para estar con los amigos, camareros muy amables y educados y buena música.",
  },
  {
    name: "Rafael Cabezas Ramírez",
    text: "Bar de buen ambiente, con dos propietarios súper enrollados y de buen rollo, recomendable para estudiantes y gente de viaje.",
  },
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((current) =>
      current === reviews.length - 1 ? 0 : current + 1
    );
  };

  const previousReview = () => {
    setCurrentReview((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((current) =>
        current === reviews.length - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const review = reviews[currentReview];

  return (
    <section
      id="opiniones"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* CABECERA */}

        <div className="text-center mb-14">

          <span
            className="uppercase tracking-[5px] text-sm"
            style={{ color: "#B08D57" }}
          >
            La experiencia Mara
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold mt-4"
            style={{ color: "#B08D57" }}
          >
            Nuestros clientes opinan
          </h2>

          <p
            className="max-w-2xl mx-auto mt-5 leading-8"
            style={{ color: "#d8c59a" }}
          >
            La mejor forma de conocer Mara es escuchar a quienes
            ya han vivido la experiencia.
          </p>

          {/* VALORACIÓN */}

          <div className="flex justify-center items-center gap-4 mt-7">

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={25}
                  fill="#B08D57"
                  color="#B08D57"
                />
              ))}
            </div>

            <div className="text-left">
              <span
                className="font-bold text-lg"
                style={{ color: "#d8c59a" }}
              >
                5.0 / 5
              </span>
            </div>

          </div>

          <p
            className="mt-3 text-sm"
            style={{ color: "#8f856f" }}
          >
            Reseñas de Google
          </p>

        </div>

        {/* CARRUSEL */}

        <div className="relative max-w-3xl mx-auto">

          {/* FLECHA IZQUIERDA */}

          <button
            type="button"
            onClick={previousReview}
            aria-label="Reseña anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 w-11 h-11 rounded-full border border-[#B08D57]/50 bg-zinc-950 flex items-center justify-center hover:bg-[#B08D57] hover:text-black transition"
            style={{ color: "#B08D57" }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* TARJETA */}

          <div
            key={currentReview}
            className="rounded-3xl border border-[#B08D57]/30 bg-zinc-950 p-8 md:p-10 text-center"
            style={{
              animation: "reviewFade 0.5s ease-out",
            }}
          >

            {/* ESTRELLAS */}

            <div className="flex justify-center gap-1 mb-6">

              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  fill="#B08D57"
                  color="#B08D57"
                />
              ))}

            </div>

            {/* TEXTO */}

            <p
              className="text-base md:text-lg leading-8 max-w-2xl mx-auto"
              style={{ color: "#d8c59a" }}
            >
              “{review.text}”
            </p>

            {/* AUTOR */}

            <div className="border-t border-[#B08D57]/20 mt-8 pt-6">

              <p
                className="font-bold text-lg"
                style={{ color: "#B08D57" }}
              >
                {review.name}
              </p>

              <p
                className="text-xs mt-2"
                style={{ color: "#8f856f" }}
              >
                Reseña de Google · 5/5
              </p>

            </div>

          </div>

          {/* FLECHA DERECHA */}

          <button
            type="button"
            onClick={nextReview}
            aria-label="Siguiente reseña"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 w-11 h-11 rounded-full border border-[#B08D57]/50 bg-zinc-950 flex items-center justify-center hover:bg-[#B08D57] hover:text-black transition"
            style={{ color: "#B08D57" }}
          >
            <ChevronRight size={24} />
          </button>

        </div>

        {/* INDICADORES */}

        <div className="flex justify-center gap-2 mt-7">

          {reviews.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentReview(index)}
              aria-label={`Ver reseña ${index + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: currentReview === index ? "24px" : "8px",
                height: "8px",
                backgroundColor:
                  currentReview === index
                    ? "#B08D57"
                    : "#6f6657",
              }}
            />
          ))}

        </div>

        {/* BOTÓN GOOGLE */}

        <div className="flex justify-center mt-12">

          <a
            href="https://www.google.com/search?q=Mara+Lounge+C%C3%B3rdoba"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl border border-[#B08D57] px-8 py-4 font-bold hover:bg-[#B08D57] hover:text-black transition"
            style={{ color: "#B08D57" }}
          >
            <ExternalLink size={20} />

            Comparte tu experiencia Mara
          </a>

        </div>

      </div>

      {/* ANIMACIÓN */}

      <style jsx>{`
        @keyframes reviewFade {
          0% {
            opacity: 0;
            transform: translateX(15px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

    </section>
  );
}