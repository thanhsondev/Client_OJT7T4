import React from 'react';
import 'mdbreact/dist/css/mdb.css';

import InputTextCommon from '../../components/inputs/InputTextCommon';
import { MDBContainer, MDBCol, MDBRow, MDBBtn,MDBInput, MDBCheckbox }
    from 'mdb-react-ui-kit';
import './loginStyle.css';
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const LoginPage = () => {
    const schema = yup
        .object({
            email: yup.string().required().email().trim(),
            password: yup.string().required().max(16).trim(),
        })
        .required()
    const {
        handleSubmit,
        control,
        formState: { errors },
      } = useForm(
        {
            resolver: yupResolver(schema),
            mode: 'onChange'
        },
      )

      const onLogin = (data) => {
        console.log(data);
        // ... call api login
      }

    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                </MDBCol>

                <MDBCol col='4' md='6' className="form-container">

                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <p className="sign-in-text">Sign in with</p>
                    </div>

                    <form onSubmit={handleSubmit(onLogin)}>
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <div>
                                    <MDBInput
                                        wrapperClass='mb-4'
                                        label='Email address'
                                        id='formControlLg'
                                        type='email'
                                        size="lg"
                                        {...field}
                                    />
                                    {errors.email && <p className="error-message">Email is a required field</p>}
                                </div>
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <div>
                                    <MDBInput
                                        wrapperClass='mb-4'
                                        label='Password'
                                        id='formControlLg'
                                        type='password'
                                        size="lg"
                                        {...field}
                                    />
                                    {errors.password && <p className="error-message">Password is a required field</p>}
                                </div>
                            )}
                        />
                        <div className="checkbox-login-spacing">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <MDBBtn className="mb-0 px-5" size='lg' type='submit'>Login</MDBBtn>
                        </div>
                    </form>

                    <div className="d-flex justify-content-between mb-4">

                        <a href="!#">Forgot password?</a>
                    </div>

                    <div className='text-center text-md-start mt-4 pt-2'>
                        <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
                    </div>

                </MDBCol>

            </MDBRow>
        </MDBContainer>
    );
}

export default LoginPage;