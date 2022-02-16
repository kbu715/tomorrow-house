const reviewLikeButton = document.querySelector('.review-card-footer button')

const HELPFUL = '도움됨'
const NOT_HELPFUL = '도움이 돼요'
const checkIcon = '<i class="ic-check" aria-hidden></i>'

function toggleReviewLikeButton() {
  // 1. btn의 클래스 btn-primary <-> btn-outlined
  // 2. 텍스트 변경: 도움됨 <-> 도움이 돼요
  // 3. count: N명에게 도움이 되었습니다.

  const isLiked = this.classList.contains('btn-primary')

  if (isLiked) {
    // 비활성화
    this.innerHTML = NOT_HELPFUL
  } else {
    // 활성화
    this.innerHTML = `${checkIcon}${HELPFUL}`
  }
  this.classList.toggle('btn-primary')
  this.classList.toggle('btn-outlined')
}

reviewLikeButton.addEventListener('click', toggleReviewLikeButton)
