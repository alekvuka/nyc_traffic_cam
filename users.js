
const maybePluralize = (count, noun, suffix = 's') =>`${count} ${noun}${count !== 1 ? suffix : ''}`;

let numberOfRoutines
let userName

function appendUserInfo(result){
  numberOfRoutines = result.routines.length
  userName = result.name

  $('#user_info').append(
    `<h1>Hello, ${userName}! </h1>
     You have a total of ${maybePluralize(numberOfRoutines, 'routine')} today.
     <br>
     <br>
     You can <a href="" id='see_all_routines'>see all of your routines</a>
     You can <a href="" id='sort_my_routines'>sort your routines</a>
     or <a href="" id='create_a_routine'> create a new routine</a>
    `
  )

  $('#see_all_routines')[0].addEventListener('click', function(e){
       e.preventDefault();
       getAllRoutines()

  })
  $('#sort_my_routines')[0].addEventListener('click', function(e){
       e.preventDefault();
       sortRoutines()



  })



  $('#create_a_routine')[0].addEventListener('click', function(e){
       e.preventDefault();
       createRoutine()
  })
}

function clearPage() {
  $('#user_info').empty()
  $("#current_routine").empty()
  $("#upcoming_routine").empty()
  $('#routines_page').empty()
}

function appendUpcomingRoutines(result){

  $("#upcoming_routine").append("<h3>_____________________________UPCOMING_ROUTINE_______________________________</h3>")

  for(i=0; i<result.length; i++){
     $("#upcoming_routine").append(`${result[i].name} (${result[i].start_time} - ${result[i].end_time}) <br>`)

     for(j=0; j<result[i].tasks.length; j++) {
       $("#upcoming_routine").append(`<input type="checkbox" name="task" value="task">${result[i].tasks[j].name}<br>`)
     }
     $("#upcoming_routine").append("<br>")

  }
}

function sortRoutines(rout){
  id = $('#user_id')[0].value
  $.getJSON("/get_routines/" + id, function(items){


    items.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
       return 1;
      }
       if (nameA > nameB) {
         return -1;
       }
     // names must be equal
      return 0;
    });
    showAllRoutines(items)
  })
  
}





function appendCurrentRoutines(result) {

  $("#current_routine").append("<h3>_____________________________CURRENT_ROUTINE_______________________________</h3>")

  if(result.length === 0){
    $("#current_routine").append(
      `You do not have a routine that is applicable at the current time <br>
       <a href="" id='make_a_routine'> create one!</a> `
    )
    $('#make_a_routine')[0].addEventListener('click', function(e){
         e.preventDefault();
         createRoutine()
    })
  }else{

    for(i=0; i<result.length; i++){
       $("#current_routine").append(`${result[i].name} (${result[i].start_time} - ${result[i].end_time}) <br>`)

       for(j=0; j<result[i].tasks.length; j++) {
         $("#current_routine").append(`<input type="checkbox" name="task" value="task">${result[i].tasks[j].name}<br>`)
       }
       $("#current_routine").append("<br>")
    }
  }
}

function userInfo() {
   id = $('#user_id')[0].value
   $.getJSON("/get_user/" + id, function(result){
     appendUserInfo(result)
   })
}

function currentRoutines() {
  id = $('#user_id')[0].value
  $.getJSON("/get_current_routines/" + id, function(result){
    appendCurrentRoutines(result)
  })
}

function upcomingRoutines() {
  id = $('#user_id')[0].value
  $.getJSON("/get_upcoming_routines/" + id, function(result){
    appendUpcomingRoutines(result)
  })
}

$(document).ready(function() {
  userInfo()
  currentRoutines()
  upcomingRoutines()
});
