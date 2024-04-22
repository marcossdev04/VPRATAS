import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import Link from "next/link"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"

export function Footer() {
    return (
        <footer className="w-full bg-[#1c1c1c] text-white  mt-12 py-4">
            <div className=" grid grid-cols-5 w-[70%] mx-auto gap-2 mobile:grid-cols-2 mobile:w-[90%]">
                <div className=" flex flex-col mobile:col-span-1 gap-2">
                    <div>
                        <span className="flex text-lg mobile:text-xs">Siga-nos</span></div>
                    <div>
                        <Link target="_blank" href={'https://www.instagram.com/marcossvnc/'}>
                            <FaInstagram size={35} />
                        </Link>
                    </div>
                    <div>
                        <Link target="_blank" href={'https://wa.me/5598989202782'}>
                            <FaWhatsapp color="green" size={35} />
                        </Link>
                    </div>
                </div>
                <div className=" flex flex-col ml-1 mobile:ml-0 mobile:col-span-1 gap-3">
                    <div>
                        <span className="flex text-lg mobile:text-xs">Institucional</span>
                    </div>
                    <div>
                        <span className="text-[12px] mobile:text-[8px]">Quem Somos?</span>
                    </div>
                    <div>
                        <span className="text-[12px] mobile:text-[8px]">Segurança e Privacidade</span>
                    </div>
                </div>
                <div className="flex flex-col ml-2 mobile:ml-0 mobile:col-span-1">
                    <div>
                        <span className="flex text-lg mobile:text-xs">Dúvidas</span>
                    </div>
                    <div>
                        <span className="text-[12px] mobile:text-[8px]">Trocas e Devoluções</span>
                    </div>
                    <div>
                        <span className="text-[12px] mobile:text-[8px]">Perguntas Frequentes</span>
                    </div>
                    <div>
                        <span className="text-[12px] mobile:text-[8px]">Como limpar as Pratas</span>
                    </div>
                </div>
                <div className="flex flex-col ml-4 mobile:ml-0 mobile:col-span-1">
                    <div>
                        <span className="flex text-lg mobile:text-xs  mobile:mt-3">Fale Conosco</span>
                    </div>
                    <div>
                        <span className="text-[12px] mobile:text-[8px]">(98)9 89202782</span>
                    </div>
                    <div>
                        <span className="text-[12px] mobile:text-[8px]">marcosdev04@gmail.com</span>
                    </div>
                </div>
                <div className="flex flex-col ml-5 mobile:ml-0 mobile:col-span-2">
                    <span className="flex text-lg mobile:text-xs mobile:mt-3">Receba Novidades</span>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input className="text-black text-xs" type="email" placeholder="Email" />
                        <div className="w-[1%] mobile:w-[40%]">
                            <Button type="submit">OK</Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}