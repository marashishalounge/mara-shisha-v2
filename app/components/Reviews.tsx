"use client";

import { Star, ExternalLink } from "lucide-react";

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
  return (
    <section
      id="opiniones"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

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

              <p
                className="text-xs"
                style={{ color: "#8f856f" }}
              >
                85 reseñas
              </p>

            </div>

          </div>

          <p
            className="mt-3 text-sm"
            style={{ color: "#8f856f" }}
          >
            Reseñas de Google
          </p>

        </div>


        {/* RESEÑAS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="rounded-3xl border border-[#B08D57]/30 bg-zinc-950 p-6 hover:border-[#B08D57] transition duration-300"
            >

              {/* ESTRELLAS */}

              <div className="flex gap-1 mb-5">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="#B08D57"
                    color="#B08D57"
                  />
                ))}

              </div>


              {/* RESEÑA */}

              <p
                className="leading-7 text-sm"
                style={{ color: "#d8c59a" }}
              >
                “{review.text}”
              </p>


              {/* AUTOR */}

              <div className="border-t border-[#B08D57]/20 mt-6 pt-5">

                <p
                  className="font-bold"
                  style={{ color: "#B08D57" }}
                >
                  {review.name}
                </p>

                <p
                  className="text-xs mt-1"
                  style={{ color: "#8f856f" }}
                >
                  Reseña de Google · 5/5
                </p>

              </div>

            </div>

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

            Ver todas nuestras reseñas en Google

          </a>

        </div>

      </div>
    </section>
  );
}