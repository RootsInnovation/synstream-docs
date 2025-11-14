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
        {
          type: 'doc',
          id: 'nodes/overview',
          label: '📋 Overview',
        },
        {
          type: 'category',
          label: '⚙️ Common',
          collapsed: true,
          items: [
            'nodes/common/start-node',
          ],
        },
        {
          type: 'category',
          label: '📊 Extract and Load',
          collapsed: true,
          items: [
            'nodes/extract-load/xlsx-node',
          ],
        },
        {
          type: 'category',
          label: '🔄 Transform',
          collapsed: true,
          items: [
            'nodes/transform/function-node',
          ],
        },
        {
          type: 'category',
          label: '🔔 Notify',
          collapsed: true,
          items: [
            'nodes/notify/email-node',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'AI Features',
      items: [
        {
          type: 'doc',
          id: 'ai/overview',
          label: '📋 Overview',
        },
        {
          type: 'doc',
          id: 'ai/flow-design-assistant',
          label: '🎨 Flow Assistant',
        },
        {
          type: 'doc',
          id: 'ai/ai-assistant',
          label: '✨ AI Assistant',
        },
      ],
    },
    {
      type: 'category',
      label: 'Utils',
      items: [
        'utils/overview',
        'utils/node-library',
        'utils/node-search',
        'utils/node-categories',
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

