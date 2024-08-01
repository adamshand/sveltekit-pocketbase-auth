<script lang="ts">
	import { page } from '$app/stores'
	import Gravatar from '$lib/components/Gravatar.svelte'

	const email = $page.data.user?.email ?? 'dummy@example.nz'
</script>

<h1>Gravatars</h1>

<div>
	<Gravatar {email} size="64" option="wavatar" />
	<Gravatar {email} size="128" option="mp" />
	<Gravatar border {email} round size="256" />
	<Gravatar border email={'blahblah@blah.com'} round size="256" option="robohash" />
	<Gravatar email={'blahblah@blah.com'} size="256" option="retro" />
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
