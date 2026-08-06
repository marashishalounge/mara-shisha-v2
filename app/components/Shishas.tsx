export default function Shishas() {
  return (
    <section
      id="shishas"
      className="bg-black py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">

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
            Shishas
          </h2>

          <p
            className="mt-5 max-w-3xl mx-auto leading-8"
            style={{ color: "#d8c59a" }}
          >
            Una experiencia creada para disfrutar aromas,
            sabores y momentos únicos.
          </p>

        </div>


        <div className="grid gap-10 md:grid-cols-2">



          {/* SHISHA NORMAL */}

          <div
            className="rounded-3xl border border-[#B08D57]/40 bg-zinc-950 p-8"
          >

            <h3
              className="text-3xl font-bold text-center"
              style={{ color:"#B08D57" }}
            >
              🔥 Shisha Normal
            </h3>


            <div
              className="text-5xl font-bold text-center my-6"
              style={{ color:"#B08D57" }}
            >
              10 €
            </div>


            <div
              className="space-y-3 text-center"
              style={{ color:"#e6d8bb" }}
            >

              <p>✔ Preparación clásica</p>
              <p>✔ Base tradicional</p>
              <p>✔ Carbón preparado al momento</p>
              <p>✔ Elige tus sabores favoritos en nuestra sección Sabores</p>

            </div>


            <div
              className="mt-10 border-t border-[#B08D57]/30 pt-6 text-center italic"
              style={{ color:"#c7b287" }}
            >
              Perfecta para quienes buscan una fumada equilibrada,
              suave y personalizada con sus sabores favoritos.
            </div>


          </div>





          {/* SHISHA PREMIUM */}

          <div
            className="rounded-3xl border-2 border-[#B08D57] bg-zinc-950 p-8"
          >

            <h3
              className="text-3xl font-bold text-center"
              style={{ color:"#B08D57" }}
            >
              👑 Shisha Premium
            </h3>


            <div
              className="text-5xl font-bold text-center my-6"
              style={{ color:"#B08D57" }}
            >
              18 €
            </div>


            <div
              className="space-y-3 text-center"
              style={{ color:"#e6d8bb" }}
            >

              <p>✔ Base helada</p>
              <p>✔ Carbón premium</p>
              <p>✔ Tabaco negro seleccionado</p>
              <p>✔ Preparación exclusiva</p>
              <p>✔ Toque frutal premium</p>
              <p>✔ Mezclas especiales de 2 o 3 sabores</p>

            </div>



            <div
              className="mt-10 rounded-2xl border border-[#B08D57]/40 p-6 text-center"
            >

              <h4
                className="text-xl font-semibold mb-3"
                style={{ color:"#B08D57" }}
              >
                Experiencia Premium
              </h4>


              <p
                className="leading-7"
                style={{ color:"#d8c59a" }}
              >
                Una preparación exclusiva para amantes
                de sabores intensos, frescura extrema
                y combinaciones únicas.
              </p>


            </div>



            <div
              className="mt-10 border-t border-[#B08D57]/30 pt-6 text-center italic"
              style={{ color:"#c7b287" }}
            >
              Una experiencia superior creada para quienes
              buscan una shisha elegante, intensa y memorable.
            </div>


          </div>



        </div>


      </div>

    </section>
  );
}