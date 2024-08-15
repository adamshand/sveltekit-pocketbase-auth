import { browser } from '$app/environment'
import { invalidateAll } from '$app/navigation'

export const load = async () => {
	// +page.server.ts cleans  locals.pb & locals.user
	if (browser) {
		await invalidateAll()
	}
}
