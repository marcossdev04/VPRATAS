import kits from '@/app/assets/catKits.jpeg'
import pulseiras from '@/app/assets/catPulseiras.jpeg'
import correntes from '@/app/assets/catCorrentes.jpeg'
import brincos from '@/app/assets/catBrincos.jpeg'
import Image from 'next/image'
import Link from 'next/link'
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
                        <span className='text-xl'>Pingentes</span>
                    </div>
                    <div className='flex flex-col items-center w-1/4'>
                        <Link href={'/pulseiras'}>
                            <Image src={pulseiras} width={150} alt='Pulseiras' />
                            <span className='text-xl'>Pulseiras</span>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center w-1/4'>
                        <Link href={'/correntes'}>
                            <Image src={correntes} width={150} alt='Correntes' />
                            <span className='text-xl'>Correntes</span>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center w-1/4'>
                        <Link href={'/brincos'}>
                            <Image src={brincos} width={150} alt='Brincos' />
                            <span className='text-xl'>Brincos</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}