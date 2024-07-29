<script lang="ts">
	import { enhance } from '$app/forms'
	import { page } from '$app/stores'
	import { isValidEmail } from '$lib'

	let isLoading = $state(false)
	let email = $state('')
	let disabled = $derived(!isValidEmail(email))
	// $inspect('reset: $page.data.user', $page.data.user)
</script>

<h3>Forgot your password?</h3>
<p>
	Enter the email associated with your account, and we'll send you a link you can use to reset your
	password.
</p>

<form
	method="POST"
	use:enhance={async () => {
		isLoading = true
		await new Promise((resolve) => setTimeout(resolve, 1500)) // give loading spinner time
		isLoading = false
	}}
>
	<label for="username">Email</label>
	<input
		autocomplete="email"
		bind:value={email}
		id="email"
		name="email"
		placeholder="adam@example.nz"
		type="email"
		required
	/>
	<button aria-busy={isLoading} {disabled} type="submit">Send Recovery Email</button>
</form>

<small>Remembered? <a href="/sign/in">Sign in to your account</a>.</small>

<style>
	button {
		width: 100%;
	}
	small {
		display: inline-block;
		width: 100%;
		text-align: center;
	}
</style>
