<template>
  <vuestic-navbar>
    <header-selector slot="selector" :isOpen.sync="valueProxy"/>
    <span style="font-weight: bold; font-family: Montserrat, 'Open Sans', Helvetica, Arial, sans-serif" slot="logo">
      <!-- <vuestic-icon-vuestic/> -->
      <!-- <p>SchoolVPN Dashboard</p> -->
      SchoolVPN Dashboard
    </span>
    <span slot="center">
      {{$t('navbar.messageUs')}}&nbsp;{{firstname}}!
    </span>

    <message-dropdown class="col nav-item"/>
    <notification-dropdown class="col nav-item"/>
    <language-dropdown class="col nav-item"/>
    <profile-dropdown class="col nav-item">
      <img :src="profilepicture"><img>
    </profile-dropdown>
  </vuestic-navbar>

</template>

<script>
import VuesticIconVuestic from '../../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconVuestic'
import VuesticNavbar from '../../../vuestic-theme/vuestic-components/vuestic-navbar/VuesticNavbar'
import HeaderSelector from './components/HeaderSelector'

import LanguageDropdown from './components/dropdowns/LanguageDropdown'
import ProfileDropdown from './components/dropdowns/ProfileDropdown'
import NotificationDropdown from './components/dropdowns/NotificationDropdown'
import MessageDropdown from './components/dropdowns/MessageDropdown'

export default {
  name: 'app-navbar',
  data () {
    return {
        profilepicture: JSON.parse(localStorage.getItem('accountinfo')).picture,
        firstname: JSON.parse(localStorage.getItem('accountinfo')).firstname,
        lastname: JSON.parse(localStorage.getItem('accountinfo')).lastname
    }
  },
  components: {
    VuesticIconVuestic,
    VuesticNavbar,
    HeaderSelector,
    MessageDropdown,
    NotificationDropdown,
    LanguageDropdown,
    ProfileDropdown
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    valueProxy: {
      get () {
        return this.isOpen
      },
      set (opened) {
        this.$emit('toggle-menu', opened)
      },
    },
  },
}
</script>
