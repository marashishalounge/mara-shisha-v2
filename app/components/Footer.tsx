"use client";

import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  return (
    <footer className="bg-black border-t border-[#B08D57]/20 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="text-center">

          <p style={{ color: "#c7b287" }}>
            © {new Date().getFullYear()} Mara Shisha Lounge ·{" "}
            {isEnglish
              ? "All rights reserved."
              : "Todos los derechos reservados."}
          </p>

          <p
            className="mt-3 italic"
            style={{ color: "#8b7355" }}
          >
            {isEnglish
              ? "Thank you for being part of the Mara family ❤️"
              : "Gracias por formar parte de la familia Mara ❤️"}
          </p>

          {/* ENLACES LEGALES */}

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-7 text-sm">

            <Link
              href="/privacidad"
              className="transition hover:text-white"
              style={{ color: "#B08D57" }}
            >
              {isEnglish
                ? "Privacy Policy"
                : "Política de privacidad"}
            </Link>

            <Link
              href="/cookies"
              className="transition hover:text-white"
              style={{ color: "#B08D57" }}
            >
              {isEnglish
                ? "Cookie Policy"
                : "Política de cookies"}
            </Link>

            <Link
              href="/aviso-legal"
              className="transition hover:text-white"
              style={{ color: "#B08D57" }}
            >
              {isEnglish
                ? "Legal Notice"
                : "Aviso legal"}
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}