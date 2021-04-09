function count() {
    let month = +document.getElementById("month").value;
switch (month){
    case 2:
        document.getElementById("dayOfmonth").innerHTML = "Day of Month is 28 or 29";
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.getElementById("dayOfmonth").innerHTML = "Day of Month is 31";
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.getElementById("dayOfmonth").innerHTML = "Day of Month is 30";
        break;
}
}count()
