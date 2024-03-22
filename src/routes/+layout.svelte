<script>
	import '../globals.css';
</script>

<main>
	<nav>
		<a href="/">home</a>
		<a href="/about">about</a>
	</nav>
	<slot />
</main>

<style>
	main {
		max-width: 35rem;
		margin: 0 auto;
	}
</style>
