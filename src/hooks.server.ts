import type { AuthModel, ClientResponseError, User } from '$lib/types';

import PocketBase, { RecordService } from 'pocketbase';
import { env } from '$env/dynamic/public';

interface TypedPocketBase extends PocketBase {
	collection(idOrName: 'users'): RecordService<User>;
}

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(env.PUBLIC_POCKETBASE_URL);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	// dev && console.log('hooks.server: ', event.locals.pb.authStore.model);
	try {
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
			event.locals.user = event.locals.pb.authStore.model;
		}
	} catch (err) {
		console.error('Error during PocketBase .authRefresh():', err); // Log the error
		event.locals.pb.authStore.clear();
		event.locals.user = null;
	}

	const response = await resolve(event);

	// httpOnly = false is required for realtime to get the cookie (see verify/+page.svelte)
	response.headers.set(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({ secure: true, httpOnly: false, sameSite: 'Lax' })
	);
	return response;
};

// import { blockUrlParamsRegex, blockUrlPathRegex, pbUrl } from '$lib/utils'
// if (blockUrlPathRegex.test(event.url.pathname)) error(403, 'Bad bot, no cookie.')
// if (blockUrlParamsRegex.test(event.url.search)) error(403, 'Bad bot, no cookie?')

// event.locals.user = structuredClone(event.locals.pb.authStore.model);

// try {
// 	await event.locals.pb.collection('users').authRefresh();
// 	event.locals.user = event.locals.pb.authStore.model;
// } catch (_) {
// 	event.locals.pb.authStore.clear();
// }
