<template>
  <main class="container">
    <h1 class="mt-3">Editar veículo</h1>
    <form @submit.prevent="update" class="w-50">
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <input v-model="vehicle.brand" type="text" class="form-control" />
            <label class="form-label">Marca</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input v-model="vehicle.model" type="text" class="form-control" />
            <label class="form-label">Modelo</label>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <div class="form-outline">
            <input v-model="vehicle.version" type="text" class="form-control" />
            <label class="form-label">Versão</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input v-model="vehicle.plate" type="text" class="form-control" />
            <label class="form-label">Placa</label>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-block mb-4">Atualizar</button>
    </form>
  </main>
</template>

<script>
import {axiosInstanceWithToken} from '../services/http'


export default{
  name: 'VehiclesEdit',

  data(){
    return{
      vehicle: [],
      id: this.$route.params.id
    }
  },

  async mounted(){
    try {
      const {data} = await axiosInstanceWithToken.get(`vehicles/${this.id}`)
      this.vehicle = data
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  },

  methods:{
    async update(){
      const payload = {
        brand: this.vehicle.brand,
        model: this.vehicle.model,
        version: this.vehicle.version,
        plate: this.vehicle.plate,
      }
      try {
        const {data} = await axiosInstanceWithToken.put(`vehicles/${this.id}`, payload)
        this.$router.push('/vehicles')
      } catch (error) {
        console.log(error)
        
      }
    }
  }
}

</script>