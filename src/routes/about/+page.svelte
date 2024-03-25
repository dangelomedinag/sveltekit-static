<script>
	import { random } from '$lib';

	export let data;
	let nn = data.posts[random(data.posts.length - 1)].title.length;
	function inc() {
		nn += 1;
	}

	// const ComponetLazy = async () => {
	// 	let Component = (await import('$lib/components/Button.svelte')).default;
	// 	/**@param {number} ms*/
	// 	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	// 	await sleep(1500);

	// 	return Component;
	// };
</script>

<h1>{nn}</h1>
<button on:click={inc}>click</button>

{#await data.lazy.component}
	<ul>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
{:then { default: Component }}
	<Component data={data.posts}></Component>
{/await}

<style>
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-template-rows: auto;
		gap: 0.5rem;
	}
	li {
		height: 230px;
		background-color: grey;
		border-radius: 5px;
		margin: 0;
		padding: 1rem;
		opacity: 0.2;
	}
</style>
