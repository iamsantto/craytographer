
$(function() {
  // ScrollAppear
  if (typeof $.fn.scrollAppear === 'function') {
    $('.scrollappear').scrollAppear()
  }

  // Zooming
  new Zooming({
    customSize: '100%',
    scaleBase: 0.9,
    scaleExtra: 0
  }).listen('.zooming')

  // Share buttons
  $('.article-share a').on('click', function() {
    window.open($(this).attr('href'), 'Share', 'width=200,height=200,noopener')
    return false
  })

  function validateEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function showForm () {
    document.querySelector('#sub-fieldset').innerHTML = '<input name="email" id="email" placeholder="email address" size="50" autocomplete="on" required><button type="submit" class="highlight-btn foo-btn">Subscribe</button>'
  }

  function addInnerHtml (innerHTML) {
    document.querySelector('#sub-fieldset').innerHTML = innerHTML;
    document.querySelector('#sub-try-again').addEventListener("click", function(e) {
      showForm()
    });
  }

  $('#subscribe-form').on('submit', function(e) {
    e.preventDefault()

    const body = {
      email: document.querySelector('#email').value
    }

    let innerHTML

    if (validateEmail(body.email)) {
      const xhr = new XMLHttpRequest()
      xhr.open("POST", "https://api.craytographer.com/users/subscribe", true)
      xhr.setRequestHeader("Content-Type", "application/json")

      xhr.send(JSON.stringify(body));

      xhr.onload = function () {
        const response = JSON.parse(xhr.response)

        if (response.status) {
          if (response.status === 200) {
            innerHTML = 'Successfully subscribed. &nbsp <a id="sub-try-again">Add another mail?</a>'
            addInnerHtml(innerHTML)
          } else if (response.status === 409) {
            innerHTML = 'Looks like you are already subscribed. &nbsp <a id="sub-try-again">Add another mail?</a>'
            addInnerHtml(innerHTML)
          }
        } else {
          innerHTML = 'Oops! Looks like something went wrong, please try again later. &nbsp <a id="sub-try-again">Try again?</a>'
          addInnerHtml(innerHTML)
        }
      }
    } else {
      innerHTML = 'Oops! Looks like an invalid email address. &nbsp <a id="sub-try-again">Try again?</a>'
      addInnerHtml(innerHTML)
    }
  })
})
;
