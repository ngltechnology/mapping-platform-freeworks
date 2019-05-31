import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth/"
import { config } from "./config"

export const firebaseApp = firebase.initializeApp(config)
const settings = { timestampsInSnapshots: true };
export const firestore = firebase.firestore(settings)
export const auth = firebase.auth()
