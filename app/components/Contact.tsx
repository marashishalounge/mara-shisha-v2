"use client";

import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Clock3,
  Navigation,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-gradient-to-b from-black via-zinc-950 to-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO */}

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
            Ven a vivir la experiencia Mara
          </h2>

          <p
            className="mt-6 max-w-3xl mx-auto text-lg leading-8"
            style={{ color: "#d8c59a" }}
          >
            Disfruta de nuestras shishas, cervezas, copas y el mejor
            ambiente de Córdoba. Estamos preparados para ofrecerte una
            experiencia única cada noche.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* INFORMACIÓN */}

          <div className="space-y-6">

            {/* DIRECCIÓN */}

            <div className="rounded-3xl border border-[#B08D57]/30 bg-zinc-950 p-7 hover:border-[#B08D57] transition">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-[#B08D57]/10 flex items-center justify-center">
                  <MapPin size={28} color="#B08D57" />
                </div>

                <div>

                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#B08D57" }}
                  >
                    Dirección
                  </h3>

                  <p style={{ color: "#d8c59a" }}>
                    Camino de los Sastres, 30
                  </p>

                  <p style={{ color: "#d8c59a" }}>
                    14004 · Córdoba
                  </p>

                </div>

              </div>

            </div>

            {/* TELÉFONO */}

            <div className="rounded-3xl border border-[#B08D57]/30 bg-zinc-950 p-7 hover:border-[#B08D57] transition">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-[#B08D57]/10 flex items-center justify-center">
                  <Phone size={28} color="#B08D57" />
                </div>

                <div>

                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#B08D57" }}
                  >
                    Teléfono
                  </h3>

                  <p style={{ color: "#d8c59a" }}>
                    +34 602 132 623
                  </p>

                </div>

              </div>

            </div>

            {/* WHATSAPP */}

            <div className="rounded-3xl border border-green-500/30 bg-zinc-950 p-7 hover:border-green-500 transition">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center">
                  <MessageCircle size={28} color="#22c55e" />
                </div>

                <div className="flex-1">

                  <h3 className="text-xl font-bold text-green-500">
                    WhatsApp
                  </h3>

                  <p style={{ color: "#d8c59a" }}>
                    Escríbenos directamente.
                  </p>

                </div>

                <a
                  href="https://wa.me/34602132623"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-green-600 px-5 py-3 text-white font-semibold hover:bg-green-500 transition"
                >
                  Abrir
                </a>

              </div>

            </div>

            {/* INSTAGRAM */}

            <div className="rounded-3xl border border-[#B08D57]/30 bg-zinc-950 p-7 hover:border-[#B08D57] transition">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-[#B08D57]/10 flex items-center justify-center">
                  <Instagram size={28} color="#B08D57" />
                </div>

                <div className="flex-1">

                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#B08D57" }}
                  >
                    Instagram
                  </h3>

                  <p style={{ color: "#d8c59a" }}>
                    @maralounge_cordoba
                  </p>

                </div>

                <a
                  href="https://instagram.com/maralounge_cordoba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#B08D57] px-5 py-3 hover:bg-[#B08D57] hover:text-black transition"
                  style={{ color: "#B08D57" }}
                >
                  Abrir
                </a>

              </div>

            </div>
                        {/* HORARIO */}

            <div className="rounded-3xl border border-[#B08D57]/30 bg-zinc-950 p-7">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-14 h-14 rounded-full bg-[#B08D57]/10 flex items-center justify-center">
                  <Clock3 size={28} color="#B08D57" />
                </div>

                <h3
                  className="text-2xl font-bold"
                  style={{ color: "#B08D57" }}
                >
                  Horario
                </h3>

              </div>

              <div
                className="space-y-3 text-lg"
                style={{ color: "#d8c59a" }}
              >
                <div className="flex justify-between">
                  <span>Lunes</span>
                  <span>Descanso</span>
                </div>

                <div className="flex justify-between">
                  <span>Martes</span>
                  <span>19:00 - 02:00</span>
                </div>

                <div className="flex justify-between">
                  <span>Miércoles</span>
                  <span>19:00 - 02:00</span>
                </div>

                <div className="flex justify-between">
                  <span>Jueves</span>
                  <span>19:00 - 02:00</span>
                </div>

                <div className="flex justify-between">
                  <span>Viernes</span>
                  <span>19:00 - 03:00</span>
                </div>

                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span>19:00 - 03:00</span>
                </div>

                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span>19:00 - 02:00</span>
                </div>

              </div>

            </div>

          </div>

          {/* MAPA */}

          <div>

            <div className="rounded-3xl overflow-hidden border border-[#B08D57]/30 shadow-2xl">

              <iframe
                src="https://www.google.com/maps?q=Camino+de+los+Sastres+30+Córdoba&output=embed"
                width="100%"
                height="520"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">

              <a
                href="https://wa.me/34602132623"
                target="_blank"
                className="rounded-2xl bg-green-600 py-4 text-center font-bold text-white hover:bg-green-500 transition"
              >
                💬 WhatsApp
              </a>

              <a
                href="tel:+34602132623"
                className="rounded-2xl border border-[#B08D57] py-4 text-center font-bold transition hover:bg-[#B08D57] hover:text-black"
                style={{ color: "#B08D57" }}
              >
                📞 Llamar
              </a>

              <a
                href="https://www.google.com/maps/dir//Mara+Lounge,+Cam.+de+los+Sastres,+30,+Poniente+Sur,+14004+Córdoba/"
                target="_blank"
                className="rounded-2xl border border-[#B08D57] py-4 text-center font-bold transition hover:bg-[#B08D57] hover:text-black"
                style={{ color: "#B08D57" }}
              >
                <div className="flex items-center justify-center gap-2">
                  <Navigation size={18} />
                  Cómo llegar
                </div>
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}