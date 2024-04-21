import { useLocalStorage } from "@/hooks/useLocalStorage";
import { IoMdCart } from "react-icons/io";

export function Cart() {
    const { value } = useLocalStorage('cart-items', [])
    return (
        < div className="flex gap-2 items-center" >
            <div className="flex">
                <li><IoMdCart size={27} /></li>
                {value.length &&
                    <div className={`absolute top-3 right-[112px] bg-green-600 rounded-xl m-auto ${value.length < 9 ? 'px-1' : 'px-0'}`}>
                        <span className="text-sm m-auto">{value}</span>
                    </div>}
            </div>
            <span className="font-medium">R$00.00</span>
        </div >
    )
}