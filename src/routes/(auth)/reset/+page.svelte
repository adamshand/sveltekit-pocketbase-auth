<script lang="ts">
	import { enhance } from '$app/forms'
	import { page } from '$app/stores'
	import { isValidEmail } from '$lib'

	let isLoading = $state(false)
	let email = $state('')
	let disabled = $derived(!isValidEmail(email))
	$inspect('reset: $page.form', $page.form)
</script>

<h3>Forgot your password?</h3>

{#if $page.form?.success}
	<p class="success">
		Please check your email, a recovery message has been sent to <mark>{$page.form?.email}</mark>.
	</p>
{:else}
	<p>
		Enter the email associated with your account, and we'll send you a link you can use to reset
		your password.
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
{/if}

<small>Remembered? <a href="/sign/in">Sign in to your account</a>.</small>

<style>
	p.success {
		padding: 0.5rem;
		border-radius: 11px;
		background-color: var(--surface-3);
		text-align: center;
	}
	button {
		width: 100%;
	}
	small {
		display: inline-block;
		width: 100%;
		text-align: center;
	}
</style>
