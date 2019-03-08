export const create_user = user => {
  let user_info = {}
  user_info.login = user.login ? user.login : 'None'
  user_info.name = user.name ? user.name : 'None'
  user_info.location = user.location ? user.location : 'None'
  user_info.email = user.email ? user.email : 'None'
  user_info.bio = user.bio ? user.bio : 'None'
  user_info.avatar_url = user.avatar_url
  user_info.followers = user.followers
  user_info.following = user.following

  return user_info
}

export const perfect_repo = repo_info => {
  let has_no_issues = 0
  for (let a of repo_info) {
    if (a.open_issues === 0) {
      has_no_issues++
    }
  }
  return has_no_issues
}

export const public_repo = repo_info => {
  let num_public = 0
  for (let b of repo_info) {
    if (!b.private) {
      num_public++
    }
  }
  return num_public
}

export const highest_star_count = repo_info => {
  let high_count = 0
  for (let c of repo_info) {
    if (c.stargazers_count > high_count) {
      high_count = c.stargazers_count
    }
  }
  return high_count
}

export const total_star_count = repo_info => {
  // can use .reduce instead
  let star_count = 0
  for (let d of repo_info) {
    star_count += d.stargazers_count
  }
  return star_count
}

export const fav_language = repo_info => {
  let language = ''
  let value = 0
  let f_language = {}
  for (let e of repo_info) {
    if (f_language.hasOwnProperty(e.language)) {
      f_language[e.language] += 1
    }
    f_language[e.language] = 1
  }

  for (let l in f_language) {
    if (f_language[l] > value) {
      value = f_language[l]
      language = l
    }
  }
  return value === 0 ? 'None' : language
}

export const forked_repo = repo_info => {
  let num_forked = 0
  for (let f of repo_info) {
    if (f.forked) {
      num_forked++
    }
  }
  return num_forked
}

export const numlanguages = repo_info => {
  let num = 0
  let f_language = {}
  for (let g of repo_info) {
    if (!f_language.hasOwnProperty(g.language)) {
      f_language[g.language] = 1
      num += 1
    }
  }
  return num
}
export const Title = (user, repo_info) => {
  let title = []
  let numforked_repo = forked_repo(repo_info)
  let languages = numlanguages(repo_info)
  if (user.public_repo / numforked_repo <= 0.5) {
    title.push('Forker')
  }
  if (languages === 1) {
    title.push('One-Trick Pony')
  }
  if (languages > 10) {
    title.push('Jack of all Trades')
  }
  if (user.following >= user.followers * 2 && user.following !== 0) {
    title.push('Stalker')
  }
  if (user.followers >= user.following * 2 && user.followers !== 0) {
    title.push('Mr. Popular')
  }
  if (user.followers === 0) {
    title.push('Lone Wolf')
  }
  if (title.length === 0) {
    return 'None'
  }

  return title
}

export const game_points = user => {
  let points = user.followers * 5 + user.perfect * 10 + user.total_stars * 15
  return points
}
