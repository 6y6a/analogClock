class Time {
    constructor() {
        this.sec = 0;
        this.min = 0;
        this.hour = 0;

        this.domTime = document.getElementById('time');
        this.domSecond = document.getElementById('second');
        this.domMinute = document.getElementById('minute');
        this.domHour = document.getElementById('hour');

        this.currentTime = 0;

        setInterval(() => {this.showTime()}, 1000);
    }

    showTime() {
        this.currentTime = new Date()
        this.sec = this.currentTime.getSeconds();
        this.min = this.currentTime.getMinutes();
        this.hour = this.currentTime.getHours();

        this.domTime.innerText = `${this.fillNumberWithZero(this.hour)} : ${this.fillNumberWithZero(this.min)} : ${this.fillNumberWithZero(this.sec)}`

        this.domSecond.style.transform = `rotate(${this.getPosition(this.sec, 60)}deg)`
        this.domMinute.style.transform = `rotate(${this.getPosition(this.min, 60)}deg)`
        this.domHour.style.transform = `rotate(${this.getPosition(this.hour, 12)}deg)`
    }

    fillNumberWithZero(value) {
        if (value >= 0 && value <= 9) {
            return `0${value}`
        } else
            return value
    }

    getPosition (time, delim) {
        return time * 360 / delim
    }
}

timer = new Time();