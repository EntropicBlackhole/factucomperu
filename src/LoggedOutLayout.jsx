import { Outlet } from 'react-router-dom'
const LoggedOutLayout = () => { //usually the main layout is also homepage, to login and stuff i guess
    return (
      <>
        <main className="loggedout-main"><Outlet /></main>
        <footer>Agosto 2023</footer>
      </>
    )
}

export default LoggedOutLayout