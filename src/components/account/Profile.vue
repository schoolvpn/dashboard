<template>
  <div>
    <div class="row">
        <div class="col-md-12">
        <vuestic-widget :headerText="'Account Info' | translate">
          <form>
            <div class="row">
              <div class="col-md-12">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" v-model="profile.items._id" required/>
                      <label class="control-label" for="simple-input">ID</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" v-model="profile.items.role" required/>
                      <label class="control-label" for="simple-input">Role</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="picture" v-model="picture" required/>
                      <label class="control-label" for="picture">Profile Picture: {{profile.items.picture}}</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="firstname" v-model="firstname" required/>
                      <label class="control-label" for="firstname">Firstname: {{profile.items.firstname}}</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="lastname" v-model="lastname" required/>
                      <label class="control-label" for="lastname">Lastname: {{profile.items.lastname}}</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="email" v-model="profile.items.email" required/>
                      <label class="control-label" for="email">Email</label><i class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            </form>
            <div class=".col-md-6 .offset-md-3 d-flex justify-content-center">
                <button type="submit" v-on:click="handleSubmit()" @click="launchToast" class="btn btn-primary">
                Save
                </button>
            </div>
        </vuestic-widget>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: null,
      firstname: undefined,
      lastname: undefined,
      picture: undefined,
      submitted: false,
      toastText: 'Settings Saved',
      toastDuration: 2500,
      toastIcon: 'fa-save',
      toastPosition: 'top-center',
      isToastFullWidth: false
    }
  },
  computed: {
        user () {
            return this.$store.state.authentication.user;
        },
        profile () {
            return this.$store.state.profileme.all;
        },
        isToastContentPresent () {
          return !!(this.toastText || this.toastIcon)
        }
    },
    created () {
        this.$store.dispatch('profileme/profileMe');
    },
    methods: {
        handleSubmit (e) {
          const { picture, firstname, lastname } = this;
          const { dispatch } = this.$store;
          dispatch('profileput/get', { picture, firstname, lastname })
        },
        launchToast () {
          this.showToast(this.toastText, {
            icon: this.toastIcon,
            position: this.toastPosition,
            duration: this.toastDuration,
            fullWidth: this.isToastFullWidth
          })
        }
    }
}
</script>

<style lang="scss">
  .toasted-container.sample-toasted-container {
    position: static;
    transform: translateX(0);

    .toasted {
      position: static;
      transform: translateY(0);
    }
  }
</style>
