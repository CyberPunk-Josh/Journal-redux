import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux'

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
  
    firebase.auth().onAuthStateChanged( (user) => {
      
      if (user?.uid ) {
        dispatch( login( user.uid, user.displayName ))
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }

      setChecking(false)

    })

  }, [ dispatch, setChecking ])

  if(checking) {
    return (
      <h1>Espera...</h1>
    )
  }
  

  return (
    <Router>
        <div>
            <Switch>
              
                <Route path='/auth'>
                  <PublicRoute isAuth={isLoggedIn}>
                    <AuthRouter/>
                  </PublicRoute>
                </Route>

                <Route exact path='/'>
                  <PrivateRoute isAuth={isLoggedIn}>
                    <JournalScreen/>
                  </PrivateRoute>
                </Route>

                <Redirect to="/auth/login" />

            </Switch>
        </div>

    </Router>
  )
}
