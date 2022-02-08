const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

// console.log(gnbSearch, gnbSearchInput, gnbSearchHistory)

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
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)
