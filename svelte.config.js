import preprocess from "svelte-preprocess";
/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel';
const config = {
	preprocess: [
		preprocess({
			postcss: true
		}),
	],
	kit: {
		adapter: vercel(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		files: {
			assets: 'src/static',
		}
	}
};

export default config;
