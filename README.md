<h1 align="center">JS SDK With Commands</h1>

<p align="center">
      Example of how we can create a SDK using the command pattern.
<br>
      This is an example of how <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/index.html">AWS SDK client</a> internally works.
</p>

<p align="center">
    <a href="https://github.com/AlbertHernandez/js-sdk-with-commands/actions/workflows/nodejs.yml?branch=main"><img src="https://github.com/AlbertHernandez/js-sdk-with-commands/actions/workflows/nodejs.yml/badge.svg?branch=main" alt="nodejs"/></a>
</p>

## Table of Contents

* [Preparing environment to contribute](#preparing-environment)
* [Playground](#playground)
* [Building](#building)
* [Testing](#testing)
* [Linting](#linting)
* [Contributing](#contributing)

## Preparing environment to contribute

This library has been designed to work with node v16 and npm 8. In order to configure your local environment you can run:

```bash
nvm install 16.0.0
nvm use
npm install npm@8.3.0 -g
npm install
```

## Playground

This library offers a playground where we can play with the functions that we are developing

```bash
npm run playground
```

In case you wan

## Building

```bash
npm run build
```

## Testing

### Jest with Testing Library

```bash
npm run test
```

## Linting

Run the linter

```bash
npm run lint
```

Fix lint issues automatically

```bash
npm run lint:fix
```

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/AlbertHernandez/ts-playground/blob/main/CONTRIBUTING.md).
