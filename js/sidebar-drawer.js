const drawerMenuButtonList = document.querySelectorAll(
  '.sidebar-nav .drawer-menu-button'
)

console.log(drawerMenuButtonList)

function toggleDrawerMenu() {
  // drawerMenuButton 을 감싸고 있는 drawer-menu한테 is-open 토글
  const drawerMenu = this.parentNode //부모요소인 drawer-menu를 찾음
  drawerMenu.classList.toggle('is-open')
}

drawerMenuButtonList.forEach(function (button) {
  button.addEventListener('click', toggleDrawerMenu)
})
