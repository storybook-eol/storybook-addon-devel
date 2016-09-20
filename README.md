# Developer Addon

This is an addon with tools which can help users build other addons. This addon works with both [React Storybook](https://github.com/kadirahq/react-storybook) and [React Native Storybook](https://github.com/kadirahq/react-native-storybook).

## Getting Started

First, install the addon

```shell
npm install -D @kadira/storybook-addon-devel
```

Add this line to your `addons.js` file (create this file inside your storybook config directory if needed).

```js
import '@kadira/storybook-addon-devel/register';
```
