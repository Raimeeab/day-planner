// -------------------- Global variables --------------------------------


// -------------------- Display current date ----------------------------
var date = moment().format("dddd do MMM YYYY")
$("#date-display").text(date);

// -------------------- Display current time ----------------------------
function currentTime () {
    var time = moment().format("hh:mm:ss");
    $("#time-display").text(time);
};

currentTime();
setInterval(function(){
    currentTime();
},1000);


// -------------------- Time tracker ------------------------------------


