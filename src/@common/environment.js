import { config } from 'dotenv'

config()

export const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP.FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP.FIREBASE_API_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

export const BASE_URL_API = process.env.REACT_APP.BASE_URL_API