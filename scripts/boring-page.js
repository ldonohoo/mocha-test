//Lisa Donohoo
//prime tier 1 week 2 

// quick function to try to test in mocha

// added the three variables to birdObject so I can try to export module to mocha test
let birdObject = {};

  birdObject.birds = ['osprey', 'raven', 'goose']
  birdObject.birdRandomizer = Math.floor(Math.random()*3);
  birdObject.selectedBird =  birdObject.birds[birdObject.birdRandomizer];

  console.log(birdObject.selectedBird);

  // commented out writting to html, not quite sure how to connect mocha test in web browser yet
  //document.getElementById('birdBox').textContent = birdObject.selectedBird;
 

//export module 
module.exports = birdObject;

