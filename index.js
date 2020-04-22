const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");


let timersCount = 0;

const createDOMElement = (tagname) => {
    return document.createElement(tagname)
}

const createTimerEl = (id) => {

    const timer_div = createDOMElement('div')
    timer_div.classList.add('timer', `timer_${id}`)
    timer_div.id = `time_${id}`

    timer_div.innerHTML = `
        <div class="remove"></div>
		<h3>0 <span>00</span></h3>
		<div class="btn">
			<button class="reset">Reset</button>
			<button class="stop">Stop</button>
		</div>
    `
   let counter = 0
   
   const interval = setInterval(() => {
        counter += 1

        const milisec = counter % 100
        const sec = Math.floor(counter / 100)

        const h3 = timer_div.querySelector(`h3`)
        h3.innerHTML = `${sec} <span>${milisec}</span>`

   }, 10)

    const resetBtn = timer_div.querySelector('.reset');
    const stopBtn = timer_div.querySelector('.stop');
    const removeBtn = timer_div.querySelector('.remove')

    removeBtn.addEventListener('click', () => {
        timer_div.remove()
    })

    resetBtn.addEventListener('click', () => {
        counter = 0
    })

    stopBtn.addEventListener('click', () => {
        handleStop(interval)
    })

    return timer_div
}


const handleStop = (interval) => {
    clearInterval(interval)
}


addCounterEl.addEventListener('click', (e) => {
    const totalTimers = document.querySelectorAll('.timer')
    if (totalTimers.length < 5) {
        timersCount = timersCount + 1;
        const newTimer = createTimerEl(timersCount)
        timersContainerEl.appendChild(newTimer)
    }
})
