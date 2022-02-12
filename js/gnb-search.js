const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')
const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const deleteButtonList = gnbSearchHistoryList.querySelectorAll('.delete-button')

function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchOnClickingOutside)
}

function closeGnbSearchOnClickingOutside(e) {
  // console.log('CLOSE!!!')
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory()
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
  closeGnbSearchHistory()
}

function deleteSearchHistoryItem(e) {
  // event의 전파를 막음
  e.stopPropagation()
  // li 삭제
  // console.log('DELETE!!!')
  const itemToDelete = this.parentNode
  gnbSearchHistoryList.removeChild(itemToDelete)

  if (gnbSearchHistoryList.children.length === 0) {
    closeGnbSearchHistory()
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

deleteAllButton.addEventListener('click', deleteAllHistoryItems)

deleteButtonList.forEach((button) => {
  button.addEventListener('click', deleteSearchHistoryItem)
})
