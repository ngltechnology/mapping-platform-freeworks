import firebase from "firebase/app"
import "firebase/firestore"
import { config } from "./config"

firebase.initializeApp(config)
export const firestore = firebase.firestore()

