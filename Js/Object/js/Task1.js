const customer = {
    name: 'Олег',
    surname: 'Неласый',
    gender: "male",
    email: 'test@gmail.com',
    password: '12345',
    phoneNumber: '+380980000000',
    addresses: {
        city: 'Запорожье',
        street: 'Заводская',
        house: '33a',
        apartment: '234'
    },
    getAddress(){
        return `г. ${this.addresses.city} ул. ${this.addresses.street} д. ${this.addresses.house} кв. ${this.addresses.apartment}`;
    },
    changePassword( newPassword ){
        if(typeof newPassword === 'string'){
            this.password = newPassword;
        } else {
             console.log('Ошибка: пароль должен быть строкой');
        }       
    },
    changePhoneNumber( newPhoneNumber ){
        // if (typeof newPhoneNumber === 'string' && newPhoneNumber[0] === '+') {
        if(typeof newPhoneNumber === 'string' && newPhoneNumber.startsWith('+')) {
            this.phoneNumber = newPhoneNumber;
        } else {
            console.log('Ошибка: номер телефона должен быть строкой и начинаться символом "+"');
        }
    }
}

console.log(customer);
console.log(customer.getAddress());

const customerCopy1 = {...customer};
console.log(customerCopy1);

customer.changePassword('qwert');
customer.changePhoneNumber('+380989999999');
console.log(customer);

const customerCopy2 = Object.assign({}, customer);
console.log(customerCopy2);

delete customer.addresses;
console.log(customer);

