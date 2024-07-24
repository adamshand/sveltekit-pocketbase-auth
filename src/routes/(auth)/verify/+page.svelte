<script lang="ts">
	import { browser, dev } from '$app/environment';
	import { goto, invalidateAll } from '$app/navigation';
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import { pb } from '$lib/pocketbase.svelte';

	import Debug from '$lib/components/Debug.svelte';

	let isLoading = $state(false);
	const pbUser = $derived($page.data.user);
	const pbUserId = $derived($page.data.user?.id);

	onMount(async () => {
		pbUser || goto('/');
		pbUser?.verified && goto('/app');

		pb.authStore.loadFromCookie(document.cookie);
		pb.collection('users').subscribe(
			pbUserId,
			async (e) => {
				dev && console.log(`verify: action: ${e.action} verified=${e.record.verified}`);
				if (e.record.verified) {
					goto('/app');
				}
			},
			(error: unknown) => {
				console.error(`verify/+page.svelte: subscription error: ${error}`);
			}
		);
	});

	onDestroy(() => {
		pb.collection('users').unsubscribe(pbUserId);
	});

	async function handleForm() {
		isLoading = true;

		try {
			if (pbUser) {
				await pb.collection('users').requestVerification(pbUser.email);
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			dev && console.error('(dev) verify/+page.svelte: ', err.message);
		} finally {
			isLoading = false;
		}
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
			<li>username: {pbUser?.username}</li>
			<li>verified: {pbUser?.verified}</li>
		</ul>
	</Debug>
</article>

<style>
	h3 {
		text-align: center;
	}
	section {
		display: flex;
		justify-content: center;
	}
	p,
	button {
		margin-bottom: 1rem;
	}
	mark {
		color: var(--brand);
		background: none;
		padding-inline: 0;
	}
</style>
