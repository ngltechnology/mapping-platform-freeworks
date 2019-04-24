export const currentLocation = () => {
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			position =>	{
				const data = position.coords
				console.log(data)
				return {lat: data.latitude, lng: data.longitude}
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