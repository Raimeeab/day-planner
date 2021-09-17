// -------------------- Add a Task ----------------------------------
var taskModal = new bootstrap.Modal(document.getElementById('task-modal'))
var userInput = document.getElementById('user-input')
$(".taskItem").on('click', function(event){
    taskModal.show();
});
$("#close").on("click", function(event){
    taskModal.hide();
});
$("#save").on("click", function(event){
    taskModal.hide();
    // Save changes in localStorage
    // Display text input in timeblock selected 
});

// -------------------- Display current time ----------------------------
function currentTime () {
    var time = moment().format("hh:mm:ss");
    $("#time-display").text(time);
};

currentTime();
setInterval(function(){
    currentTime();
},1000);

// -------------------- Display current date ----------------------------
var date = moment().toDate("dddd do MMM YYYY")
$("#date-display").text(date);
    // TODO: remove time stamp and GMT from display

// -------------------- Time tracker ------------------------------------


// -------------------- Completed task ----------------------------------
