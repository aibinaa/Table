let params = (new URL(document.location)).searchParams;
let id = params.get("id")
console.log('id', id)

let firstName = document.querySelector('#firstName')
let lastName = document.querySelector('#lastName')
let city = document.querySelector('#city')
let country = document.querySelector('#country')
let email = document.querySelector('#email')
let phone = document.querySelector('#phone')
let zip = document.querySelector('#zip')
let userStatus = document.querySelector('#userStatus')

const getUser = async () => {
    const responce = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users/${id}`)
    const result = await responce.json()
    console.log(responce)
    console.log(result)

    firstName.value = result.firstName
    lastName.value = result.lastName
    city.value = result.city
    country.value = result.country
    email.value = result.email
    phone.value = result.phone
    zip.value = result.zip
    userStatus.value = result.status
}
if (id) getUser()

const UpdateUser = async () => {
    const responce = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users/${id}`, {
        method: 'PUT',
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

    if (responce.ok) {
        window.location.href = './table.html';
    } else {
        alert('false')
    }
    console.log(responce)
}
