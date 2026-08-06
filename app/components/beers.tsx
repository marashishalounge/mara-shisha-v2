export default function Beers() {
  return (
    <section
      id="cervezas"
      className="bg-zinc-950 py-20 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <h2
          className="text-4xl font-bold text-center mb-4"
          style={{ color: "#B08D57" }}
        >
          🍺 Cervezas
        </h2>


        <p
          className="text-center mb-14"
          style={{ color: "#B08D57" }}
        >
          Una selección de cervezas frías para disfrutar en Mara Shisha Lounge.
        </p>



        <div className="grid gap-8 md:grid-cols-3">



          {/* BARRIL */}

          <div className="bg-black border border-[#B08D57]/40 rounded-2xl p-8">

            <h3
              className="text-2xl font-semibold mb-6 text-center"
              style={{ color: "#B08D57" }}
            >
              🍻 Barril
            </h3>


            <div className="flex justify-between mb-4">

              <span>
                🍺 Amstel Caña
              </span>

              <span style={{ color: "#B08D57" }}>
                1,80€
              </span>

            </div>


            <div className="flex justify-between">

              <span>
                🍺 Amstel Jarra
              </span>

              <span style={{ color: "#B08D57" }}>
                3,00€
              </span>

            </div>


          </div>





          {/* NACIONALES */}

          <div className="bg-black border border-[#B08D57]/40 rounded-2xl p-8">

            <h3
              className="text-2xl font-semibold mb-6 text-center"
              style={{ color: "#B08D57" }}
            >
              🇪🇸 Nacionales
            </h3>


            <div className="flex justify-between mb-4">

              <span>
                🍺 Estrella Galicia 1/5
              </span>

              <span style={{ color: "#B08D57" }}>
                1,90€
              </span>

            </div>


            <div className="flex justify-between">

              <span>
                🍺 Amstel 1/3
              </span>

              <span style={{ color: "#B08D57" }}>
                2,50€
              </span>

            </div>


          </div>





          {/* INTERNACIONALES */}

          <div className="bg-black border border-[#B08D57]/40 rounded-2xl p-8">

            <h3
              className="text-2xl font-semibold mb-6 text-center"
              style={{ color: "#B08D57" }}
            >
              🌍 Internacionales
            </h3>


            <div className="flex justify-between mb-4">

              <span>
                🍺 Heineken
              </span>

              <span style={{ color: "#B08D57" }}>
                3,00€
              </span>

            </div>


            <div className="flex justify-between mb-4">

              <span>
                🍺 Corona
              </span>

              <span style={{ color: "#B08D57" }}>
                3,00€
              </span>

            </div>


            <div className="flex justify-between">

              <span>
                🍺 Budweiser
              </span>

              <span style={{ color: "#B08D57" }}>
                3,00€
              </span>

            </div>


          </div>



        </div>


      </div>


    </section>
  );
}