const orderCta = document.querySelector('.order-cta')
//const orderCtaBuyButton = orderCta.querySelector('.btn-primary');
//const orderCtaBookmarkButton = orderCta.querySelector('.btn-ghost');
//이렇게도 가능1
// const orderCtaBookmarkButton = orderCta.children[0]
// const orderCtaBuyButton = orderCta.children[1]
// console.log("children",orderCtaBookmarkButton)
//비구조화할당(ES6)으로도 가능2(배열의 값을 알고 있다면)
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

// console.log(orderModal.nextElementSibling) //형제요소 -> cart-modal
// console.log(orderModal.previousElementSibling) // 이전요소 -> search-modal
// console.log(orderCta.children) // 자식요소

orderCtaBuyButton.addEventListener('click', function () {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
})

orderModalOverlay.addEventListener('click', function () {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
})
