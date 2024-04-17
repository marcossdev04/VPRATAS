import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import veneziana from '@/app/assets/veneziana 2mm .jpeg'
import baiana from '@/app/assets/baiano.jpeg'
import grumet from '@/app/assets/grumet.jpeg'
import cartier from '@/app/assets/cartier.jpeg'
import tresPorUm from '@/app/assets/3por1.jpeg'
import piastrine from '@/app/assets/piastrine.jpg'
import pPiastrine from '@/app/assets/pulPiastrine.jpeg'
import pGrumet from '@/app/assets/pulGrumet.jpg'
import pCartiet from '@/app/assets/pulCartier.jpg'
import pBaiano from '@/app/assets/pulBaiano.jpg'
import pVeneziana from '@/app/assets/pulVeneziana.jpg'
import p3por1 from '@/app/assets/pulseira3x1.png'
import argolaNj from '@/app/assets/argolacCravejadaNj.jpeg'
import argola from '@/app/assets/argola.jpeg'
import argolaCruz from '@/app/assets/argolaCruz.jpeg'
import coroa from '@/app/assets/brincoCoroa.jpeg'
import cifrao from '@/app/assets/cifrao.jpeg'
import quadrado from '@/app/assets/quadrado.jpeg'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const prod = [
  {
    id: '1',
    name: "Corrente veneziaana (2mm) -60cm",
    price: 179.90,
    image: veneziana,
    sale: 10,
    category: "Correntes"
  },
  {
    id: '2',
    name: "corrente baiana (3mm) -60cm",
    price: 350.90,
    image: baiana,
    sale: 15,
    category: "Correntes"
  },
  {
    id: '3',
    name: "corrente grumet (4mm) -60cm",
    price: 299.90,
    image: grumet,
    sale: 5,
    category: "Correntes"
  },
  {
    id: '4',
    name: "corrente cartier (2mm) -60cm",
    price: 129.90,
    image: cartier,
    sale: 10,
    category: "Correntes"
  },
  {
    id: '5',
    name: "corrente 3 por 1 (3mm) -60cm",
    price: 199.90,
    image: tresPorUm,
    sale: 5,
    category: "Correntes"
  },
  {
    id: '6',
    name: "corrente piastrine (3mm) -60cm",
    price: 169.90,
    image: piastrine,
    sale: 15,
    category: "Correntes"
  },
  {
    id: '7',
    name: "pulseira piastrine (3mm) -20cm",
    price: 96.90,
    image: pPiastrine,
    sale: 15,
    category: "Pulseiras"
  },
  {
    id: '8',
    name: "pulseira cartier (2mm) -20cm",
    price: 76.90,
    image: pCartiet,
    sale: 10,
    category: "Pulseiras"
  },
  {
    id: '9',
    name: "pulseira grumet (4mm) -20cm",
    price: 146.90,
    image: pGrumet,
    sale: 5,
    category: "Pulseiras"
  },
  {
    id: '10',
    name: "pulseira baiano (3mm) -18cm",
    price: 169.90,
    image: pBaiano,
    sale: 10,
    category: "Pulseiras"
  },
  {
    id: '11',
    name: "pulseira veneziana (5mm) -20cm",
    price: 209.90,
    image: pVeneziana,
    sale: 10,
    category: "Pulseiras"
  },
  {
    id: '12',
    name: "pulseira 3por1 (5mm) -20cm",
    price: 159.90,
    image: p3por1,
    sale: 10,
    category: "Pulseiras"
  },
  {
    id: '13',
    name: "brinco cravejado NJ",
    price: 149.90,
    image: argolaNj,
    sale: 10,
    category: "Brincos"
  },
  {
    id: '14',
    name: "argola prata 925",
    price: 69.90,
    image: argola,
    sale: 10,
    category: "Brincos"
  },
  {
    id: '15',
    name: "brinco cifrao",
    price: 89.90,
    image: cifrao,
    sale: 10,
    category: "Brincos"
  },
  {
    id: '16',
    name: "argola cruz 925",
    price: 139.90,
    image: argolaCruz,
    sale: 10,
    category: "Brincos"
  },
  {
    id: '17',
    name: "Brinco quadrado",
    price: 99.90,
    image: quadrado,
    sale: 10,
    category: "Brincos"
  },
  {
    id: '18',
    name: "brinco coroa",
    price: 69.90,
    image: coroa,
    sale: 10,
    category: "Brincos"
  },


]
