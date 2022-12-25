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
        </tr>
      </thead>
      <tbody>
        <tr v-for="vehicle of vehicles" :key="vehicle.id">
          <th scope="row">{{ vehicle.id}}</th>
          <td>{{vehicle.brand}}</td>
          <td>{{vehicle.model}}</td>
          <td>{{vehicle.version}}</td>
          <td>{{vehicle.plate}}</td>
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