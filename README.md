# SvelteKit with Svelte 5 (runes) with PocketBase Starter Template

I'm a newish JavaScript developer and I found CSR, SSR, authentication, hooks etc all very confusing.  This is the starter template I wish I'd been able to find in 2022, only with Runes. 

- Svelte 5 in runes mode
- PocketBase
  - Collections are typed
  - Supports authenticated access from both client and server side
  - Sign in/out/up and verify routes
  - Realtime example (see [/verify](https://github.com/adamshand/sveltekit-pocketbase-auth/blob/main/src/routes/(auth)/verify/%2Bpage.svelte))
  - [Security class](https://github.com/adamshand/sveltekit-pocketbase-auth/blob/18d07d480e0264ec55bb4fdc72fb74656c2256c7/src/lib/pocketbase.svelte.ts#L26) for easy and customisable authenticated routes (inspired by [Captain Coderman's post](https://www.captaincodeman.com/securing-your-sveltekit-app))


