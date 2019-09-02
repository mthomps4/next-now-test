export default (req, res) => {
  const appEnv = process.env.APP_ENV || 'NOPE';

  console.log(process.env.APP_ENV);

  res.json({ appEnv });
};
