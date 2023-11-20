document.addEventListener('click', function (event) {
  
  if (event.target.tagName === 'IMG' && !event.target.classList.contains('no-lightbox')) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const image = document.createElement('img');
    image.src = event.target.src;
    overlay.appendChild(image);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function () {
      document.body.removeChild(overlay);
    });
  }
});

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

document.addEventListener('DOMContentLoaded', function () {
  
  var navIcon = document.querySelector('.nav-icon img');

  if (navIcon) {
    navIcon.addEventListener('click', redirectToLinkedIn);
  }


  function redirectToLinkedIn() {
    
    window.location.href = 'https://www.linkedin.com/in/prisha-agnihotri/';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const travelFacts = [
    "New York City is known as 'The Big Apple.'",
    "The Statue of Liberty was a gift from France to the United States.",
    "Central Park in Manhattan is one of the most visited urban parks in the world.",
    "Sofia is the capital and largest city of Bulgaria.",
    "Vitosha Mountain near Sofia is a popular destination for hiking and skiing.",
    "St. Alexander Nevsky Cathedral in Sofia is one of the largest Eastern Orthodox cathedrals in the world.",
    "Barcelona is famous for its unique architecture, including the works of Antoni Gaudi.",
    "Park Güell in Barcelona is a UNESCO World Heritage Site.",
    "La Sagrada Familia is a renowned basilica in Barcelona and is still under construction.",
    "Dubai is home to the Burj Khalifa, the tallest building in the world.",
    "The Dubai Mall is one of the largest shopping malls globally and features an indoor ski resort.",
    "The Dubai Garden is a picturesque masterpiece with sculptures built of plants.",
    "The Grand Canyon is a natural geological formation carved by the Colorado River.",
    "The Grand Canyon is one of the most visited natural landmarks in the United States.",
    "Extreme heat is a significant danger for visitors to the Grand Canyon.",
    "Jungfrau is a city in Switzerland known for its mountain summits.",
    "The Jungfrau Railway takes visitors to a height of 3,454 meters.",
    "Lauterbrunnen Valley is a popular tourist attraction in Switzerland.",
  ];

  const factContainer = document.getElementById("randomFactContainer");
  const factButton = document.getElementById("randomFactButton");

  function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * travelFacts.length);
    factContainer.textContent = travelFacts[randomIndex];
  }

  // Initial display
  displayRandomFact();

  // Add click event to the button
  factButton.addEventListener('click', displayRandomFact);
});
