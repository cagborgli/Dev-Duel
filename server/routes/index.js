import { Router } from 'express'
import axios from 'axios'
import validate from 'express-validation'
import token from '../../token'
import validation from './validation'
import { getuser } from '../../getUser'
import { getusers } from '../../getUsers'

export default () => {
  let router = Router()

  /** GET /health-check - Check service health */
  router.get('/health-check', (req, res) => res.send('OK'))

  /** GET /api/rate_limit - Get github rate limit for your token */
  router.get('/rate', (req, res) => {
    axios
      .get(`http://api.github.com/rate_limit`, {
        headers: { Authorization: token }
      })
      .then(({ data }) => res.json(data))
  })

  /** GET /api/user/:username - Get user */
  router.get('/user/:username', validate(validation.user), (req, res) => {
    getuser(req.params.username, token, res)
      .then(complete_user => res.json(complete_user))
      .catch(() => res.status(404).send(`User Entered Not Found`))
  })

  /** GET /api/users? - Get users */
  router.get('/users/', validate(validation.users), (req, res) => {
    Promise.all(getusers(req.query.username, token, res))
      .then(userArray => res.json(userArray))
      .catch(() => res.status(404).send(`User Entered Not Found`))
  })

  return router
}
