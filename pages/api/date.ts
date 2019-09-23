export default (_req, res) => {
  const date = new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');

  res.json({ date });
};
