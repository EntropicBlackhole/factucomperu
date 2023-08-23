import { Outlet } from 'react-router-dom'
import Header from './components/Header'
const PrimaryLayout = () => { //usually the main layout is also homepage, to login and stuff i guess
    return (
      <>
        <Header />
        <main className="loggedin-main"><Outlet /></main>
        <footer>Agosto 2023</footer>
      </>
    )
}

export default PrimaryLayout