// this file export an object with a method attach to it: register
import Api from '@/services/api'

export default {
  register (credentials) {
    // this makes a post request to the register endpoint on the express server using the credentials passed
    return Api().post('register', credentials)
  },
  login (credentials) {
    // this makes a post request to the register endpoint on the express server using the credentials passed
    return Api().post('login', credentials)
  }
}

// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })
