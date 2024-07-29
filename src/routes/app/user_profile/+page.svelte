<script lang="ts">
	import { page } from '$app/stores'
	const user = $state($page.data.user)
</script>

<article>
	{#if user}
		{@const user = $page.data.user}
		<h1>User Profile</h1>
		<ul>
			{#each Object.keys(user) as u}
				<li>{`${u}: ${user[u]}`}</li>
			{/each}
		</ul>
	{:else}
		<p>No user data available. Are you logged in?</p>
	{/if}
</article>
