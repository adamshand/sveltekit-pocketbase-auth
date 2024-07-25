export const formatLocalDate = (d: string) => {
	const locale = navigator.language
	const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone
	return new Date(d).toLocaleDateString(locale, {
		day: 'numeric',
		month: 'short',
		timeZone,
		year: 'numeric',
	})
}

export const formatLocalDateTime = (d: string) => {
	const locale = navigator.language
	const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone
	return new Date(d).toLocaleString(locale, {
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		month: 'short',
		timeZone,
		year: 'numeric',
	})
}

export function getOpenmojiUrl(id: string, palette: 'black' | 'color' = 'color') {
	const baseUrl = 'https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji'
	// const baseUrl = 'https://unpkg.com/openmoji';
	return `${baseUrl}/${palette}/svg/${id}.svg`
}

export const getRandomElement = <T>(arr: T[]): T => {
	return arr[Math.floor(Math.random() * arr.length)]
}

export function stripHtml(str: string) {
	return str.replace(/<\/?[^>]+(>|$)/g, '').trim()
}
