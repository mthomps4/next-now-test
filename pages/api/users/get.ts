import { NowRequest, NowResponse } from '@now/node';

const users = [{ name: 'Matt', email: 'm@m.com' }, { name: 'Em', email: 'em@m.com' }];
export default (req: NowRequest, res: NowResponse) => {
  const {
    query: { name }
  } = req;
  console.log(name);
  // const {
  //   body: { name }
  // } = req;
  const foundUsers = users.filter(user => user.name == name);
  return res.json({ foundUsers });
};
