class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
    start() {
        const timerIndex = setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;
            console.log(time);

            console.log(currentTime);

            if (time <= 0) {console.log(timerIndex); clearInterval(timerIndex); return};

            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
            const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');

            const refTimer = document.querySelector(this.selector);

            const refDays = refTimer.querySelector('[data-value="days"]');
            const refHours = refTimer.querySelector('[data-value="hours"]');
            const refMins = refTimer.querySelector('[data-value="mins"]');
            const refSecs = refTimer.querySelector('[data-value="secs"]');
            
            refDays.textContent = days;
            refHours.textContent = `:${hours}`;
            refMins.textContent = `:${mins}`;
            refSecs.textContent = `:${secs}`;
        }, 1000);
     }
};

const timer = new CountdownTimer({
   selector: '#timer-1',
   targetDate: new Date('Dec 31, 2021'),
 });

timer.start();