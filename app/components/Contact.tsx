"use client";

import {
  MapPin,
  Clock3,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  return (
    <section
      id="contacto"
      className="bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* TITULO */}

        <div className="mb-14 text-center">

          <span
            className="text-sm uppercase tracking-[5px]"
            style={{ color: "#B08D57" }}
          >
            Mara Shisha Lounge
          </span>

          <h2
            className="mt-4 text-4xl font-bold md:text-5xl"
            style={{ color: "#B08D57" }}
          >
            {isEnglish ? "Contact" : "Contacto"}
          </h2>

        </div>

        {/* MAPA */}

        <div className="mb-6 rounded-3xl border border-[#B08D57]/25 bg-zinc-950/80 p-3 shadow-[0_0_35px_rgba(176,141,87,0.06)]">

          <div className="mb-4 px-4 pt-3">

            <h3
              className="text-lg font-medium"
              style={{ color: "#B08D57" }}
            >
              {isEnglish ? "Map" : "Mapa"}
            </h3>

          </div>

          <div className="overflow-hidden rounded-2xl">

            <iframe
              src="https://www.google.com/maps?q=Camino+de+los+Sastres+30+C%C3%B3rdoba&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              title="Mara Shisha Lounge - Map"
            />

          </div>

        </div>

        {/* INFORMACIÓN */}

        <div className="mx-auto max-w-2xl space-y-4">

          {/* DIRECCIÓN - CLICABLE */}

          <a
            href="https://www.google.com/maps/dir//Mara+Lounge,+Cam.+de+los+Sastres,+30,+14004+C%C3%B3rdoba/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-[#B08D57]/20 bg-zinc-950/70 px-6 py-5 transition duration-300 hover:border-[#B08D57]/50 hover:bg-zinc-900"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B08D57]/10">

                <MapPin
                  size={21}
                  strokeWidth={1.6}
                  color="#B08D57"
                />

              </div>

              <div>

                <p
                  className="font-medium"
                  style={{ color: "#B08D57" }}
                >
                  {isEnglish ? "Address" : "Dirección"}
                </p>

                <p
                  className="mt-1 text-sm"
                  style={{ color: "#d8c59a" }}
                >
                  Camino de los Sastres, 30 · Córdoba
                </p>

              </div>

            </div>

          </a>

          {/* WHATSAPP */}

          <a
            href="https://wa.me/34602132623"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-[#B08D57]/20 bg-zinc-950/70 px-6 py-5 transition duration-300 hover:border-[#B08D57]/50 hover:bg-zinc-900"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B08D57]/10">

                {/* LOGO WHATSAPP */}

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <path
                    d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.59 5.96L.05 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.23-6.17-3.44-8.43Z"
                    fill="#B08D57"
                  />

                  <path
                    d="M17.51 13.96c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z"
                    fill="#000"
                  />

                </svg>

              </div>

              <span
                className="font-medium"
                style={{ color: "#d8c59a" }}
              >
                WhatsApp
              </span>

            </div>

          </a>

          {/* INSTAGRAM */}

          <a
            href="https://instagram.com/maralounge_cordoba"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-[#B08D57]/20 bg-zinc-950/70 px-6 py-5 transition duration-300 hover:border-[#B08D57]/50 hover:bg-zinc-900"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B08D57]/10">

                {/* LOGO INSTAGRAM */}

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="#B08D57"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="#B08D57"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="17.3"
                    cy="6.8"
                    r="1"
                    fill="#B08D57"
                  />

                </svg>

              </div>

              <span
                className="font-medium"
                style={{ color: "#d8c59a" }}
              >
                Instagram
              </span>

            </div>

          </a>

          {/* HORARIO */}

          <div className="rounded-2xl border border-[#B08D57]/20 bg-zinc-950/70 px-6 py-6 transition duration-300 hover:border-[#B08D57]/40">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B08D57]/10">

                <Clock3
                  size={21}
                  strokeWidth={1.6}
                  color="#B08D57"
                />

              </div>

              <div className="w-full">

                <p
                  className="font-medium"
                  style={{ color: "#B08D57" }}
                >
                  {isEnglish ? "Opening hours" : "Horario"}
                </p>

                <div
                  className="mt-4 space-y-2 text-sm"
                  style={{ color: "#d8c59a" }}
                >

                  <div className="flex justify-between gap-4">
                    <span>{isEnglish ? "Monday" : "Lunes"}</span>
                    <span>{isEnglish ? "Closed" : "Descanso"}</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>{isEnglish ? "Tuesday" : "Martes"}</span>
                    <span>19:00 - 02:00</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>{isEnglish ? "Wednesday" : "Miércoles"}</span>
                    <span>19:00 - 02:00</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>{isEnglish ? "Thursday" : "Jueves"}</span>
                    <span>19:00 - 02:00</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>{isEnglish ? "Friday" : "Viernes"}</span>
                    <span>19:00 - 03:00</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>{isEnglish ? "Saturday" : "Sábado"}</span>
                    <span>19:00 - 03:00</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>{isEnglish ? "Sunday" : "Domingo"}</span>
                    <span>19:00 - 02:00</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}