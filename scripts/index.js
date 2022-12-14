const navigationBurger = document.querySelector('.navigation_burger')
const navigation = document.querySelector('.navigation')
const header = document.querySelector('header')
const navigationBurgerExpanded = document.querySelector('.navigation_burger__expanded')

const STATE = {
  burgerExpanded: false
}

const DISPLAY = {
  block: 'block',
  none: 'none'
}

const SIZES = {
  zero: '0',
  full: '100%',
  fullScreenHeight: '100vh',
  hideNavigation: 1250,
}

window.addEventListener('resize', (e)=>{
  let width = e.target.innerWidth;

  if (width < SIZES.hideNavigation) {
    toggleNavigationMenu(true)
  } else {
    toggleNavigationMenu(false)
  }
})


window.addEventListener('pointerdown', (e) => {
  const targetClassList = e.target?.classList

  if (targetClassList?.contains('navigation_burger') || targetClassList?.contains('navigation_burger__line')) {
    toggleBurgerExpand();
  }
})

function toggleNavigationMenu(hide_bool){
  if (hide_bool) {
    navigationBurger.style.display = DISPLAY.block
    navigation.style.display = DISPLAY.none
  } else {
    navigationBurger.style.display = DISPLAY.none
    navigation.style.display = DISPLAY.block
  }
}

function toggleBurgerExpand(){
  if (STATE.burgerExpanded) {
    header.style.height = ''
    header.style.alignItems = 'center'
    STATE.burgerExpanded = false
    navigationBurgerExpanded.style.display = DISPLAY.none
  } else {
    header.style.height = SIZES.fullScreenHeight
    header.style.alignItems = 'flex-start'
    STATE.burgerExpanded = true
    navigationBurgerExpanded.style.display = DISPLAY.block
  }
}