import Stripe from 'stripe'
import { env } from '$env/dynamic/private'

export interface Product {
	id: number
	name: string
	price: number
}

export interface CartItem extends Product {
	quantity: number
}

export const stripe = new Stripe(env.STRIPE_KEY)

// export const stripe = new Stripe(env.STRIPE_KEY, {
// 	apiVersion: '2023-08-16',
// })
