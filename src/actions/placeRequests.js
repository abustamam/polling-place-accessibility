import request from 'superagent'

export function getPollingPlaces() {
	const apikey = 'AIzaSyDRoMwLIG_AcxMeha5PIv9lWnM0AwWRsCM'
	request
      .get('https://www.googleapis.com/fusiontables/v2/query')
      .query({"sql": `SELECT answer FROM 1Wps1_Vj4dkNiAIozL47QINAYAhonMgfVf0F3aPyR WHERE question IN ('Polling Place address','City')`}) //  GROUP BY ppid is not working
      .query({key: apikey})
      .end(function(err, res){
        if (err || !res.ok) {
        	throw new Error("You suck! " + err)
        } else {
        	console.log("YEE BOOTY!",res.body)
        }
      });
}