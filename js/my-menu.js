const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')

function closeMyMenuOnClickingOutside(e) {
  // console.log(e.target)
  // 1. 내가 클릭한 요소가 무엇인지? 디테일한 정보 -> event.target
  // 2. myMenu가 요소를 포함하고 있는지를 알 수 있는 방법 -> contains!
  // myMenu가 e.target을 포함하고 있지 않은경우 -> myMenu에 is-active를 제거.
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickingOutside)
  }
}

function toggleMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    // 앞으로 내가 is-active를 활성화 시키겠다
    window.addEventListener('click', closeMyMenuOnClickingOutside)
  }
  myMenu.classList.toggle('is-active')
}

myMenuButton.addEventListener('click', toggleMyMenu)

//my-menu영역 밖을 클릭했을때 닫힐 수 있게(클릭 대상이 명확하지 않은 경우)
