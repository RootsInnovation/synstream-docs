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
      collapsed: true,
      items: [
        'utils/sidebar/information',
        'utils/sidebar/help',
        'utils/sidebar/debug-messages',
        'utils/sidebar/configuration-nodes',
        'utils/sidebar/context-data',
        'utils/sidebar/git-version-control',
        'utils/sidebar/file-upload',
        'utils/sidebar/file-download',
        'utils/system/subflow',
        'utils/system/import',
        'utils/system/export',
      ],
    },
    {
      type: 'category',
      label: 'Learning',
      items: [
        {
          type: 'doc',
          id: 'learning/overview',
          label: '📋 Overview',
        },
        {
          type: 'category',
          label: '🛒 E-Commerce Store Daily',
          collapsed: true,
          items: [
            'learning/ecommerce-store-daily/overview',
            'learning/ecommerce-store-daily/flow-design-pattern',
            'learning/ecommerce-store-daily/extract-data',
            'learning/ecommerce-store-daily/transform-data',
            'learning/ecommerce-store-daily/load-data',
            'learning/ecommerce-store-daily/conclusion',
          ],
        },
        {
          type: 'category',
          label: '📊 Metadata Uniform',
          collapsed: true,
          items: [
            'learning/metadata-uniform/overview',
            'learning/metadata-uniform/solution',
          ],
        },
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

