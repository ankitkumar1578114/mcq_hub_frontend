import { Routes, Route } from 'react-router-dom'
import QuestionPage from '../Question'
import { useState } from 'react'
import Dashboard from '../../common/Dashboard'
import WelcomePage from '../Welcome'
import Navigations from '../Navigation'
import { navigation } from './navigation'
import DashboardPage from '../DashboardPage'

const Comp = ({ path }) => {
  return {
    '/': <WelcomePage/>,
    '/dashboard': <DashboardPage/>,
    '/question': <QuestionPage/>,
  }[path]
}

const Router = () => {
  const [userLoaded, setUserLoaded] = useState(false)
  const [user, setUser] = useState(null)

  return (
        <>
          {
            !user && <Navigations user={user} setUser={setUser} setUserLoaded={setUserLoaded}/>

          }
            <Dashboard user={user} setUser={setUser} setUserLoaded={setUserLoaded} userLoaded={userLoaded}>
              <Routes>
                  {
                    navigation.map((nav, index) => (
                      <Route key={index} path={nav?.path} element={<Comp {...{ path: nav?.path }}/>} />
                    ))
                  }
              </Routes>
              </Dashboard>
        </>
  )
}

export default Router
