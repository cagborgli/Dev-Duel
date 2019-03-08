const injectUser = (user, tag) => {
  $(tag).empty().append(`
<span class="username">${user.login}</span>
<span class="full-name">${user.name}</span>
<span class="location">${user.location}</span>
<span class="email">${user.email}</span>
<span class="bio">${user.bio}</span>
<img class="avatar" src="${user.avatar_url}" alt="avatar picture">
<div class="stats">
<div class="stat">
  <span class="label">Titles:&nbsp;</span>
  <span class="titles value">${user.title}</span>
</div>
<div class="stat">
  <span class="label">Favorite language:&nbsp;</span>
  <span class="favorite-language value">${user.language}</span>
</div>
<div class="stat">
  <span class="label">Total stars:&nbsp;</span>
  <span class="total-stars value">${user.total_stars}</span>
</div>
<div class="stat">
  <span class="label">Highest star count:&nbsp;</span>
  <span class="most-starred value">${user.high_star_count}</span>
</div>
<div class="stat">
  <span class="label">Public repos:&nbsp;</span>
  <span class="public-repos value">${user.public}</span>
</div>
<div class="stat">
  <span class="label">'Perfect' Repos:&nbsp;</span>
  <span class="perfect-repos value">${user.perfect}</span>
</div>
<div class="stat">
  <span class="label">Followers:&nbsp;</span>
  <span class="followers value">${user.followers}</span>
</div>
<div class="stat">
  <span class="label">Following:&nbsp;</span>
  <span class="following value">${user.following}</span>
</div>
</div>
`)
}

const winnertag = (user1, user2) => {
  if (user1.points > user2.points) {
    $(`.user-results.left`).prepend(
      `<span class="winner">WINNER ${user1.points} POINTS</span>`
    )
    $(`.user-results.right`).prepend(
      `<span class="loser">LOSER ${user2.points} POINTS</span>`
    )
  } else if (user1.points < user2.points) {
    $(`.user-results.left`).prepend(
      `<span class="loser">LOSER ${user1.points} POINTS</span>`
    )
    $(`.user-results.right`).prepend(
      `<span class="winner">WINNER ${user2.points} POINTS</span>`
    )
  } else {
    $(`.user-results.left`).prepend(
      `<span class="winner">WINNER ${user1.points} POINTS</span>`
    )
    $(`.user-results.right`).prepend(
      `<span class="winner">WINNER ${user2.points} POINTS</span>`
    )
  }
}
