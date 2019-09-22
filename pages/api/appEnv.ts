export default (_req, res) => {
  const appEnv = process.env.APP_ENV || 'NOPE';
  res.json({ appEnv });
};
