const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children
// const orderCtaBookmarkButton = orderCta.children[0]
// const orderCtaBuyButton = orderCta.children[1]

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderForm() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

function closeOrderForm() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderForm)

orderModalOverlay.addEventListener('click', closeOrderForm)

function toggleOrderCtaBookmark() {
  // 1. 버튼 is-active 클래스
  // 2. icon 클래스 변경 => ic-bookmark-filled
  // 3. 카운트 숫자 값을 변경

  const [icon, countSpan] = this.children // [아이콘, 카운트 span]
  // const count = Number(countSpan.innerHTML.replaceAll(',', ''))
  let newCount
  if (localStorage.getItem('countOfBookmark')) {
    newCount = JSON.parse(localStorage.getItem('countOfBookmark'))
  } else {
    newCount = store.countOfBookmark
  }
  if (this.classList.contains('is-active')) {
    newCount -= 1
    localStorage.setItem('countOfBookmark', newCount)
  } else {
    newCount += 1
    localStorage.setItem('countOfBookmark', newCount)
  }

  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
  icon.classList.toggle('ic-bookmark')
  icon.classList.toggle('ic-bookmark-filled')
  this.classList.toggle('is-active')

  store.isBookmarked = !store.isBookmarked
  store.countOfBookmark = newCount
  localStorage.setItem('isBookmarked', store.isBookmarked)
}

function render() {
  const [icon, countSpan] = orderCtaBookmarkButton.children
  store.isBookmarked = JSON.parse(localStorage.getItem('isBookmarked'))

  if (localStorage.getItem('countOfBookmark')) {
    store.countOfBookmark = JSON.parse(localStorage.getItem('countOfBookmark'))
  }

  countSpan.innerHTML = store.countOfBookmark.toLocaleString()
  countSpan.setAttribute(
    'aria-label',
    `북마크 ${store.countOfBookmark.toLocaleString()}회`
  )
  if (store.isBookmarked) {
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    orderCtaBookmarkButton.classList.add('is-active')
  } else {
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    orderCtaBookmarkButton.classList.remove('is-active')
  }
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)
window.addEventListener('load', render)
window.addEventListener('resize', _.throttle(render, 1000))
