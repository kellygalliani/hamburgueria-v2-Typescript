import { useContext } from 'react'
import { StyledRegisterPage } from './style'
import Logo  from '../../images/Logo.svg'
import iconBag  from '../../images/iconBag.svg'
import ballsDecoration  from '../../images/ballsDecoration.svg'
import {InputBox} from '../../components/input/InputForm'
import { StyledButton } from '../../components/styles/Buttons'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterSchema } from './RegisterSchema'
import { UserContext } from '../../contexts/UserContext'
import { iApiRegister } from '../../interfaces/UserContextInterfaces'

interface iRegisterFormData{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const RegisterPage = () => {
    const { apiRegister, loadingForApi } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<iRegisterFormData>({
        mode: "onChange",
        resolver: yupResolver(RegisterSchema) 
    }) 

    const submit = (formData:iRegisterFormData)=>{
        const registerData:iApiRegister = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
        }
        apiRegister(registerData)
        reset()
    }

  return (
    <StyledRegisterPage>
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
                    <div>
                        <h2>Cadastro</h2>
                        <Link to="/" className='link'>Retornar para o login</Link>
                    </div>
                    <div>
                        <InputBox type='text' label='Nome' placeholder='Digite seu nome' register={register("name")} error={errors.name} />
                        <InputBox type='email' label='E-mail' placeholder='Digite seu e-mail' register={register("email")} error={errors.email}/>
                        <InputBox type='password' label='Senha' placeholder='Digite sua senha' register={register("password")} error={errors.password}/>
                        <InputBox type='password' label='Confirme a senha' placeholder='Digite novamenta a senha' register={register("confirmPassword")}  error={errors.confirmPassword}/>
                    </div>
                    <StyledButton type="submit" color="primary" buttonType="big" disabled={loadingForApi}>
                        {loadingForApi ? "Carregando..." : "Cadastrar"}</StyledButton>
                </form>
            </div>
        </section>
    </StyledRegisterPage>
  )
}
