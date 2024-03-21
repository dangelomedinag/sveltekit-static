import { error } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await res.json();

	if (!posts) {
		error(404, {
			message: 'Not found'
		});
	}
	return {
		posts
	};
};
