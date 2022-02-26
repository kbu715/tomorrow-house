const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

let currentActiveTab = productTab.querySelector('.is-active')

function toggleActiveTab() {
  // 1. is-active
  const tabItem = this.parentNode

  if (currentActiveTab !== tabItem) {
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem
  }
}

function scrollToTabPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`)

  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  })
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
  button.addEventListener('click', scrollToTabPanel)
})

//NOTE: //REVIEW:
// 사전정보: 각 tabPanel의 y축 위치 (문서의 시작점에서부터 얼마나 아래에 있는지)
// 요소의 y축 위치 = window.scrollY + element.getBoundingClientRect().top

const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]

const productTabPanelList = productTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`)
  return tabPanel
})

const productTabPanelPositionMap = {}

function detectTabPanelPosition() {
  //NOTE: 각각의 tabPanel의 y축 위치를 찾는다
  // productTabPanelPositionMap에 그 값을 업데이트
  // EXAMPLE:
  /*
  {
    'product-spec': 1000,
    'product-review': 5000,
  }
  */

  productTabPanelList.forEach((panel) => {
    // NOTE:
    // panel의 id값 <- key
    // y축 위치 <- value
    const id = panel.getAttribute('id')
    const yPosition = window.scrollY + panel.getBoundingClientRect().top

    productTabPanelPositionMap[id] = yPosition
  })

  // console.log(productTabPanelPositionMap)
}

//NOTE: window의 모든 요소들이 load 되었을 때 : 'load'
window.addEventListener('load', detectTabPanelPosition)
window.addEventListener('resize', detectTabPanelPosition)
