import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="register-wrapper">
            <img src="../../fcp.svg" className="register-logo"></img>
            <h2>Acceso al sistema</h2>
            <form className="register-form">
                <input type="text" className="register-companyName register-input" placeholder="Nombre de empresa"></input>
                <input type="text" className="register-ownerEmail register-input email" placeholder="Correo"></input>
                <input type="text" className="register-ownerPassword register-input password" placeholder="Contraseña"></input>
                <input type="text" className="register-ownerPasswordConfirm register-input password" placeholder="Confirmar contraseña"></input>
                <input type="text" className="register-ownerUsername register-input" placeholder="Nombre de usuario (del(a) dueñ@"></input>
                <input type="file" className="register-companyLogo register-input" placeholder="Logo de la empresa"></input>
                <input type="text" className="register-companyRUC register-input" placeholder="RUC (Opcional)"></input>
                <label htmlFor="c">Nam</label>
                <input type="text" id="c" className="register-companySlogan register-input" placeholder="Slogan (Opcional)"></input>
                <input type="text" className="register-companyAddress register-input" placeholder="Direccion del local (Opcional)"></input>
                <input type="text" className="register-contactNumber register-input" placeholder="Numero de contacto (Opcional)"></input>
                <input type="text" className="register-contactEmail register-input" placeholder="Correo de contacto (Opcional)"></input>
                <input type="text" className="register-attentionHours register-input" placeholder="Horario de atencion (Opcional)"></input>
                <input type="text" className="register-companyAniversary register-input" placeholder="Aniversario de la empresa (Opcional)"></input>
                <input type="submit" className="register-button register-input" value="Crear Empresa"></input>
            </form>
            <p>Buscando <Link to="/login">ingresar?</Link></p>    
        </div>
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
