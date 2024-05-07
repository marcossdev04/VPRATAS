
import { StaticImageData } from 'next/image'
import { create } from 'zustand'

type Item = {
    id: string
    name: string,
    images: StaticImageData[],
    price: number,
    contable: number
}
type CartStore = {
    isOpen: boolean
    cart: Item[]
    addToCart: (item: Item) => void
    removeFromCart: (id: string) => void
    toggleCart: () => void
}
import { prod } from '@/lib/utils'

export const useCartStore = create<CartStore>((set) => {
    return {
        cart: [],
        isOpen: false,
        availableItems: prod.map(product => ({
            id: product.id,
            name: product.name,
            images: product.images,
            price: product.price,
        })),
        toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
        addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
        removeFromCart: (id) =>
            set((state) => ({ cart: state.cart.filter((item) => item.id !== id) }))
    }
})
