export default (req, res) => {
  const appEnv = process.env.DB_URL || 'NOPE';

  res.json({ appEnv });
};
