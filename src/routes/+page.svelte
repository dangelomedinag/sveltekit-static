<script>
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	let count = 5;
</script>

<button class="btn" on:click={() => count++} disabled={count >= 10}>{count}</button>
<header>
	{#if count >= 10}
		<button class="btn" on:click={() => (count = 5)}>reset size</button>
	{/if}
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
		display: block;
		margin: 0 auto;
	}

	h1 {
		font-size: 2rem;
		font-weight: 200;
	}

	header {
		position: relative;
		width: 100%;
	}

	header .btn {
		position: absolute;
		z-index: 2;
		top: 50%;
		left: 50%;
		translate:
			-50%,
			-50%;
	}

	.btn {
		background-color: white;
		border: 1px solid grey;
		padding-inline: 0.5rem;
		padding-block: 0.2rem;
		border-radius: 4px;

		&:hover {
			border-color: rgb(225, 77, 77);
			background-color: rgb(239, 192, 192);
		}

		&:disabled {
			opacity: 0.3;
			background-color: grey;
			background-color: rgb(233, 233, 233);
		}
	}
</style>
