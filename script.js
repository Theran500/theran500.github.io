document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'flyInFromCenter 1.5s ease-in-out forwards';
            } else {
                entry.target.style.animation = 'none'; // Resets the animation
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is in view
    });

    document.querySelectorAll('.word').forEach((word) => {
        observer.observe(word);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
  
    const countUp = (counter, startValue, endValue, duration) => {
      let startTime = null;
      const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
  
        counter.textContent = Math.floor(progress * (endValue - startValue) + startValue);
  
        if (elapsedTime < duration) {
          requestAnimationFrame(step);
        } else {
          counter.textContent = endValue;
        }
      };
      requestAnimationFrame(step);
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          const startValue = parseInt(target.getAttribute('data-start'), 10);
          const endValue = parseInt(target.getAttribute('data-end'), 10);
          countUp(target, startValue, endValue, 2000); // Adjust duration as needed
        }
      });
    }, { threshold: 0.5 });
  
    counters.forEach(counter => {
      observer.observe(counter);
    });
  });