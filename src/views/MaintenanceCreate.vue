<template>
  <main class="container">
    <h1 class="mt-3">Manutenções</h1>
    <form @submit.prevent="create" class="w-50">
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <select v-model="vehicle_id" class="form-select">
              <option v-for="vehicle of vehicles" :key="vehicle.id" :value="vehicle.id">{{ vehicle.brand }} - {{
    vehicle.model
}} - {{ vehicle.version }}</option>
            </select>

            <label class="form-label">Selecione o veículo</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input v-model="problem_presented" type="text" class="form-control" />
            <label class="form-label">Problema apresentado</label>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <div class="form-outline">
            <select v-model="type_of_maintenance" class="form-select">
              <option value="Troca de oleo">Troca de Óleo</option>
              <option value="Troca de oleo">Revisão</option>
              <option value="Troca de oleo">Avaliação</option>
              <option value="Outro">Outro</option>
            </select>
            <label class="form-label">Tipo de manutenção</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input v-model="scheduling" type="date" class="form-control" />
            <label class="form-label">Agendamento</label>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-block mb-4">Cadastrar</button>
    </form>

  </main>
</template>

<script>
import { axiosInstanceWithToken } from '../services/http'
export default {
  name: 'VehiclesCreate',

  data() {
    return {
      vehicles: [],
      user_id: '',
      vehicle_id: '',
      problem_presented: '',
      type_of_maintenance: '',
      scheduling: ''
    }

  },

  async mounted() {
    const { data } = await axiosInstanceWithToken.post('/me')
    this.user_id = data.id
    this.listVehicles()
  },

  methods: {
    async listVehicles() {
      try {
        const { data } = await axiosInstanceWithToken.get('vehicles')
        this.vehicles = data
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },

    async create() {
      const payload = {
        user_id: this.user_id,
        vehicle_id: this.vehicle_id,
        problem_presented: this.problem_presented,
        type_of_maintenance: this.type_of_maintenance,
        scheduling: this.scheduling
      }

      try {
        const { data } = await axiosInstanceWithToken.post('/maintenances', payload)
        this.problem_presented = ''
        this.scheduling = ''
        console.log(data)
      } catch (error) {
        console.log(error.response.data['errors'])
      }
    }
  }

}
</script>