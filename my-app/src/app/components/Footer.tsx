export function Footer() {
    return (
        <footer className="w-full bg-[#1c1c1c] text-white  mt-12 py-4">
            <div className=" grid grid-cols-5 w-[70%] mx-auto mobile:grid-cols-6 mobile:w-[90%]">
                <div className=" flex flex-col mobile:col-span-2">
                    <div>
                        <span className="flex text-base mobile:text-xs">Siga-nos</span></div>
                    <div>
                        <span className="text-[10px] mobile:text-[8px]">insta</span>
                    </div>
                    <div>
                        <span className="text-[10px] mobile:text-[8px]">whats</span>
                    </div>
                    <div>
                        <span className="text-[10px] mobile:text-[8px]">TTK</span>
                    </div>
                </div>
                <div className=" flex flex-col ml-1 mobile:ml-0 mobile:col-span-2">
                    <div>
                        <span className="flex text-base mobile:text-xs">Institucional</span>
                    </div>
                    <div>
                        <span className="text-[10px] mobile:text-[8px]">Quem Somos?</span>
                    </div>
                    <div>
                        <span className="text-[10px] mobile:text-[8px]">Segurança e Privacidade</span>
                    </div>
                </div>
                <div className="flex flex-col ml-2 mobile:ml-0 mobile:col-span-2">
                    <div>
                        <span className="flex text-base mobile:text-xs">Dúvidas</span>
                    </div>
                    <div>
                        <span className="text-[10px] mobile:text-[8px]">Trocas e Devoluções</span>
                    </div>
                    <div>
                        <span className="text-[10px] mobile:text-[8px]">Perguntas Frequentes</span>
                    </div>
                    <div>
                        <span className="text-[10px] mobile:text-[8px]">Como limpar as Pratas</span>
                    </div>
                </div>
                <div className="flex flex-col ml-4 mobile:ml-0 mobile:col-span-3">
                    <div>
                        <span className="flex text-base mobile:text-xs  mobile:mt-3">Fale Conosco</span>
                    </div>
                    <div>
                        <span className="text-[10px] mobile:text-[8px]">(98)9 89202782</span>
                    </div>
                    <div>
                        <span className="text-[10px] mobile:text-[8px]">marcosdev04@gmail.com</span>
                    </div>
                </div>
                <div className="flex flex-col ml-5 mobile:ml-0 mobile:col-span-3">
                    <span className="flex text-base mobile:text-xs mobile:mt-3 mobile:col-span-3">Receba Novidades</span>
                </div>
            </div>
        </footer>
    )
}