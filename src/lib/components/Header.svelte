<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'

	let isAuthenticated = $derived($page.data.user?.id)
</script>

<header>
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<a class="btn btn-ghost text-xl" href="/" >Minxes</a>
		</div>

		<div class="navbar-center">

		</div>

		<div class="navbar-end">
			<form method="post">
				<button formaction="/?/logout">Logout</button>
			</form>
		</div>
	</div>
</header>