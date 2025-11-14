// @ts-check

/**
 * Developer documentation sidebar
 * The key should match the plugin id: 'developers'
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
export default {
  developers: [
    'intro',
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'architecture/architecture',
        'architecture/overview',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/overview',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/overview',
      ],
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'release-notes/changelog',
      ],
    },
  ],
};

