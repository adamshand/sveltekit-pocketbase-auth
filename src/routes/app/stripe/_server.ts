import type { RequestHandler } from '@sveltejs/kit'
import type { CartItem } from '.'
import { env } from '$env/dynamic/private'
import { stripe } from '.'

export const GET: RequestHandler = async ({ request }) => {
	return new Response(
		JSON.stringify([
			{
				description: 'accepts an array of items and redirects to Stripe for payment ',
				price_data: {
					currency: 'NZD',
					product_data: {
						name: 'item.name',
						images: [],
					},
					unit_amount: 4200,
				},
				quantity: 3,
			},
		]),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		},
	)
}

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json()
	let cartItems: CartItem[] = data.items

	// Create session for redirecting users
	const lineItems = cartItems.map((item) => {
		return {
			price_data: {
				currency: 'NZD',
				product_data: {
					name: item.name,
					images: [],
				},
				unit_amount: item.price * 100,
			},
			quantity: item.quantity,
		}
	})

	console.log('items:', JSON.stringify(lineItems, null, 2))

	const session = await stripe.checkout.sessions.create({
		line_items: lineItems,
		shipping_address_collection: {
			allowed_countries: ['NZ', 'AU', 'US'],
		},
		mode: 'payment',
		success_url: `${env.STRIPE_BASE}/success`,
		cancel_url: `${env.STRIPE_BASE}/cancel`,
		phone_number_collection: {
			enabled: true,
		},
	})

	return new Response(
		JSON.stringify({
			url: session.url,
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		},
	)
}

// session {
//   id: 'cs_test_b1M3QeAetPbi1O9xdHmg8pmKqpH65hzoNXtlQuKhxyZg4HXc2xPowiooJQ',
//   object: 'checkout.session',
//   after_expiration: null,
//   allow_promotion_codes: null,
//   amount_subtotal: 10200,
//   amount_total: 10200,
//   automatic_tax: { enabled: false, liability: null, status: null },
//   billing_address_collection: null,
//   cancel_url: 'http://localhost:5174/checkout/cancel',
//   client_reference_id: null,
//   client_secret: null,
//   consent: null,
//   consent_collection: null,
//   created: 1728458049,
//   currency: 'nzd',
//   currency_conversion: null,
//   custom_fields: [],
//   custom_text: {
//     after_submit: null,
//     shipping_address: null,
//     submit: null,
//     terms_of_service_acceptance: null
//   },
//   customer: null,
//   customer_creation: 'if_required',
//   customer_details: null,
//   customer_email: null,
//   expires_at: 1728544449,
//   invoice: null,
//   invoice_creation: {
//     enabled: false,
//     invoice_data: {
//       account_tax_ids: null,
//       custom_fields: null,
//       description: null,
//       footer: null,
//       issuer: null,
//       metadata: {},
//       rendering_options: null
//     }
//   },
//   livemode: false,
//   locale: null,
//   metadata: {},
//   mode: 'payment',
//   payment_intent: null,
//   payment_link: null,
//   payment_method_collection: 'if_required',
//   payment_method_configuration_details: { id: 'pmc_1Q7noDRYJVzSBgU14BLoQ2rn', parent: null },
//   payment_method_options: { card: { request_three_d_secure: 'automatic' } },
//   payment_method_types: [ 'card', 'klarna', 'link' ],
//   payment_status: 'unpaid',
//   phone_number_collection: { enabled: true },
//   recovered_from: null,
//   saved_payment_method_options: null,
//   setup_intent: null,
//   shipping_address_collection: { allowed_countries: [ 'NO' ] },
//   shipping_cost: null,
//   shipping_details: null,
//   shipping_options: [],
//   status: 'open',
//   submit_type: null,
//   subscription: null,
//   success_url: 'http://localhost:5174/checkout/success',
//   total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },
//   ui_mode: 'hosted',
//   url: 'https://checkout.stripe.com/c/pay/cs_test_b1M3QeAetPbi1O9xdHmg8pmKqpH65hzoNXtlQuKhxyZg4HXc2xPowiooJQ#fidkdWxOYHwnPyd1blpxYHZxWjA0VDJrSVdXXE9Tf1ZHYlA0bzRVSlJuQVxSNmpHMmg8Um9ib2RLUmtoVWZ0MDN9Yk9pS1VDX18yNXdBYTVkM0xrdTRDcUhuf11pR20yT1cyf0E9UkcwRn1NNTVpXFxCfHBtaCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPydocGlxbFpscWBoJyknYGtkZ2lgVWlkZmBtamlhYHd2Jz9xd3BgeCUl'
// }
