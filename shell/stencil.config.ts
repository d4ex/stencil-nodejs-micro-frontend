import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'shell',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      baseUrl: 'http://localhost:3030',
      serviceWorker: null // disable service workers
    }
  ]
};
