export default {
  preset: "jest-puppeteer",
  transform: {
    "^.+\\.tsx?$": ["ts-jest"],
  },
  testTimeout: 80000,
  snapshotSerializers: ["jest-serializer-html"],
  watchman: false,
};
