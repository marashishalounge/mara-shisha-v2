export default function Offers() {
  return (
    <section
      id="ofertas"
      className="bg-black py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">


        {/* TITULO */}

        <div className="text-center mb-16">

          <span
            className="uppercase tracking-[5px] text-sm"
            style={{ color:"#B08D57" }}
          >
            Mara Shisha Lounge
          </span>


          <h2
            className="text-5xl font-bold mt-4"
            style={{ color:"#B08D57" }}
          >
            ✨ Ofertas ideales para compartir
          </h2>


          <p
            className="mt-5 max-w-3xl mx-auto leading-8"
            style={{ color:"#d8c59a" }}
          >
            Momentos especiales para disfrutar acompañado,
            con nuestras mejores combinaciones Mara.
          </p>

        </div>




        <div className="grid gap-10 md:grid-cols-2">



          {/* SHISHAS */}


          <div
            className="rounded-3xl border-2 border-[#B08D57] bg-zinc-950 p-8 text-center shadow-lg"
          >

            <div className="text-6xl mb-5">
              🔥
            </div>


            <h3
              className="text-3xl font-bold mb-6"
              style={{ color:"#B08D57" }}
            >
              Shishas para compartir
            </h3>


            <div
              className="text-6xl font-bold mb-6"
              style={{ color:"#B08D57" }}
            >
              2 x 15€
            </div>


            <p
              className="leading-8 italic"
              style={{ color:"#d8c59a" }}
            >
              Dos shishas clásicas para disfrutar
              de tus sabores favoritos junto a quien quieras.
            </p>


          </div>







          {/* CERVEZAS */}


          <div
            className="rounded-3xl border-2 border-[#B08D57] bg-zinc-950 p-8"
          >


            <div className="text-6xl text-center mb-5">
              🍺
            </div>


            <h3
              className="text-3xl font-bold text-center mb-8"
              style={{ color:"#B08D57" }}
            >
              Cervezas para compartir
            </h3>



            <div className="space-y-5">



              <div
                className="flex justify-between items-center border-b border-[#B08D57]/30 pb-3"
              >

                <span
                  className="text-xl"
                  style={{ color:"#e6d8bb" }}
                >
                  🍺 Cubo Heineken
                </span>

                <span
                  className="text-2xl font-bold"
                  style={{ color:"#B08D57" }}
                >
                  15€
                </span>

              </div>





              <div
                className="flex justify-between items-center border-b border-[#B08D57]/30 pb-3"
              >

                <span
                  className="text-xl"
                  style={{ color:"#e6d8bb" }}
                >
                  🍺 Cubo Corona
                </span>


                <span
                  className="text-2xl font-bold"
                  style={{ color:"#B08D57" }}
                >
                  15€
                </span>

              </div>






              <div
                className="flex justify-between items-center"
              >

                <span
                  className="text-xl"
                  style={{ color:"#e6d8bb" }}
                >
                  🍺 Cubo Estrella Galicia (5 quintos)
                </span>


                <span
                  className="text-2xl font-bold"
                  style={{ color:"#B08D57" }}
                >
                  8,50€
                </span>

              </div>



            </div>



          </div>


        </div>





        {/* PIE MARA */}


        <div
          className="mt-16 text-center border-t border-[#B08D57]/30 pt-8 italic"
          style={{ color:"#c7b287" }}
        >
          Comparte el momento, disfruta la experiencia.
          <br />
          Mara Shisha Lounge
        </div>



      </div>


    </section>
  );
}