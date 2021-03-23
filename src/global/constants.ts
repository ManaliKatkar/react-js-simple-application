export interface RouteItem {
  url: string
  title: string
}

export interface RegistrationFormData {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export enum RequestMethods {
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH',
}

export const APP_LEVEL_CONSTANTS = {

}

export const ROUTES = {
  contact: {
    url: 'contact',
    title: 'contact us'
  },
  home: {
    url: 'home',
    title: 'Home'
  },
  login: {
    url: 'login',
    title: 'Login'
  },
  page_not_found: {
    url: '',
    title: 'Page Not Found'
  },
  signup: {
    url: 'register',
    title: 'Register'
  },
  user: {
    url: 'user',
    title: 'User'
  }
}
