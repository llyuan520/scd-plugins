export default () => {
  return {
    plugins: [
      require.resolve('./react'),
      require.resolve('@umijs/plugin-request'),
      require.resolve('@umijs/plugin-scd-layout'),
    ],
  };
};
