import Image from "next/image";
import banner from '@/app/assets/banner.png'

export function Banner() {
    return (
        <section className="w-fit flex m-auto">
            <Image src={banner} alt="banner" height={700} />
        </section>
    )
}