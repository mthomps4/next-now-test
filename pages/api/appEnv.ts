export default (req, res) => {
  console.log(process.env)
  const appEnv = process.env.APP_ENV || 'NOPE';
  res.json({ appEnv });
};
