import Firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"

import { FIREBASE_CONFIG } from './environment'

export const FirebaseAuth = new Firebase.initializeApp(FIREBASE_CONFIG)

export const GoogleAuth = new Firebase.auth.GoogleAuthProvider()

export const FacebookAuth = new Firebase.auth.FacebookAuthProvider()

export const DataBaseFireStore = Firebase.firestore()