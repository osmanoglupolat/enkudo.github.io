// Search Close
function handleDropdownSearchInput() {
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
}
// Search Close

// Menu
function handleMenuLinks() {
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
}
function handleMenuBackNavs() {
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
}
// Menu

// Data Filtre
function handleFilterButtons() {
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
}
// Data Filtre

// Tab All Selected
function handleTabToggleProductDetail() {
  var ratingsReviewTab = document.getElementById('v-pills-ratings-review-tab');
  var ratingsReview2Tab = document.getElementById('v-pills-ratings-review-2');
  function handleTabToggleProductDetail() {
    if (ratingsReviewTab.classList.contains('active')) {
      ratingsReview2Tab.classList.add('active');
    } else {
      ratingsReview2Tab.classList.remove('active');
    }
  }
  ratingsReviewTab.addEventListener('click', function() {
    if (ratingsReviewTab.classList.contains('active')) {
      ratingsReview2Tab.classList.add('active');
    } else {
      ratingsReview2Tab.classList.remove('active');
    }
  });
}
// Tab All Selected

// Scroll Top
function setupScrollTop() {
  const scrollableContainer = document.querySelector('.ems-data-filter-header');
  scrollableContainer.addEventListener('mousedown', function(event) {
    this.style.scrollBehavior = 'initial';
    this.scrollLeft = event.pageX;
    document.addEventListener('mousemove', mouseMoveHandler);
  });
  document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', mouseMoveHandler);
    scrollableContainer.style.scrollBehavior = '';
  });
  function mouseMoveHandler(event) {
    scrollableContainer.scrollLeft -= event.movementX;
  }
}
// Scroll Top

document.addEventListener('DOMContentLoaded', function() {
  // Search Close
  if (document.getElementById('inputSearch')) {
    handleDropdownSearchInput();
  }
  // Search Close
  // Menu
  if (document.querySelector('.nav-link')) {
    handleMenuLinks();
    handleMenuBackNavs();
  }
  // Menu
  // Data Filtre
  if (document.querySelector('.ems-data-filter-link')) {
    handleFilterButtons();
  }
  // Data Filtre
  // Tab All Selected
  if (document.getElementById('v-pills-ratings-review-tab') && document.getElementById('v-pills-ratings-review-2')) {
    handleTabToggleProductDetail();
    var ratingsReviewTab = document.getElementById('v-pills-ratings-review-tab');
    var observer = new MutationObserver(function(mutationsList) {
      for (var mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (!ratingsReviewTab.classList.contains('active')) {
            document.getElementById('v-pills-ratings-review-2').classList.remove('active');
          }
        }
      }
    });
    observer.observe(ratingsReviewTab, { attributes: true });
  }
  // Tab All Selected
  // Product List Filter
  if (document.getElementById('filter-btn') && document.getElementById('filter-content') && document.getElementById('filter-sortby') && document.getElementById('filter-sortby-content')) {
    const filterBtn = document.getElementById('filter-btn');
    const filterContent = document.getElementById('filter-content');
    const filterClose = document.getElementById('filter-close');
    const filterSortBy = document.getElementById('filter-sortby');
    const filterSortByContent = document.getElementById('filter-sortby-content');
    const filterSortByClose = document.getElementById('filter-sortby-close');

    if (!window.matchMedia('(max-width: 768px)').matches) {
      filterBtn.classList.add('active');
      filterContent.classList.add('active');
      filterSortBy.classList.add('active');
      filterSortByContent.classList.add('active');
    }

    filterBtn.addEventListener('click', function() {
      filterBtn.classList.add('active');
      filterContent.classList.add('active');
    });

    filterSortBy.addEventListener('click', function() {
      filterSortBy.classList.add('active');
      filterSortByContent.classList.add('active');
    });

    filterClose.addEventListener('click', function() {
      filterBtn.classList.remove('active');
      filterContent.classList.remove('active');
    });

    filterSortByClose.addEventListener('click', function() {
      filterSortBy.classList.remove('active');
      filterSortByContent.classList.remove('active');
    });
  }
  // Product List Filter

  // Scroll Top
  if (document.querySelector('.ems-data-filter-header')) {
    setupScrollTop();
  }
});

(function() {
  // Değişiklik olayını dinleyin
  document.addEventListener('input', function() {
    // Inputların değerlerini alın
    const numberValue = document.getElementById('Number').value;
    const checkboxChecked = document.getElementById('CommunicationPermissions').checked;

    // check-hiden-show elementini seçin
    const checkHidenShow = document.querySelector('.check-hiden-show');

    // Koşulu kontrol edin
    if (numberValue && checkboxChecked) {
      // Her iki koşul da sağlanıyorsa, check-hiden-show elementine d-none classını ekle
      checkHidenShow.classList.add('d-none');
    } else {
      // Koşullardan en az biri eksikse, d-none classını kaldır
      checkHidenShow.classList.remove('d-none');
    }
  });
})();


document.addEventListener('DOMContentLoaded', function() {
  var fillElements = document.querySelectorAll('.circle-wrap .fill');
  var insideCircles = document.querySelectorAll('.inside-circle');

  fillElements.forEach(function(fillElement) {
    fillElement.addEventListener('animationend', function() {
      fillElement.style.background = '#D93B41';
      insideCircles.forEach(function(circle) {
        circle.style.color = '#D93B41';
      });
    });
  });
});