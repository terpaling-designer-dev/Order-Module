document.addEventListener('DOMContentLoaded', function() {
  const orderTabs = document.querySelector('.order-tabs');

    // Listen for click events on the container using event delegation
    orderTabs.addEventListener('click', function(event) {
      // Check if the clicked element is a button
      if (event.target.tagName.toLowerCase() === 'button') {
        // Remove active class from all buttons
        const buttons = orderTabs.querySelectorAll('button');
        buttons.forEach(function(button) {
          button.classList.remove('active');
        });

        // Add active class to the clicked button
        event.target.classList.add('active');
      }
    });
});


