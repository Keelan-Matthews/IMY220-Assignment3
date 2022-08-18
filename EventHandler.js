class EventHandler {
    constructor(events) {
        this.events = events;
    }

    getEventsBetweenDates(start, end) {
        return events.filter(e => e.dateStart >= start && e.dateEnd <= end);
    }

    getByMonth(month) {
        return events.filter(e => new Date(e.dateStart).getMonth() === month);
    }

    getUniqueDateAndSort() {
        return events
                .filter((e, i, self) => 
                    self.findIndex(t => t.dateStart === e.dateStart && t.dateEnd === e.dateEnd) === i
                )
                .sort((a, b) => new Date(a.dateStart).getMonth() - new Date(b.dateStart).getMonth());
    }

    getSummary() {
        
    }
}

var events = [
	{name: "University expo", description: "Expo to showcase University degrees", dateStart: "2022/02/01", dateEnd: "2022/02/14"},
    {name: "Market", description: "Farmer's market day long event", dateStart: "2022/06/12", dateEnd: "2022/06/12"},
    {name: "Science Expo", description: "Science expo with sciency stuff", dateStart: "2022/06/12", dateEnd: "2022/06/21"},
    {name: "Hiking trip", description: "Hiking trip with a bunch of University friends", dateStart: "2022/02/14", dateEnd: "2022/02/16"},
    {name: "Music festival", description: "Weekend long music festival with a ton of artists performing", dateStart: "2022/05/13", dateEnd: "2022/05/15"},
    {name: "Park Picnic", description: "Picnic event in the park", dateStart: "2022/06/12", dateEnd: "2022/06/12"}
];

const eventHandler = new EventHandler(events);
console.log(eventHandler.getEventsBetweenDates("2022/02/01", "2022/02/14"));
console.log(eventHandler.getByMonth(05));
console.log(eventHandler.getUniqueDateAndSort());
console.log(eventHandler.getSummary());