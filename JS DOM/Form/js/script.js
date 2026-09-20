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

setupAutoJump(phone1, phone2, null);   // У первого поля нет предыдущего
setupAutoJump(phone2, phone3, phone1);
setupAutoJump(phone3, null, phone2);   // У третьего поля нет следующего

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

    console.log('Дані успішно пройшли валідацію та зібрані:', formData);
    // form.reset();
});
