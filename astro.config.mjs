import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://curatelabs.github.io',
  base: '/RedTeam',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'RedTeam',
      description:
        'Applied critical thinking for better decisions, plans, strategies, policies, and arguments.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/CurateLabs/RedTeam',
        },
      ],
      sidebar: [
        {
          label: 'User Guide',
          items: [
            'guide',
            'guide/quick-start',
            'guide/installation',
            'guide/commands',
            'guide/redteam-directory',
            'guide/chat-only',
          ],
        },
        {
          label: 'Handbook',
          items: [
            'handbook',
            {
              label: 'Chapters',
              items: [
                'handbook/chapters/foundational-concepts',
                'handbook/chapters/self-awareness-reflection',
                'handbook/chapters/cultural-empathy',
                'handbook/chapters/applied-critical-thinking',
                'handbook/chapters/group-process',
                'handbook/chapters/thinking-creatively',
                'handbook/chapters/ai-and-humans-in-the-loop',
                'handbook/chapters/tools-techniques-practices',
              ],
            },
            {
              label: 'Concepts',
              collapsed: true,
              items: [{ autogenerate: { directory: 'handbook/concepts' } }],
            },
            {
              label: 'Techniques',
              collapsed: true,
              items: [{ autogenerate: { directory: 'handbook/techniques' } }],
            },
          ],
        },
        {
          label: 'Developer Docs',
          items: [
            'developers',
            'developers/product',
            'developers/design',
            {
              label: 'Experience',
              collapsed: true,
              items: [
                'developers/experience',
                'developers/experience/chat-only-review',
                'developers/experience/project-anchored-review',
                'developers/experience/install-and-run',
              ],
            },
            'developers/requirements',
            'developers/engineering/architecture',
            'developers/engineering/testing',
            'developers/engineering/publishing',
            'developers/engineering/observability',
            {
              label: 'Supporting Detail',
              collapsed: true,
              items: [
                'developers/strategy',
                'developers/strategy/source-lineage',
                'developers/engineering',
                'developers/engineering/adrs',
              ],
            },
          ],
        },
      ],
    }),
  ],
});
