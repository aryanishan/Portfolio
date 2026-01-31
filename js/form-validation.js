// Form Validation for Contact Page
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous error messages
            clearErrors();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            // Validate name
            if (name === '') {
                showError('name-error', 'Please enter your name');
                isValid = false;
            }
            
            // Validate email
            if (email === '') {
                showError('email-error', 'Please enter your email address');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('email-error', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate message
            if (message === '') {
                showError('message-error', 'Please enter your message');
                isValid = false;
            }
            
            if (isValid) {
                // Simulate form submission
                const formMessage = document.getElementById('form-message');
                
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    // Show success message
                    formMessage.textContent = 'Thank you! Your message has been sent successfully.';
                    formMessage.className = 'success';
                    formMessage.style.display = 'block';
                    
                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        formMessage.style.display = 'none';
                    }, 5000);
                }, 1500);
            }
        });
    }
    
    // Helper function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Helper function to show error message
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        
        // Highlight the input field
        const inputId = elementId.replace('-error', '');
        const inputElement = document.getElementById(inputId);
        if (inputElement) {
            inputElement.style.borderColor = 'var(--secondary-color)';
            
            // Remove error styling when user starts typing
            inputElement.addEventListener('input', function() {
                this.style.borderColor = '';
                errorElement.style.display = 'none';
            }, { once: true });
        }
    }
    
    // Helper function to clear all error messages
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
            element.style.display = 'none';
        });
        
        // Reset input borders
        const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
        formInputs.forEach(input => {
            input.style.borderColor = '';
        });
        
        // Hide form message
        const formMessage = document.getElementById('form-message');
        if (formMessage) {
            formMessage.style.display = 'none';
        }
    }
});