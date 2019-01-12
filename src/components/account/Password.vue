<template>
  <div>
      <div class="row">
        <div class="col-md-12">
        <vuestic-widget :headerText="'Change Password' | translate">
          <form>
            <div class="row">
              <div class="col-md-12">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" type="password" v-model="oldpassword" required/>
                      <label class="control-label" for="simple-input">Old Password</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" type="password" v-model="newpassword" required/>
                      <label class="control-label" for="simple-input">New Password</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="picture" type="password" v-model="picture" required/>
                      <label class="control-label" for="picture">Confirm Password</label><i class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            </form>
            <div class=".col-md-6 .offset-md-3 d-flex justify-content-center">
                <button type="submit" @click="launchToast" class="btn btn-primary">
                Change Password
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
      email: undefined,
      picture: undefined,
      submitted: false,
      toastText: 'Password Changed',
      toastDuration: 2500,
      toastIcon: 'fa-key',
      toastPosition: 'top-center',
      isToastFullWidth: false
    }
  },
  methods: {
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

</style>
