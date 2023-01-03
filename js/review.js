const reviewLikeButtonList = document.querySelectorAll(
  '.review-card-footer button'
)
const HELPFUL = '도움됨'
const NOT_HELPFUL = '도움이 돼요'
// const checkIcon = '<i class="ic-check" aria-hidden></i>'

function toggleReviewLikeButton() {
  // 1. btn 의 클래스 btn-primary ->btn-outlined
  // 2. 텍스트 변경 : 도움됨 -> 도움이 돼요
  // 3. count : N명에게 도움이 되었습니다.

  const isLiked = this.classList.contains('btn-primary') //좋아요 된 상태
  const textElement = this.nextElementSibling
  const reviewCardFooter = this.parentNode

  if (isLiked) {
    //비활성화
    this.innerHTML = NOT_HELPFUL
  } else {
    this.innerHTML = HELPFUL
    // 활성화
    const checkIcon = document.createElement('i') //HTML요소 생성
    checkIcon.classList.add('ic-check')
    checkIcon.setAttribute('aria-hidden', true) //요소추가
    this.prepend(checkIcon)
  }

  if (textElement) {
    //n명 -> n값 업데이트
    const countSpan = textElement.querySelector('span')
    const count = Number(countSpan.innerHTML.replaceAll(',', ''))
    let newCount = count
    if (isLiked) {
      //비활성화 count-1
      newCount = newCount - 1
      if (newCount === 0) {
        // textElement 삭제
        reviewCardFooter.removeChild(textElement)
      } else {
        countSpan.innerHTML = newCount.toLocaleString()
      }
    } else {
      //활성화 count +1
      newCount = newCount + 1
      countSpan.innerHTML = newCount.toLocaleString()
    }
  } else {
    if (!isLiked) {
      //앞으로는 활성화가 될거다. => 1명count
      const newTextElement = document.createElement('p')
      newTextElement.innerHTML =
        '<strong><span>1</span>명</strong>에게 도움이되었습니다.'
      reviewCardFooter.appendChild(newTextElement)
    }
  }
  this.classList.toggle('btn-primary')
  this.classList.toggle('btn-outlined')
}

reviewLikeButtonList.forEach((button) => {
  button.addEventListener('click', toggleReviewLikeButton)
})
