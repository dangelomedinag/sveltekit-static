<script>
	export let data;
	let nn = data.n;
	function inc() {
		nn += 1;
	}
</script>

<h1>{nn}</h1>
<button on:click={inc}>click</button>
