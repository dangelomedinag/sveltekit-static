export const load = ({ data }) => {
	return {
		...data,
		lazy: {
			component: import('$lib/components/Button.svelte')
		}
	};
};
