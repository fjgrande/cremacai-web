// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// "site" es el dominio real y definitivo del proyecto. Astro lo usa para
// generar el sitemap.xml y las URLs canónicas — por eso tiene que ser
// SIEMPRE cremacai.es (el dominio principal), nunca .com, .cat, ni
// la versión sin "www".
export default defineConfig({
	site: 'https://cremacai.es',
	integrations: [sitemap()],
});
