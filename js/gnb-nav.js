const gnbNav = document.querySelector('.gnb-nav.sm-hidden')
const navList = gnbNav.querySelectorAll('.gnb-nav-list li')

function deactivate() {
  navList.forEach((list) => {
    list.classList.remove('is-active')
  })
}

function toggleGnbNav() {
  deactivate()
  this.classList.add('is-active')
}

navList.forEach((list) => {
  list.addEventListener('click', toggleGnbNav)
})
