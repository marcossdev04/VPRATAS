'use client'
import Image from "next/image";
import logoImage from "@/app/assets/V (3).svg"
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { Cart } from "./Cart";
import { useState } from "react";
import { prod } from "@/lib/utils";



export function Header() {
    const [searchQuery, setSearchQuery] = useState('');


    const filterData = prod.filter(item => {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase())
    })
    const handleSearchChange = (event: any) => {
        setSearchQuery(event.target.value);
    };
    return (
        <div className=" flex bg-black w-full border-b justify-between px-10 ">
            <div className="flex justify-start items-center mobile:hidden w-1/3">
                <div className="relative flex items-center gap-2 ">
                    <FaSearch size={20} />
                    <input
                        className="text-black ease-in-out  duration-300 text-left focus:bg-gray-200 focus:w-[32ch] w-[15ch] rounded-lg focus:  h-8 text-sm p-2"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="O quê procura?"
                    />
                </div>
            </div>
            <div className="desktop:hidden tablet:hidden laptop:hidden">
                /
            </div>
            <div>
                <div className={`absolute top-16 left-16 z-10 overflow-auto h-[51%] ${searchQuery == '' ? 'hidden' : ''}`}>
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
            <div className="flex pt-2 justify-center mobile:w-1/3 w-1/3">
                <Link href={'/'}>
                    <Image src={logoImage} alt="logo pratas 925" width={70} />
                </Link>
            </div>
            <div className="items-center mobile:mr-3 flex justify-end w-1/3">
                <ul className="flex gap-7 items-center">
                    <div className="mobile:hidden">
                        <li><FaRegUser size={22} /></li>
                    </div>
                    <Cart />
                </ul>
            </div>
        </div >
    )
}