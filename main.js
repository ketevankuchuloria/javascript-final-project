        "use strict"
        function fetchTodo (){

        var text = document.getElementById("todo");
         if (text.style.display === "none") {
         text.style.display = "block";
         } else {
         text.style.display = "none";
         }

        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(data => data.json())
        .then(response => {
        let p = document.createElement('p');
        p.innerText = '---id:  ' + response.id + '\n'
            + '--------------------------------------- \n'
            + '---name:  ' + response.name + '\n'

            + '--------------------------------------- \n'
            + '---username:  ' + response.username + '\n'
 
            + '--------------------------------------- \n'
            + '---email:  ' + response.email + '\n'
            + '--------------------------------------- \n'
            + 'address: \n ' 
            + 'street:  ' + response.address.street + '\n'
            + 'suite:  ' + response.address.suite + '\n'
            + 'city:  ' + response.address.city + '\n'
            + 'zipcode:  ' + response.address.zipcode + '\n'

            + '--------------------------------------- \n'
            + 'geo: \n ' 
            + 'lat:  ' + response.address.geo.lat + '\n'
            + 'lng:  ' + response.address.geo.lng + '\n'
            + '--------------------------------------- \n'
            + 'phone:  ' + response.phone + '\n'
            + '--------------------------------------- \n'
            + 'website:  ' + response.website + '\n'
            + '--------------------------------------- \n'
            + 'company: \n ' 
            + 'name:  ' + response.company.name + '\n'
            + 'catchPhrase:  ' + response.company.chachPhrase + '\n'
            + 'bs:  ' + response.company.bs + '\n'


        document.body.append(p);
    })
    }
    







    function fetchTodo2 (){

        var text = document.getElementById("todo2");
         if (text.style.display === "none") {
         text.style.display = "block";
         } else {
         text.style.display = "none";
         }




        fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(data => data.json())
        .then(response => {
        let p = document.createElement('p');
        p.innerText = '---id:  ' + response.id + '\n'
            + '--------------------------------------- \n'
            + '---name:  ' + response.name + '\n'

            + '--------------------------------------- \n'
            + '---username:  ' + response.username + '\n'
 
            + '--------------------------------------- \n'
            + '---email:  ' + response.email + '\n'
            + '--------------------------------------- \n'
            + 'address: \n ' 
            + 'street:  ' + response.address.street + '\n'
            + 'suite:  ' + response.address.suite + '\n'
            + 'city:  ' + response.address.city + '\n'
            + 'zipcode:  ' + response.address.zipcode + '\n'

            + '--------------------------------------- \n'
            + 'geo: \n ' 
            + 'lat:  ' + response.address.geo.lat + '\n'
            + 'lng:  ' + response.address.geo.lng + '\n'
            + '--------------------------------------- \n'
            + 'phone:  ' + response.phone + '\n'
            + '--------------------------------------- \n'
            + 'website:  ' + response.website + '\n'
            + '--------------------------------------- \n'
            + 'company: \n ' 
            + 'name:  ' + response.company.name + '\n'
            + 'catchPhrase:  ' + response.company.chachPhrase + '\n'
            + 'bs:  ' + response.company.bs + '\n'


        document.body.append(p);
    })
    }


    function fetchTodo3 (){

        var text = document.getElementById("todo3");
         if (text.style.display === "none") {
         text.style.display = "block";
         } else {
         text.style.display = "none";
         }



         
        fetch("https://jsonplaceholder.typicode.com/users/3")
        .then(data => data.json())
        .then(response => {
        let p = document.createElement('p');
        p.innerText = '---id:  ' + response.id + '\n'
            + '--------------------------------------- \n'
            + '---name:  ' + response.name + '\n'

            + '--------------------------------------- \n'
            + '---username:  ' + response.username + '\n'
 
            + '--------------------------------------- \n'
            + '---email:  ' + response.email + '\n'
            + '--------------------------------------- \n'
            + 'address: \n ' 
            + 'street:  ' + response.address.street + '\n'
            + 'suite:  ' + response.address.suite + '\n'
            + 'city:  ' + response.address.city + '\n'
            + 'zipcode:  ' + response.address.zipcode + '\n'

            + '--------------------------------------- \n'
            + 'geo: \n ' 
            + 'lat:  ' + response.address.geo.lat + '\n'
            + 'lng:  ' + response.address.geo.lng + '\n'
            + '--------------------------------------- \n'
            + 'phone:  ' + response.phone + '\n'
            + '--------------------------------------- \n'
            + 'website:  ' + response.website + '\n'
            + '--------------------------------------- \n'
            + 'company: \n ' 
            + 'name:  ' + response.company.name + '\n'
            + 'catchPhrase:  ' + response.company.chachPhrase + '\n'
            + 'bs:  ' + response.company.bs + '\n'


        document.body.append(p);
    })
    }



    function fetchTodo4 (){

        var text = document.getElementById("todo4");
         if (text.style.display === "none") {
         text.style.display = "block";
         } else {
         text.style.display = "none";
         }



         
        fetch("https://jsonplaceholder.typicode.com/users/4")
        .then(data => data.json())
        .then(response => {
        let p = document.createElement('p');
        p.innerText = '---id:  ' + response.id + '\n'
            + '--------------------------------------- \n'
            + '---name:  ' + response.name + '\n'

            + '--------------------------------------- \n'
            + '---username:  ' + response.username + '\n'
 
            + '--------------------------------------- \n'
            + '---email:  ' + response.email + '\n'
            + '--------------------------------------- \n'
            + 'address: \n ' 
            + 'street:  ' + response.address.street + '\n'
            + 'suite:  ' + response.address.suite + '\n'
            + 'city:  ' + response.address.city + '\n'
            + 'zipcode:  ' + response.address.zipcode + '\n'

            + '--------------------------------------- \n'
            + 'geo: \n ' 
            + 'lat:  ' + response.address.geo.lat + '\n'
            + 'lng:  ' + response.address.geo.lng + '\n'
            + '--------------------------------------- \n'
            + 'phone:  ' + response.phone + '\n'
            + '--------------------------------------- \n'
            + 'website:  ' + response.website + '\n'
            + '--------------------------------------- \n'
            + 'company: \n ' 
            + 'name:  ' + response.company.name + '\n'
            + 'catchPhrase:  ' + response.company.chachPhrase + '\n'
            + 'bs:  ' + response.company.bs + '\n'


        document.body.append(p);
    })
    }



    function fetchTodo5 (){

        var text = document.getElementById("todo5");
         if (text.style.display === "none") {
         text.style.display = "block";
         } else {
         text.style.display = "none";
         }



         
        fetch("https://jsonplaceholder.typicode.com/users/5")
        .then(data => data.json())
        .then(response => {
        let p = document.createElement('p');
        p.innerText = '---id:  ' + response.id + '\n'
            + '--------------------------------------- \n'
            + '---name:  ' + response.name + '\n'

            + '--------------------------------------- \n'
            + '---username:  ' + response.username + '\n'
 
            + '--------------------------------------- \n'
            + '---email:  ' + response.email + '\n'
            + '--------------------------------------- \n'
            + 'address: \n ' 
            + 'street:  ' + response.address.street + '\n'
            + 'suite:  ' + response.address.suite + '\n'
            + 'city:  ' + response.address.city + '\n'
            + 'zipcode:  ' + response.address.zipcode + '\n'

            + '--------------------------------------- \n'
            + 'geo: \n ' 
            + 'lat:  ' + response.address.geo.lat + '\n'
            + 'lng:  ' + response.address.geo.lng + '\n'
            + '--------------------------------------- \n'
            + 'phone:  ' + response.phone + '\n'
            + '--------------------------------------- \n'
            + 'website:  ' + response.website + '\n'
            + '--------------------------------------- \n'
            + 'company: \n ' 
            + 'name:  ' + response.company.name + '\n'
            + 'catchPhrase:  ' + response.company.chachPhrase + '\n'
            + 'bs:  ' + response.company.bs + '\n'


        document.body.append(p);
    })
    }


   

    function fetchTodo6 (){

        var text = document.getElementById("todo6");
         if (text.style.display === "none") {
         text.style.display = "block";
         } else {
         text.style.display = "none";
         }



         
        fetch("https://jsonplaceholder.typicode.com/users/6")
        .then(data => data.json())
        .then(response => {
        let p = document.createElement('p');
        p.innerText = '---id:  ' + response.id + '\n'
            + '--------------------------------------- \n'
            + '---name:  ' + response.name + '\n'

            + '--------------------------------------- \n'
            + '---username:  ' + response.username + '\n'
 
            + '--------------------------------------- \n'
            + '---email:  ' + response.email + '\n'
            + '--------------------------------------- \n'
            + 'address: \n ' 
            + 'street:  ' + response.address.street + '\n'
            + 'suite:  ' + response.address.suite + '\n'
            + 'city:  ' + response.address.city + '\n'
            + 'zipcode:  ' + response.address.zipcode + '\n'

            + '--------------------------------------- \n'
            + 'geo: \n ' 
            + 'lat:  ' + response.address.geo.lat + '\n'
            + 'lng:  ' + response.address.geo.lng + '\n'
            + '--------------------------------------- \n'
            + 'phone:  ' + response.phone + '\n'
            + '--------------------------------------- \n'
            + 'website:  ' + response.website + '\n'
            + '--------------------------------------- \n'
            + 'company: \n ' 
            + 'name:  ' + response.company.name + '\n'
            + 'catchPhrase:  ' + response.company.chachPhrase + '\n'
            + 'bs:  ' + response.company.bs + '\n'


        document.body.append(p);
    })
    }


    function fetchTodo7 (){

        var text = document.getElementById("todo7");
         if (text.style.display === "none") {
         text.style.display = "block";
         } else {
         text.style.display = "none";
         }



         
        fetch("https://jsonplaceholder.typicode.com/users/7")
        .then(data => data.json())
        .then(response => {
        let p = document.createElement('p');
        p.innerText = '---id:  ' + response.id + '\n'
            + '--------------------------------------- \n'
            + '---name:  ' + response.name + '\n'

            + '--------------------------------------- \n'
            + '---username:  ' + response.username + '\n'
 
            + '--------------------------------------- \n'
            + '---email:  ' + response.email + '\n'
            + '--------------------------------------- \n'
            + 'address: \n ' 
            + 'street:  ' + response.address.street + '\n'
            + 'suite:  ' + response.address.suite + '\n'
            + 'city:  ' + response.address.city + '\n'
            + 'zipcode:  ' + response.address.zipcode + '\n'

            + '--------------------------------------- \n'
            + 'geo: \n ' 
            + 'lat:  ' + response.address.geo.lat + '\n'
            + 'lng:  ' + response.address.geo.lng + '\n'
            + '--------------------------------------- \n'
            + 'phone:  ' + response.phone + '\n'
            + '--------------------------------------- \n'
            + 'website:  ' + response.website + '\n'
            + '--------------------------------------- \n'
            + 'company: \n ' 
            + 'name:  ' + response.company.name + '\n'
            + 'catchPhrase:  ' + response.company.chachPhrase + '\n'
            + 'bs:  ' + response.company.bs + '\n'


        document.body.append(p);
    })
    }


    function fetchTodo8 (){

        var text = document.getElementById("todo8");
         if (text.style.display === "none") {
         text.style.display = "block";
         } else {
         text.style.display = "none";
         }



         
        fetch("https://jsonplaceholder.typicode.com/users/8")
        .then(data => data.json())
        .then(response => {
        let p = document.createElement('p');
        p.innerText = '---id:  ' + response.id + '\n'
            + '--------------------------------------- \n'
            + '---name:  ' + response.name + '\n'

            + '--------------------------------------- \n'
            + '---username:  ' + response.username + '\n'
 
            + '--------------------------------------- \n'
            + '---email:  ' + response.email + '\n'
            + '--------------------------------------- \n'
            + 'address: \n ' 
            + 'street:  ' + response.address.street + '\n'
            + 'suite:  ' + response.address.suite + '\n'
            + 'city:  ' + response.address.city + '\n'
            + 'zipcode:  ' + response.address.zipcode + '\n'

            + '--------------------------------------- \n'
            + 'geo: \n ' 
            + 'lat:  ' + response.address.geo.lat + '\n'
            + 'lng:  ' + response.address.geo.lng + '\n'
            + '--------------------------------------- \n'
            + 'phone:  ' + response.phone + '\n'
            + '--------------------------------------- \n'
            + 'website:  ' + response.website + '\n'
            + '--------------------------------------- \n'
            + 'company: \n ' 
            + 'name:  ' + response.company.name + '\n'
            + 'catchPhrase:  ' + response.company.chachPhrase + '\n'
            + 'bs:  ' + response.company.bs + '\n'


        document.body.append(p);
    })
    }


   

    function fetchTodo9 (){

        var text = document.getElementById("todo9");
         if (text.style.display === "none") {
         text.style.display = "block";
         } else {
         text.style.display = "none";
         }



         
        fetch("https://jsonplaceholder.typicode.com/users/9")
        .then(data => data.json())
        .then(response => {
        let p = document.createElement('p');
        p.innerText = '---id:  ' + response.id + '\n'
            + '--------------------------------------- \n'
            + '---name:  ' + response.name + '\n'

            + '--------------------------------------- \n'
            + '---username:  ' + response.username + '\n'
 
            + '--------------------------------------- \n'
            + '---email:  ' + response.email + '\n'
            + '--------------------------------------- \n'
            + 'address: \n ' 
            + 'street:  ' + response.address.street + '\n'
            + 'suite:  ' + response.address.suite + '\n'
            + 'city:  ' + response.address.city + '\n'
            + 'zipcode:  ' + response.address.zipcode + '\n'

            + '--------------------------------------- \n'
            + 'geo: \n ' 
            + 'lat:  ' + response.address.geo.lat + '\n'
            + 'lng:  ' + response.address.geo.lng + '\n'
            + '--------------------------------------- \n'
            + 'phone:  ' + response.phone + '\n'
            + '--------------------------------------- \n'
            + 'website:  ' + response.website + '\n'
            + '--------------------------------------- \n'
            + 'company: \n ' 
            + 'name:  ' + response.company.name + '\n'
            + 'catchPhrase:  ' + response.company.chachPhrase + '\n'
            + 'bs:  ' + response.company.bs + '\n'


        document.body.append(p);
    })
    }


    function fetchTodo10 (){

        var text = document.getElementById("todo10");
         if (text.style.display === "none") {
         text.style.display = "block";
         } else {
         text.style.display = "none";
         }



         
        fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(data => data.json())
        .then(response => {
        let p = document.createElement('p');
        p.innerText = '---id:  ' + response.id + '\n'
            + '--------------------------------------- \n'
            + '---name:  ' + response.name + '\n'

            + '--------------------------------------- \n'
            + '---username:  ' + response.username + '\n'
 
            + '--------------------------------------- \n'
            + '---email:  ' + response.email + '\n'
            + '--------------------------------------- \n'
            + 'address: \n ' 
            + 'street:  ' + response.address.street + '\n'
            + 'suite:  ' + response.address.suite + '\n'
            + 'city:  ' + response.address.city + '\n'
            + 'zipcode:  ' + response.address.zipcode + '\n'

            + '--------------------------------------- \n'
            + 'geo: \n ' 
            + 'lat:  ' + response.address.geo.lat + '\n'
            + 'lng:  ' + response.address.geo.lng + '\n'
            + '--------------------------------------- \n'
            + 'phone:  ' + response.phone + '\n'
            + '--------------------------------------- \n'
            + 'website:  ' + response.website + '\n'
            + '--------------------------------------- \n'
            + 'company: \n ' 
            + 'name:  ' + response.company.name + '\n'
            + 'catchPhrase:  ' + response.company.chachPhrase + '\n'
            + 'bs:  ' + response.company.bs + '\n'


        document.body.append(p);
    })
    }


//    second section


var btn = document.getElementById("btn").addEventListener("click", getData);
var div = decument.getElementById("postsDiv");
var con=0;

function getData(){
    
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.onload=function(){
        if(this.status===200){
            let data = JSON.parase(this.responseText);
            console.log(this.responseText);
            for (let index = 0; index < 1; index++) {
                div.innerHTML+=`

                <div class="col-3 text-white card bg-dark mx-auto border border-white ">
  
  <div class="card-body">
    
    <p class="card-title">${data[con].Id} </p>
    <p class="card-title">${data[con].title} </p>
    <p class="card-title">${data[con].body} </p>
    
  </div>
</div>
                
                `
                con=con+1;
            }
        }
    }
    xhr.send();
}
