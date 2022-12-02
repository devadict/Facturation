<template>
  <div class="home">
    <div class="py-2">

      <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Nouvel Acte</b-button>
      
      <b-modal id="bv-modal-example" hide-footer>
        <template #modal-title>
         Acte
        </template>
        <div class="d-block text-center">
          <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Date</label>
            <b-form-datepicker v-model="nouvelActe.date"></b-form-datepicker>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Acte</label>
            <input v-model="nouvelActe.nature" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Acte">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Quantité</label>
            <input v-model="nouvelActe.quantite" type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Quantite">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Prix Unitaire (MRU)</label>
            <input v-model="nouvelActe.prixUnitaire" type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Prix Unitaire">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Practicien</label>
            <input v-model="nouvelActe.practicien" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Practicien">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Observations</label>
            <input v-model=" nouvelActe.observations" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Observations">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Pourcentage</label>
            <input v-model=" nouvelActe.pourcentage" type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Prise en charge">
          </div>
         
          <button class="btn btn-primary" @click="envoiActe">Valider</button>
        </form>
        </div>
        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Fermer</b-button>
      </b-modal>
    </div>
  
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Acte</th>
      <th scope="col">Qté</th>
      <th scope="col">Prix Unitaire (MRU)</th>
      <th scope="col">Practicien</th>
      <th scope="col">Observations</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="acte in actes" :key="acte.id">
      <td>{{acte.date}}</td>
      <td>{{acte.nature}}</td>
      <td>{{acte.quantite}}</td>
      <td>{{acte.prixUnitaire}}</td>
      <td>{{acte.practicien}}</td>
      <td>{{acte.observations}}</td>
    </tr>
  </tbody>
</table>
  <div>
    <p>Total : {{this.total}} <strong>MRU</strong></p>
  </div>
  </div>
</template>

<script>
import axios from "axios";

  export default {
    data() {
      return {
        nouvelActe: {
        practicien: null,
        nature: null,
        observations: null,
        date: null,
        prixUnitaire: null,
        quantite: null,
        pourcentage: null,
        },
        actes: [],
        total: null,
      }
  },
  methods: {
    async fetchActes() {
      await axios.get(`http://localhost:3000/api/acte/3`).then((res) => {
        return this.actes = res.data
      });
      console.log(this.actes);
    },
    async facture() {
      await axios.get(`http://localhost:3000/api/facture/3`).then((res) => {
        this.total = res.data.total;
      });
      console.log(this.total)
    },
    async envoiActe() {
      await axios.post(`http://localhost:3000/api/acte/3`, {
       date: this.nouvelActe.date,
       nature: this.nouvelActe.nature,
       quantite: this.nouvelActe.quantite,
       practicien: this.nouvelActe.practicien,
       observations: this.nouvelActe.observations,
       prixUnitaire: this.nouvelActe.prixUnitaire,
      pourcentage : this.nouvelActe.pourcentage,
      });
    }
  },
  created() {
    this.fetchActes();
    this.facture();
    },
  }
</script>
