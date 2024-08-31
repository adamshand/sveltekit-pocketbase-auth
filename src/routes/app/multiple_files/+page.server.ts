export const actions = {
	default: async ({ request }) => {
		// const { caption, files } = Object.fromEntries(await request.formData())
		const form = Object.fromEntries(await request.formData())
		// const form = await request.formData()
		// console.log('entries', ...form.entries())
		console.log({ form })
	},
}
