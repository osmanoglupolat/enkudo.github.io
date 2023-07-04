var dropdownToggleButtons = document.querySelectorAll('.dropdown-toggle');
var dropdownMenus = document.querySelectorAll('.dropdown-menu');
var dropdownSearchInput = document.getElementById('inputSearch');
var menuCloseNavs = document.querySelectorAll('#menu-close-nav');

dropdownSearchInput.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdownMenus.forEach(function(menu) {
    var menuLabel = menu.getAttribute('aria-labelledby');
    if (menuLabel === 'dropdownSearch') {
      menu.classList.add('show');
    } else {
      menu.classList.remove('show');
    }
  });
  dropdownToggleButtons.forEach(function(button) {
    var dropdownId = button.getAttribute('id');
    if (dropdownId === 'dropdownSearch') {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  });
});

menuCloseNavs.forEach(function(menuCloseNav) {
  menuCloseNav.addEventListener('click', function() {
    dropdownToggleButtons.forEach(function(button) {
      button.classList.remove('show');
    });
    dropdownMenus.forEach(function(menu) {
      menu.classList.remove('show');
    });
  });
});


// Menu
const firstLink = document.querySelector('.nav-link');
const firstBox = document.querySelector('.nav-content-box');

if (!window.matchMedia('(max-width: 768px)').matches) {
  firstLink.classList.add('active');
  firstBox.classList.add('active');
}

const menuLinks = document.querySelectorAll('.nav-link');
menuLinks.forEach((link) => {
  link.addEventListener('click', function() {
    const clickedLinkId = this.getAttribute('id');
    const contentBoxes = document.querySelectorAll('.nav-content-box');
    contentBoxes.forEach((box) => {
      const boxId = box.getAttribute('id');
      if (boxId === clickedLinkId) {
        if (!link.classList.contains('active')) {
          menuLinks.forEach((otherLink) => {
            otherLink.classList.remove('active');
          });
          contentBoxes.forEach((otherBox) => {
            otherBox.classList.remove('active');
          });
          link.classList.add('active');
          box.classList.add('active');
        }
      }
    });
  });
});

const menuBackNavs = document.querySelectorAll('#menu-back-nav');
menuBackNavs.forEach((menuBackNav) => {
  menuBackNav.addEventListener('click', function() {
    const links = document.querySelectorAll('.nav-link');
    const boxes = document.querySelectorAll('.nav-content-box');

    links.forEach((link) => {
      if (link.classList.contains('active')) {
        link.classList.remove('active');
      }
    });

    boxes.forEach((box) => {
      if (box.classList.contains('active')) {
        box.classList.remove('active');
      }
    });
  });
});

// Swipper
var swiper = new Swiper(".brand-slider", {
  slidesPerView: 6,
  spaceBetween: 12,
  breakpoints: {
      '922': {
          slidesPerView: 6,
      },
      '768': {
          slidesPerView: 4
      },
      '480': {
          slidesPerView: 2.5
      },
      '0': {
          slidesPerView: 2
      }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".product-slider", {
  slidesPerView: 4,
  spaceBetween: 16,
  breakpoints: {
      '922': {
          slidesPerView: 4
      },
      '768': {
          slidesPerView: 3,
          spaceBetween: 10
      },
      '480': {
          slidesPerView: 2.5,
          spaceBetween: 5
      },
      '0': {
          slidesPerView: 2,
          spaceBetween: 5
      }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const filterButtons = document.querySelectorAll('.ems-data-filter-link');
filterButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const filter = this.getAttribute('data-filter');
    
    filterButtons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    this.classList.add('active');
    
    const slides = document.querySelectorAll('.product-slider .product-box');
    slides.forEach(function(slide) {
      const dataFilters = slide.getAttribute('data-filters');
      if (filter === 'all' || dataFilters.includes(filter)) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  });
});


const filterBtn = document.getElementById('filter-btn');
const filterContent = document.getElementById('filter-content');
const filterClose = document.getElementById('filter-close');

if (!window.matchMedia('(max-width: 768px)').matches) {
  filterBtn.classList.add('active');
  filterContent.classList.add('active');
}

filterBtn.addEventListener('click', function() {
  filterBtn.classList.add('active');
  filterContent.classList.add('active');
});

filterClose.addEventListener('click', function() {
  filterBtn.classList.remove('active');
  filterContent.classList.remove('active');
});