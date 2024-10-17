<script lang="ts">
    import Login from './login.svelte';
    import Register from './register.svelte';

	import { page } from '$app/stores'
	let message = $state($page.url.searchParams.get('message'))
</script>

<div  class="flex flex-col justify-center h-full">
    <div class="card bg-base-300 shadow-xl h-min m-auto">
        <div class="card-body">

            <div role="tablist" class="tabs tabs-lifted">
                <input type="radio" name="auth" role="tab" class="tab checked:bg-inherit bg-slate-800 checked:text-inherit" aria-label="Login" checked />
                <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <Login />
                </div>
                <input type="radio" name="auth" role="tab" class="tab checked:bg-inherit bg-slate-800 checked:text-inherit" aria-label="Register" />
                <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box rounded-tl-none p-6">
                    <Register />
                </div>
            </div>

        </div>
    </div>
</div>

{#if message}
	<div class="error">
		{message}
	</div>
{/if}
