// -------------------- Global variables --------------------------------
var $text9AM = $("#text9AM");
var $text10AM = $("#text10AM");
var $text11AM = $("#text11AM");
var $text12AM = $("#text12AM");
var $text1PM = $("#text1PM");
var $text2PM = $("#text2PM");
var $text3PM = $("#text3PM");
var $text4PM = $("#text4PM");
var $text5PM = $("#text5PM");

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

// -------------------- Save a Task --------------------------------------
$(".saveButton").on("click", saveTask);

function saveTask() {
    localStorage.setItem("9AM", ($task9AM.val()));
    localStorage.setItem("10AM", ($task10AM.val()));
    localStorage.setItem("11AM", ($task11AM.val()));
    localStorage.setItem("12AM", ($task12AM.val()));
    localStorage.setItem("13PM", ($task1PM.val()));
    localStorage.setItem("14PM", ($task2PM.val()));
    localStorage.setItem("15PM", ($task3PM.val()));
    localStorage.setItem("16PM", ($task4PM.val()));
    localStorage.setItem("17PM", ($task5PM.val()));
}
// $("#text9AM").append(localStorage.getItem("9AM"));
// $("#text10AM").append(localStorage.getItem("10AM"));
// $("#text11AM").append(localStorage.getItem("11AM"));
// $("#text12AM").append(localStorage.getItem("12AM"));
// $("#text1PM").append(localStorage.getItem("13PM"));
// $("#text2PM").append(localStorage.getItem("14PM"));
// $("#text3PM").append(localStorage.getItem("15PM"));
// $("#text4PM").append(localStorage.getItem("16PM"));
// $("#text5PM").append(localStorage.getItem("17PM"));
console.log(saveTask);
// -------------------- Time tracker ------------------------------------

// -------------------- Clear Planner -----------------------------------
