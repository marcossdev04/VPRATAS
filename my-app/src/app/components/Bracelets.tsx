'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageTest from '@/app/assets/jpg_20220705_173601_00001-0ba7ce7cb41c91e14916570534004835-1024-1024.jpg'
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { prod } from "@/lib/utils";
export function Bracelets() {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "2px",
        slidesToShow: 5,
        speed: 500,
    };
    return (
        <div>
            <div className='w-[75%] m-auto my-5 mobile:w-[100%] flex gap-5'>
                <div className="border-b w-[91%]">
                    <div className="text-base mobile:ml-2">Pulseiras</div>
                    { }
                </div>
                <div className="flex w-[9%] mobile:w-[35%] text-sm border-b">
                    <span className="mr-0">
                        Ver todos
                    </span>
                </div>
            </div>
            <>
                <div className='mobile:hidden slider-container w-[75%] m-auto'>
                    <Slider {...settings}>
                        {prod
                            .filter((prod) => prod.category == "Pulseiras")
                            .map((products) => {
                                const priceFixed = products.price.toFixed(2)
                                const installment = products.price / 5
                                const fixedInstallment = installment.toFixed(2)
                                const salePercent = products.sale / 100
                                const priceSale = products.price * salePercent
                                const atualPrice = products.price + priceSale
                                const atualPriceFixed = atualPrice.toFixed(2)
                                return (
                                    <Link key={products.id} href={`/product/${products.id}`}>
                                        <div className='border h-80 flex flex-col '>
                                            <div className='flex h-3/5'>
                                                <Image
                                                    src={products.images[0]}
                                                    alt='imagem teste'
                                                    className="w-full" />
                                            </div>
                                            <div className='flex flex-col px-2.5 py-3'>
                                                <div className='bg-white flex w-8 justify-center rounded-md mb-1  '>
                                                    <span className='text-gray-900 text-[10px] py-1'>-{products.sale}%</span>
                                                </div>
                                                <div className='mb-1.5'>
                                                    <div className='text-xs'>
                                                        {products.name}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='mb-1 flex gap-1'>
                                                        <div className="text-xs text-green-400">R${priceFixed}</div>
                                                        <div className="text-[10px] line-through items-end flex text-gray-300">R${atualPriceFixed}</div>
                                                    </div>
                                                    <div className='text-[10px]'>5x de {fixedInstallment} sem juros</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                    </Slider>
                </div>
            </>
            <div className='desktop:hidden laptop:hidden tablet:hidden slider-container'>
                <Slider>
                    <div className='border h-96 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div className='flex flex-col px-2.5 py-3'>
                            <div className='bg-white flex w-8 justify-center rounded-md mb-1  '>
                                <span className='text-gray-900 text-[10px] py-1'>-10%</span>
                            </div>
                            <div className='mb-1.5'>
                                <div className='text-xs'>
                                    Corrente de Prata 925 (2mm) -60cm
                                </div>
                            </div>
                            <div>
                                <div className='text-xs mb-1'>R$200,00</div>
                                <div className='text-[10px]'>5x de 10,00 sem juros</div>
                            </div>
                        </div>
                    </div>

                    <Link href={'/product/1'}>
                        <div className='border h-80 flex flex-col'>
                            <div className='flex h-2/3'>
                                <Image
                                    src={ImageTest}
                                    alt='imagem teste'
                                    width={300} />
                            </div>
                            <div>Corrente de Prata 925</div>
                        </div>
                    </Link>

                    <div className='border h-80 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div>Corrente de Prata 925</div>
                    </div>

                    <div className='border h-80 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div>Corrente de Prata 925</div>
                    </div>

                    <div className='border h-80 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div>Corrente de Prata 925</div>
                    </div>

                    <div className='border h-80 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div>Corrente de Prata 925</div>
                    </div>

                    <div className='border h-80 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div>Corrente de Prata 925</div>
                    </div>

                    <div className='border h-80 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div>Corrente de Prata 925</div>
                    </div>

                    <div className='border h-80 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div>Corrente de Prata 925</div>
                    </div>

                </Slider>
            </div>
        </div >
    )
}