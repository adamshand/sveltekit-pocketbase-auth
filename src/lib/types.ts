// just convenience so types can all be imported from same file
export type { AuthModel, ClientResponseError } from 'pocketbase';

export interface User {
	avatar: string;
	collectionId: string;
	collectionName: string;
	created: string;
	email: string;
	emailVisibility: boolean;
	id: string;
	name: string;
	updated: string;
	username: string;
	verified: boolean;
}
