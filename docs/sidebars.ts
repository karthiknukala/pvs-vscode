import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/intro',
        'getting-started/installation',
        'getting-started/vscode-setup',
      ],
    },
    {
      type: 'category',
      label: 'PVS Basics',
      items: [
        'basics/first-spec',
        'basics/basic-types',
        'basics/theories',
        'basics/proofs',
      ],
    },
    {
      type: 'category',
      label: 'PVS References',
      items: [
        'references/pvs-language-reference',
        'references/pvs-system-guide',
      ],
    }
    // {
    //   type: 'category',
    //   label: 'PVS References',
    //   items: [
    //     'references/pvs-langauge-reference',
    //     'references/pvs-system-guide',
    //     'references/pvs-prover-guide',
    //     'references/pvs-theory-interpretations',
    //     'references/pvs-datatypes',
    //     'references/pvs-semantics',
    //     'references/pvs-structural-subtypes'
    //   ],
    // },
    // You can add more categories like:
    // {
    //   type: 'category',
    //   label: 'Advanced Topics',
    //   items: [
    //     'advanced/strategies',
    //     'advanced/libraries',
    //   ],
    // },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
