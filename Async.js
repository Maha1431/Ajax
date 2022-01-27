function showtime() {
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Minus" + date.getSeconds() + "secs:";
}
function showSeesionExpire(){
    console.log("Activity-B: Your Seesion is Expired at "+showtime());
}
console.log("Activity-A: Triggering Activity-B at "+showtime());
setTimeout(showSeesionExpire, 5000);
console.log("Activity-A Triggered Activity-B at "+showtime() +" will exexute after 5 seconds");