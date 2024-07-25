import type { ClientResponseError, TypedPocketBase } from '$lib/types';

import PocketBase from 'pocketbase';
import { browser, dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

function createPocketBase(): TypedPocketBase {
	const pb = new PocketBase(env.PUBLIC_POCKETBASE_URL) as TypedPocketBase;
	if (browser) pb.authStore.loadFromCookie(document.cookie);
	return pb;
}

// CSR only (realtime), can't use $state() in hooks.server
export const pb = $state(createPocketBase());

export const pbError = (e: unknown) => {
	const err = e as unknown as ClientResponseError;
	dev && console.log(err?.response);
	error(err?.status, err?.response?.message);
};

// For CSR
// import type { AuthModel } from '$lib/types';
// export let pb: TypedPocketBase = new PocketBase(env.PUBLIC_POCKETBASE_URL);
// let pbModel = $state(pb.authStore.model as AuthModel);

// pb.authStore.onChange((auth) => {
// 	// console.log('authStore changed', auth);
// 	pbModel = pb.authStore.model;
// });
