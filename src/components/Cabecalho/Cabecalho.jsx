import Link from "next/link";
import "./Cabecalho.scss";

export default function Cabecalho() {
  return (
    <div>
      <header className="cabecalho_header">
        <div className="link">
          <nav className="p-linha">
            <p>
              <Link href="/produtos/calca">CALÇA</Link>
            </p>
            <p>
              <Link href="/produtos/camisa">CAMISA</Link>
            </p>
            <p className="nome_loja">
              <Link href="/">LOJA</Link>
            </p>
            <p>
              <Link href="/produtos/shorts">SHORTS</Link>
            </p>
            <p>
              <Link href="/produtos/tenis">TÊNIS</Link>
            </p>
            <p>
              <Link href="/login">LOGIN</Link>
            </p>
            <p>
              <Link href="/usuarios/users">USUARIOS</Link>
            </p>
          </nav>
        </div>
      </header>
    </div>
  );
}
