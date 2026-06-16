(function () {
  document.querySelectorAll('[data-personal-gallery]').forEach(function (gallery) {
    var buttons = gallery.querySelectorAll('[data-gallery-filter]');
    var items = gallery.querySelectorAll('[data-gallery-category]');
    var empty = gallery.querySelector('[data-gallery-empty]');

    function setFilter(category) {
      var visibleCount = 0;

      buttons.forEach(function (button) {
        button.classList.toggle('active', button.dataset.galleryFilter === category);
      });

      items.forEach(function (item) {
        var isVisible = item.dataset.galleryCategory === category;
        item.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });

      if (empty) {
        empty.hidden = visibleCount !== 0;
      }
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        setFilter(button.dataset.galleryFilter);
      });
    });

    setFilter('quantum-lego-land');
  });
})();
