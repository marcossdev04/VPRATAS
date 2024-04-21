import { BiSolidPackage } from "react-icons/bi";
import { FaPix } from "react-icons/fa6";
import { GiEarthAmerica, GiJewelCrown } from "react-icons/gi";
import { IoGiftSharp } from "react-icons/io5";

export function Infos() {
    return (
        <div className="w-full py-5 border-b justify-center flex border-gray-600 mobile:px-0">
            <div className="w-[1300px] flex ">
                <div className="flex flex-col gap-2 w-1/4">
                    <div className="flex justify-center">
                        <BiSolidPackage className="text-[30px] mobile:text-[20px]" />
                    </div>
                    <div className="flex justify-center flex-col">
                        <span className="mobile:text-[12px] text-xl text-center">Frete Grátis</span>
                        <span className="text-center text-[9px] mobile:text-[8px]">Em compras acima de R$200</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-1/4">
                    <div className="flex justify-center">
                        <GiJewelCrown className="text-[30px] mobile:text-[20px]" />
                    </div>
                    <div className="flex justify-center flex-col">
                        <span className="mobile:text-[12px] text-xl text-center">Garantia Eterna</span>
                        <span className="text-center text-[9px] mobile:text-[8px]">Prata 925 legítima</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-1/4">
                    <div className="flex justify-center">
                        <FaPix className="text-[30px] mobile:text-[20px]" />
                    </div>
                    <div className="flex justify-center flex-col">
                        <span className="mobile:text-[12px] text-xl text-center">10% Off no Pix</span>
                        <span className="text-center text-[9px] mobile:text-[8px]">Desconto para pagementos à vista</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-1/4">
                    <div className="flex justify-center">
                        <IoGiftSharp className="text-[30px] mobile:text-[20px]" />
                    </div>
                    <div className="flex justify-center flex-col">
                        <span className="mobile:text-[12px] text-xl text-center">Brinde exclusivo</span>
                        <span className="text-center text-[9px] mobile:text-[8px]">Limpa pratas monzi para compras a partir de 150</span>
                    </div>
                </div>
            </div>
        </div>
    )
}