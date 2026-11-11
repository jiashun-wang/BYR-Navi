// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://chum-bucket.site',
    build: {
        format: 'directory',
    },
    integrations: [
        sitemap({
            filter: (page) => !page.endsWith('/search/'),
        }),
    ],
});
