import { themes } from '@storybook/theming'
import { initialize, mswDecorator } from 'msw-storybook-addon';

import '../src/styles/global.css'; //importando o tailwind para o preview do storie books

initialize({
  onUnhandledRequest: 'bypass' //para não gerar log das requisições não tratadas no msw
});

export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}