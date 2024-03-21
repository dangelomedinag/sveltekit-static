<script>
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	let count = 5;
</script>

<button on:click={() => count++} disabled={count > 10}>{count}</button>
{#if count > 10}
	<button on:click={() => (count = 5)}>reset</button>
{/if}
<header>
	{#key count}
		<img
			in:scale={{ easing: quintOut }}
			src="./favicon.png"
			alt="logo"
			style:--size-logo={`${count * 20}px`}
		/>
	{/key}
</header>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
	img {
		width: var(--size-logo);
	}
</style>
