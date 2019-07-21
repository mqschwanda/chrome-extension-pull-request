# chrome-extension-pull-request
Currently all this plugin does is collapse `dist/*` or `.snap` files and mark them as reviewed while you are viewing a github pull request.

More features are coming.

## Scripts

### Setup

```bash
# install dependencies and create a fresh build
yarn setup # `yarn nuke-repo && yarn && yarn build && yarn --silent random-quote`
```

### Build

```bash
# build `dist/*` using rollup
yarn build # `yarn nuke-build && rollup --config config/rollup.config.js && copy-build-files`
```

### Nuke

```bash
# remove directory recursively
yarn nuke # `rm -rf`

# remove build directory
yarn nuke-build # `yarn nuke dist`

# remove node_modules directory
yarn nuke-node # `yarn nuke node_modules`

# some people just want to see the world burn
yarn nuke-repo # `yarn nuke-build && yarn nuke-node`
```

### Lint

```bash
# run eslint
yarn lint # `./node_modules/.bin/eslint --ignore-path .gitignore`
```

### Flow

```bash
# run flow
yarn flow # `./node_modules/.bin/flow`
```
