import PocketBase, { RecordService } from 'pocketbase'
export type { AuthModel, ClientResponseError } from 'pocketbase'

export interface GravatarUrl {
	border?: boolean
	email: string
	option?: '404' | 'mp' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'robohash' | 'blank'
	round?: boolean
	size?: string
}

export interface User {
	admin: boolean
	avatar: string
	collectionId: string
	collectionName: string
	created: string
	email: string
	emailVisibility: boolean
	id: string
	name: string
	updated: string
	username: string
	verified: boolean
}

// https://github.com/pocketbase/js-sdk?tab=readme-ov-file#specify-typescript-definitions
export interface TypedPocketBase extends PocketBase {
	collection(idOrName: 'users'): RecordService<User>
}
