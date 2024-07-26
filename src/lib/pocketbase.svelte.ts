import type { ClientResponseError, TypedPocketBase, User } from '$lib/types'

import PocketBase from 'pocketbase'
import { browser, dev } from '$app/environment'
import { error, redirect, type RequestEvent } from '@sveltejs/kit'
import { env } from '$env/dynamic/public'

function createPocketBase(): TypedPocketBase {
	const pb = new PocketBase(env.PUBLIC_POCKETBASE_URL) as TypedPocketBase
	if (browser) {
		pb.authStore.loadFromCookie(document.cookie)
	}
	return pb
	// FIXME: is this a bug? What should it return in SSR?
}

// CSR only (realtime), can't use $state() in hooks.server
export const pb = $state(createPocketBase())

export const pbError = (e: unknown) => {
	const err = e as unknown as ClientResponseError
	dev && console.log(err?.response)
	error(err?.status, err?.response?.message)
}

export class Security {
	// TODO: What if you forget to call any of the security methods in a server load function? Oh noes!
	// To protect against this you could set a flag in the security class whenever a check has been made,
	// then check if any request with the event.isDataRequest set to true has been made without the flag
	// being set and output a warning (at least in dev mode) or throw an exception (rather than risk
	// accidentally exposing some data).

	private readonly user: User | null

	constructor(private readonly event: RequestEvent) {
		this.user = event.locals.user || null
	}

	isAuthenticated() {
		if (!this.user) {
			// redirect(307, '/sign/in')
			error(401, 'You are not signed in.')
		}
		if (!this.user?.verified) {
			redirect(307, '/verify')
			// error(403, "Your account's email address has not been verified")
		}
		return this
	}

	isAdmin() {
		// Requires that you add admin to pb.collection('users')
		this.isAuthenticated()

		if (this.user && !this.user?.admin) {
			error(403, 'Your account is not an administrator.')
		}
		return this
	}

	// https://www.captaincodeman.com/securing-your-sveltekit-app
	// isProjectOwner(project: Project) {
	//   if (!this.user || !project.owners.includes(this.user.uid)) {
	//     error(403, 'not project owner')
	//   }
	//   return this
	// }
}

// For CSR
// import type { AuthModel } from '$lib/types';
// export let pb: TypedPocketBase = new PocketBase(env.PUBLIC_POCKETBASE_URL);
// let pbModel = $state(pb.authStore.model as AuthModel);

// pb.authStore.onChange((auth) => {
// 	// console.log('authStore changed', auth);
// 	pbModel = pb.authStore.model;
// });
