<script>
	/**@type {any}*/
	let x = 'lazy';

	/**@type {{userId: number, id: number, title: string, body: string}[]}*/
	export let data = [];

	// onMount(async () => {});
</script>

<div>
	<button on:click={() => (x = Date.now())}>
		{x}
	</button>
</div>
<ul>
	{#each data as post}
		<li class="item">
			<header>
				<div>{post.id}</div>
				<hr />
				<b>{post.title.toUpperCase()}</b>
			</header>
			<p>{@html post.body}</p>
		</li>
	{:else}
		<li></li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-template-rows: auto;
		margin: 0;
		gap: 0.5rem;
	}
	li.item {
		border-radius: 5px;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		justify-content: space-between;
		/* grid-auto-rows: max-content; */
		border: 1px solid grey;
	}

	li.skeleton {
		border-radius: 5px;
		padding: 1rem;
		height: 200px;
	}

	/* header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
	} */

	/* hr {
		display: block;
		width: 100%;
	} */
</style>
