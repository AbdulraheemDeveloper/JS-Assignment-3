function clearInput(){
    document.getElementById("inputText").value = "";
}
document.getElementById("btn-1").onclick = function () {
    let simplealert = document.getElementById("inputText").value;
    if(simplealert==="")
    {
        alert("Please Enter Your Name:")
        return;
    }
    document.getElementById("btn-1").onclick = alert(simplealert);
    // document.getElementById("output").innerHTML = simplealert;
}
document.getElementById("btn-2").onclick = function () {
    document.getElementById("output").innerHTML = "";
    let myname = document.getElementById("inputText").value;
    if(myname==="")
    {
        alert("Please Enter Your Name:")
        return;
    }
    document.getElementById("output").innerHTML = myname;
}

let cities = ["Faisalabad","karachi","Islamabad","Sialkot","Gujranwala","Hyderabad","Lahore","Multan"];
function printAllCities(){
    document.getElementById("output").innerHTML = ""; 

for (let i = 0; i <cities.length; i++) {
    let city = cities[i];
    document.getElementById("output").innerHTML += i + 1 +") " + city + "<br />"
}
}
function addCity () {
    document.getElementById("output").innerHTML = "";
    document.getElementById("inputText").innerHTML = "";
    let city = document.getElementById("inputText").value;
    if (!city) {
        alert("Please Enter Your City Name:");
        return;
    }
    document.getElementById("output").innerHTML = "";
     
    document.getElementById("output").innerHTML = "<p><span style='color:green;'>" + "" + city + "" + "</span> hase successfully been added into list </p>"
    cities.push(city)  
}

function generateTable () {
    document.getElementById("output").innerHTML = ""; 
    tableNumber = +prompt("Please Enter table number.")
    startnumber = +prompt("Enter the starting number of table")
    endnumber = +prompt("Enter the Ending number of table")
    for(let i=startnumber; i <= endnumber; i++){
        let table = tableNumber + " * " + i + " = " + tableNumber*i + "<br />"
        document.getElementById("output").innerHTML += table;
    }
}