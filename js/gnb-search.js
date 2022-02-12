const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')
const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)

console.log(gnbSearchHistoryList, deleteAllButton)

function closeGnbSearchOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchOnClickingOutside)
  }
}

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length === 0) {
    return
  }
  if (!gnbSearch.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchOnClickingOutside)
  }
  gnbSearchHistory.classList.add('is-active')
}

function deleteAllHistoryItems() {
  // gnbSearchHistoryList 안에 있는 모든 li를 삭제해
  gnbSearchHistoryList.innerHTML = ''
  gnbSearchHistory.classList.remove('is-active')
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

deleteAllButton.addEventListener('click', deleteAllHistoryItems)
