import { pbError } from '$lib/pocketbase.svelte'

export const load = async ({ locals, url }) => {
	console.log(url)
	let results = { user: locals.user ?? null }
	return results
}
