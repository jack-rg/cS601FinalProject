// Open sidebar
function sidebar_open() {
    var sidebar = document.getElementById("mySidebar");
    sidebar.style.width = "300px";
    sidebar.style.paddingTop = "10%";
    sidebar.className += " show";
}

// Close sidebar
function sidebar_close() {
    var sidebar = document.getElementById("mySidebar");
    sidebar.className = sidebar.className.replace(" show", "");
}


//Project 1 Modal
function openProject1Modal() {
    document.getElementById('project1Modal').style.display = 'block';
}

function closeProject1Modal() {
    document.getElementById('project1Modal').style.display = 'none';
}



//Project 2 Modal
function openProject2Modal() {
    document.getElementById('project2Modal').style.display = 'block';
}

function closeProject2Modal() {
    document.getElementById('project2Modal').style.display = 'none';
}



//Project 3 Modal
function openProject3Modal() {
    document.getElementById('project3Modal').style.display = 'block';
}

function closeProject3Modal() {
    document.getElementById('project3Modal').style.display = 'none';
}




//Project 4 Modal
function openProject4Modal() {
    document.getElementById('project4Modal').style.display = 'block';
}

function closeProject4Modal() {
    document.getElementById('project4Modal').style.display = 'none';
}



// Toggle the NavBar on mobile when clicking on the menu icon
function toggleMiniNavBar() {
    var miniNavBar = document.getElementById("miniNavBar");
    //if miniNavBar is hidden, show it. else hide it
    if (miniNavBar.className.indexOf("show") == -1) {
        miniNavBar.className += " show";
    } else {
        miniNavBar.className = miniNavBar.className.replace(" show", "");
    }
}

//retrieve personal info
function getMyData() {
    fetch('./Data/myInfo.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            appendData(data);
        })
        .catch(function(err) {
            console.log('error: ' + err);
        });

    function appendData(data) {
        var mainContainer = document.getElementById("demographics");
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = '<p><b class="bigFont"> Name: </b> ' + data[i].Name + '</p>';
            div.innerHTML = '<p><b class="bigFont"> Pronouns: </b> ' + data[i].Pronouns + '</p>';
            div.innerHTML = '<p><b class="bigFont"> Hometown: </b> ' + data[i].Hometown + '</p>';
            div.innerHTML = '<p><b class="bigFont"> Nationality: </b> ' + data[i].Nationality + '</p>';
            div.innerHTML = '<p><b class="bigFont"> Education: </b> ' + data[i].Education + '</p>';
            div.innerHTML = '<p><b class="bigFont"> Degree: </b> ' + data[i].Degree + '</p>';

            mainContainer.appendChild(div);
        }
    }
}


//retrieve service info
function getMyServices() {
    fetch('./Data/myServices.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            appendData(data);
        })
        .catch(function(err) {
            console.log('error: ' + err);
        });

    function appendData(data) {
        var mainContainer = document.getElementById("service1");
        var div = document.createElement("p");
        div.innerHTML = '' + data[0].Service + '</p>';
        mainContainer.appendChild(div);

        var mainContainer = document.getElementById("service2");
        var div = document.createElement("p");
        div.innerHTML = '' + data[1].Service + '</p>';
        mainContainer.appendChild(div);

        var mainContainer = document.getElementById("service3");
        var div = document.createElement("p");
        div.innerHTML = '' + data[2].Service + '</p>';
        mainContainer.appendChild(div);
    }
}


//retrieve price info
function getMyPrices() {
    fetch('./Data/myServices.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            appendData(data);
        })
        .catch(function(err) {
            console.log('error: ' + err);
        });

    function appendData(data) {
        var mainContainer = document.getElementById("price1");
        var div = document.createElement("p");
        div.innerHTML = '' + data[0].Price + '</p>';
        mainContainer.appendChild(div);

        var mainContainer = document.getElementById("price2");
        var div = document.createElement("p");
        div.innerHTML = '' + data[1].Price + '</p>';
        mainContainer.appendChild(div);

        var mainContainer = document.getElementById("price3");
        var div = document.createElement("p");
        div.innerHTML = '' + data[2].Price + '</p>';
        mainContainer.appendChild(div);
    }
}


//retrieve rate info
function getMyRates() {
    fetch('./Data/myServices.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            appendData(data);
        })
        .catch(function(err) {
            console.log('error: ' + err);
        });

    function appendData(data) {
        var mainContainer = document.getElementById("rate1");
        var div = document.createElement("p");
        div.innerHTML = '' + data[0].Rate + '</p>';
        mainContainer.appendChild(div);

        var mainContainer = document.getElementById("rate2");
        var div = document.createElement("p");
        div.innerHTML = '' + data[1].Rate + '</p>';
        mainContainer.appendChild(div);

        var mainContainer = document.getElementById("rate3");
        var div = document.createElement("p");
        div.innerHTML = '' + data[2].Rate + '</p>';
        mainContainer.appendChild(div);


        let totalPrice = getTotalPrice(data[0].Rate + data[1].Rate + data[2].Rate);

        var mainContainer = document.getElementById("totalPrice");
        var div = document.createElement("p");
        div.innerHTML = '' + totalPrice + '</p>';
        mainContainer.appendChild(div);


    }
}


//retrieve leadership page info
function getMyLeadershipData() {
    getMyServices();
    getMyPrices();
    getMyRates();
}

let getTotalPrice = (a, b, c) => a + b + c;