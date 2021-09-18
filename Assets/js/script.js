// -------------------- Global variables --------------------------------
var $task9AM = $("#task9AM");
var $task10AM = $("#task10AM");
var $task11AM = $("#task11AM");
var $task12AM = $("#task12AM");
var $task1PM = $("#task1PM");
var $task2PM = $("#task2PM");
var $task3PM = $("#task3PM");
var $task4PM = $("#task4PM");
var $task5PM = $("#task5PM");

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
    console.log('saveTask called');
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
