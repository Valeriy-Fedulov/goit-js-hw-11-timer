

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
    start() {
        setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;

            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
            const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');

            const refTimer = document.querySelector(this.selector);

            const refDays = refTimer.querySelector('[data-value="days"]');
            const refHours = refTimer.querySelector('[data-value="hours"]');
            const refMins = refTimer.querySelector('[data-value="mins"]');
            const refSecs = refTimer.querySelector('[data-value="secs"]');
            
            // console.log(refTimer.dataset.value('secs'));
            
            refDays.textContent = days;
            refHours.textContent = hours;
            refMins.textContent = mins;
            refSecs.textContent = secs;


            console.log(`${days}:${hours}:${mins}:${secs}`);
        }, 1000);
     }
};

// const targetDate = new Date('Dec 31, 2021');
// const refDays = document.querySelector('[data-value="days"]');
// const refHours = document.querySelector('[data-value="hours"]');
// const refMins = document.querySelector('[data-value="mins"]');
// const refSecs = document.querySelector('[data-value="secs"]');

const timer = new CountdownTimer({
   selector: '#timer-1',
   targetDate: new Date('Sep 31, 2021'),
 });

timer.start();