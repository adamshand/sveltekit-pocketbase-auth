<script lang="ts">
    import { enhance } from '$app/forms'
    
	let username = $state('')
	let password = $state('')
	let disabled = $derived(!username || !password)
</script>

<h2 class="card-title">Login</h2>
<form method="POST" use:enhance action="?/login">
    <fieldset class="grid grid-auto-rows gap-3">
        <div class="join flex flex-row">
            <label for="username" class="btn btn-primary w-20 join-item rounded-r-full">Email</label>
            <input
                autocomplete="email"
                bind:value={username}
                id="username"
                name="username"
                type="email"
                required
                class="input input-bordered join-item grow"
            />
        </div>
        
        <div class="join">
            <label for="password" class="btn btn-primary w-20 join-item rounded-r-full">Password</label>
            <input
                autocomplete="on"
                bind:value={password}
                id="password"
                name="password"
                type="password"
                required
                class="input input-bordered join-item grow"
            />
        </div>

        <button class="btn btn-success" {disabled} type="submit">Sign in</button>

        <p>Not a member? <a class="link" href="/sign/up">Sign up for an account</a>.</p>
    </fieldset>
</form>