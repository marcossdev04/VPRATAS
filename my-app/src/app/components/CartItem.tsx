import { useCartStore } from "@/store/CartStore";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { toast } from "react-toastify";

interface Props {
    data: {
        id: string,
        name: string,
        images: StaticImageData[],
        price: number
    },
}
export function CartItem({ data }: Props) {
    const { name, images, price, id } = data
    const [contable, setContable] = useState(1);
    const itemPrice = price * contable

    const removeItem = useCartStore((state) => state.removeFromCart);
    const notifyDelete = () => toast.success('Produto deletado com sucesso!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });
    const handleDeletetem = (id: string) => {
        removeItem(id);
        notifyDelete();
    };

    const incrementContable = () => {
        setContable((prevContable) => prevContable + 1);
    };

    const decrementContable = () => {
        if (contable > 1) {
            setContable((prevContable) => prevContable - 1);
        }
    };

    return (
        <section className="flex items-center border-b border-white mb-5 pb-5 relative">
            <Image src={images[0]} alt="imagem do produto" className="w-[110px]" />
            <div className="pl-[9px] pr-[10px]">
                <h3 className="text-[0.85rem] font-medium mb-2 w-[95%]">{name}</h3>
                <div className='flex px-3 py-1 border w-24 justify-between'>
                    <button onClick={decrementContable}>-</button>
                    <div className='text-green-500'>{contable}</div>
                    <button onClick={incrementContable}>+</button>
                </div>
                <h3 className="text-2xl font-medium">R${itemPrice.toFixed(2)}</h3>
                <button type="button" onClick={() => handleDeletetem(id)} className="absolute top-0 right-3 border-none bg-none cursor-pointer"><FaX className="text-red-600" /></button>
            </div>
        </section>
    )
}