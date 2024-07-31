<script lang="ts">
	import type { GravatarUrl } from '$lib/types'
	import { getGravatarUrl } from '$lib'

	let { border = false, email, option = '404', round = false, size = '192' }: GravatarUrl = $props()

	const gravatarUrl = getGravatarUrl(email) + `?d=${option}&s=${size}`
</script>

<img
	class:border
	class:round
	style={`width: ${size}px; height: ${size}px;`}
	alt="gravatar"
	src={gravatarUrl}
/>

<style>
	.border {
		border: 1px solid var(--brand);
		padding: 3px;
	}
	.round {
		border-radius: 50%;
	}
</style>
