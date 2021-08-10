import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const [user, saveUser] = useState({
        email:'',
        password:''
    }) 
    
    const {email, password} = user;

    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        // validar campos

        // pasa a action
    }

    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Inicia Sesión</h1>

                <form onSubmit={onSubmit}>
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu Email'
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Tu Password'
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <input
                         type='submit'
                          className='btn btn-primario btn-block'
                          value='Iniciar Sesión'/>
                    </div>
                </form>

                <Link to='/new-account' className='enlace-cuenta'>
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    )
}

export default Login
