import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-[#d8c59a]">
      <div className="mx-auto max-w-4xl">

        <Link
          href="/"
          className="inline-block mb-10 text-sm transition hover:text-white"
          style={{ color: "#B08D57" }}
        >
          ← Volver a Mara
        </Link>

        <div className="text-center mb-14">
          <p
            className="uppercase tracking-[5px] text-sm"
            style={{ color: "#B08D57" }}
          >
            Mara Shisha Lounge
          </p>

          <h1
            className="mt-4 text-4xl md:text-5xl font-bold"
            style={{ color: "#B08D57" }}
          >
            Política de privacidad
          </h1>
        </div>

        <div className="space-y-10 leading-8">

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#B08D57]">
              1. Responsable del tratamiento
            </h2>

            <p>
              Mara Shisha Lounge es responsable del tratamiento de los
              datos personales recopilados a través de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#B08D57]">
              2. Datos personales
            </h2>

            <p>
              Solo tratamos la información personal que facilitas
              voluntariamente cuando contactas con nosotros, realizas una
              consulta o participas en actividades disponibles a través
              de nuestra web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#B08D57]">
              3. Finalidad del tratamiento
            </h2>

            <p>
              Los datos personales podrán utilizarse para responder
              consultas, gestionar comunicaciones, prestar los servicios
              solicitados y gestionar la participación en actividades
              promocionales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#B08D57]">
              4. Conservación de los datos
            </h2>

            <p>
              Los datos personales se conservarán únicamente durante el
              tiempo necesario para cumplir la finalidad para la que fueron
              recogidos o para cumplir las obligaciones legales aplicables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#B08D57]">
              5. Derechos
            </h2>

            <p>
              Puedes ejercer tus derechos de acceso, rectificación,
              supresión, limitación, oposición y portabilidad cuando resulte
              aplicable conforme a la normativa vigente de protección de
              datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#B08D57]">
              6. Contacto
            </h2>

            <p>
              Para cualquier consulta relacionada con el tratamiento de
              datos personales, puedes contactar con Mara Shisha Lounge
              mediante los datos de contacto disponibles en esta web.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}