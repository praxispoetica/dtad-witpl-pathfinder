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
            			label: 'Guides',
            			link: '/guides/example',
            			icon: 'open-book',
            			items: ['guides/example'],
          			},
          			{
            			label: 'Reference',
            			link: '/reference/example',
            			icon: 'information',
            			items: ['reference/example'],
          			},
					{
						label: 'vokapelman Blog',
						link: '/blog',
						icon: 'pencil',
						items: ['blog/blog-post-20251119'],
					},
        		]),
				starlightBlog({
					title: 'v. o. kapelman blog',
					authors: {
						vokapelman: {
							name: 'v. o. kapelman',
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
