export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#B08D57]/20 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="text-center">

          <p
            style={{ color: "#c7b287" }}
          >
            © {new Date().getFullYear()} Mara Shisha Lounge · Todos los derechos reservados.
          </p>

          <p
            className="mt-3 italic"
            style={{ color: "#8b7355" }}
          >
            Gracias por formar parte de la familia Mara ❤️
          </p>

        </div>

      </div>

    </footer>
  );
}