// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightBlog from 'starlight-blog';
import starlightSidebarTopics from 'starlight-sidebar-topics'

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
		        starlightSidebarTopics([
					{
						label: 'About v. o. kapelman',
						link: '/about',
						icon: 'pen',
						items: ['about'],
					},
					{
						label: 'vokapelman Blog',
						link: '/blog',
						icon: 'pencil',
						items: ['blog/blog-post-20251119'],
					},
     				{
            			label: 'Works',
            			link: '/works/works',
            			icon: 'open-book',
            			items: [
							'works/novels/novels',
							'works/short-stories/short-stories',
							'works/flash-fiction/flash-fiction',
							'works/poetry/poetry'
						],
          			},
        		],
				{
					exclude: ['/blog', '/blog/**/*'], 
				}
				),
				starlightBlog({
					title: 'v. o. kapelman blog',
					authors: {
						vokapelman: {
							name: 'v. o. kapelman',
							title: 'Author of `Denying The Amerikan Dream. Wandering into the Promised Land`',
							url: 'https://vokapelman.com',
							picture: './src/assets/vk-180x180.jpg',
						},
					},
					metrics: {
                		readingTime: true,
                		words: 'rounded',
            		},
					recentPostCount: 10,
              		postCount: 15,
				}),
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
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
