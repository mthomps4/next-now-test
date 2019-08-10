export default (req, res) => {
  const users = [{ name: 'Matt', email: 'm@m.com' }, { name: 'Em', email: 'em@m.com' }];
  res.json({ users });
};
