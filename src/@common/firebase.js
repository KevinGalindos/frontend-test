import * as Firebase from 'firebase/app'
import "firebase/auth"

import { FIREBASE_CONFIG } from './environment'

export const FirebaseAuth = Firebase.initializeApp(FIREBASE_CONFIG)

export const GoogleAuth = Firebase.auth.GoogleAuthProvider()

export const FacebookAuth = Firebase.auth.FacebookAuthProvider()

export const GitHubAuth = Firebase.auth.githubAuthProvider()
