import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useCartStore } from "@/store/CartStore";
import { IoMdCart } from "react-icons/io";

interface Props {
    totalPrice: number
}
export function Cart({ totalPrice }: Props) {
    const listItems = useCartStore((state) => state.cart);
    return (
        < div className="flex gap-2 items-center" >
            <div className="flex">
                <li><IoMdCart size={27} /></li>
                {listItems.length &&
                    <div className={`absolute top-3 right-[123px] laptop:right-[115px] mobile:right-4 bg-green-600 rounded-xl m-auto ${listItems.length < 9 ? 'px-[5px]' : 'px-0'}`}>
                        <span className={` ${listItems.length < 9 ? 'text base' : 'text-sm'} text-base m-auto`}>{listItems.length}</span>
                    </div>}
            </div>
            <span className="font-medium mobile:hidden w-20">R${totalPrice.toFixed(2)}</span>
        </div >
    )
}