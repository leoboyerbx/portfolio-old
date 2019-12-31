const body = document.querySelector('body')
window.loading = {
  start: function () {
    const loader = document.createElement('div')
    loader.id = 'loader'
    body.appendChild(loader)
    console.log('debut')

    // const perfData = window.performance.timing, // The PerformanceTiming interface
    //   EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart), // Calculated Estimated Time of Page Load which returns negative value.
    //   time = parseInt((EstimatedTime/1000)%60)*100; //Converting EstimatedTime from miliseconds to seconds.
    // console.log(time)
    //
    // setTimeout(window.loading.end, time)
  },
  end: function () {
    body.classList.add('loaded')
    console.log('fini')
  }
}



document.write(`<style>
#loader {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #f00;
    pointer-events: none;
    z-index: 10000;
    transition: all .2s;
}
body.loaded #loader {
    opacity: 0;
}

@keyframes load () {

}
</style>`)

loading.start()
