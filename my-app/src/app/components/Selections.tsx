import kits from '@/app/assets/catKits.jpeg'
import pulseiras from '@/app/assets/catPulseiras.jpeg'
import correntes from '@/app/assets/catCorrentes.jpeg'
import brincos from '@/app/assets/catBrincos.jpeg'
import Image from 'next/image'
export function Selections() {
    return (
        <div>
            <div className='flex justify-center'>
                <span className='text-xl'>Categorias</span>
            </div>
            <div className="w-full flex justify-center mobile:hidden">
                <div className="w-[1300px] flex ">
                    <div className='flex flex-col items-center w-1/4'>
                        <Image src={kits} width={150} alt='Kits' />
                        <span>Kits</span>
                    </div>
                    <div className='flex flex-col items-center w-1/4'>
                        <Image src={pulseiras} width={150} alt='Pulseiras' />
                        <span>Pulseiras</span>
                    </div>
                    <div className='flex flex-col items-center w-1/4'>
                        <Image src={correntes} width={150} alt='Correntes' />
                        <span>Correntes</span>
                    </div>
                    <div className='flex flex-col items-center w-1/4'>
                        <Image src={brincos} width={150} alt='Brincos' />
                        <span>Brincos</span>
                    </div>
                </div>
            </div>
        </div>
    )
}