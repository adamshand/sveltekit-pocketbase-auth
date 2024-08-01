<script lang="ts">
	import type { GravatarUrl } from '$lib/types'
	import { getGravatarUrl, getOpenmojiUrl } from '$lib'

	let { border = false, email, option = '404', round = false, size = '192' }: GravatarUrl = $props()

	let gravatarUrl = $state(getGravatarUrl(email) + `?d=${option}&s=${size}`)

	function handleError() {
		gravatarUrl = getOpenmojiUrl('274C')
	}
</script>

<img
	alt="gravatar"
	class:border
	class:round
	onerror={handleError}
	src={gravatarUrl}
	style={`width: ${size}px; height: ${size}px;`}
/>

<style>
	.border {
		border: 1px solid var(--brand);
		padding: 0.5rem;
	}
	.round {
		border-radius: 50%;
	}
</style>
