import { useCartStore } from "../../store/CartStore";
import { BsCartXFill } from "react-icons/bs";
import Image from "next/image";
import { toast } from "react-toastify";
import { FaX } from "react-icons/fa6";
export const CartContent = () => {
    const listItems = useCartStore((state) => state.cart);
    const isOpen = useCartStore((state) => state.isOpen);
    const totalPrice = listItems.reduce((acc, item) => {
        return item.price + acc
    }, 0)
    const removeItem = useCartStore((state) => state.removeFromCart);
    return (
        <section className={`${isOpen == true ? 'rounded-bl-xl w-full max-w-[330px] fixed top-20 right-0 max-h-[60vh] min-h-[200px] mobile:max-w-full bg-[#1c1c1c] flex flex-col py-5 px-2 justify-between' : 'hidden'} `}>
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
                        const { name, images, price, id } = cartItem
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
                        return (
                            <section key={id} className="flex items-center border-b border-white mb-5 pb-5 relative">
                                <Image src={images[0]} alt="imagem do produto" className="w-[110px]" />
                                <div className="pl-[9px] pr-[10px]">
                                    <h3 className="text-[0.85rem] font-medium mb-2 w-[95%]">{name}</h3>
                                    <h3 className="text-2xl font-medium">R${price.toFixed(2)}</h3>
                                    <button type="button" onClick={() => handleDeletetem(id)} className="absolute top-0 right-3 border-none bg-none cursor-pointer"><FaX className="text-red-600" /></button>
                                </div>
                            </section>
                        )
                    })}
                </div>}
            <div className={`${listItems.length == 0 ? 'hidden' : 'text-lg py-2 px-4 '}`}>total: R${totalPrice.toFixed(2)}</div>
            <button className="w-[80%] flex m-auto justify-center py-2 rounded-xl mt-3 bg-green-500">Comprar Agora!</button>
        </section>
    )
}