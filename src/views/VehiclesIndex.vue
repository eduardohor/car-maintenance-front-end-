<template>
  <main class="container">
    <h1 class="mt-3">Seus Veículos</h1>
    <router-link to="/vehicles/create" class="btn btn-success">Adicionar Veículo</router-link>
    <table class="table mt-4">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Marca</th>
          <th scope="col">Modelo</th>
          <th scope="col">Versão</th>
          <th scope="col">Placa</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vehicle of vehicles" :key="vehicle.id">
          <th scope="row">{{ vehicle.id}}</th>
          <td>{{vehicle.brand}}</td>
          <td>{{vehicle.model}}</td>
          <td>{{vehicle.version}}</td>
          <td>{{vehicle.plate}}</td>
          <td class="d-flex">
            <router-link :to="{name: 'vehicles-edit', params: {id: vehicle.id}}"  class="btn btn-warning">Editar</router-link>
            <form action="">
              <button class="btn btn-danger">Excluir</button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>

  </main>
</template>

<script>
import {axiosInstanceWithToken} from '../services/http'

export default {
  name: 'VehiclesIndex',

  data() {
    return {
      vehicles: [],
      id: '',
      brand: '',
      model: '',
      version: '',
      plate: ''
    }
  },

  async mounted() {
    try {
      const {data} = await axiosInstanceWithToken.get('vehicles')
      this.vehicles = data
      console.log(data)
    } catch (error) {

    }

  },

  methods: {

  }

}

</script>

<style>
.btn-warning{
margin-right: 8px;
}
</style>