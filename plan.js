var canbeClicked = false
var curSource = new Array();


//first source uses querystring to determine what events to pull back
//curSource[0] = 'http://localhost:80/group/' + getValue;
//second source just returns all events
curSource[1] = 'http://localhost:80/';
var newSource = new Array(); //we'll use this later

$(document).ready(function () {
$('#main').css('opacity', 0.3);
$('#popup').show();

//$('#myModal').on('click', function(){$('#myModal').hide();})
    $('#calendar').fullCalendar('removeEvents').fullCalendar('removeEventSources')



    //    $.getJSON("http://localhost:80/test/", function (data, stat) {
    //        var start;

    $('#calendar').fullCalendar({
     lang: 'pl',
    timeFormat: 'H(:mm)',
        header: {
            left: 'month,agendaWeek,agendaDay',
            center: 'title',
            right: 'today prev,next'
        },
        eventSources: [
        {

            url: 'http://localhost:80/group/',

        }]
    });
//    $("#filter").change(function () {
//        





//})



function onChangeFilter(){

if(canbeClicked ==true){
var getValue = $('#filter option:selected').val()
var getYear = $('#filter2 option:selected').val()

        //get current status of our filters into newSource
        newSource[0] = 'http://localhost:80/group/' + getValue +'/' +getYear;
     
//               newSource[1] = 'http://localhost:80/test/';

        //remove the old eventSources
        $('#calendar').fullCalendar('removeEventSource', curSource[0]);
        $('#calendar').fullCalendar('removeEventSource', curSource[1]);
        $('#calendar').fullCalendar('removeEventSource', newSource[2]);
        $('#calendar').fullCalendar('refetchEvents');

        //attach the new eventSources
        $('#calendar').fullCalendar('addEventSource', newSource[0]);
        $('#calendar').fullCalendar('addEventSource', newSource[1]);
        $('#calendar').fullCalendar('refetchEvents');

        curSource[0] = newSource[0];
        curSource[1] = newSource[1];
        if (getValue == "ALL") {
            newSource[2] = 'http://localhost:80/groups/' +getYear
            $('#calendar').fullCalendar('removeEventSource', curSource[0]);
            $('#calendar').fullCalendar('removeEventSource', curSource[1]);
            $('#calendar').fullCalendar('refetchEvents');

            //attach the new eventSources
            $('#calendar').fullCalendar('addEventSource', newSource[2]);
           
            $('#calendar').fullCalendar('refetchEvents');
            }
        }

        }
        




 
 $('#submitFiltr2').on('click', function (){
 var getValue = $('#filter3 option:selected').val()
var getYear = $('#filter4 option:selected').val()

        //get current status of our filters into newSource
        newSource[0] = 'http://localhost:80/group/' + getValue +'/' +getYear;
     
//               newSource[1] = 'http://localhost:80/test/';

        //remove the old eventSources
        $('#calendar').fullCalendar('removeEventSource', curSource[0]);
        $('#calendar').fullCalendar('removeEventSource', curSource[1]);
        $('#calendar').fullCalendar('removeEventSource', newSource[2]);
        $('#calendar').fullCalendar('refetchEvents');

        //attach the new eventSources
        $('#calendar').fullCalendar('addEventSource', newSource[0]);
        $('#calendar').fullCalendar('addEventSource', newSource[1]);
        $('#calendar').fullCalendar('refetchEvents');

        curSource[0] = newSource[0];
        curSource[1] = newSource[1];
        if (getValue == "ALL") {
            newSource[2] = 'http://localhost:80/groups/' +getYear
            $('#calendar').fullCalendar('removeEventSource', curSource[0]);
            $('#calendar').fullCalendar('removeEventSource', curSource[1]);
            $('#calendar').fullCalendar('refetchEvents');

            //attach the new eventSources
            $('#calendar').fullCalendar('addEventSource', newSource[2]);
            $('#calendar').fullCalendar('addEventSource', newSource[3]);
             $('#calendar').fullCalendar('addEventSource', newSource[4]);
              $('#calendar').fullCalendar('addEventSource', newSource[6]);
            $('#calendar').fullCalendar('refetchEvents');

            
            
        }
        $('#main').css('opacity', '1.0');
        $('#popup').hide();
        canbeClicked = true
 });
 

 
 $('#filter2').on('change', function (){

   onChangeFilter();

});
 $('#filter').on('change', function (){

   onChangeFilter();

});

});


