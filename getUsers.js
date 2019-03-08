import { getuser } from './getUser'

export const getusers = (req, token) => {
  const users = []
  users.push(getuser(req[0], token))
  users.push(getuser(req[1], token))
  return users
}
