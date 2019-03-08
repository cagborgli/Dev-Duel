$('form').submit(() => {
  const username = $('form input').val()

  console.log(`examining ${username}`)

  // Fetch data for given user

  fetch(`${USER_URL}/${username}`)
    .then(response => response.json()) // Returns parsed json data from response body as promise
    .then(data => {
      injectUser(data, `.user-results`)
      $('.user-results').removeClass('hide') // Display '.user-results' element
    })
    .catch(err => {
      $(`duel-error`).removeClass('hide')
    })

  return false // return false to prevent default form submission
})
