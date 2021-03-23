import React from 'react'
import { Helmet } from 'react-helmet'

import { AuthPageLayout } from '../../global/layout'

import { RegisterContainer } from '../component'

export const RegisterPage: React.FC = () => {
  return (
    <AuthPageLayout>
      <Helmet title='Login' />
      <RegisterContainer />
    </AuthPageLayout>
  )
}

RegisterPage.displayName = 'LoginDevPage'

export default RegisterPage
