import Image from "next/image";
import Link from "next/link";

export default function Calca() {
  return (
    
        
        <div>
            <p>Calça da Oackley de moletom</p>
            <p> <button><Link href="/">Voltar...</Link></button> </p>
            <figure>
              <Image src="/img/oack.webp" alt="Calça" width={307} height={320}/>
            </figure>
        </div>
    
  )
}
