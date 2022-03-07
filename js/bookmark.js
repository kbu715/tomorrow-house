let isBookmarked = JSON.parse(localStorage.getItem('isBookmarked'))

// console.log(isBookmarked)

const bookmarkOnBtn = document.querySelector(
  '.floating-order-form .button-group .bookmark-button'
)

const bookmarkOffBtn = document.querySelector(
  '.floating-order-form .button-group .bookmark-button.is-active'
)

if (isBookmarked) {
  bookmarkOnBtn.style.display = 'none'
} else {
  bookmarkOffBtn.style.display = 'none'
}

bookmarkOffBtn.addEventListener('click', function () {
  bookmarkOffBtn.style.display = 'none'
  bookmarkOnBtn.style.display = 'block'
  isBookmarked = false
  localStorage.setItem('isBookmarked', isBookmarked)
})

bookmarkOnBtn.addEventListener('click', function () {
  bookmarkOffBtn.style.display = 'block'
  bookmarkOnBtn.style.display = 'none'
  isBookmarked = true
  localStorage.setItem('isBookmarked', isBookmarked)
})
