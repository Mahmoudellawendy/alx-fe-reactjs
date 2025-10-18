// jest.config.js
export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // لو بتستخدم babel مع jest لتحويل الكود JSX
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
};
