export default function Beverages() {
  return (
    <section
      id="bebidas"
      className="bg-[#050505] py-24 px-6 border-t border-[#B08D57]/20"
    >

      <div className="max-w-7xl mx-auto">

        {/* TITULO */}

        <div className="text-center mb-12">

          <h2
            className="text-5xl font-bold mb-4"
            style={{ color: "var(--bronze)" }}
          >
            🥤 Bebidas
          </h2>

          <p className="text-zinc-400 text-lg">
            Refrescos, bebidas frías y una selección de tés para acompañar tu experiencia.
          </p>


          {/* SELECTOR */}

          <div className="flex justify-center gap-5 mt-8 flex-wrap">

            <a
              href="#frias"
              className="px-6 py-3 rounded-full border border-[#B08D57]/40 hover:bg-[#B08D57]/10 transition"
              style={{ color: "var(--bronze)" }}
            >
              🧊 Bebidas frías
            </a>


            <a
              href="#calientes"
              className="px-6 py-3 rounded-full border border-[#B08D57]/40 hover:bg-[#B08D57]/10 transition"
              style={{ color: "var(--bronze)" }}
            >
              ☕ Bebidas calientes
            </a>

          </div>

        </div>



        <div className="grid md:grid-cols-2 gap-10">



          {/* BEBIDAS FRIAS */}

          <div
            id="frias"
            className="group rounded-3xl border border-[#B08D57]/30 bg-gradient-to-b from-[#151515] to-black p-8 shadow-lg transition-all duration-500 hover:border-[#B08D57] hover:-translate-y-2"
          >

            <div className="text-center mb-8">

              <div className="text-5xl mb-4">
                🧊
              </div>

              <h3
                className="text-3xl font-bold"
                style={{ color: "var(--bronze)" }}
              >
                Bebidas frías
              </h3>

            </div>


            <div className="space-y-5">


              <div className="flex justify-between border-b border-[#B08D57]/20 pb-3">
                <span>🥤 Colas</span>
                <span style={{ color: "var(--bronze)" }}>
                  2,50€
                </span>
              </div>


              <div className="flex justify-between border-b border-[#B08D57]/20 pb-3">
                <span>🍹 Nestea</span>
                <span style={{ color: "var(--bronze)" }}>
                  2,50€
                </span>
              </div>


              <div className="flex justify-between border-b border-[#B08D57]/20 pb-3">
                <span>🧃 Aquarius</span>
                <span style={{ color: "var(--bronze)" }}>
                  2,50€
                </span>
              </div>


              <div className="flex justify-between border-b border-[#B08D57]/20 pb-3">
                <span>🍊 Zumos</span>
                <span style={{ color: "var(--bronze)" }}>
                  2,50€
                </span>
              </div>


              <div className="flex justify-between border-b border-[#B08D57]/20 pb-3">
                <span>💦 Agua con gas</span>
                <span style={{ color: "var(--bronze)" }}>
                  2,50€
                </span>
              </div>


              <div className="flex justify-between border-b border-[#B08D57]/20 pb-3">
                <span>🚰 Agua</span>
                <span style={{ color: "var(--bronze)" }}>
                  2,00€
                </span>
              </div>


              <div className="flex justify-between">
                <span>⚡ Bebidas energéticas</span>
                <span style={{ color: "var(--bronze)" }}>
                  3,00€
                </span>
              </div>


            </div>

          </div>




          {/* BEBIDAS CALIENTES */}

          <div
            id="calientes"
            className="group rounded-3xl border border-[#B08D57]/30 bg-gradient-to-b from-[#151515] to-black p-8 shadow-lg transition-all duration-500 hover:border-[#B08D57] hover:-translate-y-2"
          >

            <div className="text-center mb-8">

              <div className="text-5xl mb-4">
                ☕
              </div>

              <h3
                className="text-3xl font-bold"
                style={{ color: "var(--bronze)" }}
              >
                Bebidas calientes
              </h3>

            </div>


            <div className="space-y-5">


              <div className="flex justify-between border-b border-[#B08D57]/20 pb-3">
                <span>🍵 Té verde</span>
                <span style={{ color: "var(--bronze)" }}>
                  2,00€
                </span>
              </div>


              <div className="flex justify-between border-b border-[#B08D57]/20 pb-3">
                <span>🌿 Té moruno</span>
                <span style={{ color: "var(--bronze)" }}>
                  2,00€
                </span>
              </div>


              <div className="flex justify-between border-b border-[#B08D57]/20 pb-3">
                <span>🍋 Té limón</span>
                <span style={{ color: "var(--bronze)" }}>
                  2,00€
                </span>
              </div>


              <div className="flex justify-between">
                <span>🌸 Infusiones</span>
                <span style={{ color: "var(--bronze)" }}>
                  2,00€
                </span>
              </div>


            </div>

          </div>


        </div>


      </div>


    </section>
  );
}