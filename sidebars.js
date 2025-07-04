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
    "libraries/node/v1/index",
    "libraries/node/v1/available_methods",
    "libraries/node/v1/create_payment",
    "libraries/node/v1/process_payment",
    "libraries/node/v1/chargeback",
    "libraries/node/v1/save_card",
    "libraries/node/v1/pre_authorization",
    "libraries/node/v1/google_apple_pay",
    "libraries/node/v1/cancel_payment",
    "libraries/node/v1/appearances",
    "libraries/node/v1/loan_precalculation",
    "libraries/node/v1/logging",
  ],
  pythonSidebar: [
      "libraries/python/v1/index",
      "libraries/python/v1/available_methods",
      "libraries/python/v1/create_payment",
      "libraries/python/v1/process_payment",
      "libraries/python/v1/chargeback",
      "libraries/python/v1/save_card",
      "libraries/python/v1/pre_authorization",
      "libraries/python/v1/google_apple_pay",
      "libraries/python/v1/cancel_payment",
      "libraries/python/v1/appearances",
      "libraries/python/v1/loan_precalculation",
      "libraries/python/v1/logging",
      "libraries/python/v1/errors_handling",
  ],
  phpSidebar: [
    "libraries/php/v2/index",
    "libraries/php/v2/available_methods",
    "libraries/php/v2/create_payment",
    "libraries/php/v2/process_payment",
    "libraries/php/v2/chargeback",
    "libraries/php/v2/save_card",
    "libraries/php/v2/pre_authorization",
    "libraries/php/v2/google_apple_pay",
    "libraries/php/v2/cancel_payment",
    "libraries/php/v2/appearances",
    "libraries/php/v2/loan_precalculation",
    "libraries/php/v2/logging",
    "libraries/php/v2/errors_handling",
  ],
  apisidebar: require("./docs/api/sidebar.ts").default,
};

export default sidebars;
