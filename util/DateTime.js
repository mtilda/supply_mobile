const dayName = (dayNumber) => {
    switch(dayNumber) {
        case 0: return "Sunday"; break;
        case 1: return "Monday"; break;
        case 2: return "Tuesday"; break;
        case 3: return "Wednesday"; break;
        case 4: return "Thursday"; break;
        case 5: return "Friday"; break;
        case 6: return "Saturday"; break;
    }
}

const prettyDateTimeFromSQL = (SQLDateTime) => {

    const date = new Date(SQLDateTime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeFormatted = `${hours % 12}:${minutes} ${hours < 12 ? "AM" : "PM"}`;
    const now = new Date();
    let dateFormatted = "";

    if( date.getTime() < now.getTime() && now - date < 604800000) {
        dateFormatted = `${dayName(date.getDay())}`;
    } else {
        dateFormatted = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }

    return timeFormatted + " on " + dateFormatted;
};

export { prettyDateTimeFromSQL };