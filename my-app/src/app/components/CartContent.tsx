import { CartItem } from "./CartItem";
import { useCartStore } from "../../store/CartStore";
import { BsCartXFill } from "react-icons/bs";
import { FaX } from "react-icons/fa6";
export const CartContent = () => {
    const listItems = useCartStore((state) => state.cart);
    const isOpen = useCartStore((state) => state.isOpen);
    const totalPrice = listItems.reduce((acc, item) => {
        return item.price + acc
    }, 0)
    return (
        <section className={`${isOpen == true ? 'rounded-bl-xl w-full max-w-[330px] fixed top-20 right-0 max-h-[60vh] min-h-[200px] bg-[#1c1c1c] flex flex-col py-5 px-2 justify-between' : 'hidden'} `}>
            {listItems.length == 0 ?
                <div className="flex flex-col items-center gap-4 my-auto">
                    <BsCartXFill size={50} className="opacity-75 " />
                    <div className="flex flex-col items-center">
                        <p className="text-lg">Carrinho vazio</p>
                        <p className="text-[10px] text-center w-[80%]">Adicione itens ao seu carrinho para finalizar seu pedido</p>
                    </div>
                </div> :
                <div className="overflow-auto">
                    {listItems.map((cartItem) => {
                        return (
                            <CartItem key={cartItem.id} data={cartItem} />
                        )
                    })}
                </div>}
            <div className={`${listItems.length == 0 ? 'hidden' : 'text-lg py-2 px-4 '}`}>total: R${totalPrice.toFixed(2)}</div>
        </section>
    )
}