module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testEnvironment: "jsdom",
  transform: {
    // "^.+\\.vue$": "vue-jest",
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "vue", "json"],
  transformIgnorePatterns: [
    "/node_modules/(?!axios)", // Ensure axios is not ignored
    "\\.pnp\\.[^\\/]+$",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
