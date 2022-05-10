function loadTable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.mecallapi.com/api/users"); //api of random users for content in demo
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var newTableRow = '';
            const newUserData = JSON.parse(this.responseText);
            for (let newItem of newUserData) {
                newTableRow += '<tr>';
                newTableRow += '<td>' + newItem['id'] + '</td>';
                newTableRow += '<td>' + newItem['fname'] + '</td>';
                newTableRow += '<td>' + newItem['lname'] + '</td>';
                newTableRow += '<td>' + newItem['username'] + '</td>';
                newTableRow += '<td><button class="button grayModeDark margin" onclick="openEditModal(' + newItem['id'] + ')"><i class="fa fa-edit"></i></button>';
                newTableRow += '<button class="button red text-white" onclick="userDelete(' + newItem['id'] + ')"><i class="fa fa-trash"></i></button></td>';
                newTableRow += "</tr>";
            }
            document.getElementById("mytable").innerHTML = newTableRow;
        }
    };
}

//initial call to create the table
loadTable();


// Join Modal
function openJoinModal() {
    document.getElementById('joinModal').style.display = 'block';
}

function closeJoinModal() {
    document.getElementById('joinModal').style.display = 'none';
}




function userJoin() {
    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("lastName").value;
    const username = document.getElementById("userName").value;
    const email = document.getElementById("email").value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://www.mecallapi.com/api/users/create");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "fname": fname,
        "lname": lname,
        "username": username,
        "email": email,
        "avatar": "https://www.mecallapi.com/users/cat.png"
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            closeJoinModal();
            loadTable();
        }
    };
}

function openEditModal() {
    document.getElementById('editModal').style.display = 'block';
}

function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
}


function showUserEdit(id) {
    console.log(id);
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.mecallapi.com/api/users/" + id);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            const user = objects['user'];
            console.log(user);
            document.getElementById(firstNameEdit).value = user['fname'];
            document.getElementById(firstNameEdit).value = user['lname'];
            document.getElementById(firstNameEdit).value = user['username'];
            document.getElementById(firstNameEdit).value = user['email'];

        }
    };
}

function userEdit() {
    const id = document.getElementById("id").value;
    const fname = document.getElementById("firstNameEdit").value;
    const lname = document.getElementById("lastNameEdit").value;
    const username = document.getElementById("userNameEdit").value;
    const email = document.getElementById("emailEdit").value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "https://www.mecallapi.com/api/users/update");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "id": id,
        "fname": fname,
        "lname": lname,
        "username": username,
        "email": email,
        "avatar": "https://www.mecallapi.com/users/cat.png"
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            closeEditModal();
            loadTable();
        }
    };
}

function userDelete(id) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "https://www.mecallapi.com/api/users/delete");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "id": id
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            loadTable();
        }
    };
}