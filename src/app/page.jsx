import Image from "next/image";
import Link from "next/link";
import "./home.scss";

export default function Home(){

  return(
    <div>
       <h1 className="welcome">Bem vindo a LOJA</h1>
    <h2 className="produtos">Nossos Produtos</h2>
        <div className="produtos_geral">
          <div id="id_produtos">
            <figure id="bordas_camiseta_calca">
              <Image src="/img/class.webp" alt="Camiseta" width={300} height={350}/>
            </figure>
            <h2>Camiseta Class</h2>
              <p>R$ 120,00</p>
              <button><Link href="/produtos/camisa">Comprar</Link></button>
          </div>
          <div id="id_produtos">
            <figure id="bordas_camiseta_calca">
              <Image src="/img/oack.webp" alt="calça" width={300} height={350}/>
            </figure>
            <h2>Calça Oack</h2>
              <p>R$ 90,00</p>
              <button><Link href="/produtos/calca">Comprar</Link></button>
          </div>
          <div id="id_produtos">
            <figure id="bordas_shorts_tenis">
              <Image src="/img/shorts.jpg" alt="shorts" width={300} height={350}/>
            </figure>
            <h2>Shorts Preto</h2>
              <p>R$ 70,00</p>
              <button><Link href="/produtos/shorts">Comprar</Link></button>
          </div>
          <div id="id_produtos">
            <figure id="bordas_shorts_tenis">
              <Image src="/img/tnn.jpg" alt="tênis" width={300} height={350}/>
            </figure>
            <h2>Nike Tn</h2>
              <p>R$ 800,00</p>
              <button><Link href="/produtos/tenis">Comprar</Link></button>
          </div>
        </div>
    </div>
  )
}