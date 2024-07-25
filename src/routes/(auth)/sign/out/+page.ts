import { goto, invalidateAll } from '$app/navigation'
export const load = async () => {
	// +page.server.ts cleans locals
	await invalidateAll()
	goto('/')
}

// When SSR is disabled, you need to run the below to logout
// pb.authStore.clear();
