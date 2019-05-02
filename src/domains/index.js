import {firestore} from "../firebase"

export const currentLocation = () => {
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			position =>	{
				const data = position.coords
				console.log("current location is ",{lat: data.latitude, lng: data.longitude})
				return ({lat: data.latitude, lng: data.longitude})
			},
			error => {
				console.log(error)
			}
		)
	} else {
		console.error("Geolocation APIに非対応")
		return
	}
}

export const getAllQuests = () => {
	const quests = []
	firestore.collection("quests").get().then(querySnapshot => {
		querySnapshot.forEach(doc=> {
			console.log(`${doc.id} => ${doc.data()}`,doc.data())
			
			quests.push(doc.data())
			return quests
		})
	})
	console.log("quests =>",quests)

}

export const getMarker = () => {
	const cities = []
	firestore.collection("quests").where("partner", "==", "").onSnapshot(snapshot => {
		
		snapshot.forEach(doc=>{
			console.log("doc data",doc.data());
			cities.push(doc.data())
		})
		console.log("cities is ",cities)
	})
	return cities
}