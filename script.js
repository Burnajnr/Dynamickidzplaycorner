fetch('party-packages.json')
    .then(response => response.json())
    .then(data => {
        const packagesContainer = document.getElementById('packages-container');
        const addOnsContainer = document.getElementById('add-ons-container');

        // Render Party Packages
        data.packages.forEach(pkg => {
            const packageDiv = document.createElement('div');
            packageDiv.className = 'package';
            packageDiv.innerHTML = `
                <h2>${pkg.name} - <span>${pkg.price}</span></h2>
                <p><strong>${pkg.kidsLimit}</strong></p>
                <p>${pkg.description}</p>
                <h4>Add-ons:</h4>
                <ul>
                    ${pkg.addOns.map(addOn => `<li>${addOn}</li>`).join('')}
                </ul>
            `;
            packagesContainer.appendChild(packageDiv);
        });

        // Render Add-ons
        const addOnsTitle = document.createElement('h3');
        addOnsTitle.textContent = 'Additional Add-ons:';
        addOnsContainer.appendChild(addOnsTitle);

        const addOnsList = document.createElement('ul');
        data.addOns.forEach(addOn => {
            const addOnItem = document.createElement('li');
            addOnItem.textContent = `${addOn.name} - ${addOn.price}`;
            addOnsList.appendChild(addOnItem);
        });
        addOnsContainer.appendChild(addOnsList);
    })
    .catch(error => console.error('Error loading party packages:', error));

    const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

// Function to show the current carousel item
function showItem(index) {
  carouselItems.forEach((item, i) => {
    item.classList.remove('active');
    if (i === index) {
      item.classList.add('active');
    }
  });
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showItem(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showItem(currentIndex);
});

// Auto-play functionality
setInterval(() => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showItem(currentIndex);
}, 5000); // Change slide every 5 seconds
const popSound = document.getElementById('pop-sound');
document.querySelectorAll('.magic-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    popSound.currentTime = 0;
    popSound.play();
  });
});
// Set your next event date here
const nextEventDate = new Date('2025-06-14T12:00:00');
function updateCountdown() {
  const now = new Date();
  const diff = nextEventDate - now;
  if (diff > 0) {
    const d = Math.floor(diff/(1000*60*60*24));
    const h = Math.floor((diff/(1000*60*60))%24);
    const m = Math.floor((diff/(1000*60))%60);
    const s = Math.floor((diff/1000)%60);
    document.getElementById('countdown').textContent =
      `Next Event In: ${d}d ${h}h ${m}m ${s}s`;
  } else {
    document.getElementById('countdown').textContent = "The event is happening now!";
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();

window.addEventListener('DOMContentLoaded', function() {
  // Scroll to the calendar section if an event is happening
  const calendarSection = document.getElementById('calendar-events');
  if(calendarSection) {
    setTimeout(() => {
      calendarSection.scrollIntoView({behavior: 'smooth'});
    }, 1000); // Wait 1 second before scrolling
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const bubbleColors = [
    'rgba(0,123,255,0.18)', 'rgba(0,255,200,0.15)', 'rgba(255,0,204,0.13)', 'rgba(255,184,0,0.13)', 'rgba(0,255,184,0.13)'
  ];
  const navBubbles = document.querySelector('.nav-bubbles');
  if (navBubbles) {
    navBubbles.innerHTML = ''; // Clear any old bubbles
    for (let i = 0; i < 10; i++) {
      const b = document.createElement('div');
      b.className = 'nav-bubble';
      const size = 30 + Math.random()*50;
      b.style.width = `${size}px`;
      b.style.height = `${size}px`;
      b.style.left = `${Math.random()*95}%`;
      b.style.bottom = `${Math.random()*20}px`;
      b.style.background = bubbleColors[Math.floor(Math.random()*bubbleColors.length)];
      b.style.animationDelay = `${Math.random()*6}s`;
      navBubbles.appendChild(b);
    }
  }
});

