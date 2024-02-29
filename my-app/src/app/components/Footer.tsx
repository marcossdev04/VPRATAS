export function Footer() {
    return (
        <footer className="w-full bg-[#1c1c1c] text-white py-7">
            <div className=" grid grid-cols-5 w-[70%] mx-auto">
                <div className=" flex flex-col">
                    <div>
                        <span className="flex text-base">Siga-nos</span></div>
                    <div>
                        <span className="text-[10px]">insta</span>
                    </div>
                    <div>
                        <span className="text-[10px]">whats</span>
                    </div>
                    <div>
                        <span className="text-[10px]">TTK</span>
                    </div>
                </div>
                <div className=" flex flex-col ml-1  ">
                    <div>
                        <span className="flex text-base ">Institucional</span>
                    </div>
                    <div>
                        <span className="text-[10px]">Quem Somos?</span>
                    </div>
                    <div>
                        <span className="text-[10px]">Segurança e Privacidade</span>
                    </div>
                </div>
                <div className="flex flex-col ml-2">
                    <div>
                        <span className="flex text-base ">Dúvidas</span>
                    </div>
                    <div>
                        <span className="text-[10px]">Trocas e Devoluções</span>
                    </div>
                    <div>
                        <span className="text-[10px]">Perguntas Frequentes</span>
                    </div>
                    <div>
                        <span className="text-xs">Como Cuidar e limpar Pratas</span>
                    </div>
                </div>
                <div className="flex flex-col ml-4 ">
                    <div>
                        <span className="flex text-base ">Fale Conosco</span>
                    </div>
                    <div>
                        <span className="text-[10px]">(98)9 89202782</span>
                    </div>
                    <div>
                        <span className="text-[10px]">marcosdev04@gmail.com</span>
                    </div>
                </div>
                <div className="flex flex-col ml-5">
                    <span className="flex text-base ">Receba Novidades</span>
                </div>
            </div>
        </footer>
    )
}