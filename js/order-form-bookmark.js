const bookmarkBtn = document.querySelector(
  '.floating-order-form .bookmark-button'
)
const bookmarkIcon = bookmarkBtn.querySelector('i')

function render() {
  store.isBookmarked = JSON.parse(localStorage.getItem('isBookmarked'))
  if (store.isBookmarked) {
    bookmarkBtn.classList.add('is-active')
    bookmarkIcon.classList.add('ic-bookmark-filled')
    bookmarkIcon.classList.remove('ic-bookmark')
  } else {
    bookmarkBtn.classList.remove('is-active')
    bookmarkIcon.classList.add('ic-bookmark')
    bookmarkIcon.classList.remove('ic-bookmark-filled')
  }
}

function toggleOrderFormBookmark() {
  let newCount
  if (localStorage.getItem('countOfBookmark')) {
    newCount = JSON.parse(localStorage.getItem('countOfBookmark'))
  } else {
    newCount = store.countOfBookmark
  }
  if (store.isBookmarked) {
    newCount -= 1
  } else {
    newCount += 1
  }
  bookmarkIcon.classList.toggle('ic-bookmark-filled')
  bookmarkIcon.classList.toggle('ic-bookmark')
  this.classList.toggle('is-active')
  store.isBookmarked = !store.isBookmarked
  store.countOfBookmark = newCount
  localStorage.setItem('isBookmarked', store.isBookmarked)
  localStorage.setItem('countOfBookmark', newCount)
}

bookmarkBtn.addEventListener('click', toggleOrderFormBookmark)

window.addEventListener('load', render)
window.addEventListener('resize', _.throttle(render, 1000))
