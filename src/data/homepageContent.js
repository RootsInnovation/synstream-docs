import FlowSvg from '@site/static/img/undraw_docusaurus_mountain.svg';
import GuardrailSvg from '@site/static/img/undraw_docusaurus_tree.svg';
import VisibilitySvg from '@site/static/img/undraw_docusaurus_react.svg';

const homepageContent = {
  hero: {
    badge: 'Synstream Platform',
    title: 'Synstream Docs',
    subtitle: 'Everything you need to orchestrate customer experiences with confidence.',
    bullets: [
      'Design automation flows with prebuilt components and enforce guardrails out of the box.',
      'Connect your tooling stack in minutes and keep teams aligned from sandbox to production.',
      'Monitor executions with real-time telemetry, alerts, and rich audit trails.',
    ],
    primaryAction: {
      label: 'Explore the Docs',
      to: '/docs/intro',
    },
    secondaryAction: {
      label: 'Release Notes',
      to: '/docs/release-notes/changelog',
    },
    card: {
      description: 'Structured knowledge, best practices, and deployment checklists to help you ship faster.',
      stats: [
        {label: 'Docs', value: '50+'},
        {label: 'Guides', value: '12'},
        {label: 'Deployments', value: 'Instant'},
      ],
    },
  },
};

export default homepageContent;

