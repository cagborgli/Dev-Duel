$('form').submit(() => {
  const username_left = $('.left').val()
  const username_right = $('.right').val()

  console.log(`examining ${username_left}`)
  console.log(`examining ${username_right}`)

  fetch(`${USERS_URL}/?username=${username_left}&username=${username_right}`)
    .then(response => response.json()) // Returns parsed json data from response body as promise
    .then(data => {
      injectUser(data[0], `.user-results.left`)
      injectUser(data[1], `.user-results.right`)
      winnertag(data[0], data[1])

      $('.duel-container').removeClass('hide') // Display '.user-results' element
    })

    .catch(err => {
      $(`user-error`).removeClass('hide')
    })

  return false // return false to prevent default form submission
})
