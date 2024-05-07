import kits from '@/app/assets/catKits.jpeg'
import pulseiras from '@/app/assets/catPulseiras.jpeg'
import correntes from '@/app/assets/catCorrentes.jpeg'
import brincos from '@/app/assets/catBrincos.jpeg'
import Image from 'next/image'
import Link from 'next/link'
export function Selections() {
    return (
        <div className='mobile:hidden'>
            <div className=' mt-5 mobile:mt-0 flex justify-center'>
                <span className='text-4xl'>Categorias</span>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-[1400px] flex ">
                    <div className='flex flex-col items-center w-1/4'>
                        <Image src={kits} width={200} alt='Kits' />
                        <p className='text-3xl text-center'>Pingentes</p>
                    </div>
                    <div className='flex flex-col items-center w-1/4'>
                        <Link href={'/pulseiras'}>
                            <Image src={pulseiras} width={200} alt='Pulseiras' />
                            <p className='text-3xl text-center'>Pulseiras</p>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center w-1/4'>
                        <Link href={'/correntes'}>
                            <Image src={correntes} width={200} alt='Correntes' />
                            <p className='text-3xl text-center'>Correntes</p>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center w-1/4'>
                        <Link href={'/brincos'}>
                            <Image src={brincos} width={200} alt='Brincos' />
                            <p className='text-3xl text-center'>Brincos</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}