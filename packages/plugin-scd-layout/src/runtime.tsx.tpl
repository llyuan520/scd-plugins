import React from 'react';
import ScdLayout from './ScdLayout';
import { ApplyPluginsType } from 'umi';
import { plugin } from '../core/umiExports';

export function rootContainer(container: React.ReactNode) {
  const runtimeScdLayout = plugin.applyPlugins({
    key: 'scdLayout',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  return React.createElement(ScdLayout, {...runtimeScdLayout}, container);
}
