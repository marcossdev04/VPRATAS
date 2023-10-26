import Image from "next/image";
import logoImage from "../V (1).svg"
import { UserCircle } from "@phosphor-icons/react/dist/ssr/UserCircle";
export function Header() {
    return (
        <div className=" grid grid-cols-3 bg-[#003e92]">
            <div className="flex pt-2 ml-14">
                <Image src={logoImage} alt="logo pratas 925" width={70} />
            </div>
            <div className="flex justify-center items-center">
                <ul className="flex gap-8">
                    <li>Correntes</li>
                    <li>Pulseiras</li>
                    <li>Pingentes</li>
                    <li>Conjuntos</li>
                    <li>Promoções</li>
                    <li>Contato</li>
                </ul>
            </div>
            <div className="items-center mr-14 flex justify-end">
                <ul className="flex gap-7 items-center">
                    <li>
                        <input className="flex" type="search" />
                    </li>
                    <li><UserCircle size={36} /></li>
                    <li>Carrineo</li>
                </ul>
            </div>
        </div>
    )
}