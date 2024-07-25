<script lang="ts">
	import { dev } from '$app/environment'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'

	let email = $state('')
	let name = $state('')
	let password = $state('')
	let passwordConfirm = $state('')
	let message = $state($page.url.searchParams.get('message'))
	let isLoading = $state(false)

	let emailInvalid = $derived(email ? !/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email) : undefined)
	let passwordInvalid = $derived(password ? password.length < 8 : undefined)
	// let passwordConfirmInvalid = $derived(password && passwordConfirm && password !== passwordConfirm)
	let passwordConfirmInvalid = $derived(
		password && passwordConfirm ? password !== passwordConfirm : undefined,
	)
	let disabled = $derived(!email || !password || !passwordConfirm || password !== passwordConfirm)
	// $inspect({ emailInvalid, passwordInvalid, passwordConfirmInvalid, disabled });
</script>

<h3>Sign up for an account</h3>

<form method="POST">
	<fieldset>
		<label for="name">Name</label>
		<input
			aria-invalid={name ? name.length < 4 : undefined}
			autocomplete="name"
			bind:value={name}
			id="name"
			name="name"
			required
			type="text"
		/>

		<label for="email">Email</label>
		<input
			aria-invalid={emailInvalid}
			autocomplete="email"
			bind:value={email}
			id="email"
			name="email"
			required
			type="email"
		/>
		{#if emailInvalid}
			<small>Ooops, that doesn't appear to be a valid email address.</small>
		{/if}

		<label for="password">Password</label>
		<input
			aria-describedby="password"
			aria-invalid={passwordInvalid}
			autocomplete="new-password"
			bind:value={password}
			id="password"
			name="password"
			required
			type="password"
		/>
		{#if passwordInvalid}
			<small>Password must be at least 8 characters.</small>
		{/if}

		<label for="passwordConfirm"> Confirm Password</label>
		<input
			aria-describedby="passwordConfirm"
			aria-invalid={passwordConfirmInvalid}
			autocomplete="new-password"
			bind:value={passwordConfirm}
			id="passwordConfirm"
			name="passwordConfirm"
			required
			type="password"
		/>
		{#if passwordConfirmInvalid}
			<small>Passwords do not match.</small>
		{/if}

		<button aria-busy={isLoading} {disabled} type="submit">Sign in</button>

		<p>Already have an account? <a href="/sign/in">Sign in</a>.</p>
	</fieldset>
</form>

{#if message}
	<div class="error">
		{message}
	</div>
{/if}

<style>
	small {
		display: inline-block;
		width: 100%;
		color: yellowgreen;
		outline: 1px solid pink;
	}
</style>
