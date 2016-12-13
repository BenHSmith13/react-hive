[![npm version](https://badge.fury.io/js/react-hive.svg)](https://badge.fury.io/js/react-hive)

## Versioning Strategy
This package's version will follow the major and minor versions of [Hive](https://github.com/enderlabs/hive). For patch versions you'll want to use the latest version.

## Dependencies
- [Node & NPM](https://docs.npmjs.com/getting-started/installing-node)

## Setup
- Clone the repo
- Install [npm dependencies](blob/develop/package.json#L30-L50): `npm install`

## Local Development
- Complete "Setup" step above
- Start the Docs app. You'll develop against the docs and use it to preview your changes: `npm run docs`. This will do the following:
  - Run `app.js` and included `src/` components through our eslint rules found [here](https://github.com/enderlabs/eslint-config-teem)
  - Compile `app.js` and included `src/` into a single "bundle" file located in `docs`
  - Watch `app.js` and included `src/` and re-run webpack if any changes are detected
  - Start up a node server on `http://localhost:8080`
  - Watch `docs/` and reload the page if any changes are detected
- At this point you can edit the components in `src/` and view changes at `https://localhost:8080`

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md)

## Releasing
In order to release a new version to NPM you'll need to be added as a contributor to this repo and the NPM module.
- Pull down the latest version of `master`
- Bump the version in [package.json](https://github.com/enderlabs/react-hive/blob/develop/package.json#L3)
- Prepare the components files for release: `npm run release`
- Commit the version bump and `dist/` file changes: `git commit -m "v1.x.x"`
- Push to `master`
- Release to NPM (follow any prompts it may display): `npm publish`
- Navigate to https://www.npmjs.com/package/react-hive and verify the new version is available

## Common Gotchas
**I make changes to a component but don't see any changes on my local server**
> Make sure you are including/using that component somewhere in app.js

## Helpful Links
[https://enderlabs.github.io/react-hive](https://enderlabs.github.io/react-hive)