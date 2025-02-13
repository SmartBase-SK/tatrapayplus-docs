import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/tatrapayplus-api",
    },
    {
      type: "category",
      label: "TatraPayPlus API",
      items: [
        {
          type: "doc",
          id: "api/initiate-payment",
          label: "Initiate payment intent",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-methods",
          label: "Payment methods list",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-payment-intent-status",
          label: "Payment intent status.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-payment-intent",
          label: "Update payment intent",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/cancel-payment-intent",
          label: "Cancel payment intent.",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "TatraPayPlus Appearance API",
      items: [
        {
          type: "doc",
          id: "api/set-appearance",
          label: "Set appearance parameters for TatraPayPlus",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/set-logo",
          label: "Set logo for TatraPayPlus",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "TatraPayPlus DirectAPI",
      items: [
        {
          type: "doc",
          id: "api/get-methods",
          label: "Payment methods list",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-payment-intent-status",
          label: "Payment intent status.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-payment-intent",
          label: "Update payment intent",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/create-direct-transaction-request",
          label: "Create direct transaction request",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Authentication",
      items: [
        {
          type: "doc",
          id: "api/get-access-token",
          label: "Obtain OAuth2 Access Token",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
