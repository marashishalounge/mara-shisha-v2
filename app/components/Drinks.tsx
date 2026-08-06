export default function Drinks() {
  return (
   <section
  id="copas"
  className="bg-black py-24 px-6"
>
    

      <div className="max-w-7xl mx-auto">


        {/* TITULO */}

        <div className="text-center mb-16">

          <span
            className="uppercase tracking-[5px] text-sm"
            style={{ color: "#B08D57" }}
          >
            Mara Shisha Lounge
          </span>


          <h2
            className="text-5xl font-bold mt-4 mb-6"
            style={{ color: "#B08D57" }}
          >
          🍸 Copas
          </h2>


          <p
            className="max-w-3xl mx-auto leading-8"
            style={{ color: "#d8c59a" }}
          >
            Una selección de copas premium para acompañar
            tu experiencia.
          </p>

        </div>




        <div className="grid gap-8 md:grid-cols-3">



          {/* GINEBRAS */}

          <div
            className="rounded-3xl border border-[#B08D57]/40 bg-zinc-950 p-8"
          >

            <h3
              className="text-3xl font-bold text-center mb-8"
              style={{ color:"#B08D57" }}
            >
              🍸 Ginebras
            </h3>


            <div className="space-y-4">

              {[
                ["Bombay Sapphire","6€"],
                ["Beefeater","6€"],
                ["Puerto de Indias","6€"],
                ["Larios","6€"],
                ["Seagrams","8€"],
                ["Seagrams 0'0","8€"],
              ].map(([name,price]) => (

                <div
                  key={name}
                  className="flex justify-between border-b border-[#B08D57]/20 pb-2"
                >

                  <span style={{ color:"#e6d8bb" }}>
                    {name}
                  </span>

                  <span style={{ color:"#B08D57" }}>
                    {price}
                  </span>

                </div>

              ))}

            </div>


          </div>






          {/* RONES */}

          <div
            className="rounded-3xl border border-[#B08D57]/40 bg-zinc-950 p-8"
          >

            <h3
              className="text-3xl font-bold text-center mb-8"
              style={{ color:"#B08D57" }}
            >
              🥃 Rones
            </h3>


            <div className="space-y-4">

              {[
                ["Barceló","6€"],
                ["Brugal","6€"],
                ["Legendario","6€"],
                ["Bacardí","6€"],
                ["Cacique","6€"],
                ["Negrita","6€"],
              ].map(([name,price]) => (

                <div
                  key={name}
                  className="flex justify-between border-b border-[#B08D57]/20 pb-2"
                >

                  <span style={{ color:"#e6d8bb" }}>
                    {name}
                  </span>


                  <span style={{ color:"#B08D57" }}>
                    {price}
                  </span>

                </div>

              ))}

            </div>


          </div>







          {/* WHISKY */}

          <div
            className="rounded-3xl border border-[#B08D57]/40 bg-zinc-950 p-8"
          >

            <h3
              className="text-3xl font-bold text-center mb-8"
              style={{ color:"#B08D57" }}
            >
              🥃 Whisky
            </h3>


            <div className="space-y-4">

              {[
                ["Red Label","6€"],
                ["Dewar's White Label","6€"],
                ["Ballantines","6€"],
                ["DYC","6€"],
                ["Jägermeister","7€"],
                ["Jack Daniel's","8€"],
                ["Black Label","8€"],
                ["Chivas Regal","8€"],
              ].map(([name,price]) => (

                <div
                  key={name}
                  className="flex justify-between border-b border-[#B08D57]/20 pb-2"
                >

                  <span style={{ color:"#e6d8bb" }}>
                    {name}
                  </span>


                  <span style={{ color:"#B08D57" }}>
                    {price}
                  </span>

                </div>

              ))}

            </div>


          </div>


        </div>





        {/* NOTA FINAL */}

        <div
          className="mt-16 text-center border-t border-[#B08D57]/30 pt-8"
        >

          <p
            className="italic"
            style={{ color:"#d8c59a" }}
          >
            ✨ Si eliges bebida energética, suplemento +1€
          </p>


        </div>


      </div>


    </section>
  );
}