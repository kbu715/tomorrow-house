const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')

function closeMyMenuOnClickingOutside(e) {
  // console.log('WINDOW!!!')
  // 1. 내가 클릭한 요소가 무엇인지 => e.target
  // 2. myMenu가 요소를 포함하고 있는지를 알 수 있는 방법 => contains
  // console.log(myMenu.contains(e.target))

  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickingOutside)
  }
}

function toggleMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    // 앞으로 내가 활성화를 시키겠다!
    window.addEventListener('click', closeMyMenuOnClickingOutside)
  }
  myMenu.classList.toggle('is-active')
}

if (myMenuButton) {
  myMenuButton.addEventListener('click', toggleMyMenu)
}
