'use client'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select"
import { prod } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
export default function earring() {
    const itensFiltred = prod.filter(item => item.category == 'Brincos')
    return (
        <div className="text-white">
            <div className="py-14 mobile:px-8 border-b">
                <div className="flex justify-center text-3xl">Brincos</div>
            </div>
            <div className="w-full flex mt-7">
                <div className="w-[75%] mobile:w-[55%]"></div>
                <div className="w-[10%]">
                    <Select>
                        <SelectTrigger className="w-[180px] bg-black">
                            <SelectValue placeholder="Ordenar por" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem className="bg-black text-white" value="menus">Menor preço</SelectItem>
                                <SelectItem className="bg-black text-white" value="plus">Maior preço</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className='grid grid-cols-4 px-72 mobile:grid-cols-1 mobile:px-12 laptop:px-20 gap-10 mt-8'>
                {
                    itensFiltred.map((product) => {
                        const priceFixed = product.price.toFixed(2)
                        const installment = product.price / 5
                        const fixedInstallment = installment.toFixed(2)
                        const salePercent = product.sale / 100
                        const priceSale = product.price * salePercent
                        const atualPrice = product.price + priceSale
                        const atualPriceFixed = atualPrice.toFixed(2)

                        return (
                            <Link key={product.id} href={`/product/${product.id}`}>
                                <div className='border h-96 flex flex-col '>
                                    <div className='flex h-3/5'>
                                        <Image
                                            src={product.images[0]}
                                            alt='imagem teste'
                                            className="w-full" />
                                    </div>
                                    <div className='flex flex-col px-2.5 py-3'>
                                        <div className='bg-white flex w-8 justify-center rounded-md mb-1  '>
                                            <span className='text-gray-900 text-[10px] py-1'>-{product.sale}%</span>
                                        </div>
                                        <div className='mb-1.5'>
                                            <div className='text-lg'>
                                                {product.name}
                                            </div>
                                        </div>
                                        <div>
                                            <div className='mb-1 flex gap-1'>
                                                <div className="text-lg text-green-400">R${priceFixed}</div>
                                                <div className="text-[10px] line-through items-end flex text-gray-300">R${atualPriceFixed}</div>
                                            </div>
                                            <div className='text-[10px]'>5x de {fixedInstallment} sem juros</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
            </div>
        </div>
    )
}