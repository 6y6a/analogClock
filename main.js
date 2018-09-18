class Time {
    constructor() {
        this.sec = 0;
        this.min = 0;
        this.hour = 0;

        this.domTime = document.getElementById('time');

        this.currentTime = 0;

        setInterval(() => {this.showTime()}, 1000);
    }

    showTime() {
        this.currentTime = new Date()
        this.sec = this.currentTime.getSeconds();
        this.min = this.currentTime.getMinutes();
        this.hour = this.currentTime.getHours();

        this.domTime.innerText = `${this.fillNumberWithZero(this.hour)} : ${this.fillNumberWithZero(this.min)} : ${this.fillNumberWithZero(this.sec)}`
    }

    fillNumberWithZero(value) {
        if (value >= 0 && value <= 9) {
            return `0${value}`
        } else
            return value
    }
}

timer = new Time();