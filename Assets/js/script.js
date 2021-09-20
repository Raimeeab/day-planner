// -------------------- Global variables --------------------------------
var task9AM = $("#9");
var task10AM = $("#10");
var task11AM = $("#11");
var task12PM = $("#12");
var task1PM = $("#13");
var task2PM = $("#14");
var task3PM = $("#15");
var task4PM = $("#16");
var task5PM = $("#17");

// -------------------- Display current date ----------------------------
var date = moment().format("dddd, MMMM Do, YYYY")
$("#date-display").text(date);

// -------------------- Display current time ----------------------------
function currentTime() {
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
    var timeSelected = $(this).parent().attr("id");
    var value = $(this).siblings(".textValue").val();
    localStorage.setItem(timeSelected, ($(this).siblings(".textValue").val()));
};

// getItems and display on screen after page reload 
$("#9 .textValue").val(localStorage.getItem("9"));
$("#10 .textValue").val(localStorage.getItem("10"));
$("#11 .textValue").val(localStorage.getItem("11"));
$("#12 .textValue").val(localStorage.getItem("12"));
$("#13 .textValue").val(localStorage.getItem("13"));
$("#14 .textValue").val(localStorage.getItem("14"));
$("#15 .textValue").val(localStorage.getItem("15"));
$("#16 .textValue").val(localStorage.getItem("16"));
$("#17 .textValue").val(localStorage.getItem("17"));

// -------------------- Time tracker ------------------------------------
timeTracker();
function timeTracker() { 
    var currentHour = moment().hour();
    $(".timeBlock").each(
        function() {
            var checkHour = $(this).parent().attr("id");
            checkHour = parseInt(checkHour);
            if (checkHour < currentHour) {
                $(this).siblings().addClass("past");
            } else if (checkHour === currentHour) {
                $(this).siblings().addClass("present");
            } else {
                $(this).siblings().addClass("future");
            };
        }
    )
};

// -------------------- Clear Planner -----------------------------------
$(".clear").on("click", clearPlanner);

function clearPlanner() {
    $("#9 .textValue").val(localStorage.clear("9"));
    $("#10 .textValue").val(localStorage.clear("10"));
    $("#11 .textValue").val(localStorage.clear("11"));
    $("#12 .textValue").val(localStorage.clear("12"));
    $("#13 .textValue").val(localStorage.clear("13"));
    $("#14 .textValue").val(localStorage.clear("14"));
    $("#15 .textValue").val(localStorage.clear("15"));
    $("#16 .textValue").val(localStorage.clear("16"));
    $("#17 .textValue").val(localStorage.clear("17"));
};