import { Link } from 'react-router-dom'

function Home() {
    return (
      <>
        <p>Home page</p>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </>
    )
}

export default Home