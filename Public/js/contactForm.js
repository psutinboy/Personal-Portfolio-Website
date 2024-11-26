document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const fullName = document.getElementById('fullName');
    const subject = document.getElementById('subject');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Combine first and last name for Formspree
        fullName.value = `${firstName.value} ${lastName.value}`;

        // Get the selected subject text instead of value
        const subjectText = subject.options[subject.selectedIndex].text;

        // Create FormData object
        const formData = new FormData(form);
        
        // Add the subject line
        formData.set('_subject', `${subjectText} - Contact Form`);

        // Submit the form
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Show success message
                form.reset();
                showAlert('success', 'Thank you for your message! I will get back to you soon.');
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showAlert('danger', 'Oops! There was a problem sending your message. Please try again.');
        });
    });

    function showAlert(type, message) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
        alertDiv.role = 'alert';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        form.parentElement.insertBefore(alertDiv, form.nextSibling);

        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }
}); 