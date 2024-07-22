<script lang="ts">
	import { dev } from '$app/environment';
	import { env } from '$env/dynamic/public';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import PocketBase, { RecordService } from 'pocketbase';
	import { pb } from '$lib/pocketbase.svelte';

	let username = $state('');
	let password = $state('');
	let message = $state($page.url.searchParams.get('message'));

	let disabled = $derived(!username || !password);

	async function handleForm() {
		try {
			if (username && password) {
				await pb.collection('users').authWithPassword(username, password);
				goto('/app');
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			dev && console.error('(dev) login/+page.svelte: ', err.message);
			message = err.message;
		}
	}
</script>

<h3>Sign in to your account</h3>

<!-- <form on:submit|preventDefault={handleForm}> -->
<form onsubmit={handleForm}>
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
		<!-- <button type="submit">Sign in</button> -->

		<p>Not a member? <a href="/sign/up">Sign up for an account</a>.</p>
	</fieldset>
</form>

{#if message}
	<div class="error">
		{message}
	</div>
{/if}

<style>
	h3 {
		margin-bottom: 1rem;
	}
</style>
