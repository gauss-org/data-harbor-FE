import { coverageConfigDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.mjs",
    coverage: {
      enabled: true,
      provider: "istanbul",
      reporter: ["lcov", "html", "json-summary", "json", "text"],
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80,
      },
      exclude: [...coverageConfigDefaults.exclude, "./*", "test-utils"],
    },
    include: [
      "src/app/**/*.test.tsx",
      "src/app/**/*.test.ts",
      "src/components/**/*.test.tsx",
      "src/hooks/**/*.test.ts",
    ],
  },
});
