// Pricing calculator
const weightSlider = document.getElementById('weight');
const weightValue = document.getElementById('weight-value');
const totalPrice = document.getElementById('total-price');

function updatePrice() {
    const weight = weightSlider.value;
    const pricePerLb = 1.50;
    const total = (weight * pricePerLb).toFixed(2);
    weightValue.textContent = weight;
    totalPrice.textContent = `$${total}`;
}

weightSlider.addEventListener('input', updatePrice);
updatePrice(); // initial call

// Contact form (opens email client)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this[0].value;
    const email = this[1].value;
    const phone = this[2].value;
    const message = this[3].value;

    const subject = encodeURIComponent('Laundry Service Inquiry');
    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage: ${message}`
    );
    window.location.href = `mailto:hello@safilaundry.com?subject=${subject}&body=${body}`;
    alert('Thank you! Your email client will open. Just click send.');
    this.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Update phone numbers (replace with your actual number)
function updatePhoneNumbers() {
    const yourNumber = '15551234567'; // REPLACE WITH YOUR PHONE
    const formattedNumber = yourNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

    document.querySelectorAll('a[href^="tel"]').forEach(link => {
        link.href = `tel:${yourNumber}`;
        if (link.textContent.includes('555')) {
            link.textContent = link.textContent.replace(/\(555\) 123-4567/, formattedNumber);
        }
    });

    document.querySelectorAll('a[href*="whatsapp"]').forEach(link => {
        link.href = link.href.replace(/15551234567/g, yourNumber);
    });
}

// Uncomment the line below and replace with your actual number
// updatePhoneNumbers();

// Update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        footerYear.innerHTML = footerYear.innerHTML.replace('2025', new Date().getFullYear());
    }
});
