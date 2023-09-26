const trackme = document.getElementById('button');
const output = document.getElementById('ptag');

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {

  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
    output.innerHTML=`latitude is ${posData.coords.latitude} and longitude is ${posData.coords.longitude}`

  } catch (error) {
    console.log(error);
  }
  

  console.log(posData, "posData");
  console.log(timerData,"timerData")


}

trackme.addEventListener('click', trackUserHandler);



Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData);
});


