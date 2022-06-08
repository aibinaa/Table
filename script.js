const GetAllUsers = async () => {
    const responce = await fetch("https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users");
    const result = await responce.json()
    console.log(responce)
    console.log(result)

    let tablehead = document.querySelector('.table-head')
    let tablebody = document.querySelector('.table-body')

    let head = Object.keys(result[0])
    console.log(head)

    head.map(e => {
        let newHead = document.createElement('th')
        newHead.innerText = e;

        if(e == "createdAt") {
            newHead.innerText = "date"
        } else if(e == "firstName") {
            newHead.innerText = "first name"
        } else if(e == "avatar") {
            newHead.innerText = "photo"
        } else if(e == "lastName") {
            newHead.innerText = "last name"
        }

        tablehead.append(newHead)
    })

    let newTh = document.createElement('th')
    newTh.innerText = 'Edit'
    newTh.classList.add('newTh')
    tablehead.append(newTh)

    let newTh2 = document.createElement('th')
    newTh2.classList.add('newTh2')
    newTh2.innerText = 'Delete'
    tablehead.append(newTh2)

    result.map(e => {
        let tr = document.createElement('tr');
        tr.classList.add(`row-${e.id}`)

        let userCreate = document.createElement('td')
        userCreate.innerText = new Date(e.createdAt).toISOString().split('T')[0] 
        tr.append(userCreate)

        let userFname = document.createElement('td')
        userFname.innerText = e.firstName;
        tr.append(userFname)

        let userAvatar = document.createElement('td')
        let avatarImg = document.createElement('img')
        avatarImg.src = e.avatar;
        userAvatar.append(avatarImg)
        avatarImg.classList.add("avatarImg")
        tr.append(userAvatar)

        let userLname = document.createElement('td')
        userLname.innerText = e.lastName;
        tr.append(userLname)

        let userCountry = document.createElement('td')
        userCountry.innerText = e.country;
        tr.append(userCountry)

        let userZip = document.createElement('td')
        userZip.innerText = e.zip;
        tr.append(userZip)

        let userCity = document.createElement('td')
        userCity.innerText = e.city;
        tr.append(userCity)

        let userPhone = document.createElement('td')
        userPhone.innerText = e.phone;
        tr.append(userPhone)

        let userEmail = document.createElement('td')
        userEmail.innerText = e.email
        tr.append(userEmail)

        let userStatus = document.createElement('td')
        userStatus.innerText = e.status;
        tr.append(userStatus)

        let userId = document.createElement('td')
        userId.classList.add('id')
        userId.innerText = e.id
        tr.append(userId)

        let userLink = document.createElement('td')
        let userLinkImg = document.createElement('img')
        let userLinkA = document.createElement('a')
        userLinkA.href = `form.html?id=${e.id}`
        userLinkImg.src = 'img/edit.png'
        userLinkA.append(userLinkImg)
        userLink.append(userLinkA)
        tr.append(userLink)
        userLink.classList.add('edit')
        userLinkImg.classList.add('editImg')


        // let userLink = document.createElement('td')
        // let userLinkA = document.createElement('a')
        // userLinkA.href = `form.html?id=${e.id}`
        // userLinkA.innerText = 'edit'
        // userLink.append(userLinkA)
        // tr.append(userLinkA)

        let tdDelete = document.createElement('td')
        let deleteImg = document.createElement('img')
        deleteImg.src = 'img/delete.png'
        deleteImg.onclick = () => confirm('are u sure?') == true ? deleteRow(e.id) : false
        tdDelete.append(deleteImg)
        tr.append(tdDelete)
        tdDelete.classList.add('delete')
        deleteImg.classList.add("deleteImg")

        // let tdDelete = document.createElement('td')
        // let deleteBtn = document.createElement('button')
        // let deleteImg = document.createElement('img')
        // deleteBtn.innerText = 'Delete'
        // deleteBtn.classList.add('deletebtn')
        // deleteBtn.onclick = () => confirm('are u sure?') == true ? deleteRow(e.id) : false
        // tdDelete.append(deleteBtn)
        // tr.append(tdDelete)

        tablebody.append(tr)
    })
}
GetAllUsers()

const deleteRow = async (id) => {
    const responce = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users/${id}`, {
        method: 'DELETE',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        }
    })
    let deleteRow = document.querySelector(`.row-${id}`)
    deleteRow.remove()
}

function tableSearch() {
    let text = document.getElementById('search-text');
    let table = document.querySelector('.table');
    let regtext = new RegExp(text.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let k = table.rows[i].cells.length - 1; k >= 0; k--) {
            flag = regtext.test(table.rows[i].cells[k].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }
    }
}

