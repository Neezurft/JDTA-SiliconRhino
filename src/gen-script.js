function adjustEventInfo(){
    var elem = document.getElementById("eventInfoWrapper"); 
    if(elem)
        elem.style.marginTop = document.getElementById("eventInfoNav").offsetHeight + "px"; 
}

function adjustEventForm(){
    var elem = document.getElementById("eventForm"); 
    if(elem)
        elem.style.marginTop = (window.innerHeight-elem.offsetHeight)/2 - 50 + "px";
}

function adjustements(){
    adjustEventInfo();
    adjustEventForm();
}
// TODO - Find a better hook for this?
setInterval(adjustements,100);