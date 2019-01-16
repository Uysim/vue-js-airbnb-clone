<template>
  <div id="login" class="d-flex">
    <div class></div>
    <d-container class="align-self-center">
      <d-row>
        <d-col md="7" sm="4">
          <h1 class="text-white">Booking for your travel</h1>
          <br>
          <h5 class="text-white">Pack and travel with the world class booking</h5>
        </d-col>
        <d-col md="5" sm="8">
          <d-card class=" w-100">
            <d-card-body title="Log In">
              <form v-on:submit="login" class="my-5">
                <div class="form-group">
                  <label class="sr-only" for="f2_Email">Email Address</label>
                  <d-input id="f2_Email" class="mb-2 mr-sm-2 mb-sm-0" v-model="input.useremail" placeholder="Your Email" required />
                  <d-form-invalid-feedback>
                    Invalid email address!
                  </d-form-invalid-feedback>
                  <d-form-valid-feedback>
                    Your email looks good!
                  </d-form-valid-feedback>
                  <small class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="f2_PasswordInput" class="sr-only">Password</label>
                  <d-form-input id="f2_PasswordInput" type="password" v-model="input.password" required placeholder="Password"></d-form-input>
                  <d-form-invalid-feedback>
                    Please provide a valid password!
                  </d-form-invalid-feedback>
                </div>
                <d-button type="submit">Login</d-button>
              </form>
            </d-card-body>
          </d-card>

        </d-col>
      </d-row>
    </d-container>
  </div>
</template>

<script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        input: {
          useremail: "",
          password: ""
        }
      }
    },
    computed: {
      count () {
        return this.$store.state.count
      }
    },
    methods: {
      login() {

        if(this.input.useremail != "" && this.input.password != "") {
          this.$store.dispatch('login', this.input).then(()=>{
            this.$router.replace({ name: "HomePage" });
          })
        } else {
          alert("A useremail and password must be present");
        }
      }
    }
  }
</script>

<style scoped>
  #login {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 100vh;
    background-image: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80);
    z-index: 1;
  }
</style>
