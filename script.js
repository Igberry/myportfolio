document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const responseMessage = document.getElementById('responseMessage');
    const submitButton = e.target.querySelector('button');

    // Show instant feedback
    responseMessage.textContent = "Sending...";
    submitButton.disabled = true;

    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
    };

    try {
        const res = await fetch('https://myportfolio-te1b.onrender.com/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const result = await res.json();

        if (res.ok) {
            responseMessage.textContent = result.message || "Message sent successfully!";
            e.target.reset();
        } else {
            responseMessage.textContent = result.message || "Something went wrong.";
        }
    } catch (error) {
        responseMessage.textContent = "Failed to send message. Please try again.";
    } finally {
        submitButton.disabled = false;
    }
});

// Theme toggle functionality
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    toggleBtn.textContent = document.body.classList.contains('light-theme') ? '🌙' : '☀️';
});

