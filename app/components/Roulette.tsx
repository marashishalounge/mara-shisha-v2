
"use client";

import { useEffect, useState } from "react";

const premios = [
  {
    nombre: "CHUPITO",
    emoji: "🥃",
    probabilidad: 6,
    ganador: true,
  },
  {
    nombre: "CUBO DE ESTRELLA GALICIA",
    emoji: "🍺",
    probabilidad: 5,
    ganador: true,
  },
  {
    nombre: "COPA",
    emoji: "🍸",
    probabilidad: 2,
    ganador: true,
  },
  {
    nombre: "SHISHA CLÁSICA",
    emoji: "💨",
    probabilidad: 2,
    ganador: true,
  },
  {
    nombre: "SIGUE PARTICIPANDO",
    emoji: "✨",
    probabilidad: 85,
    ganador: false,
  },
];

const colores = [
  "#8B5A2B",
  "#B08D57",
  "#6B4423",
  "#3A2818",
  "#222222",
];

const coloresConfeti = [
  "#B08D57",
  "#F5F5F5",
  "#D4AF37",
  "#8B5A2B",
  "#FFFFFF",
];

export default function Roulette() {
  const [girando, setGirando] = useState(false);
  const [resultado, setResultado] = useState("");
  const [rotacion, setRotacion] = useState(0);
  const [celebracion, setCelebracion] = useState(false);

  useEffect(() => {
    if (!celebracion) {
      return;
    }

    const temporizador = setTimeout(() => {
      setCelebracion(false);
    }, 6000);

    return () => {
      clearTimeout(temporizador);
    };
  }, [celebracion]);

  function seleccionarPremio() {
    const numero = Math.random() * 100;

    let acumulado = 0;

    for (let i = 0; i < premios.length; i++) {
      acumulado += premios[i].probabilidad;

      if (numero < acumulado) {
        return i;
      }
    }

    return premios.length - 1;
  }

  function girar() {
    if (girando) {
      return;
    }

    setGirando(true);
    setResultado("");
    setCelebracion(false);

    const indiceGanador = seleccionarPremio();

    const centroSector =
      indiceGanador * 72 + 36;

    const posicionFinal =
      360 - centroSector;

    const vueltasCompletas = 8 * 360;

    const rotacionBase =
      Math.ceil(rotacion / 360) * 360;

    const nuevaRotacion =
      rotacionBase +
      vueltasCompletas +
      posicionFinal;

    setRotacion(nuevaRotacion);

    setTimeout(() => {
      setResultado(
        premios[indiceGanador].nombre
      );

      setGirando(false);

      if (premios[indiceGanador].ganador) {
        setCelebracion(true);
      }
    }, 6000);
  }

  const sectores = colores
    .map((color, index) => {
      const inicio = index * 72;
      const final = inicio + 72;

      return `${color} ${inicio}deg ${final}deg`;
    })
    .join(", ");

  return (
    <section
      id="ruleta"
      className="relative w-full bg-black text-white py-16 px-4 overflow-hidden"
    >

      {celebracion && (
        <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">

          {/* FLASH INICIAL */}

          <div className="absolute inset-0 animate-mara-flash" />

          {/* CONFETI SUPER DENSO */}

          <div className="absolute inset-0">

            {Array.from({ length: 220 }).map((_, index) => {
              const izquierda =
                (index * 47.37) % 100;

              const retraso =
                (index % 30) * 0.035;

              const duracion =
                2.8 + (index % 12) * 0.14;

              const tamaño =
                5 + (index % 6);

              const rotacionInicial =
                (index * 53) % 360;

              const color =
                coloresConfeti[
                  index % coloresConfeti.length
                ];

              return (
                <span
                  key={`confeti-${index}`}
                  className="absolute top-[-30px] rounded-sm"
                  style={{
                    left: `${izquierda}%`,
                    width: `${tamaño}px`,
                    height: `${tamaño * 1.8}px`,
                    backgroundColor: color,
                    boxShadow:
                      `0 0 6px ${color}`,
                    transform:
                      `rotate(${rotacionInicial}deg)`,
                    animation:
                      `mara-confeti ${duracion}s cubic-bezier(.15,.7,.3,1) ${retraso}s forwards`,
                  }}
                />
              );
            })}

          </div>

          {/* FUEGO ARTIFICIAL 1 */}

          <div
            className="absolute left-[20%] top-[25%] w-2 h-2"
            style={{
              animation:
                "mara-firework 2.8s ease-out 0.1s infinite",
            }}
          >
            {Array.from({ length: 24 }).map(
              (_, index) => (
                <span
                  key={`firework-1-${index}`}
                  className="absolute left-0 top-0 w-1 h-16 origin-bottom rounded-full bg-[#B08D57]"
                  style={{
                    transform:
                      `rotate(${index * 15}deg)`,
                    boxShadow:
                      "0 0 8px #B08D57",
                  }}
                />
              )
            )}
          </div>

          {/* FUEGO ARTIFICIAL 2 */}

          <div
            className="absolute right-[20%] top-[22%] w-2 h-2"
            style={{
              animation:
                "mara-firework 3s ease-out 0.5s infinite",
            }}
          >
            {Array.from({ length: 24 }).map(
              (_, index) => (
                <span
                  key={`firework-2-${index}`}
                  className="absolute left-0 top-0 w-1 h-14 origin-bottom rounded-full bg-white"
                  style={{
                    transform:
                      `rotate(${index * 15}deg)`,
                    boxShadow:
                      "0 0 8px white",
                  }}
                />
              )
            )}
          </div>

          {/* FUEGO ARTIFICIAL 3 */}

          <div
            className="absolute left-[50%] top-[18%] w-2 h-2"
            style={{
              animation:
                "mara-firework 3.2s ease-out 0.9s infinite",
            }}
          >
            {Array.from({ length: 28 }).map(
              (_, index) => (
                <span
                  key={`firework-3-${index}`}
                  className="absolute left-0 top-0 w-1 h-20 origin-bottom rounded-full bg-[#D4AF37]"
                  style={{
                    transform:
                      `rotate(${index * 12.85}deg)`,
                    boxShadow:
                      "0 0 10px #D4AF37",
                  }}
                />
              )
            )}
          </div>

          {/* DESTELLOS */}

          {Array.from({ length: 35 }).map(
            (_, index) => {
              const izquierda =
                (index * 31) % 100;

              const arriba =
                10 + ((index * 43) % 75);

              return (
                <span
                  key={`spark-${index}`}
                  className="absolute text-[#D4AF37] text-2xl font-bold"
                  style={{
                    left: `${izquierda}%`,
                    top: `${arriba}%`,
                    animation:
                      `mara-spark ${1 + (index % 4) * 0.3}s ease-in-out ${(index % 10) * 0.12}s infinite`,
                  }}
                >
                  ✦
                </span>
              );
            }
          )}

        </div>
      )}

      <div className="max-w-4xl mx-auto text-center">

        <p className="text-[#B08D57] tracking-[0.3em] text-sm mb-3">
          MARA SHISHA LOUNGE
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#B08D57]">
          RULETA MARA
        </h2>

        <p className="text-gray-300 mt-4">
          Gira y descubre tu premio
        </p>

        <div className="relative mx-auto mt-10 w-80 h-80">

          <div
            className="relative w-full h-full rounded-full border-8 border-[#B08D57] flex items-center justify-center"
            style={{
              background:
                `conic-gradient(${sectores})`,
              transform:
                `rotate(${rotacion}deg)`,
              transition: girando
                ? "transform 6s cubic-bezier(0.12, 0.8, 0.18, 1)"
                : "none",
            }}
          >

            {premios.map((premio, index) => {
              const angulo =
                index * 72 + 36;

              return (
                <div
                  key={premio.nombre}
                  className="absolute left-1/2 top-1/2 w-32 text-center"
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      rotate(${angulo}deg)
                      translateY(-105px)
                      rotate(-${angulo}deg)
                    `,
                  }}
                >

                  <div className="flex flex-col items-center justify-center">

                    <div className="text-3xl leading-none mb-2">
                      {premio.emoji}
                    </div>

                    <div className="text-[9px] md:text-[10px] font-black leading-tight tracking-wide text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.95)]">
                      {premio.nombre}
                    </div>

                  </div>

                </div>
              );
            })}

            <div className="w-28 h-28 rounded-full bg-black border-4 border-[#B08D57] flex items-center justify-center z-10">

              <div className="text-center">

                <div className="text-[#B08D57] font-black text-xl">
                  MARA
                </div>

                <div className="text-white text-xs tracking-widest">
                  LOUNGE
                </div>

              </div>

            </div>

          </div>

          <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[#B08D57] text-4xl font-bold z-20">
            ▼
          </div>

        </div>

        <button
          onClick={girar}
          disabled={girando}
          className="mt-10 px-10 py-4 rounded-full bg-[#B08D57] text-black font-black tracking-widest hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {girando
            ? "GIRANDO..."
            : "GIRAR RULETA"}
        </button>

        {resultado && (
          <div
            className={`mt-8 p-6 rounded-2xl border bg-[#111] ${
              celebracion
                ? "border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.35)]"
                : "border-[#B08D57]"
            }`}
          >

            <p className="text-[#B08D57] text-sm tracking-widest">
              {celebracion
                ? "🎉 ¡HAS GANADO! 🎉"
                : "TU PREMIO"}
            </p>

            <p className="text-2xl font-bold mt-3">
              {resultado}
            </p>

            {celebracion && (
              <p className="text-[#D4AF37] mt-3 font-bold">
                ¡ENHORABUENA!
              </p>
            )}

          </div>
        )}

      </div>

      <style jsx>{`
        @keyframes mara-confeti {
          0% {
            transform:
              translateY(-30px)
              rotate(0deg);
            opacity: 1;
          }

          20% {
            opacity: 1;
          }

          100% {
            transform:
              translateY(110vh)
              rotate(1080deg);
            opacity: 0;
          }
        }

        @keyframes mara-firework {
          0% {
            opacity: 0;
            transform: scale(0.05);
          }

          15% {
            opacity: 1;
            transform: scale(0.05);
          }

          45% {
            opacity: 1;
            transform: scale(1);
          }

          75% {
            opacity: 0.8;
            transform: scale(1.3);
          }

          100% {
            opacity: 0;
            transform: scale(1.5);
          }
        }

        @keyframes mara-spark {
          0% {
            opacity: 0;
            transform: scale(0.2) rotate(0deg);
          }

          40% {
            opacity: 1;
            transform: scale(1.3) rotate(90deg);
          }

          70% {
            opacity: 1;
            transform: scale(0.8) rotate(180deg);
          }

          100% {
            opacity: 0;
            transform: scale(0.1) rotate(270deg);
          }
        }

        @keyframes mara-flash {
          0% {
            background: rgba(255, 255, 255, 0);
          }

          5% {
            background: rgba(255, 255, 255, 0.18);
          }

          12% {
            background: rgba(255, 255, 255, 0);
          }

          100% {
            background: rgba(255, 255, 255, 0);
          }
        }
      `}</style>

    </section>
  );
}
