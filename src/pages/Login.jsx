import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login-wrapper">
            <img src="../../fcp.svg" className="login-logo"></img>
            <h2>Acceso al sistema</h2>
            <form className="login-form">
            <input type="text" className="login-username login-input" placeholder="Usuario"></input>
            <input type="password" className="login-password login-input" placeholder="Contraseña"></input>
            <input type="submit" className="login-button login-input" value="Acceder"></input>
            </form>
            <p>Buscando <Link to="/register">registrate?</Link></p>    
        </div>
    )
}

export default Login