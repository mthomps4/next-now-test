export default (req, res) => {
  const appEnv = process.env.APP_ENV || 'NOPE';
  res.json({ appEnv });
};
