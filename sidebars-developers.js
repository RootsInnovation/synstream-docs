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
        {
          type: 'doc',
          id: 'concepts/overview',
          label: '📋 Overview',
        },
        {
          type: 'doc',
          id: 'concepts/architecture',
          label: '🏗️ Architecture',
        },
        {
          type: 'doc',
          id: 'concepts/node-message-flow',
          label: '🔄 Node Message Flow',
        },
      ],
    },
    {
      type: 'category',
      label: 'Nodes',
      items: [
        'nodes/overview',
        'nodes/common-nodes',
        'nodes/extract-load-nodes',
        'nodes/transform-nodes',
        'nodes/advanced-nodes',
      ],
    },
    {
      type: 'category',
      label: 'AI Features',
      items: [
        'ai/overview',
        'ai/flow-design-assistant',
        'ai/code-generation',
        'ai/documentation-generation',
        'ai/error-resolution',
      ],
    },
    {
      type: 'category',
      label: 'Sidebar Features',
      items: [
        'sidebar/overview',
        'sidebar/node-library',
        'sidebar/node-search',
        'sidebar/node-categories',
      ],
    },
    {
      type: 'category',
      label: 'Header Features',
      items: [
        'header/overview',
        'header/workflow-management',
        'header/deployment',
        'header/menu-features',
      ],
    },
    {
      type: 'category',
      label: 'Learning',
      items: [
        'learning/overview',
        'learning/ecommerce-store-daily',
        'learning/metadata-uniform',
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

