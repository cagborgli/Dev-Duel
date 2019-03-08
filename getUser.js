import { userInfo } from './injectInfo'
import { create_user } from './user_attributes'
import axios from 'axios'

export const getuser = (req, token, res) =>
  axios
    .all([
      axios.get(`http://api.github.com/users/${req}`, {
        headers: { Authorization: token }
      }),
      axios.get(`http://api.github.com/users/${req}/repos`, {
        headers: { Authorization: token }
      })
    ])
    .then(([{ data: userData }, { data: repos }]) => {
      return userInfo(create_user(userData), repos)
    })
