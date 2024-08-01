import { pbError } from '$lib/pocketbase.svelte'

export const load = async ({ locals, url }) => {
	console.log(url)
	let results: any = { user: locals.user ?? null }

	// try {
	// 	const quote = await locals.pb.collection('adam').getList(1, 1, {
	// 		filter: `format = "quote"`,
	// 		sort: '@random',
	// 	})
	// 	console.log(quote.items[0])
	// 	results.quote = quote.items[0]
	// } catch (e) {
	// 	pbError(e)
	// }
	// console.log(results)
	return results
}
