const  button = document.querySelector('button')
const size = 23590 * 8
const TEST_COUNT = 1000
const progress = document.querySelector('.progress')
const speedText = document.querySelector('.speed-text')

let test_results = []

function loadImage(){
    return new Promise((resolve, reject) => {
        let image = new Image()
        image.src = "./cards/2-C.png?" + parseInt(Math.random() * 10000)
        let startTime = Date.now()
    
        image.onload = function(){
            let endTime = Date.now()
            resolve(endTime - startTime)
        }

        image.onerror = function(err){
            reject(err)
        }
    })
}

async function getLoadSpeed(){
    let loadTime = await loadImage()
    if(loadTime < 1) loadTime = 1
    let speed_bps = size / loadTime // bytes per seconds (loadtime is calculated by seconds)
    let speed_kbps = speed_bps / 1024

    return speed_kbps
}

function getAvgSpeed(){
    let sum = test_results.reduce((a, b) => a + b, 0)

    return sum / test_results.length
}

button.addEventListener('click', async function(){
    for(let i = 0; i < TEST_COUNT; i++){
        let speed = await getLoadSpeed()
        test_results.push(speed)
        progress.style.width = ((i + 1) / TEST_COUNT * 100) + '%'
        speedText.innerText = getAvgSpeed().toFixed(2) + ' kbps'
    }
})