import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    reporters: ['default', 'junit'],
    outputFile: { junit: 'test-results/junit.xml' },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      reportsDirectory: 'coverage',
    },
  },
});
