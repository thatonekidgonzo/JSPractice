const d = new Date();
let day = d.getDay();
var today;

switch(day) {
    case 0:
        today = 'Sunday'
        break;
    case 1:
        today = 'Monday'
        break;
    case 2:
        today = 'Tuesday'
        break;
    case 3:
        today = 'Wedsnesday'
        break;
    case 4:
        today = 'Thursday'
        break;
    case 5:
        today = 'Friday'
        break;
    case 6:
        today = 'Saturday'
        break;            
}




document.write('<h2>' + today + '</h2>')