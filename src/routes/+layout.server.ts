import { pbError } from '$lib/pocketbase.svelte'

export const load = async ({ locals }) => {
	try {
		const quote = await locals.pb.collection('adam').getList(1, 1, {
			filter: `format = "quote"`,
			sort: '@random',
		})
		return {
			user: locals.user ?? null,
			quote: quote.items[0],
		}
	} catch (e) {
		pbError(e)
	}
}
