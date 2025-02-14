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
  nodeSidebar: [
    'libraries/node/v1/index',
    'libraries/node/v1/available_methods',
    'libraries/node/v1/create_payment',
    'libraries/node/v1/process_payment',
    'libraries/node/v1/save_card',
  ],
  apisidebar: require('./docs/api/sidebar.ts').default,
};

export default sidebars;
