import React, { useContext } from 'react'
import { StyledLoginPage } from './style'
import Logo  from '../../images/Logo.svg'
import iconBag  from '../../images/iconBag.svg'
import ballsDecoration  from '../../images/ballsDecoration.svg'
import {InputBox} from '../../components/input/InputForm'
import { StyledButton } from '../../components/styles/Buttons'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from './loginSchema'
import { UserContext } from '../../contexts/UserContext'

export interface iLoginFormData{
    email: string;
    password: string;
}


export const LoginPage = () => {
    const { apiLogin, loadingForApi } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<iLoginFormData>({
        mode: "onChange",
        resolver: yupResolver(loginSchema) 
     })
    
    const submit = (formData:iLoginFormData)=>{
        apiLogin(formData)
        reset()
    }

  return (
    <StyledLoginPage>
        <section>
            <div>
                <div>
                    <img src={Logo} alt="logo" />
                    <div>
                        <img src={iconBag} alt="iconBag" />
                        <h1>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes.</h1>
                    </div>
                    <img src={ballsDecoration} alt="decoration" />
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <h2>Login</h2>
                    <div>
                        <InputBox type='email' label='E-mail' placeholder='Digite seu e-mail' register={register("email")} error={errors.email}/>
                        <InputBox type='password' label='Senha' placeholder='Digite sua senha' register={register("password")} error={errors.password}/>
                    </div>
                    <StyledButton color="primary" buttonType="big" disabled={loadingForApi}> {loadingForApi ? "Logando..." : "Logar"}</StyledButton>
                    <div>
                        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                    </div>
                    <Link to="/register" className="link"><StyledButton color="grey" buttonType="big">Cadastrar</StyledButton></Link>
                </form>
            </div>
        </section>
    </StyledLoginPage>
  )
}
