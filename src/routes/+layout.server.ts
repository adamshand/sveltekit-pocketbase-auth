import { pbError } from '$lib/pocketbase.svelte'

export const load = async ({ locals, url }) => {
	let results = { user: locals.user ?? null }
	return results
}
