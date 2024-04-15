'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageTest from '@/app/assets/jpg_20220705_173601_00001-0ba7ce7cb41c91e14916570534004835-1024-1024.jpg'
import Image from 'next/image';
import Link from 'next/link';
import React from "react";

export function Highlights() {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "2px",
        slidesToShow: 5,
        speed: 500,
    };

    return (
        <div>
            <div className='w-[75%] m-auto mt-5 mb-6 mobile:w-[70%] flex gap-5'>
                <div className="border-b w-[91%]">
                    <div className="text-xs">Destaque</div>
                </div>
                <div className="flex w-[7%] text-xs border-b">Ver todos</div>
            </div>
            <>
                <div className='mobile:hidden slider-container w-[75%] m-auto'>
                    <Slider {...settings}>
                        <div className='border h-80 flex flex-col '>
                            <div className='flex h-3/5'>
                                <Image
                                    src={ImageTest}
                                    alt='imagem teste'
                                    className="w-full" />
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
                        <Link href={'/product'}>
                            <div className='border h-80 flex flex-col'>
                                <div className='flex h-2/3'>
                                    <Image
                                        src={ImageTest}
                                        alt='imagem teste'
                                        className="w-full" />
                                </div>
                                <div>Corrente de Prata 925</div>
                            </div>
                        </Link>
                        <div className='border h-80 flex flex-col'>
                            <div className='flex h-2/3'>
                                <Image
                                    src={ImageTest}
                                    alt='imagem teste'
                                    className="w-full" />
                            </div>
                            <div>Corrente de Prata 925</div>
                        </div>
                        <div className='border h-80 flex flex-col'>
                            <div className='flex h-2/3'>
                                <Image
                                    src={ImageTest}
                                    alt='imagem teste'
                                    className="w-full" />
                            </div>
                            <div>Corrente de Prata 925</div>
                        </div>
                        <div className='border h-80 flex flex-col'>
                            <div className='flex h-2/3'>
                                <Image
                                    src={ImageTest}
                                    alt='imagem teste'
                                    className="w-full" />
                            </div>
                            <div>Corrente de Prata 925</div>
                        </div>
                        <div className='border h-80 flex flex-col'>
                            <div className='flex h-2/3'>
                                <Image
                                    src={ImageTest}
                                    alt='imagem teste'
                                    className="w-full" />
                            </div>
                            <div>Corrente de Prata 925</div>
                        </div>
                        <div className='border h-80 flex flex-col'>
                            <div className='flex h-2/3'>
                                <Image
                                    src={ImageTest}
                                    alt='imagem teste'
                                    className="w-full" />
                            </div>
                            <div>Corrente de Prata 925</div>
                        </div>
                        <div className='border h-80 flex flex-col'>
                            <div className='flex h-2/3'>
                                <Image
                                    src={ImageTest}
                                    alt='imagem teste'
                                    className="w-full" />
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
        </div>
    );
};