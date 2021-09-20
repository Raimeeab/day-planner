// -------------------- Global variables -------------------------------------
var task9AM = $("#9");
var task10AM = $("#10");
var task11AM = $("#11");
var task12PM = $("#12");
var task1PM = $("#13");
var task2PM = $("#14");
var task3PM = $("#15");
var task4PM = $("#16");
var task5PM = $("#17");

// -------------------- Display current date in vp ----------------------------
var date = moment().format("dddd, MMMM Do, YYYY")
$("#date-display").text(date);

// -------------------- Display current time in vp ----------------------------
function currentTime() {
    var time = moment().format("hh:mm:ss");
    $("#time-display").text(time);
};

currentTime();
setInterval(function(){
    currentTime();
},1000);

// -------------------- Save Tasks --------------------------------------------

// Event listener to save item to localStorage
$(".saveButton").on("click", saveTask);

function saveTask() {
    // Targets all parent elements with the ID attribute
    var timeSelected = $(this).parent().attr("id");
    // Targets all siblings with class textValue
    var value = $(this).siblings(".textValue").val();
    // Sets items into localStorage
    localStorage.setItem(timeSelected, ($(this).siblings(".textValue").val()));
};

// Retrieve values from localStorage and displays onto vp
$("#9 .textValue").val(localStorage.getItem("9"));
$("#10 .textValue").val(localStorage.getItem("10"));
$("#11 .textValue").val(localStorage.getItem("11"));
$("#12 .textValue").val(localStorage.getItem("12"));
$("#13 .textValue").val(localStorage.getItem("13"));
$("#14 .textValue").val(localStorage.getItem("14"));
$("#15 .textValue").val(localStorage.getItem("15"));
$("#16 .textValue").val(localStorage.getItem("16"));
$("#17 .textValue").val(localStorage.getItem("17"));

// -------------------- Time tracker ------------------------------------------
timeTracker();
function timeTracker() { 
    // Retrieves current time in hour 
    var currentHour = moment().hour(); 
    $(".timeBlock").each(
        function() {
            // Targets all parent ID attributes 
            var checkHour = $(this).parent().attr("id");
            // Changes all strings into an integer 
            checkHour = parseInt(checkHour);
            if (checkHour < currentHour) {
                // If > currentHour, text area is grey
                $(this).siblings().addClass("past");
                //removeClass ensures there are no conflicts with the colour that's meant to be selected
                $(this).siblings().removeClass("present");
                $(this).siblings().removeClass("future");
            } else if (checkHour === currentHour) {
                // If equal to currentHour, text area is green
                $(this).siblings().addClass("present");
                $(this).siblings().removeClass("past");
                $(this).siblings().removeClass("future");
            } else {
                // If < currentHour, text area is red 
                $(this).siblings().addClass("future");
                $(this).siblings().removeClass("past");
                $(this).siblings().removeClass("present");
            };
        }
    )
};

// -------------------- Clear Planner ---------------------------------------
// Event listener to clear localStorage data 
$(".clear").on("click", clearPlanner);

// Clears data from localStorage and vp
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