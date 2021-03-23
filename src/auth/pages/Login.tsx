import React from 'react'
import { Helmet } from 'react-helmet'

import { AuthPageLayout } from '../../global/layout'

import { LoginContainer } from '../component'

export const LoginPage: React.FC = () => {
  return (
    <AuthPageLayout>
      <Helmet title='Login' />
      <LoginContainer />
    </AuthPageLayout>
  )
}

LoginPage.displayName = 'LoginDevPage'

export default LoginPage
