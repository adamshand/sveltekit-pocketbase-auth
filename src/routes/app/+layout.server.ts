import { redirect } from '@sveltejs/kit';
import { pbError } from '$lib/pocketbase.svelte';

export const load = async ({ locals }) => {
	locals.user || redirect(307, '/sign/in');
	locals.user?.verified || redirect(307, '/verify');

	try {
		const quote = await locals.pb.collection('adam').getList(1, 1, {
			filter: `format = "quote"`,
			sort: '@random'
		});
		return {
			quote: quote.items[0]
		};
	} catch (e) {
		pbError(e);
	}
};
