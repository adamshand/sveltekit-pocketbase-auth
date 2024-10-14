<script lang="ts">
	import { page } from '$app/stores'

	async function checkout() {
		const session = await fetch('/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ items }),
		}).then((data) => data.json())

		console.log('checkout: session:', session)
		window.location.replace(session.url)
	}

	const items = [
		{ id: 1, name: 'Dog Moon Boot', quantity: 1, price: 52 },
		{ id: 2, name: 'Dragon Ball Snooze', quantity: 2, price: 25 },
	]
	const orderId = crypto.randomUUID()
	const { form } = $props()
	const success = $derived($page.url.searchParams.get('success'))

	$effect(() => {
		if (form?.url) {
			window.location.replace(form.url)
		}
	})
</script>

{#if success === 'true'}
	<h1>Order Successful</h1>
	<p>id: {$page.url.searchParams.get('id')}</p>
	<p><a href="/app/stripe">Back to cart</a></p>
{:else if success === 'false'}
	<h1>Order Cancelled</h1>
	<p>id: {$page.url.searchParams.get('id')}</p>
	<p><a href="/app/stripe">Back to cart</a></p>
{:else}
	<hgroup>
		<h1>Demo Checkout</h1>
		<p>
			Uses Stripe's' dynamic pricing to allow a customer to purchase adhoc items. The below products
			get converted to <a
				href="https://docs.stripe.com/api/checkout/sessions/create#create_checkout_session-line_items"
				>line_items</a
			>
			and the session returns a
			<a href="https://docs.stripe.com/api/checkout/sessions/object">session object</a>
			including a URL to redirect to for payment.
		</p>
	</hgroup>

	<form method="POST">
		<!-- <form target="_blank" method="POST"> -->
		<label>
			Products
			<textarea value={JSON.stringify(items, null, 2)} name="items" required></textarea>
		</label>

		<label>
			Order ID
			<input value={orderId} name="orderId" required />
		</label>

		<label
			>Email
			<input type="email" name="email" value="jane@example.com" required />
		</label>
		<input required type="hidden" name="cart" value={JSON.stringify(items)} />

		<button type="submit">Checkout</button>
	</form>

	<!-- <button onclick={checkout}>Checkout</button> -->
{/if}

<style>
	form {
		margin-block: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		label {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
			font-weight: 600;
		}

		textarea {
			height: 20rem;
		}
	}

	/* items: [
  {
    "price_data": {
      "currency": "NZD",
      "product_data": {
        "name": "Dog Moon Boot",
        "images": []
      },
      "unit_amount": 5200
    },
    "quantity": 1
  },
  {
    "price_data": {
      "currency": "NZD",
      "product_data": {
        "name": "Dragon Ball Snooze",
        "images": []
      },
      "unit_amount": 2500
    },
    "quantity": 2
  }
]	 */
</style>
