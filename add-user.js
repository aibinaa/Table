let firstName = document.querySelector('#firstName')
let lastName = document.querySelector('#lastName')
let city = document.querySelector('#city')
let country = document.querySelector('#country')
let email = document.querySelector('#email')
let phone = document.querySelector('#phone')
let zip = document.querySelector('#zip')
let userStatus = document.querySelector('#userStatus')

const AddUser = async () => {
    if (firstName.value == "" || lastName.value == "" || city.value == "" || country.value == "" || email.value == "" || phone.value == "" || zip.value == "") {
        return alert('Fill in whole Form')
    } 

    const responce = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            city: city.value,
            country: country.value,
            email: email.value,
            zip: zip.value,
            status: userStatus.value
        })
    })

    // const content = await responce.json()
    if (responce) {
        window.location.href = './table.html';
    }

}


