import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div className="register-wrapper">
                <img src="../../fcp.svg" className="register-logo"></img>
                <h2>Acceso al sistema</h2>
                <form className="register-form">
                    <label className="register-label">Nombre de la empresa</label>
                    <input type="text" className="register-companyName register-input" placeholder="Nombre"></input>
                    <label className="register-label">Correo del dueño de la empresa</label>
                    <input type="text" className="register-ownerEmail register-input email" placeholder="Correo"></input>
                    <label className="register-label">Contraseña para la cuenta</label>
                    <input type="password" className="register-ownerPassword register-input password" placeholder="Contraseña"></input>
                    <label className="register-label">Confirmar contraseña</label>
                    <input type="password" className="register-ownerPasswordConfirm register-input password" placeholder="Confirmar contraseña"></input>
                    <label className="register-label">Nombre de usuario del(a) duen@</label>
                    <input type="text" className="register-ownerUsername register-input" placeholder="Nombre de usuario"></input>
                    <label className="register-label">Logo de la empresa</label>
                    <input type="file" className="register-companyLogo register-input" placeholder="Logo de la empresa"></input>
                    <input type="submit" className="register-button register-input" value="Crear Empresa"></input>
                </form>
                <p>Buscando <Link to="/login">ingresar?</Link></p>    
            </div>
        </>
    )
}

export default Register

//Este seria para que se cree una empresa, iria un formulario de registro

//Nombre de empresa
//Correo para la cuenta del dueño
//Contraseña de la cuenta
//Nombre de usuario del dueño
//Logo de la empresa
//RUC (Opcional)
//Slogan (opcional)
//Direccion (Opcional)
//Numero de contacto (Opcional)
//Correo de contacto (Opcional)
//Horario de atencion (Opcional)
//Aniversario de la empresa (Opcional)
