import fetch from "node-fetch"
function getData(uId) {
    return new Promise(resolve =>{
        fetch('http://127.0.0.1:5501/Promise/data.txt').then(response=> response.text())
        .then(user => {
            setTimeout(() => {
            console.log("Fetched the data!");
            resolve(user);
            }, 4000);
        });
        });
    
}
    
async function getEmail(){
    console.log("start");
    var email = await getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");
}
getEmail();

