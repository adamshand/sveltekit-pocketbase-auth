<script lang="ts">
	import { dev } from '$app/environment'
	import { page } from '$app/stores'

	let isLoading = $state(false)

	let email = $state('')
	let name = $state('')
	let password = $state('')
	let passwordConfirm = $state('')
	let message = $state($page.url.searchParams.get('message'))

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

<form method="POST" action="?/register">
	<fieldset class="grid grid-auto-rows gap-3">
        <div class="join flex flex-row">
            <label for="name" class="btn btn-primary w-20 join-item rounded-r-full">Name</label>
            <input
                aria-invalid={name ? name.length < 4 : undefined}
                autocomplete="name"
                bind:value={name}
                id="name"
                type="text"
                required
                name="name"
                class="input input-bordered join-item grow"
            />
        </div>

        <div class="join flex flex-row">
            <label for="email" class="btn btn-primary w-20 join-item rounded-r-full">Email</label>
            <input
                aria-invalid={emailInvalid}
                autocomplete="email"
                bind:value={email}
                id="email"
                name="email"
                required
                type="email"
                class="input input-bordered join-item grow"
            />
        </div>
		{#if emailInvalid}
			<small>Ooops, that doesn't appear to be a valid email address.</small>
		{/if}

        <div class="join flex flex-row">
            <label for="password" class="btn btn-primary w-20 join-item rounded-r-full">Password</label>
            <input
                aria-describedby="password"
                aria-invalid={passwordInvalid}
                autocomplete="new-password"
                bind:value={password}
                id="password"
                name="password"
                required
                type="password"
                class="input input-bordered join-item grow"
            />
            {#if passwordInvalid}
                <small>Password must be at least 8 characters.</small>
            {/if}
        </div>

        <div class="join flex flex-row">
            <label for="passwordConfirm" class="btn btn-primary w-20 join-item rounded-r-full"> Confirm Password</label>
            <input
                aria-describedby="passwordConfirm"
                aria-invalid={passwordConfirmInvalid}
                autocomplete="new-password"
                bind:value={passwordConfirm}
                id="passwordConfirm"
                name="passwordConfirm"
                required
                type="password"
                class="input input-bordered join-item grow"
            />
            {#if passwordConfirmInvalid}
                <small>Passwords do not match.</small>
            {/if}
        </div>

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
</style>
