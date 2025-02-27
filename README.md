# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Translations

Copy new files to translate:
`rsync -av --ignore-existing --exclude='api' docs/ i18n/sk/docusaurus-plugin-content-docs/current`

If you change something in original, you need to manually add it to translations.

### Generate API pages

To regenerate API pages based on new OpenAPI you need to upload new `tatrapayplus_api_sandbox.json`, do not modify this file manually.
Then we need to add codeSamples to specification with `node addCodeSamplesToOpenAPI.mjs`.
Then we need to regenerate code with `npm run regenerate-api`