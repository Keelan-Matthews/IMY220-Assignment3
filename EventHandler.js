class EventHandler {
    constructor(events) {
        this.events = events;

        // Adding methods in the constructor so the client does not have to add them in script.js
        Array.prototype.getEventsBetweenDates = this.getEventsBetweenDates;
        Array.prototype.getByMonth = this.getByMonth;
        Array.prototype.getUniqueDateAndSort = this.getUniqueDateAndSort;
        Array.prototype.getSummary = this.getSummary;
    }

    // All methods below return a new EventHandler object to allow for chaining (Except for getSummary() because
    // that method will only be used at the end of a chain)

    getEventsBetweenDates(start, end) {
        return new EventHandler(events.filter(e => e.dateStart >= start && e.dateEnd <= end)).events;
    }
    getByMonth(month) {
        return new EventHandler(events.filter(e => new Date(e.dateStart).getMonth() === month - 1)).events;
    }
    getUniqueDateAndSort() {
        return new EventHandler(events
            .filter((e, i, self) => self.findIndex(t => t.dateStart === e.dateStart && t.dateEnd === e.dateEnd) === i)
            .sort((a, b) => new Date(a.dateStart).getMonth() - new Date(b.dateStart).getMonth())).events;
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