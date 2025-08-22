  // Get reference to the redirect button element
  var redirectBtn = document.getElementById('redirectBtn');
  
  // Function to redirect to login.html
  function redirectToLogin() {
    window.location.href = 'login.html'; // Change the URL to the desired page
  }
  
  // Event listener to redirect when the button is clicked
  redirectBtn.addEventListener('click', redirectToLogin);

  function openTab(evt, tabName) {
      // Declare all variables
      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.className += " active";
  }
  var carousel = document.getElementById("carouselExampleIndicators");

  carousel.addEventListener("slid.bs.carousel", function (event) {
      var activeSlideIndex = event.to;
      if (activeSlideIndex === 0) {

          openTab(event, 'general');

      }
      else if (activeSlideIndex === 1) {

          openTab(event, 'billing');

      }
      else if (activeSlideIndex === 2) {

          openTab(event, 'custom');

      }
      else if (activeSlideIndex === 2) {

openTab(event, 'sales');

}
else if (activeSlideIndex === 2) {

openTab(event, 'needs');

}
else if (activeSlideIndex === 2) {

openTab(event, 'cost');

}
else if (activeSlideIndex === 2) {

openTab(event, 'content7');

}
  });