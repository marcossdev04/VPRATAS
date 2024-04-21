'use client'
import ImageTest01 from '@/app/assets/jpg_20220705_173601_00001-0ba7ce7cb41c91e14916570534004835-1024-1024.jpg'
import Imagetest02 from '@/app/assets/imagetest2.jpg'
import ImageTest03 from '@/app/assets/imagetest3.jpg'
import Image from "next/image"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react'
import { InputMask } from 'primereact/inputmask';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select"
import { Footer } from '../../components/Footer'
import { AccordionDemo } from '../../components/Accordion'
import { prod } from '@/lib/utils'



export default function Product({ params }: any) {
    const images = [ImageTest01, Imagetest02, ImageTest03]
    const [contable, setContable] = useState(1)
    const [currentSlide, setCurrentSlide] = useState(0)

    const product = prod.filter((produto) => produto.id === params.productId)[0]
    const percentValue = product?.price * product?.sale / 100
    const pastValue = product?.price! + percentValue
    const portion = product?.price! / 5


    const incrementarContable = () => {
        setContable(contable + 1);
    };

    const decrementarContable = () => {
        if (contable > 1) {
            setContable(contable - 1);
        }
    };

    const settings = {
        customPaging: function (i: number) {
            return (
                <div style={{
                    width: "80px",
                    height: "80px",
                    marginTop: "30px",
                    border: `1px ${i === currentSlide ? "white" : "gray"} solid`,
                    opacity: `${i === currentSlide ? '100%' : '40%'}`,
                    display: 'flex',
                    justifyContent: "center",
                    borderRadius: '10px'
                }}>
                    <Image src={product.images[i]} alt={`Image ${i + 1}`} className='rounded-xl' />
                </div>
            );
        },
        dots: true,
        dotsClass: `slick-dots  `,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
        slidesToScroll: 1,
        appendDots: (dots: number) => (
            <div
                style={{
                    paddingLeft: "80px",
                    paddingRight: "80px",
                    display: "flex",
                }}
            >
                <ul className='mr-[70px]' style={{ padding: "0px", display: "flex", width: '100%', height: "40px", justifyContent: "space-between" }}>
                    {dots}
                </ul>
            </div>
        ),

    };
    return (
        <div>
            <div className='w-full flex pt-16 px-32 h-[86vh] '>
                <div className='w-1/2'>
                    <div className=' w-5/7 ml-40'>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {product.images.map((image, index) => (
                                    <div key={index} className='m-auto'>
                                        <Image src={image} alt={`Image ${index + 1}`} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='flex flex-col ml-20 gap-3'>
                        <div className='flex flex-col'>
                            <span>{product?.name}</span>
                        </div>
                        <div>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Tamanho" />
                                </SelectTrigger>
                                <SelectContent className='bg-black'>
                                    <SelectItem value="60">60 cm</SelectItem>
                                    <SelectItem value="70">70 cm</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-2'>
                                <div>
                                    <span className='text-xl'>R${product?.price.toFixed(2)}</span>
                                </div>
                                <div className='flex flex-col-reverse'>
                                    <span className='text-sm text-zinc-400 line-through'>R${pastValue.toFixed(2)}</span>
                                </div>
                            </div>
                            <span className='text-xs'>5x de R${portion.toFixed(2)}</span>
                        </div>
                        <button className='border w-fit py-3 px-10 text-green-500'>
                            Comprar agora
                        </button>
                        <div>
                            <div>
                                <span className='text-sm'>Formas de Envio</span>
                            </div>
                            <div className='flex gap-2'>
                                <InputMask className='text-black w-[27%] rounded-md px-2' mask="99999-999" placeholder="CEP" />
                                <button className='border px-3 py-1 text-green-500'>OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-60 m-auto'>
                <div>Descrição</div>
                <AccordionDemo />
            </div>
            <Footer />
        </div>
    )
}