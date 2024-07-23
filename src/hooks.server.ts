import PocketBase from 'pocketbase';

import { env } from '$env/dynamic/public';
import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(env.PUBLIC_POCKETBASE_URL);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	// dev && console.log('hooks.server: ', event.locals.pb.authStore.model);
	if (event.locals.pb.authStore.isValid) {
		event.locals.user = structuredClone(event.locals.pb.authStore.model);
	} else {
		event.locals.user = null;
	}

	const response = await resolve(event);
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));
	return response;
};

// import { blockUrlParamsRegex, blockUrlPathRegex, pbUrl } from '$lib/utils'
// if (blockUrlPathRegex.test(event.url.pathname)) error(403, 'Bad bot, no cookie.')
// if (blockUrlParamsRegex.test(event.url.search)) error(403, 'Bad bot, no cookie?')
