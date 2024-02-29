'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import ImageTest from '@/app/assets/jpg_20220705_173601_00001-0ba7ce7cb41c91e14916570534004835-1024-1024.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';

export function Products() {

    return (
        <div>
            <div className='w-[75%] m-auto mt-5 border-b-2'>
                <div>Destaque</div>
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={5}
                className='w-[75%] mt-5 mySwiper'
                navigation

            >
                <SwiperSlide>
                    <div className='border h-80 flex flex-col'>
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border h-80 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div>Corrente de Prata 925</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border h-80 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div>Corrente de Prata 925</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border h-80 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div>Corrente de Prata 925</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border h-80 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div>Corrente de Prata 925</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border h-80 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div>Corrente de Prata 925</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border h-80 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div>Corrente de Prata 925</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border h-80 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div>Corrente de Prata 925</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border h-80 flex flex-col'>
                        <div className='flex h-2/3'>
                            <Image
                                src={ImageTest}
                                alt='imagem teste'
                                width={300} />
                        </div>
                        <div>Corrente de Prata 925</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};