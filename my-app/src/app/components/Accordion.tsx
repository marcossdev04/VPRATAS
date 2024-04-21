import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion"

export function AccordionDemo() {
    return (
        <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm">Garantia</AccordionTrigger>
                <AccordionContent className="text-[10px]">
                    Todas as jóias da Vpratas são confeccionadas em
                    prata 925. As peças possuem garantia vitalícia / eterna, assegurando
                    a autenticidade do metal, acompanhando o certificado de garantia junto do
                    seu pedido. Cada produto também possuí uma garantia de 90 dias para defeitos.
                    A garantia não cobre jóias danificadas durante o manuseio por mau uso.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm">Cuidados</AccordionTrigger>
                <AccordionContent className="text-[10px] flex flex-col gap-2">
                    <div>
                        A prata é um metal nobre maciço com garantia vitalícia,
                        mas com o uso vai escurecer /oxidar devido ao contato com o
                        suor. A oxidação é uma fina camada escura que se forma na
                        superfície da prata, bastando fazer uma limpeza adequada
                        para o brilho voltar ao original.
                    </div>
                    <div>
                        Para fazer a limpeza, existem produtos
                        próprios como o limpa pratas Monzi, que vai junto do seu pedido para
                        compras a partir de R$150, ou na compra do mesmo que disponibilizamos em nosso site.
                        Mas existem outros métodos caseiros para a limpeza da
                        prata, bastando pesquisar no YouTube ou no Google os métodos de limpeza caseiros.
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-sm">Sobre o envio</AccordionTrigger>
                <AccordionContent className="text-[10px] flex flex-col gap-2">
                    <div>Enviamos para todo Brasil pelos correios com opção de FRETE GRÁTIS via Mini Envios
                        (PAC MINI) para compras a partir de R$200.</div>
                    <div>Após o pagamento ser confirmado, o seu pedido é enviado em até 24 horas úteis.
                        Todos os envios possuem seguro, garantindo o recebimento do seu pedido.</div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
