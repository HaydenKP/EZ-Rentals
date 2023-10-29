    // Get reference to the form element
    const form = document.getElementById('form');

    // Add an event listener for the form submission
    form.addEventListener('submit', function(event) {
        let valid = true;

        // Iterate through all form elements
        form.querySelectorAll('input, select').forEach(function(input) {
            // Check if the input is required and not filled out
            if (input.hasAttribute('required') && !input.value.trim()) {
                valid = false;

                // Get the corresponding error message element
                const errorElement = document.getElementById(`error-message-${input.id}`);

                // Display an error message
                if (errorElement) {
                    errorElement.textContent = `Please enter your ${input.id.replace(/([A-Z])/g, ' $1').toLowerCase()}.`;
                }
            }
        });

        // Prevent form submission if validation fails
        if (!valid) {
            event.preventDefault();
        }
    });
