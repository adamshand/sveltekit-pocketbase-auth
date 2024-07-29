import { pbError } from '$lib/pocketbase.svelte.js'
import { redirect } from '@sveltejs/kit'

export const actions = {
	default: async ({ locals, request }) => {
		const form = Object.fromEntries(await request.formData()) as {
			email: string
		}

		let result: string
		try {
			result = await locals.pb.collection('users').requestPasswordReset(form.email)
			console.log(result)
		} catch (e) {
			console.error(e)
		}
	},
}
