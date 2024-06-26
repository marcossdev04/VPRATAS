'use client'
import Image from "next/image";
import logoImage from "@/app/assets/V (3).svg"
import { FaSearch } from "react-icons/fa";
import closeIcon from '@/app/assets/closeIcon.png'
import menuIcon from '@/app/assets/menuIcon.png'
import Link from "next/link";
import { Cart } from "./Cart";
import { useState } from "react";
import { prod } from "@/lib/utils";
import { CartContent } from "./CartContent";
import { useCartStore } from "@/store/CartStore";



export function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [menuOpen, setMenuOpen] = useState(false)

    const filterData = prod.filter(item => {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase())
    })
    const handleSearchChange = (event: any) => {
        setSearchQuery(event.target.value);
    };
    const toggleCart = useCartStore((state) => state.toggleCart);
    const listItems = useCartStore((state) => state.cart);
    const totalPrice = listItems.reduce((acc, item) => {
        return item.price + acc
    }, 0)
    return (
        <div className=" flex bg-black text-white w-full border-b justify-between px-10 mobile:px-0 fixed z-10">
            <CartContent />
            <div className="flex justify-start items-center mobile:hidden w-1/3">
                <div className="relative flex items-center gap-2 ">
                    <Link href={`/search/${searchQuery}`}>
                        <FaSearch size={20} onClick={() => setSearchQuery('')} />
                    </Link>
                    <input
                        className="text-black ease-in-out  duration-300 text-left focus:bg-gray-200 focus:w-[32ch] w-[15ch] rounded-lg focus:  h-8 text-sm p-2"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="O quê procura?"
                    />
                </div>
            </div>
            <div className="desktop:hidden tablet:hidden laptop:hidden w-1/3">
                <div className="absolute top-[25px] left-0 ml-[5%] flex-col gap-[11px] z-30 desktop:hidden laptop:hidden tablet:hidden">
                    <div className="cursor-pointer justify-start flex">
                        <Image src={menuOpen ? closeIcon : menuIcon} alt="Menu-button" width={27} onClick={() => setMenuOpen(!menuOpen)} />
                    </div>
                    <div className={`${menuOpen ? '' : 'hidden'} flex flex-col items-start gap-10 rounded-[10px] bg-gradient-to-b bg-[#151311] from-[#151311] to-black p-6 shadow-md`}>
                        <Link href={'/destaques'} className="text-xl">Destaques</Link>
                        <Link href={'/correntes'} className="text-xl">Correntes</Link>
                        <Link href={'/pulseiras'} className="text-xl">Pulseiras</Link>
                        <Link href={'/brincos'} className="text-xl">Brincos</Link>
                    </div>
                </div>
            </div>
            <div className="mobile:hidden">
                <div className={`fixed top-16 left-16 z-10 overflow-auto h-[51%] ${searchQuery == '' ? 'hidden' : ''}`}>
                    {filterData.map((data) => {
                        return (
                            <Link key={data.id} onClick={() => setSearchQuery('')} href={`/product/${data.id}`}>
                                <div className="p-2 border flex flex-col bg-black ">
                                    <div className="flex w-80 gap-1">
                                        <Image src={data.images[0]} alt="pratas925" width={100} />
                                        <div className="flex flex-col gap-1 justify-center m-auto">
                                            <div className="text-center text-[#bbbbbc]">{data.category}</div>
                                            <div className="text-center">{data.name}</div>
                                            <div className="text-center text-green-400">R${data.price.toFixed(2)}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="flex pt-2 justify-center w-1/3">
                <Link href={'/'}>
                    <Image src={logoImage} alt="logo pratas 925" width={70} />
                </Link>
            </div>
            <div className="items-center mobile:mr-3 flex justify-end w-1/3">
                <ul className="flex gap-7 mobile: mr-1 items-center">
                    <button onClick={() => toggleCart()}>
                        <Cart totalPrice={totalPrice} />
                    </button>
                </ul>
            </div>
        </div >
    )
}