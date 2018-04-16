# browserslist-config-ebay

This package provides [Browserslist](https://github.com/browserslist/browserslist) rules as a shared npm module.

## Installing

```sh
yarn add @ebay/browserslist-config --dev
```

or

```sh
npm install @ebay/browserslist-config --save-dev
```

## Usage

You can reference the [shared config](https://github.com/browserslist/browserslist#shareable-configs) in your `package.json`:

```json
  "browserslist": [
    "extends @ebay/browserslist-config"
  ]
```
