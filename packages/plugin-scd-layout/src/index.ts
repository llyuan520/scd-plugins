import { IApi, utils, IRoute } from 'umi';
import { join, dirname } from 'path';
// import { readFileSync } from 'fs';
import getLayoutContent from './utils/getLayoutContent';

// const { Mustache } = utils;
const DIR_NAME = 'scd-layout';
export default function (api: IApi) {
  api.describe({
    key: 'scdLayout',
    config: {
      schema(joi) {
        return joi.object({
          path: joi.string(),
          title: joi.string(),
        });
      },
      default: {
        path: '/',
        title: '{current}',
      },
      // onChange: api.ConfigChangeType.regenerateTmpFiles,
    },
    // enableBy: api.EnableBy.config,
  });

  api.onGenerateFiles(() => {
    // 开始ScdLayout
    api.writeTmpFile({
      path: `${DIR_NAME}/ScdLayout.tsx`,
      content: getLayoutContent(),
    });

    //   // runtime.tsx
    //   // 取得 register 注册的 hooks 执行后的数据。
    // const runtimeTpl = readFileSync(
    //   join(__dirname, 'runtime.tsx.tpl'),
    //   'utf-8',
    // );
    // const opts = api.userConfig.scdLayout || {};

    // api.writeTmpFile({
    //   path: `${DIR_NAME}/runtime.tsx`,
    //   content: Mustache.render(runtimeTpl, {
    //     config: JSON.stringify(opts),
    //   }),
    // });

    // api.writeTmpFile({
    //   path: join(DIR_NAME, 'runtime.tsx'),
    //   content: readFileSync(join(__dirname, 'runtime.tsx.tpl'), 'utf-8'),
    // });
  });

  api.addProjectFirstLibraries(() => ({
    name: 'antd',
    path: dirname(require.resolve('antd/package.json')),
  }));

  api.modifyRoutes((routes) => {
    let finRoutes = ([] as IRoute[]).concat(
      routes.map((route) => {
        if (route.path === '/') {
          route.wrappers = [
            ...(Array.isArray(route.wrappers) ? route.wrappers : []),
            utils.winPath(
              join(api.paths.absTmpPath || '', DIR_NAME, 'ScdLayout.tsx'),
            ),
          ];
        }
        return route;
      }),
    );
    return finRoutes;
  });

  // 如果是用这种方式导出 对应的页面需要导出单独的变量名 如：export const ScdLayout = (props) => <ScdLayoutCom {...props} />
  api.addUmiExports(() => [
    {
      exportAll: true,
      source: `../${DIR_NAME}/ScdLayout`,
    },
  ]);

  // api.addRuntimePlugin(() => [
  //   join(api.paths.absTmpPath!, 'scd-layout/runtime.tsx'),
  // ]);
  api.addRuntimePluginKey(() => 'scdLayout');
}
