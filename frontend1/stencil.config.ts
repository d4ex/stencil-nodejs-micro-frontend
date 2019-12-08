import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'frontend1',
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
      baseUrl: 'http://localhost:3001',
      serviceWorker: null // disable service workers
    }
  ]
};
