    // Get references to the form and the error message elements
    const form = document.getElementById('form');
    const errorMessageLocation = document.getElementById('error-message-location');
    const errorMessageDate = document.getElementById('error-message-date');
    const errorMessagePickupTime = document.getElementById('error-message-pickup-time');
    const errorMessageReturnTime = document.getElementById('error-message-return-time');

    // Add an event listener for the form submission
    form.addEventListener('submit', function (event) {
        // Validate the location input
        const locationInput = document.getElementById('location');
        if (locationInput.value.trim() === '') {
            errorMessageLocation.textContent = 'Please enter your location.';
            event.preventDefault(); // Prevent form submission
        } else {
            errorMessageLocation.textContent = '';
        }

        // Validate the date inputs
        const pickupDateInput = document.getElementById('pickupDate');
        const returnDateInput = document.getElementById('returnDate');
        if (pickupDateInput.value === '' || returnDateInput.value === '') {
            errorMessageDate.textContent = 'Please select both pickup and return dates.';
            event.preventDefault(); // Prevent form submission
        } else {
            errorMessageDate.textContent = '';
        }

        // Validate the time inputs
        const pickupTimeSelect = document.getElementById('pickupTime');
        const returnTimeSelect = document.getElementById('returnTime');
        if (pickupTimeSelect.value === 'Pick Up' || returnTimeSelect.value === 'Return') {
            errorMessagePickupTime.textContent = 'Please select pickup and return times.';
            event.preventDefault(); // Prevent form submission
        } else {
            errorMessagePickupTime.textContent = '';
        }

        // Check if there are no error messages
        if (
            errorMessageLocation.textContent === '' &&
            errorMessageDate.textContent === '' &&
            errorMessagePickupTime.textContent === '' &&
            errorMessageReturnTime.textContent === ''
        ) {
            form.action = 'browsecars.html'
        } else {
            // Display a general error message
            event.preventDefault(); // Prevent form submission
        }
    });
