import { pbError } from '$lib/pocketbase.svelte.js'
import { redirect } from '@sveltejs/kit'
import { dev } from '$app/environment'

export const load = async ({ locals }) => {
	locals.user && redirect(303, '/home')
}

export const actions = {
	login: async ({ locals, request }) => {
		const form = Object.fromEntries(await request.formData()) as {
			username: string
			password: string
		}

		try {
			await locals.pb.collection('users').authWithPassword(form.username, form.password)
		} catch (e) {
			pbError(e)
		}
	},

	register: async ({ locals, request }) => {
		const form = Object.fromEntries(await request.formData()) as {
			name: string
			email: string
			password: string
			passwordConfirm: string
		}

		dev && console.log('register', form)

		const user = {
			email: form.email,
			name: form.name,
			password: form.password,
			passwordConfirm: form.passwordConfirm,
			username: form.name.toLowerCase().replace(/[^A-Za-z0-9]/g, ''),
		}

		dev && console.log('user', user)

		try {
			if (user.email && user.password) {
				await locals.pb.collection('users').create(user)
				await locals.pb.collection('users').requestVerification(user.email)
				await locals.pb.collection('users').authWithPassword(user.email, user.password)
			}
		} catch (err: unknown) {
			pbError(err)
		}
		redirect(303, '/home')
	},

    logout: async ({ locals, request }) => {
        try {
            locals.pb.authStore.clear()
	        locals.user = null
        } catch (err: unknown) {
            pbError(err)
        }
        redirect(303, '/')
    }
}
