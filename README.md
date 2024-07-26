![](https://github.com/hfg-gmuend/openmoji/blob/15.0.0/color/72x72/1F437.png) 

# SvelteKit with Svelte 5 (runes) with PocketBase Starter Template

I'm a newish JavaScript developer and I found CSR, SSR, authentication, hooks etc all very confusing.  This is the starter template I wish I'd been able to find in 2022, only with Runes. 

- Svelte 5 in runes mode
- PocketBase
  - Collections are typed (see [hooks.server]() & [pocketbase.svelte](https://github.com/adamshand/sveltekit-pocketbase-auth/blob/main/src/lib/pocketbase.svelte.ts))
  - Supports authenticated access for both [server](https://github.com/adamshand/sveltekit-pocketbase-auth/blob/main/src/hooks.server.ts) (SSR) and [client](https://github.com/adamshand/sveltekit-pocketbase-auth/blob/main/src/lib/pocketbase.svelte.ts) (CSR) routes
  - Sign in/out/up and verify routes
  - Uses realtime to react to account email being [verified](https://github.com/adamshand/sveltekit-pocketbase-auth/blob/main/src/routes/(auth)/verify/%2Bpage.svelte) (thanks to example by [RdnMach](https://github.com/RbnMach/sveltekit-pocketbase-realtime/blob/main/src/routes/user-panel/ListaItems.svelte))
  - [Security class](https://github.com/adamshand/sveltekit-pocketbase-auth/blob/18d07d480e0264ec55bb4fdc72fb74656c2256c7/src/lib/pocketbase.svelte.ts#L26) for easy and customisable authenticated routes (thanks to [Captain Coderman](https://www.captaincodeman.com/securing-your-sveltekit-app) and [Rasoriano](https://www.reddit.com/r/sveltejs/comments/1eb90ee/comment/let71fh/))

Everything under `/app` is where I experiment and may or may not be in a working state.
