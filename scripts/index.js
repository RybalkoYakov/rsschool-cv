const navigationBurger = document.querySelector('.navigation_burger')
const navigation = document.querySelector('.navigation')
const header = document.querySelector('header')
const navigationBurgerExpanded = document.querySelector('.navigation_burger__expanded')

const STATE = {
  burgerExpanded: false,
  isDarkTheme: true
}

const THEME_COLORS_NAMES = {
  bg: '--theme-bg-color-dark',
  text: '--text-main-color-dark',
}

const DISPLAY = {
  block: 'block',
  none: 'none'
}

const SIZES = {
  zero: '0',
  full: '100%',
  fullScreenHeight: '100vh',
  hideNavigation: 1000,
}

window.onload = function (e) {
  setTransitionToAllNodes(0.4)
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

  if (targetClassList?.contains('input_switch__slider')) {
    changeTheme()
  }

  if (targetClassList?.contains('hire_me_btn')) {
    hireMe()
  }
})

function toggleNavigationMenu(hide_bool){
  if (hide_bool) {
    navigationBurger.style.display = DISPLAY.block
    navigation.style.display = DISPLAY.none
  } else {
    navigationBurger.style.display = DISPLAY.none
    navigation.style.display = DISPLAY.block
    navigationBurgerExpanded.style.display = DISPLAY.none
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

function setTransitionToAllNodes(animationDuration = '0.4s', whichProperty = 'all', animationStyle = 'linear'){
  const nodes = document.querySelectorAll('*')

  nodes.forEach(value => {
    value.style.transition = `${whichProperty} ${animationStyle} ${animationDuration}s`;
  })
}

function changeTheme(){
  const root = document.querySelector(':root')

  if (STATE.isDarkTheme) {
    root.style.setProperty(THEME_COLORS_NAMES.bg,'#ffffff')
    root.style.setProperty(THEME_COLORS_NAMES.text,'#000000')
    header.querySelector('.first').style.display = DISPLAY.block
    header.querySelector('.second').style.display = DISPLAY.none
    STATE.isDarkTheme = false
  } else {
    root.style.setProperty(THEME_COLORS_NAMES.bg,'#000000')
    root.style.setProperty(THEME_COLORS_NAMES.text,'#ffffff')
    header.querySelector('.first').style.display = DISPLAY.none
    header.querySelector('.second').style.display = DISPLAY.block
    STATE.isDarkTheme = true
  }
}

function hireMe(){
  window.location.href = "tel:+375292582264"
}