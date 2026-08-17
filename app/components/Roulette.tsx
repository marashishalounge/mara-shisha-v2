"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { supabase } from "../../lib/supabase";

const premios = [
  {
    clave: "chupito",
    emoji: "ðŸ¥ƒ",
    ganador: true,
  },
  {
    clave: "cuboEstrellaGalicia",
    emoji: "ðŸº",
    ganador: true,
  },
  {
    clave: "copa",
    emoji: "ðŸ¹",
    ganador: true,
  },
  {
    clave: "shishaClasica",
    emoji: "ðŸ’¨",
    ganador: true,
  },
  {
    clave: "sigueParticipando",
    emoji: "âœ¨",
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
  const { t } = useLanguage();

  const [girando, setGirando] = useState(false);
  const [resultado, setResultado] = useState("");
  const [rotacion, setRotacion] = useState(0);
  const [celebracion, setCelebracion] = useState(false);
  const [error, setError] = useState("");

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

  function obtenerNombrePremio(clave: string) {
    switch (clave) {
      case "chupito":
        return t.roulette.chupito;

      case "cubo":
        return t.roulette.cuboEstrellaGalicia;

      case "copa":
        return t.roulette.copa;

      case "shishaClasica":
        return t.roulette.shishaClasica;

      case "sigueParticipando":
        return t.roulette.sigueParticipando;

      default:
        return clave;
    }
  }

  function obtenerDispositivoId() {
    const clave = "mara_dispositivo_id";

    let dispositivoId = localStorage.getItem(clave);

    if (!dispositivoId) {
      dispositivoId = crypto.randomUUID();
      localStorage.setItem(clave, dispositivoId);
    }

    return dispositivoId;
  }

  async function girar() {
    if (girando) {
      return;
    }

    setGirando(true);
    setResultado("");
    setCelebracion(false);
    setError("");

    try {
      const dispositivoId = obtenerDispositivoId();

      const { data, error: errorSupabase } = await supabase.rpc(
        "jugar_ruleta_dispositivo",
        {
          p_dispositivo_id: dispositivoId,
        }
      );

      if (errorSupabase) {
        console.error("Error Supabase:", errorSupabase);
        throw new Error(errorSupabase.message);
      }

      if (!data?.ok) {
        const mensaje =
          data?.mensaje?.includes("ya ha utilizado su tirada")
            ? t.roulette.dispositivoYaJugado
            : data?.mensaje ||
              "No puedes realizar otra tirada en este momento.";

        setError(mensaje);

        setGirando(false);
        return;
      }

      const clavePremio = data.premio;

      const indiceGanador = premios.findIndex(
        (premio) => premio.clave === clavePremio
      );

      if (indiceGanador === -1) {
        throw new Error(
          "Supabase devolviÃ³ un premio no reconocido."
        );
      }

      const centroSector = indiceGanador * 72 + 36;

      const posicionFinal = 360 - centroSector;

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
          obtenerNombrePremio(clavePremio)
        );

        setGirando(false);

        if (data.ganador === true) {
          setCelebracion(true);
        }
      }, 6000);
    } catch (error) {
      console.error(error);

      setError(
        "No hemos podido realizar la tirada. IntÃ©ntalo de nuevo."
      );

      setGirando(false);
    }
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
          <div className="absolute inset-0 animate-mara-flash" />

          <div className="absolute inset-0">
            {Array.from({ length: 220 }).map((_, index) => {
              const izquierda =
                (index * 47.37) % 100;

              const retraso =
                (index % 30) * 0.035;

              const duracion =
                2.8 + (index % 12) * 0.14;

              const tamano =
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
                    width: `${tamano}px`,
                    height: `${tamano * 1.8}px`,
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
                  âœ¦
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
          {t.roulette.titulo}
        </h2>

        <p className="text-gray-300 mt-4">
          {t.roulette.subtitulo}
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
                  key={premio.clave}
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
                      {obtenerNombrePremio(
                        premio.clave
                      )}
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
            â–¼
          </div>
        </div>

        <button
          onClick={girar}
          disabled={girando}
          className="mt-10 px-10 py-4 rounded-full bg-[#B08D57] text-black font-black tracking-widest hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {girando
            ? t.roulette.girando
            : t.roulette.boton}
        </button>

        <p className="mt-4 text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
          {t.roulette.premiosConsumicion}
        </p>

        {error && (
          <div className="mt-8 p-5 rounded-2xl border border-red-900 bg-[#111]">
            <p className="text-red-400 font-bold">
              {error}
            </p>
          </div>
        )}

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
                ? `ðŸŽ‰ ${t.roulette.ganado} ðŸŽ‰`
                : t.roulette.premio}
            </p>

            <p className="text-2xl font-bold mt-3">
              {resultado}
            </p>

            {celebracion && (
              <p className="text-[#D4AF37] mt-3 font-bold">
                {t.roulette.enhorabuena}
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


