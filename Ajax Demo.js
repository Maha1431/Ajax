let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function makeAJAXCall(methodtype, url, callback, async = true, data = null){
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    console.log("State Changed called. Ready State:" + xhr.readyState+" Status:" + xhr.status);
    if(readyState == 4)
    {
        //Matching all 200 series Responses
        if(xhr.status == 200 || xhr.status == 201)
        {
            callback(xhr.responseText);
        }
        else if(xhr.status >= 400){
            console.log("Handle 400 client Error or 500 server Error");
        }
    }    
}
xhr.open(methodtype, url, async);
if (data){
    console.log(JSON.stringify(data));
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));

}
else xhr.send();
console.log(methodtype+ "request sent to the server");
}

const getURL = "http://127.0.0.1:3000/employee/1";
function getUserDetails(data){
    console.log("Get User Data:" + data)
}
makeAJAXCall("GET", getURL, getUserDetails);

const deleteURL = "http://127.0.0.1:3000/employee/4";
function UserDeleted(data){
    console.log("UserDeleted: " + data)
}
makeAJAXCall("DELETE", deleteURL, UserDeleted, false);

const postURL = "http://127.0.0.1:3000/employee";
const empdata= {"name": "Hari", "salary" : "4000" };
function UserAdded(data)
{
    console.log ("User Added:" + data)
}
makeAJAXCall("UPADATE", postURL, UserAdded , true, empdata);