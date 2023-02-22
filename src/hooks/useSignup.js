import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import {useAuthContext} from '../context/AuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const {dispatch} = useAuthContext();

  const signup = async ( email, password, displayName) => {
    setError(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      console.log(res.user)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      // add display name to user
      await res.user.updateProfile({ displayName })

      //dispatch LOGIN action

      dispatch({type: 'LOGIN', payload: res.user})

      setIsPending(false)
      setError(null)
    } 
    catch(err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { signup, error, isPending }
}