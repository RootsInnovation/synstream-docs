// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          id: 'getting-started/overview',
          label: '📋 Overview',
        },
        {
          type: 'doc',
          id: 'getting-started/quickstart',
          label: '⚡ Quickstart',
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'doc',
          id: 'guides/overview',
          label: '📋 Overview',
        },
        {
          type: 'doc',
          id: 'guides/register-login',
          label: '🔐 Register and Login',
        },
        {
          type: 'doc',
          id: 'guides/users-products',
          label: '👥 Users and Products',
        },
        {
          type: 'doc',
          id: 'guides/create-product',
          label: '➕ Create Product',
        },
        {
          type: 'doc',
          id: 'guides/enter-product',
          label: '🚪 Enter Product',
        },
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'examples/overview',
          label: '📋 Overview',
        },
        {
          type: 'category',
          label: '🛒 E-Commerce Store',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'examples/ecommerce-store-daily/overview',
              label: '📋 Overview',
            },
            {
              type: 'doc',
              id: 'examples/ecommerce-store-daily/solution',
              label: '✅ Solution',
            },
          ],
        },
        {
          type: 'category',
          label: '📊 Metadata Uniform',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'examples/metadata-uniform/overview',
              label: '📋 Overview',
            },
            {
              type: 'doc',
              id: 'examples/metadata-uniform/solution',
              label: '✅ Solution',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        {
          type: 'doc',
          id: 'troubleshooting/common-issues',
          label: '🔧 Common Issues',
        },
        {
          type: 'doc',
          id: 'troubleshooting/faq',
          label: '❓ FAQ',
        },
        {
          type: 'doc',
          id: 'troubleshooting/advantages',
          label: '⭐ Advantages',
        },
        {
          type: 'doc',
          id: 'troubleshooting/contact',
          label: '📞 Contact',
        },
      ],
    },
  ],
};

export default sidebars;
