function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      var startPosition = window.pageYOffset; // Текущая позиция скролла
      var targetPosition = section.getBoundingClientRect().top + startPosition; // Позиция целевого элемента относительно текущей позиции скролла
      var distance = targetPosition - startPosition; // Расстояние для скролла
  
      var startTime = null;
      var duration = 1000; // Продолжительность скролла в миллисекундах
  
      function scrollToTimestamp(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
  
        window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
  
        if (progress < duration) {
          window.requestAnimationFrame(scrollToTimestamp);
        }
      }
  
      // Функция для создания эффекта плавности скролла
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      window.requestAnimationFrame(scrollToTimestamp);
    }
  }
  