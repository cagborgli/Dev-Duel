import * as attributesModule from './user_attributes'

export const userInfo = (user, repoInfo) => {
  user.perfect = attributesModule.perfect_repo(repoInfo)
  user.public = attributesModule.public_repo(repoInfo)
  user.high_star_count = attributesModule.highest_star_count(repoInfo)
  user.total_stars = attributesModule.total_star_count(repoInfo)
  user.language = attributesModule.fav_language(repoInfo)
  user.title = attributesModule.Title(user, repoInfo)
  user.points = attributesModule.game_points(user)
  return user
}
