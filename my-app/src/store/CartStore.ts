import { StaticImageData } from 'next/image'
import { create } from 'zustand'

type Item = {
    id: string
    name: string,
    images: StaticImageData[],
    price: number
}
type CartStore = {
    availableItems: Item[]
    isOpen: boolean
    cart: Item[]
    addToCart: (item: Item) => void
    removeFromCart: (id: string) => void
    toggleCart: () => void
}
import { prod } from '@/lib/utils'
const CART_STORAGE_KEY = 'cart';

export const useCartStore = create<CartStore>((set) => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    const initialCart = storedCart ? JSON.parse(storedCart) : [];
    return {
        cart: initialCart,
        isOpen: false,
        availableItems: prod.map(product => ({
            id: product.id,
            name: product.name,
            images: product.images,
            price: product.price,
        })),
        toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
        addToCart: (item) => set((state) => {
            const newCart = [...state.cart, item];
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
            return { cart: newCart };
        }),
        removeFromCart: (id) => set((state) => {
            const newCart = state.cart.filter((item) => item.id !== id);
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
            return { cart: newCart };
        })
    }
})
