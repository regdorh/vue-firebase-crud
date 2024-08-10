<template>
  <div class="home container d-flex flex-column justify-content-evenly">
    <h1 class="text-center">Sistema de usuarios</h1>
    <FormComp/>
    <UsersTable/>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import UsersTable from '@/components/UsersTable.vue'
import FormComp from '@/components/FormComp.vue'

export default {
  name: 'HomeView',
  methods: {
    ...mapActions(['setUsuarios'])
  },
  components: {
    UsersTable,
    FormComp
  },
  mounted(){
    this.setUsuarios()
  }
}
</script>
<style>
.home{
  min-height: 80vh;
}
</style>
