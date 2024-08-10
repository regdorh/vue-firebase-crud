<template>
    <div class="formUsuarios container">
      <h4 class="text-center">Crear usuarios</h4>
      <div class="row">
        <form @submit.prevent="agregar" class="col-4 mx-auto">
          <div class="mb-3">
            <label for="name" class="form-label">Nombre: </label>
            <input type="text" class="form-control" id="nombre" required v-model="usuario.nombre">
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">Apellido: </label>
            <input type="text" class="form-control" id="apellido" required v-model="usuario.apellido">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email: </label>
            <input type="email" class="form-control" id="email" required v-model="usuario.email">
          </div>
          <button type="submit" class="btn btn-success ">Agregar usuario</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    name: 'FormComp',
    data() {
      return {
        usuario: {
          nombre: "",
          apellido: "",
          email: "",
        }
      }
    },
  
    computed: {
      ...mapState(['usuarios'])
    },
  
    methods: {
      ...mapActions(['agregarUsuario']),
      async agregar() {
        await this.agregarUsuario(this.usuario)
        this.usuario = { nombre: "", apellido: "", email: "" };
      }
    }
  
  }
  
  
  </script>
  
  <style scoped></style>