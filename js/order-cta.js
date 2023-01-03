const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderModalOverlay.addEventListener('click', closeOrderModal)

function toggleOrderCtaBookmark() {
  // 1. 버튼 is-active클래스
  // 2. icon 클래스 변경 => ? ic-bookmark vs ic-bookmark-filled
  // 3. 북마크 count +1 (aria-label포함)
  const [icon, countSpan] = this.children //아이콘, 카운트span
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))
  let newCount = count

  //console.log(this.classList.contains('is-active')) //is-active클래스를 가지고 있는지 확인 contains
  if (this.classList.contains('is-active')) {
    // NOTE : 활성화가 된 상태 -> 비활성화 (ic-bookmark)
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
  } else {
    // NOTE : 비활성화가 된 상태이니 -> 활성화 (ic-bookmark-filled)
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    newCount = newCount + 1
  }
  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)
