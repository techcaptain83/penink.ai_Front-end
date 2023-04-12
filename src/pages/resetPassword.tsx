import React from 'react'
import FormLayout from '../components/formLayout'
import Input from '../components/units/input'
import Button from '../components/units/button'

const ResetPassword = () => {
  return (
    <div className='page'>
      <FormLayout title='reset your password'>
        <Input
          placeholder='Enter your email'
          label='Email address'
          type='email'
          name='email'
        />
        <Button text='send reset link' clickHandler={() => { }} />
      </FormLayout>
    </div>
  )
}

export default ResetPassword