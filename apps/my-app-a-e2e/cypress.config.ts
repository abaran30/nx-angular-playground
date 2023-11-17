import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
// import { getPreprocessorConfig } from '@jscutlery/cypress-harness/preprocessor-config';

export default defineConfig({
  e2e: nxE2EPreset(__dirname),
  // ...getPreprocessorConfig
});
