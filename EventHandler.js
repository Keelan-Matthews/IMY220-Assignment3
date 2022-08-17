class EventHandler {
    constructor(events) {
        this.events = events;
    }

    getEventsBetweenDates(start, end) {
        return this.events.filter(event => {
            return event.dateStart >= start && event.dateEnd <= end;
        }).sort((a, b) => {
            return a.dateStart - b.dateStart;
        });
    }

    getByMonth(month) {
        return this.events.filter(event => {
            return event.dateStart.getMonth() === month;
        }).sort((a, b) => {
            return a.dateStart - b.dateStart;
        });
    }

    getUniqueDateAndSort() {

    }

    getSummary() {
        
    }
}

