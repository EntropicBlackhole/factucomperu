import { Outlet } from 'react-router-dom'
import Header from "./components/Header"
const LoggedOutLayout = () => { //usually the main layout is also homepage, to login and stuff i guess
    return (
      <>
        {/* <Header>
          <html className='main'>
            <Outlet />
          </html>
        </Header> */}
        <main className="loggedout-main"><Outlet /></main>
        <footer>Agosto 2023</footer>
      </>
    )
}

export default LoggedOutLayout