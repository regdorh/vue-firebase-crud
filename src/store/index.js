import { createStore } from 'vuex'
import firebaseApp from '../firebaseConfig'

import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore'

export default createStore({
  state: {
    usuarios: []
  },
  getters: {
  },
  mutations: {
    SET_USUARIOS(state, usuarios){
      state.usuarios = usuarios;
    }
  },
  actions: {
    // Rellenar estado de usuarios con datos de firebase
    async setUsuarios({commit}){
      let usuariosRecibidos = [];
      try {
        // Se obtiene la instancia de firebase
        let db = getFirestore(firebaseApp)
        // Se define la coleccion a escuchar, en este caso usuarios
        let usuariosRef = collection(db, 'usuarios')
        // podemos escuchar en tiempo real los cambios en la coleccion con onSnapshot
        onSnapshot(usuariosRef,(snapshot)=>{
          usuariosRecibidos = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
          }))
          // se actualiza el estado con los usuarios recibidos
          commit('SET_USUARIOS',usuariosRecibidos)
        })

      } catch (error) {
        console.log(error)
      }
    },

    // Agregar usuarios
    async agregarUsuario(context, usuario) {
      try {
        let db = getFirestore(firebaseApp);
        let usuariosRef = collection(db, "usuarios");
        await addDoc(usuariosRef, usuario);
      } catch (error) {
        console.log(error);
      }
      
    },

    // Eliminar usuario
    async delUsuarios(context, idUsuario){
      try {
        let db = getFirestore(firebaseApp)
        let usuariosRef = doc(db, 'usuarios', idUsuario);
        await deleteDoc(usuariosRef)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})