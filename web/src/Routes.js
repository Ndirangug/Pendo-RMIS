// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'
import MainLayout from './layouts/MainLayout/MainLayout'
import HomePage from 'src/pages/HomePage/HomePage'
import EventsPage from 'src/pages/EventsPage/EventsPage'
import FundsPage from 'src/pages/FundsPage/FundsPage'
import AllRefugeesPage from 'src/pages/AllRefugeesPage/AllRefugeesPage'
import NewRefugeePage from 'src/pages/NewRefugeePage/NewRefugeePage'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="login">
        <Route path="/" page={HomePage} name="home" />
        <Set wrap={MainLayout}>
          <Route path="/events" page={EventsPage} name="events" />
          <Route path="/funds" page={FundsPage} name="funds" />
          <Route path="/all-refugees" page={AllRefugeesPage} name="allRefugees" />
          <Route path="/new-refugee" page={NewRefugeePage} name="newRefugee" />
        </Set>
      </Private>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
