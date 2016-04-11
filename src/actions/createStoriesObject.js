import parking from './stories/parking.js'
import restrooms from './stories/restrooms.js'

var createStoriesObject = function(pollingPlace) {
  var result = {};
  result.Parking = parking(pollingPlace);
  result.Restrooms = restrooms(pollingPlace);
  result.Info = {
    ppid: pollingPlace['Polling Place Information']['1-Poll-Place-Information']['qid_1'].answer,
    name: pollingPlace['Polling Place Information']['1-Poll-Place-Information']['qid_2'].answer,
    address: pollingPlace['Polling Place Information']['1-Poll-Place-Information']['qid_3'].answer
  }
  return result;
};

export default createStoriesObject
