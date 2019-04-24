export const currentLocation = () => {
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			position =>	{
				const data = position.coords
				console.log({lat: data.latitude, lng: data.longitude})
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