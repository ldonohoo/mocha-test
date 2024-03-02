
// Trying to validate the bird 

// pulled in the assert module?? maybe from node.js?
let assert = require('assert');

// pulled in birdObject module so I can test the variables
let birdObject = require('../scripts/boring-page.js');


// describe the test group/group hierarchy
// and then it which contains the tests for that group
describe('Validate bird', function () {
  describe('Bird is assigned to proper value', function () {
    it('Check if value assigned corresponds to correct bird', function () {
        if (birdObject.birdRandomizer === 0) {
            assert.match(birdObject.selectedBird, /osprey/);
        } else if (birdObject.birdRandomizer === 1) {
            assert.match(birdObject.selectedBird, /raven/);
        } else if (birdObject.birdRandomizer === 2) {
            assert.match(birdObject.selectedBird, /goose/);
        }
    });
  });
});
