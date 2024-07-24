<script lang="ts">
	import { dev } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { pb, pbError } from '$lib/pocketbase.svelte';

	import Debug from '$lib/components/Debug.svelte';

	let isLoading = $state(false);
	const pbUser = $derived($page.data.user);
	const pbUserId = $derived($page.data.user?.id);

	$effect(() => {
		pbUser || goto('/');
		pbUser?.verified && goto('/app');

		pb.authStore.loadFromCookie(document.cookie);

		pb.collection('users').subscribe(pbUserId, (e) => {
			dev && console.log(`verify: action: ${e.action} verified=${e.record.verified}`);
			if (e.record.verified) {
				goto('/app');
			}
		});

		return () => pb.collection('users').unsubscribe(pbUserId);
	});

	async function handleForm() {
		isLoading = true;

		// just to make the loading spinner show
		setTimeout(async () => {
			try {
				if (pbUser) {
					await pb.collection('users').requestVerification(pbUser.email);
				}
			} catch (err: unknown) {
				pbError(err);
			} finally {
				isLoading = false;
			}
		}, 1500);
	}
</script>

<article>
	<h3>Verify your account</h3>

	<p>
		Hey <mark>{pbUser?.name?.split(' ')[0]}</mark>, welcome to Play. One last step and your account
		will be active.
	</p>
	<p>
		We have sent a verification email to <mark>{pbUser?.email}</mark>
	</p>
	<p>Please find the email, and click on the link included to automatically verify your account.</p>

	<p>If you can't find the verification email, please check your spam folder.</p>

	<section>
		<button aria-busy={isLoading} onclick={() => handleForm()} type="submit">
			Resend Verification Email
		</button>
	</section>

	<Debug>
		<ul>
			{#each Object.keys(pbUser) as user}
				<li>{`${user}: ${pbUser[user]}`}</li>
			{/each}
		</ul>
	</Debug>
</article>

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
