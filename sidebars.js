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
    "libraries/node/v1.0.0/index",
    "libraries/node/v1.0.0/available_methods",
    "libraries/node/v1.0.0/create_payment",
    "libraries/node/v1.0.0/process_payment",
    "libraries/node/v1.0.0/save_card",
    "libraries/node/v1.0.0/pre_authorization",
    "libraries/node/v1.0.0/google_apple_pay",
    "libraries/node/v1.0.0/cancel_payment",
    "libraries/node/v1.0.0/appearances",
  ],
  pythonSidebar: ["libraries/python/v1.0.0/index"],
  pphpSidebar: ["libraries/php/v1.0.0/index"],
  apisidebar: require("./docs/api/sidebar.ts").default,
};

export default sidebars;
