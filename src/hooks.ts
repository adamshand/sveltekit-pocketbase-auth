import type { Reroute } from '@sveltejs/kit'

export const reroute: Reroute = ({ url }) => {
	if (url.hostname !== 'localhost') {
		return '/' + url.hostname + url.pathname
	}
	return url.pathname
}
