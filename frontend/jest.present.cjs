const path = require("path");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [path.resolve(__dirname, "jest.setup.ts")],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testMatch: ["**/?(*.)+(spec|test).(ts|tsx|js|jsx)"],
};
