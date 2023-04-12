import React from 'react'
import FormLayout from '../components/formLayout'
import Input from '../components/units/input'
import Button from '../components/units/button';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='page'>
      <FormLayout title='sign in to your account'>
        <Input
          placeholder='Enter your email'
          label='Email address'
          type='email'
          name='email'
        />

        <div className='flex flex-col space-y-1 items-end'>
          <Input
            placeholder='Enter your password'
            label='Pasword'
            type='password'
            name='password'
          />
          <Link to={'/reset-password'}>
            <p className='text-sm text-primary hover:font-medium cursor-pointer'>Forgot Password?</p>
          </Link>
        </div>
        <div className='w-full space-y-2'>
          <Button text='sign in' clickHandler={() => { }} />
          <div className='text-sm flex space-x-2'>
            <p>Don&apos;t have an account?</p>
            <Link to={'/signup'}>
              <p className='cursor-pointer font-medium text-primary hover:font-semibold transition-all duration-200'>sign up</p>
            </Link>
          </div>
        </div>
      </FormLayout>
    </div>
  )
}

export default Login