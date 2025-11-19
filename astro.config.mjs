// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/praxispoetica/dtad-witpl' }, {icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/vokapelman.bsky.social'} ],
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
