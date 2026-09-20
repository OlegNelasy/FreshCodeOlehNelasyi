"use strict";

const form = document.getElementById('contactForm');

const phone1 = form.elements['phone1'];
const phone2 = form.elements['phone2'];
const phone3 = form.elements['phone3'];

function setupAutoJump(currentInput, nextInput, prevInput) {
    currentInput.addEventListener('input', () => {
        if (nextInput && currentInput.value.length >= currentInput.maxLength) {
            nextInput.focus();
        }
    });

    currentInput.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && currentInput.value.length === 0 && prevInput) {
            prevInput.focus();
        }
    });
}

setupAutoJump(phone1, phone2, null);
setupAutoJump(phone2, phone3, phone1);
setupAutoJump(phone3, null, phone2);

//1.0
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = form.elements['first-name'].value;
    const lastName = form.elements['last-name'].value;
    const email = form.elements['email'].value;
    const phone1 = form.elements['phone1'].value;
    const phone2 = form.elements['phone2'].value;
    const phone3 = form.elements['phone3'].value;
    const subject = form.elements['Message subject'].value;
    const rawMessage = form.elements['Message'].value;

    const formData = {
        name: `${firstName} ${lastName}`.trim(),
        email: email,
        phone: `+38${phone1}${phone2}${phone3}`,
        subject: subject,
        message: rawMessage.trim().replace(/\s+/g, ' ')
    };

    console.log('Данные успешно валидацию проверку:', formData);
    // form.reset();
});

//2.1
function containsNumber(str) {
    return /\d/.test(str);
}
console.log('containsNumber("admin123")', containsNumber("admin123"));
console.log('containsNumber("Hello world") ', containsNumber("Hello world"));

//2.2
function isImageFile(fileName) {
    return /\.(jpg|png)$/i.test(fileName);
}
console.log('isImageFile("photo.JPG")', isImageFile("photo.JPG"));
console.log('isImageFile("document.pdf")', isImageFile("document.pdf"));

//2.3
function formatSlug(text) {
    return text.trim().replace(/\s+/g, '-');
}
console.log('formatSlug("contact    us        today") =>', formatSlug("contact    us        today")); // => "contact-us-today"

//2.4
function extractPrice(text) {
    const match = text.match(/\d+/);
    return match ? match[0] : null;
}
console.log('extractPrice("Товар коштує 450 грн") =>', extractPrice("Товар коштує 450 грн")); // => "450" 
console.log('extractPrice("Ваша знижка 15%") =>', extractPrice("Ваша знижка 15%")); // => "15"