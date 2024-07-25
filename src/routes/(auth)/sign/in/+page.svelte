<script lang="ts">
	import { enhance } from '$app/forms'
	import { page } from '$app/stores'

	let username = $state('')
	let password = $state('')
	let message = $state($page.url.searchParams.get('message'))
	let disabled = $derived(!username || !password)
</script>

<h3>Sign in to your account</h3>

<form method="POST" use:enhance>
	<fieldset>
		<label for="username">Email </label>
		<input
			autocomplete="email"
			bind:value={username}
			id="username"
			name="username"
			type="email"
			required
		/>

		<label for="password">Password</label>
		<input
			autocomplete="on"
			bind:value={password}
			id="password"
			name="password"
			type="password"
			required
		/>

		<button {disabled} type="submit">Sign in</button>

		<p>Not a member? <a href="/sign/up">Sign up for an account</a>.</p>
	</fieldset>
</form>

{#if message}
	<div class="error">
		{message}
	</div>
{/if}

<style>
</style>
