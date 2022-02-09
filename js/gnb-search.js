const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

const gnbSearchHistoryDeleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)

const gnbSearchHistoryList = gnbSearchHistory.querySelector(
  '.search-history-list'
)

let template
let searchHistoryList

gnbSearchHistoryList.innerHTML = makeSearchHistoryList()

function makeSearchHistoryList() {
  template = ''
  searchHistoryList = localStorage.getItem('searchHistoryList')
    ? localStorage.getItem('searchHistoryList').split(',')
    : []
  searchHistoryList.forEach((item) => {
    template += makeSearchHistoryItem(item)
  })
  return template
}

function makeSearchHistoryItem(item) {
  return `<li class="search-history-item">
              <button class="word-button" type="button">
                ${item}
              </button>
              <button class="delete-button" type="button" aria-label="검색어 삭제">
                <i class="ic-close"></i>
              </button>
            </li>`
}

function closeGnbSearchOnClickingOutside(e) {
  // console.log('WINDOW@@@')
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchOnClickingOutside)
  }
}

function openGnbSearchHistory() {
  if (!gnbSearch.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchOnClickingOutside)
  }

  gnbSearchHistory.classList.add('is-active')
  gnbSearchHistoryList.innerHTML = makeSearchHistoryList()
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

gnbSearchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (e.target.value !== '') {
      searchHistoryList.push(e.target.value)
      localStorage.setItem('searchHistoryList', searchHistoryList)
      gnbSearchHistory.classList.remove('is-active')
      gnbSearchInput.value = ''
      // elem.blur(): focus를 제거
      gnbSearchInput.blur()
    }
  }
})

gnbSearchHistoryDeleteAllButton.addEventListener('click', function () {
  gnbSearchHistory.classList.remove('is-active')
  localStorage.clear()
})
