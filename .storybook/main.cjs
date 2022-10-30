module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  //para o github conseguir chamar o link
  viteFinal: (config, { configType }) => {
    if (configType == 'PRODUCTION'){
      config.base = '/rs_il_Figma_ao_React'
    }
  }
}