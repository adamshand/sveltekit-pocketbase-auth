import type { AuthModel, ClientResponseError, User } from '$lib/types';

import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';

// CSR Only
// import { env } from '$env/dynamic/public';
// import PocketBase, { RecordService } from 'pocketbase';

// https://github.com/pocketbase/js-sdk?tab=readme-ov-file#specify-typescript-definitions
// interface TypedPocketBase extends PocketBase {
// 	collection(idOrName: 'users'): RecordService<User>;
// }

// export let pb: TypedPocketBase = new PocketBase(env.PUBLIC_POCKETBASE_URL);
// let pbModel = $state(pb.authStore.model as AuthModel);

// pb.authStore.onChange((auth) => {
// 	// console.log('authStore changed', auth);
// 	pbModel = pb.authStore.model;
// });

export const pbError = (e: unknown) => {
	const err = e as unknown as ClientResponseError;
	dev && console.log(err?.response);
	error(err?.status, err?.response?.message);
};
