const favorites = [
  {
    name: "💎 Love 66",
    badge: "⭐ Más pedido",
    description:
      "Una mezcla tropical, dulce y refrescante. Uno de los sabores favoritos de nuestros clientes.",
  },
  {
    name: "🍓 Frutos Rojos",
    badge: "⭐ Más pedido",
    description:
      "Una combinación intensa de frutas rojas con un aroma elegante y equilibrado.",
  },
  {
    name: "🥭 Mango",
    badge: "⭐ Más pedido",
    description:
      "Dulce y tropical, perfecto para una fumada suave y agradable.",
  },
  {
    name: "🍉 Sandía",
    badge: "⭐ Más pedido",
    description:
      "Fresca, ligera y refrescante para disfrutar en cualquier momento.",
  },
  {
    name: "🍬 Chicle",
    badge: "⭐ Especial",
    description:
      "Un sabor divertido y diferente con un toque dulce y nostálgico.",
  },
];


const flavors = [
  {
    name: "💎 Love 66",
    badge: "Tropical",
    description:
      "Mezcla tropical con un equilibrio perfecto entre dulzor y frescura.",
  },

  {
    name: "🍓 Frutos Rojos",
    badge: "Frutal",
    description:
      "Aroma intenso de frutos rojos con una fumada elegante.",
  },

  {
    name: "❄️ Menta",
    badge: "Fresco",
    description:
      "Sensación fría y limpia, perfecta para combinar.",
  },

  {
    name: "🥭 Mango",
    badge: "Tropical",
    description:
      "Dulce y exótico con un sabor suave.",
  },

  {
    name: "🍈 Maracuyá",
    badge: "Exótico",
    description:
      "Toque cítrico tropical con mucha personalidad.",
  },

  {
    name: "🌿 Menta Suave",
    badge: "Ligero",
    description:
      "Refrescante pero más delicado que la menta clásica.",
  },

  {
    name: "🍇 Uva",
    badge: "Intenso",
    description:
      "Dulce y profundo con un aroma elegante.",
  },

  {
    name: "🫐 Arándanos",
    badge: "Premium",
    description:
      "Sabor suave, dulce y muy aromático.",
  },

  {
    name: "🌱 Hierbabuena",
    badge: "Natural",
    description:
      "Frescor herbal con un toque diferente.",
  },

  {
    name: "🍉 Sandía",
    badge: "Refrescante",
    description:
      "Ligera, dulce y muy agradable.",
  },

  {
    name: "🍈 Melón",
    badge: "Dulce",
    description:
      "Suave y equilibrado para cualquier combinación.",
  },

  {
    name: "🍍 Piña",
    badge: "Caribe",
    description:
      "Tropical con un toque ácido muy agradable.",
  },

  {
    name: "🥥 Coco",
    badge: "Exótico",
    description:
      "Cremoso y diferente para mezclas especiales.",
  },

  {
    name: "🍋 Lima",
    badge: "Cítrico",
    description:
      "Fresca e intensa con un toque ácido.",
  },

  {
    name: "🍬 Chicle",
    badge: "Especial",
    description:
      "Dulce y divertido, ideal para mezclas creativas.",
  },

  {
    name: "🧀🍰 Tarta de Queso",
    badge: "Exclusivo",
    description:
      "Una mezcla cremosa inspirada en un clásico de la repostería.",
  },
];


export default function Flavors() {
  return (
    <section
      id="sabores"
      className="bg-black py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">


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
            Sabores
          </h2>


          <p
            className="mt-5 max-w-3xl mx-auto"
            style={{ color:"#d8c59a" }}
          >
            Descubre nuestra selección de sabores
            clásicos, exóticos y exclusivos.
          </p>

        </div>



        {/* SABORES MÁS PEDIDOS */}

        <div className="mb-20">


          <h3
            className="text-3xl font-bold text-center mb-10"
            style={{ color:"#B08D57" }}
          >
            ⭐ Sabores más pedidos
          </h3>



          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            {favorites.map((flavor) => (

              <div
                key={flavor.name}
                className="rounded-2xl border border-[#B08D57]/40 bg-zinc-950 p-5 text-center hover:border-[#B08D57] transition"
              >

                <span
                  className="text-xs uppercase tracking-wider"
                  style={{ color:"#d8c59a" }}
                >
                  {flavor.badge}
                </span>


                <h4
                  className="text-xl font-bold mt-3 mb-3"
                  style={{ color:"#B08D57" }}
                >
                  {flavor.name}
                </h4>


                <p
                  className="text-sm leading-6"
                  style={{ color:"#e6d8bb" }}
                >
                  {flavor.description}
                </p>

              </div>

            ))}

          </div>

        </div>





        {/* TODOS LOS SABORES */}


        <h3
          className="text-3xl font-bold text-center mb-10"
          style={{ color:"#B08D57" }}
        >
          Todos nuestros sabores
        </h3>



        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">


          {flavors.map((flavor) => (

            <div
              key={flavor.name}
              className="rounded-2xl border border-[#B08D57]/30 bg-zinc-950 p-6"
            >

              <h4
                className="text-xl font-semibold mb-3"
                style={{ color:"#B08D57" }}
              >
                {flavor.name}
              </h4>


              <span
                className="text-sm"
                style={{ color:"#d8c59a" }}
              >
                {flavor.badge}
              </span>


              <p
                className="mt-4 text-sm leading-7"
                style={{ color:"#e6d8bb" }}
              >
                {flavor.description}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}