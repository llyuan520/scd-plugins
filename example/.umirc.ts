import { defineConfig } from 'umi';

export default defineConfig({
  presets: [require.resolve('../packages/preset-react/lib')],
  // plugins: [require.resolve('../packages/plugin-webpack-5/lib')],
  routes: [
    // {
    //   name: 'utils 测试',
    //   path: '/utils',
    //   component: './utils',
    // },
    {
      name: 'request 测试',
      path: '/request',
      component: './request',
      menu: false,
    },
    {
      name: 'scdLayout 测试',
      path: '/plugin-scd-layout',
      component: './plugin-scd-layout',
      menu: false,
    },
    {
      name: '首页',
      path: '/',
      component: './index',
    },
  ],
  targets: {
    ie: 11,
  },
  proxy: {
    '/mock': {
      target: 'http://localhost:8000',
      changeOrigin: true,
      pathRewrite: { '^/mock': '' },
    },
    '/localApi': {
      target: 'https://test-gateway.servingcloud.com',
      secure: false,
      changeOrigin: true,
      pathRewrite: { '^/localApi': '' },
    },
  },
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
});
