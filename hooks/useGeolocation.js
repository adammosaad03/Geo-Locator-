// Create your custom hook here!
import {useState} from 'react'
import {useEffect} from 'react'
export function useGeolocation() {
const [currentLocation, setCurrentLocation] = useState({})
useEffect(() => {
const onSuccess = (e) => {
  setCurrentLocation({
    latitude: e.coords.latitude.toFixed(3),
    longitude: e.coords.longitude.toFixed(3)
  });
}
navigator.geolocation.getCurrentPosition(onSuccess);

},[])
return currentLocation
}
