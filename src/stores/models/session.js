import { Model } from '@vuex-orm/core'


class Session extends Model {
  static entity = 'sessions'

  static fields () {
    return {
      email: this.attr(''),
      password: this.attr(''),
      'access-token': this.attr(''),
      'client': this.attr(''),
      'expiry': this.attr(''),
      'uid': this.attr(''),
      'token-type': this.attr('')
    }
  }



  static methodConf = {
    http: {
      url: '/sign_in',
      onResponse(response) {
        const authToken = response.data;
        localStorage.setItem('authToken', JSON.stringify(authToken));
        return authToken;
      }
    },
    methods: {
      $create: {
        name: 'create',
        http: {
          url: '',
          method: 'post',
        },
      },
    },
  }


}
export default Session;
