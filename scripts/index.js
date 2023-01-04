import HTMLParticlesBundler from "./particles/HTMLParticlesBundler.js";

const navigationBurger = document.querySelector('.navigation_burger')
const navigation = document.querySelector('.navigation')
const header = document.querySelector('header')
const navigationBurgerExpanded = document.querySelector('.navigation_burger__expanded')
const sprite_business = document.querySelector('.experience_content__sprite_business')
const spinner = document.querySelector('.preloader');

const STATE = {
  burgerExpanded: false,
  isDarkTheme: true
}

const STORE = {
  experienceImage: []
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

window.onload = function () {
  setTransitionToAllNodes(0.4);
  animate({
    node: sprite_business,
    frames: 18,
    frameInterval: 50,
    path: 'assets/img/businessman/',
    fileNameNoNumber: 'businessman_run_',
    fileExtension: 'png',
    imageSize: {
      width: 111,
      height: 140
    }
  });
  drawImage();
  hideSpinner();
}

window.addEventListener('resize', (e)=>{
  let width = e.target.innerWidth;

  if (width < SIZES.hideNavigation) {
    hideNavigationMenu(true)
  } else {
    hideNavigationMenu(false)
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

  if (targetClassList?.contains('hide_onclick')) {
    window.location.href = targetElement.href
    toggleBurgerExpand()
  }
})

function hideSpinner() {
  spinner.style.opacity = '0';
  setTimeout(() => {
    spinner.style.display = 'none';
  }, 200)
}

function hideNavigationMenu(hide_bool){
  if (hide_bool) {
    navigationBurger.style.display = DISPLAY.block;
    navigation.style.display = DISPLAY.none;
  } else {
    navigationBurger.style.display = DISPLAY.none;
    navigation.style.display = DISPLAY.block;
    navigationBurgerExpanded.style.display = DISPLAY.none;
  }
}

function toggleBurgerExpand(){
  const lines = navigationBurger.querySelectorAll('.navigation_burger__line')

  if (STATE.burgerExpanded) {
    lines[0].style.top = '20%'
    lines[1].style.top = '40%'
    lines[2].style.top = '60%'
    lines[3].style.top = '80%'

    lines[0].style.transform = 'rotateZ(0)'
    lines[1].style.transform = 'rotateZ(0)'
    lines[2].style.transform = 'rotateZ(0)'
    lines[3].style.transform = 'rotateZ(0)'

    header.style.height = ''
    header.style.alignItems = 'center'
    STATE.burgerExpanded = false
    navigationBurgerExpanded.style.display = DISPLAY.none
  } else {
    lines[0].style.top = '50%'
    lines[1].style.top = '50%'
    lines[2].style.top = '50%'
    lines[3].style.top = '50%'

    lines[0].style.transform = 'rotateZ(45deg)'
    lines[1].style.transform = 'rotateZ(-45deg)'
    lines[2].style.transform = 'rotateZ(45deg)'
    lines[3].style.transform = 'rotateZ(-45deg)'


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

function downloadImages(props) {
  const {imageSize} = props

  for (let i = 1; i <= props.frames; i++) {
    if (i <= 9) {
      i = `0${i}`;
    }
    const image = new Image(imageSize.width, imageSize.height);
    image.src = `${props.path}${props.fileNameNoNumber}${i}.${props.fileExtension}`
    STORE.experienceImage.push(image)
  }
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

  downloadImages(props);

  setInterval(() => {
    node.textContent = ""
    node.appendChild(STORE.experienceImage[currentFrame])
    currentFrame++

    if (currentFrame >= frames) {
      currentFrame = 1;
    }

  }, frameInterval)
}

function drawImage(){
  const canvas = document.querySelector('#author_photo');
  const image = document.querySelector('.presentation__img');
  const CANVAS_PROPS = {
    aspectRatio: 0.9191,
    width: 272,
    height: 250,
    pixelSize: 1
  }
  const htmlParticlesBundler = new HTMLParticlesBundler(canvas, image, CANVAS_PROPS)
  htmlParticlesBundler.particles.draw();
}

