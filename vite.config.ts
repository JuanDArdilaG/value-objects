import { defineConfig } from "vitest/config";
// import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // plugins: [tsconfigPaths()],
  test: {
    include: ["__tests__/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    coverage: { include: ["src/**/*.?(c|m)[jt]s?(x)"] },
  },
});
