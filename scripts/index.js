import Particles from './particles/Particles.js';

const navigationBurger = document.querySelector('.navigation_burger')
const navigation = document.querySelector('.navigation')
const header = document.querySelector('header')
const navigationBurgerExpanded = document.querySelector('.navigation_burger__expanded')
const sprite_business = document.querySelector('.experience_content__sprite_business')

const STATE = {
  burgerExpanded: false,
  isDarkTheme: true
}

const THEME_COLOR_NAMES = {
  bg: '--theme-bg-color-dark',
  text: '--text-main-color-dark',
}

const TAG_NAMES = {
  meta: 'META',
  title: 'TITLE',
  head: 'HEAD',
  link: "LINK"
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

// SPINNER //
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.preloader').style.display = 'none'
})

window.onload = function () {
  setTransitionToAllNodes(0.4);
  animate({
    node: sprite_business,
    frames: 18,
    frameInterval: 50,
    path: 'assets/img/businessman/',
    fileNameNoNumber: 'businessman_run_',
    fileExtension: 'png'
  });
  drawImage();
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
  const targetElement = e.target

  if (targetClassList?.contains('navigation_burger') || targetClassList?.contains('navigation_burger__line')) {
    toggleBurgerExpand();
  }

  if (targetClassList?.contains('input_switch__slider')) {
    changeTheme()
  }

  if (targetClassList?.contains('hire_me_btn')) {
    hireMe()
  }

  if (targetClassList?.contains('hide_onclick')) {
    window.location.href = targetElement.href
    toggleBurgerExpand()
  }

  if (targetClassList?.contains('course_logo') || targetClassList?.contains('course_logo__img')) {
    window.open('https://rs.school/js/')
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
    if
    (
      value.tagName !== TAG_NAMES.meta &&
      value.tagName !== TAG_NAMES.title &&
      value.tagName !== TAG_NAMES.head &&
      value.tagName !== TAG_NAMES.link
    ) {
      if (value.style.transition === '') {
        value.style.transition = `${whichProperty} ${animationStyle} ${animationDuration}s`;
      }
    }
  })
}

function changeTheme(){
  const root = document.querySelector(':root')

  if (STATE.isDarkTheme) {
    root.style.setProperty(THEME_COLOR_NAMES.bg,'#ffffff')
    root.style.setProperty(THEME_COLOR_NAMES.text,'#000000')
    header.querySelector('.first').style.display = DISPLAY.block
    header.querySelector('.second').style.display = DISPLAY.none
    STATE.isDarkTheme = false
  } else {
    root.style.setProperty(THEME_COLOR_NAMES.bg,'#000000')
    root.style.setProperty(THEME_COLOR_NAMES.text,'#ffffff')
    header.querySelector('.first').style.display = DISPLAY.none
    header.querySelector('.second').style.display = DISPLAY.block
    STATE.isDarkTheme = true
  }
}

function hireMe() {
  window.location.href = "mailto:RybalkoYakov@outlook.com"
}

function animate(props) {
  const node = props.node;
  const frames = props.frames;
  const path = props.path;
  const fileNameNoNumber = props.fileNameNoNumber;
  const fileExtension = props.fileExtension;

  if (!node || !frames || !path || !fileNameNoNumber || !fileExtension) {
    throw new Error('Function animate does not receive the required parameters.')
  }

  const frameInterval = props.frameInterval || 20;

  let currentFrame = 1;

  setInterval(() => {
    if (currentFrame <= 9) {
      currentFrame = `0${currentFrame}`;
    }
    node.style.background = `url(${path}${fileNameNoNumber}${currentFrame}.${fileExtension}) no-repeat 0 0`
    currentFrame++

    if (currentFrame >= frames) {
      currentFrame = 1;
    }

  }, frameInterval)
}

function drawImage(){
  const canvas = document.querySelector('#author_photo');
  const ctx = canvas.getContext('2d');
  const image = document.querySelector('.presentation__img');

  const CANVAS_PROPS = {
    canvasRatio: 0.9191,
    width: 272,
    height: 250
  }

  canvas.width = CANVAS_PROPS.width;
  canvas.height = CANVAS_PROPS.height;
  ctx.drawImage(image, 0, 0, CANVAS_PROPS.width, CANVAS_PROPS.height);

  const particles  = new Particles({
    ctx,
    canvasWidth: CANVAS_PROPS.width,
    canvasHeight: CANVAS_PROPS.height,
    pixelSize: 1
  });

  particles.draw();
}