// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	site: 'https://vokapelman.com',
	integrations: [
		starlight({
			title: 'v. o. kapelman',
			  favicon: 'favicon.ico',
			  head: [
    			// Add ICO favicon fallback for Safari.
    			{
			        tag: 'link',
  				    attrs: {
        				rel: 'icon',
        				href: 'favicon.ico',
        				sizes: '32x32',
    		  			type: 'image/x-icon',
					},
    			},
  			  ],
			logo: {
        		src: './src/assets/vk-180x180.jpg',
      		},
			plugins: [
				starlightBlog({
					title: 'v. o. kapelman blog',
					authors: {
						vokapelman: {
							name: 'v. o. kapelman',
							url: 'https://vokapelman.com',
							picture: 'src/assets/vk-180x180.jpg',
							readingTime: true,
							words: true,
						},
					}
				})
			],
			components: {
				Footer: './src/components/ThinFooter.astro',
	  		},
			description: 'v. o. kapelman personal website and blog',
			social: [
				{icon: 'github', label: 'GitHub', href: 'https://github.com/praxispoetica/dtad-witpl' },
				{icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/vokapelman.bsky.social'},
				{icon: 'substack', label: 'Substack', href: 'https://vokapelman.substack.com'},
				{icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/victorkane' },
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
