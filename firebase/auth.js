import {auth} from './config';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
 } from 'firebase/auth';

 export async function register(email, password) {
   return await createUserWithEmailAndPassword(auth, email, password);
 }

 export async function login(email, password) {
   return await signInWithEmailAndPassword(auth, email, password);
 }

 export async function logout() {
   return await signOut(auth);
 }