class EventHandler {
    constructor(events) {
        this.events = events;
    }

    getEventsBetweenDates(start, end) {
        return this.events.filter(e => e.dateStart >= start && e.dateEnd <= end);
    }

    getByMonth(month) {
        return this.events.filter(e => new Date(e.dateStart).getMonth() === month);
    }

    getUniqueDateAndSort() {
        return this.events
                    .filter((e, i, self) => self.indexOf(e) === i)
                    .sort((a, b) => new Date(a).getMonth() - new Date(b).getMonth());
    }

    getSummary() {
        
    }
}

