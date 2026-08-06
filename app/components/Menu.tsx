export default function Menu() {
  return (
    <section
      id="menu"
      className="bg-zinc-950 py-20 px-6"
    >

      <div className="max-w-7xl mx-auto">


        <h2
          className="text-4xl font-bold text-center mb-4"
          style={{ color: "#B08D57" }}
        >
          Nuestro Menú
        </h2>


        <p
          className="text-center mb-14"
          style={{ color: "#B08D57" }}
        >
          Descubre nuestra selección de shishas, copas,
          cervezas, bebidas y ofertas especiales.
        </p>



        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">



          {/* SHISHAS */}

          <a
            href="#shishas"
            className="block bg-black border border-[#B08D57]/40 rounded-2xl p-8 text-center hover:border-[#B08D57] hover:-translate-y-1 transition-all duration-300"
          >

            <div className="text-5xl mb-5">
              🔥
            </div>


            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#B08D57" }}
            >
              Shishas
            </h3>


            <p style={{ color: "#B08D57" }}>
              Sabores clásicos, premium y especiales preparados al momento.
            </p>


          </a>





          {/* COPAS */}

          <a
            href="#copas"
            className="block bg-black border border-[#B08D57]/40 rounded-2xl p-8 text-center hover:border-[#B08D57] hover:-translate-y-1 transition-all duration-300"
          >

            <div className="text-5xl mb-5">
              🍸
            </div>


            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#B08D57" }}
            >
              Copas
            </h3>


            <p style={{ color: "#B08D57" }}>
              Ginebras, rones y whiskys seleccionados para acompañar cada experiencia.
            </p>


          </a>






          {/* BEBIDAS */}

          <a
            href="#bebidas"
            className="block bg-black border border-[#B08D57]/40 rounded-2xl p-8 text-center hover:border-[#B08D57] hover:-translate-y-1 transition-all duration-300"
          >

            <div className="text-5xl mb-5">
              🥤
            </div>


            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#B08D57" }}
            >
              Bebidas
            </h3>


            <p style={{ color: "#B08D57" }}>
              Refrescos, zumos, energéticas y bebidas calientes.
            </p>


          </a>






          {/* CERVEZAS */}

          <a
            href="#cervezas"
            className="block bg-black border border-[#B08D57]/40 rounded-2xl p-8 text-center hover:border-[#B08D57] hover:-translate-y-1 transition-all duration-300"
          >

            <div className="text-5xl mb-5">
              🍺
            </div>


            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#B08D57" }}
            >
              Cervezas
            </h3>


            <p style={{ color: "#B08D57" }}>
              De barril, nacionales e internacionales.
            </p>


          </a>







          {/* OFERTAS */}

          <a
            href="#ofertas"
            className="block bg-black border-2 border-[#B08D57] rounded-2xl p-8 text-center hover:bg-[#B08D57]/10 hover:-translate-y-1 transition-all duration-300"
          >

            <div className="text-5xl mb-5">
              ✨
            </div>


            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#B08D57" }}
            >
              Ofertas
            </h3>


            <p style={{ color: "#B08D57" }}>
              Promociones especiales para compartir shishas y cervezas.
            </p>


          </a>







          {/* SNACKS */}

          <a
            href="#snacks"
            className="block bg-black border border-[#B08D57]/40 rounded-2xl p-8 text-center hover:border-[#B08D57] hover:-translate-y-1 transition-all duration-300"
          >

            <div className="text-5xl mb-5">
              🍟
            </div>


            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#B08D57" }}
            >
              Snacks
            </h3>


            <p style={{ color: "#B08D57" }}
            >
              Aperitivos y platos para compartir en un ambiente relajado.
            </p>


          </a>



        </div>


      </div>


    </section>
  );
}