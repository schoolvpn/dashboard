<template>
  <div class="login">
    <h2>{{'auth.welcome' | translate}}</h2>
    <form @submit.prevent="handleSubmit" name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" v-model="username" id="username" required="required"/>
          <label class="control-label" for="username">{{'auth.email' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" v-model="password" id="password" required="required"/>
          <label class="control-label" for="password">{{'auth.password' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div  class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" type="submit" enctype="application/json">
          {{'auth.login' | translate}}
        </button>
        <router-link class='link' :to="{name: 'signup'}">Sign Up ( Disabled )</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
      return {
          username: '',
          password: '',
          submitted: false
      }
  },
  computed: {
      loggingIn () {
          return this.$store.state.authentication.status.loggingIn;
      }
  },
  created () {
      // reset login status
      this.$store.dispatch('authentication/logout');
  },
  methods: {
      handleSubmit (e) {
          this.submitted = true;
          const { username, password } = this;
          const { dispatch } = this.$store;
          if (username && password) {
              dispatch('authentication/login', { username, password });
          }
          // if (localStorage.getItem('user') != null) {
          //   this.$router.push('/dashboard')
          // }
      }
  }
}
</script>

<style lang="scss">
  .login {
    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }

    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>
