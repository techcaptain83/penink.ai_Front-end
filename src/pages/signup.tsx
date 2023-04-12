import React from 'react'
import FormLayout from '../components/formLayout'
import Input from '../components/units/input'
import { Link } from 'react-router-dom'
import Button from '../components/units/button'

const Signup = () => {
  return (
    <div className='page'>
      <FormLayout title='Create your account'>
        <Input
          placeholder='Enter your email'
          label='Email address'
          type='email'
          name='email'
        />

        <Input
          placeholder='Your Full name'
          label='Full Name'
          type='text'
          name='name'
        />
        <Input
          placeholder='********'
          label='Password'
          type='password'
          name='password'
        />
        <Input
          placeholder='********'
          label='Comfirm Password'
          type='password'
          name='comfirmPassword'
        />
        <div className='w-full space-y-2'>
          <Button text='sign up' clickHandler={() => { }} />
          <div className='text-sm flex space-x-2'>
            <p>have an account?</p>
            <Link to={'/login'}>
              <p className='cursor-pointer font-medium text-primary hover:font-semibold transition-all duration-200'>Login</p>
            </Link>
          </div>
        </div>

      </FormLayout>

    </div>
  )
}

export default Signup