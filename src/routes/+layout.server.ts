import { dev } from '$app/environment'

export const load = ({ locals }) => {
	// dev && console.log('/+layout.server.ts: locals', locals);
	return {
		user: locals.user ?? null,
	}
}
