export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#B08D57]/20 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* MARCA */}

          <div>

            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#B08D57" }}
            >
              Mara Shisha Lounge
            </h2>

            <p
              className="leading-7"
              style={{ color: "#d8c59a" }}
            >
              Un espacio diseñado para disfrutar de las mejores shishas,
              cervezas, copas y un ambiente exclusivo en Córdoba.
            </p>

            <p
              className="mt-6 italic"
              style={{ color: "#B08D57" }}
            >
              "Donde las noches cobran vida."
            </p>

          </div>

          {/* CONTACTO */}

          <div>

            <h3
              className="text-xl font-semibold mb-5"
              style={{ color: "#B08D57" }}
            >
              Contacto
            </h3>

            <ul
              className="space-y-3"
              style={{ color: "#d8c59a" }}
            >

              <li>
                📍 Camino de los Sastres, 30
              </li>

              <li>
                📞 +34 602 132 623
              </li>

              <li>
                📸 @maralounge_cordoba
              </li>

            </ul>

            <a
              href="https://wa.me/34602132623"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-500 transition"
            >
              💬 WhatsApp
            </a>

          </div>

          {/* ENLACES */}

          <div>

            <h3
              className="text-xl font-semibold mb-5"
              style={{ color: "#B08D57" }}
            >
              Navegación
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="#inicio"
                  className="hover:text-white transition"
                  style={{ color: "#d8c59a" }}
                >
                  Inicio
                </a>
              </li>

              <li>
                <a
                  href="#ofertas"
                  className="hover:text-white transition"
                  style={{ color: "#d8c59a" }}
                >
                  Ofertas
                </a>
              </li>

              <li>
                <a
                  href="#shishas"
                  className="hover:text-white transition"
                  style={{ color: "#d8c59a" }}
                >
                  Shishas
                </a>
              </li>

              <li>
                <a
                  href="#copas"
                  className="hover:text-white transition"
                  style={{ color: "#d8c59a" }}
                >
                  Copas
                </a>
              </li>

              <li>
                <a
                  href="#cervezas"
                  className="hover:text-white transition"
                  style={{ color: "#d8c59a" }}
                >
                  Cervezas
                </a>
              </li>

              <li>
                <a
                  href="#bebidas"
                  className="hover:text-white transition"
                  style={{ color: "#d8c59a" }}
                >
                  Bebidas
                </a>
              </li>

              <li>
                <a
                  href="#contacto"
                  className="hover:text-white transition"
                  style={{ color: "#d8c59a" }}
                >
                  Contacto
                </a>
              </li>

            </ul>

          </div>

        </div>

        <div className="border-t border-[#B08D57]/20 mt-12 pt-8 text-center">

          <p
            style={{ color: "#c7b287" }}
          >
            © {new Date().getFullYear()} Mara Shisha Lounge · Todos los derechos reservados.
          </p>

          <p
            className="mt-3 italic"
            style={{ color: "#8b7355" }}
          >
            Gracias por formar parte de la familia Mara ❤️
          </p>

        </div>

      </div>

    </footer>
  );
}