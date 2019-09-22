export default (_req, res) => {
  const dbName = process.env.TYPEORM_DATABASE || 'NOPE';
  res.json({ dbName });
};
