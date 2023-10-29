const cars = [
    {
        photo: './carphotos/2013altima.webp',
        name: 'Nissan Altima',
        type: 'Sedan',
        transmission: 'Automatic',
        seats: '5',
        bags: '4',
        price: '35'
    },
    {
        photo: './carphotos/2016fortwo.webp',
        name: 'Smart Fortwo',
        type: 'Compact',
        transmission: 'Automatic',
        seats: '2',
        bags: '2',
        price: '20'
    },
    {
        photo: './carphotos/2018escape.avif',
        name: 'Ford Escape',
        type: 'SUV',
        transmission: 'Automatic',
        seats: '5',
        bags: '5',
        price: '40'
    },
    {
        photo: './carphotos/2020toyotacamry.avif',
        name: 'Toyota Camry',
        type: 'Sedan',
        transmission: 'Automatic',
        seats: '5',
        bags: '4',
        price: '40'
    },
    {
        photo: './carphotos/2018fusion.avif',
        name: 'Ford Fusion',
        type: 'Sedan',
        transmission: 'Automatic',
        seats: '5',
        bags: '4',
        price: '35'
    },
    {
        photo: './carphotos/2013civic.avif',
        name: 'Honda Civic',
        type: 'Coupe',
        transmission: 'Automatic',
        seats: '2',
        bags: '3',
        price: '25'
    },
    {
        photo: './carphotos/2022k5.webp',
        name: 'Kia K5',
        type: 'Sedan',
        transmission: 'Automatic',
        seats: '5',
        bags: '4',
        price: '40'
    },
    {
        photo: './carphotos/2023elantra.png',
        name: 'Hyundai Elantra',
        type: 'Sedan',
        transmission: 'Automatic',
        seats: '5',
        bags: '4',
        price: '40'
    },
    {
        photo: './carphotos/2023mustang.jpg',
        name: 'Ford Mustang',
        type: 'Sports',
        transmission: 'Automatic',
        seats: '2',
        bags: '3',
        price: '45'
    },
    {
        photo: './carphotos/2018lacross.webp',
        name: 'Buick Lacross',
        type: 'Sedan',
        transmission: 'Automatic',
        seats: '5',
        bags: '4',
        price: '35'
    },
    {
        photo: './carphotos/2020caravan.webp',
        name: 'Dodge Grand Caravan',
        type: 'Minivan',
        transmission: 'Automatic',
        seats: '7',
        bags: '5',
        price: '50'
    },
    {
        photo: './carphotos/2023cts.webp',
        name: 'Cadillac CTS',
        type: 'Luxury',
        transmission: 'Automatic',
        seats: '5',
        bags: '4',
        price: '70'
    },
    {
        photo: './carphotos/2023teslamodels.png',
        name: 'Tesla Model S',
        type: 'Electric',
        transmission: 'Automatic',
        seats: '5',
        bags: '4',
        price: '65'
    },
    {
        photo: './carphotos/2023taycan.jpg',
        name: 'Porche Taycan',
        type: 'Sports',
        transmission: 'Automatic',
        seats: '2',
        bags: '2',
        price: '75'
    },
    {
        photo: './carphotos/2020soul.jpg',
        name: 'Kia Soul',
        type: 'Compact',
        transmission: 'automatic',
        seats: '5',
        bags: '2',
        price: '25'
    },
    {
        photo: './carphotos/2023ls.jpg',
        name: 'Lexus LS',
        type: 'Luxury',
        transmission: 'automatic',
        seats: '5',
        bags: '4',
        price: '70'
    },
    {
        photo: './carphotos/2023sienna.jpg',
        name: 'Toyota Sienna',
        type: 'Minivan',
        transmission: 'automatic',
        seats: '8',
        bags: '5',
        price: '50'
    }
];


const carListContainer = document.getElementById('carList');

function renderCarList(cars) {
  carListContainer.innerHTML = '';

  cars.forEach(car => {
    const carTile = document.createElement('li');
    carTile.innerHTML = `
      <div id="car-tile" class="car-tile">
        <h2 class="car-type">${car.type}</h2>
        <div class="car-photo-container">
          <img class="car-photo" src="${car.photo}" alt="">
        </div>
        <p class="tile-text car-name">${car.name}</p>
        <p class="tile-text">
          <img class="transmission-icon" src="./icons/transmission.png"> ${car.transmission}
          <img class="passengers-icon" src="./icons/user.png" alt=""> ${car.seats}
          <img class="bags-icon" src="./icons/luggage.png"> ${car.bags}
        </p>
        <p class="price">$${car.price}<span>/day</span></p>
        <a href="paymentpage.html" target="_blank"><button class="select-button2">Select</button></a>
      </div>
    `;

    carListContainer.appendChild(carTile);
  });
}

renderCarList(cars);

// Get all the checkboxes and car tiles
const carCheckboxes = document.querySelectorAll('.car-filter');
const carTiles = document.querySelectorAll('.car-tile');

// Add event listener to checkboxes
carCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateCarList);
});

function updateCarList() {
  // Get selected car types
  const selectedCarTypes = Array.from(carCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  // Show/hide car tiles based on selected car types
  carTiles.forEach(tile => {
    const carType = tile.querySelector('.car-type').textContent.toLowerCase();
    const shouldShow = selectedCarTypes.length === 0 || selectedCarTypes.includes(carType);

    tile.style.display = shouldShow ? 'block' : 'none';
  });
}


carCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateCarList);
  });

  function updateCarList() {
    const selectedCarTypes = Array.from(carCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    const filteredCars = selectedCarTypes.length === 0
      ? cars
      : cars.filter(car => selectedCarTypes.includes(car.type));

    renderCarList(filteredCars);
  }
