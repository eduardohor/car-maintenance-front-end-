<template>
  <main class="container">
    <h1 class="mt-3">Veículos</h1>
    <form @submit.prevent="create" class="w-50">
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <input v-model="brand" type="text" class="form-control" />
            <label class="form-label">Marca</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input  v-model="model" type="text" class="form-control" />
            <label class="form-label">Modelo</label>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <div class="form-outline">
            <input v-model="version" type="text" class="form-control" />
            <label class="form-label">Versão</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input v-model="plate" type="text" class="form-control" />
            <label class="form-label" >Placa</label>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-block mb-4">Cadastrar</button>
    </form>

  </main>
</template>

<script>
import {axiosInstanceWithToken} from  '../services/http'
export default{
  name: 'VehiclesCreate',

  data() {
    return{
      user_id: '',
      brand: '',
      model: '',
      version: '',
      plate: ''
    }

  }, 

  async mounted(){
      const {data} = await axiosInstanceWithToken.post('/me')
      this.user_id = data.id
  },

  methods:{
    async create(){
      const payload = {
        user_id: this.user_id,
        brand: this.brand,
        model: this.model,
        version: this.version,
        plate: this.plate
      }

      try {
        const {data} = await axiosInstanceWithToken.post('/vehicles', payload)
        console.log(data)
      } catch (error) {
        console.log(error.response.data['errors'])
      }
    }
  }
  
}
</script>