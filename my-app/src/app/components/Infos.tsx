import { BiSolidPackage } from "react-icons/bi";
import { FaPix } from "react-icons/fa6";
import { GiEarthAmerica, GiJewelCrown } from "react-icons/gi";

export function Infos() {
    return (
        <div className="w-full flex justify-between px-52 py-10 border-b  border-gray-600">
            <div className="flex flex-col gap-2 ">
                <div className="flex justify-center">
                    <BiSolidPackage size={30} />
                </div>
                <div>
                    <span>Frete Grátis</span>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-center">
                    <GiJewelCrown size={30} />
                </div>
                <div>
                    <span>Garantia Eterna</span>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-center">
                    <FaPix size={25} />
                </div>
                <div>
                    <span>10% Off no Pix</span>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-center">
                    <GiEarthAmerica size={27} />
                </div>
                <div>
                    <span>Envio para todo o Brasil</span>
                </div>
            </div>
        </div>
    )
}