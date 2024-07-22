import { goto, invalidateAll } from '$app/navigation';
import { pb } from '$lib/pocketbase.svelte';

async function signout() {
	console.log('/sign/out/+page.ts');
	pb.authStore.clear();
	await invalidateAll();
	goto('/');
}

export const load = async () => {
	signout();
};
