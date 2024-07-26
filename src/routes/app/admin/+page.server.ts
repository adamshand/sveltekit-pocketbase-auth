export const load = async ({ locals: { security } }) => {
	security.isAdmin()
}
