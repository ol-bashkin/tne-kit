module.exports = {
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "@vue/vue3-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  snapshotSerializers: ["jest-serializer-vue-tjw"],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  updateSnapshot: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,vue}",
    "!**/node_modules/**",
    "!**/index.**",
  ],
  coverageReporters: ["lcov", "html", "text"],
};
