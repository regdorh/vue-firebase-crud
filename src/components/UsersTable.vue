<template>
    <div class="tabla">
          <header>
              <h4>Listado de usuarios</h4>
          </header>
          <main>
              <table class="table">
                  <thead>
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Apellido</th>
                          <th scope="col">Email</th>
                          <th scope="col">Acciones</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(usuario, index) in usuarios" :key="usuario.id">
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ usuario.nombre }}</td>
                          <td>{{ usuario.apellido }}</td>
                          <td>{{ usuario.email }}</td>
                          <td><button class="btn btn-danger" @click="delUsuarios(usuario.id)">Eliminar</button></td>
                      </tr>
                  </tbody>
              </table>
          </main>
      </div>
  </template>
  
  <script>
  import {mapState, mapActions} from 'vuex'
  
  export default {
    name: 'UsersTable',
    // props: {},
    data: function(){
      return {}
    },
    computed: {
      ...mapState(['usuarios']),
    },
    methods: {
      ...mapActions(['delUsuarios'])
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
  }
  </script>
  
  <style scoped>
    
  </style>