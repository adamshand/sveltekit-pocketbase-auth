<script lang="ts">
	import { dev } from '$app/environment'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import Debug from '$lib/components/Debug.svelte'
	import { pb, pbError } from '$lib/pocketbase.svelte'

	let isLoading = $state(false)

	$effect(() => {
		if (!$page.data.user) goto('/')
		if ($page.data.user?.verified) goto('/app')

		pb.collection('users').subscribe($page.data.user?.id, (e) => {
			if (dev) console.log(`verify: action: ${e.action} verified=${e.record.verified}`)
			if (e.record.verified) {
				goto('/app')
			}
		})

		return () => {
			if (dev) console.log('verify: unsubscribe', $page.data.user?.id)
			pb.collection('users').unsubscribe($page.data.user?.id)
		}
	})

	async function handleForm() {
		isLoading = true

		try {
			if ($page.data.user) {
				await pb.collection('users').requestVerification($page.data.user.email)
				if (dev) console.log('verify: resend email', $page.data.user?.email)
				await new Promise((resolve) => setTimeout(resolve, 1500)) // give loading spinner time
			}
		} catch (err: unknown) {
			// FIXME: repeated requests within 120 sec trigger an error, but it isn't being caught??
			pbError(err)
		} finally {
			isLoading = false
		}
	}
</script>

<div>
	<h3>Verify your account</h3>

	<p>
		Welcome <mark>{$page.data.user?.name?.split(' ')[0]}</mark>! One last step and your account will
		be active.
	</p>
	<p>
		We have sent a verification email to <mark>{$page.data.user?.email}</mark>
	</p>
	<p>Please find the email, and click on the link included to automatically verify your account.</p>

	<p>If you can't find the verification email, please check your spam folder.</p>

	<section>
		<button aria-busy={isLoading} onclick={() => handleForm()} type="submit">
			Resend Verification Email
		</button>
	</section>

	<Debug>
		{#if $page.data.user}
			<ul>
				{#each Object.keys($page.data.user) as user}
					<li>{`${user}: ${$page.data.user[user]}`}</li>
				{/each}
			</ul>
		{/if}
	</Debug>
</div>

<style>
	h3 {
		text-align: center;
	}
	button {
		width: 100%;
	}
	mark {
		color: var(--brand);
		background: none;
		padding-inline: 0;
	}
</style>
