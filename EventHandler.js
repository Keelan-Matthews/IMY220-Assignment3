class EventHandler {
    constructor(events) {
        this.events = events;
    }
    getEventsBetweenDates(start, end) {
        return events.filter(e => e.dateStart >= start && e.dateEnd <= end);
    }
    getByMonth(month) {
        return events.filter(e => new Date(e.dateStart).getMonth() === month - 1);
    }
    getUniqueDateAndSort() {
        return events
            .filter((e, i, self) => self.findIndex(t => t.dateStart === e.dateStart && t.dateEnd === e.dateEnd) === i)
            .sort((a, b) => new Date(a.dateStart).getMonth() - new Date(b.dateStart).getMonth());
    }
    getSummary() {
        let obj = (arguments.length > 0 && arguments[0].constructor === Array) 
        ? arguments[0] 
        : this.constructor === Array 
        ? this 
        : arguments.length === 0 
        ? this.events : Array.prototype.slice.apply(arguments);

        return obj.map(e => {
            return (e.dateStart === e.dateEnd)
                ? `On ${e.dateStart}: ${e.name} (${e.description})`
                : `From ${e.dateStart} to ${e.dateEnd}: ${e.name} (${e.description})`;
        })
    }
}


var events = [
    { name: "University expo", description: "Expo to showcase University degrees", dateStart: "2022/02/01", dateEnd: "2022/02/14" },
    { name: "Market", description: "Farmer's market day long event", dateStart: "2022/06/12", dateEnd: "2022/06/12" },
    { name: "Science Expo", description: "Science expo with sciency stuff", dateStart: "2022/06/12", dateEnd: "2022/06/21" },
    { name: "Hiking trip", description: "Hiking trip with a bunch of University friends", dateStart: "2022/02/14", dateEnd: "2022/02/16" },
    { name: "Music festival", description: "Weekend long music festival with a ton of artists performing", dateStart: "2022/05/13", dateEnd: "2022/05/15" },
    { name: "Park Picnic", description: "Picnic event in the park", dateStart: "2022/06/12", dateEnd: "2022/06/12" }
];

const eventHandler = new EventHandler(events);

Array.prototype.getEventsBetweenDates = function(start,end) {
    return eventHandler.getEventsBetweenDates(start, end);
}
Array.prototype.getByMonth = function(month) {
    return events.filter(e => new Date(e.dateStart).getMonth() === month - 1);
}
Array.prototype.getUniqueDateAndSort = function() {
    return eventHandler.getUniqueDateAndSort();
}
Array.prototype.getSummary = function() {
    return eventHandler.getSummary(this);
}

console.log(eventHandler.getByMonth(06).getSummary());