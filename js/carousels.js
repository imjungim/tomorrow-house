const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list', //thumbnail buttons
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  controls: false,
  navContainer: '.user-gallery.is-mobile .thumbnail-list', //thumbnail buttons
  navAsThumbnails: true,
  gutter: 4,
  edgePadding: 16,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGalleryDesktop = tns({
  container: '.user-gallery.is-desktop .slider-list',
  controls: true,
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  navContainer: '.user-gallery.is-desktop .thumbnail-list', //thumbnail buttons
  navAsThumbnails: true,
  gutter: 6,
  edgePadding: 75,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})
