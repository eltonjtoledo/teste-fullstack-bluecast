<template>
  <div class="row" style="display: flex; justify-content: center">
    <v-card class="col-11" style="margin: 30px 0">

<v-row class="px-2">
          <v-text-field
            v-model="search"
            outlined
            placeholder="Pesquisa"
          ></v-text-field>
<v-btn class="ml-2"
  elevation="2" x-large @click="searchFilds">Buscar</v-btn>
</v-row>
         <b-table
            :data="dataFiltered"
            :default-sort-direction="defaultSortDirection"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            default-sort="user.first_name"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
            :page-input="hasInput"
            :page-input-position="inputPosition"
            :debounce-page-input="inputDebounce">
        <b-table-column
          field="_id"
          label="Identity"
          sortable
          v-slot="props">{{ props.row._id }}</b-table-column>
        <b-table-column
          field="first_name"
          label="First Name"
          sortable
          v-slot="props"
          >{{ props.row.first_name }}</b-table-column>
        <b-table-column
          field="last_name"
          label="Last Name"
          sortable
          v-slot="props"> {{ props.row.last_name }}</b-table-column>
        <b-table-column
          field="cpf"
          label="CPF of client"
          sortable
          v-slot="props"
          >{{ props.row.cpf }}</b-table-column>
        <b-table-column
          field=""
          label="#"
          sortable
          v-slot="props">
          <b-button tag="router-link" size="is-normal" type="is-link" :to="{ name: 'EditClientView', params: { id: props.row._id }}" rounded icon-left="account-edit" style="margin: 0 2px; width: 40px; height: 40px;" />
          <!-- <b-button tag="router-link" size="is-normal" type="is-danger" :to="`/clients/add/${props.row._id}`" rounded icon-left="delete" style="margin: 0 2px; width: 40px; height: 40px;" /> -->
          </b-table-column>
      </b-table>
    </v-card>
    <b-button tag="router-link" type="is-link" to="/clients/add" icon-left="plus" rounded size="is-normal" style="width: 50px; height: 50px; position: absolute; right: 30px; bottom: 50px;"/>
  </div>
</template>

<script>
import Axios from "../../http";
import moment from 'moment';
export default {
  data() {
    return {
        search: "",
        isPaginated: true,
        defaultSortDirection: 'asc',
        sortIcon: 'arrow-up',
        sortIconSize: 'is-small',
        currentPage: 1,
        perPage: 5,
        hasInput: false,
        inputPosition: '',
        inputDebounce: '',
      data: [],
      dataFiltered: []
    };
  },
  methods: {
    listClients() {
      Axios.get("clients").then((response) => {
        this.data = response.data.data;
        this.dataFiltered = response.data.data;
      });
    },
    formatDate(date){
      return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
    },
    searchFilds(el){
        this.search = this.search.toLowerCase();
        this.dataFiltered = this.data.filter(value => {
            return (
            value.first_name.toLowerCase().includes(this.search) 
            || value.last_name.toLowerCase().includes(this.search)
            || value._id.toString().toLowerCase().includes(this.search)
            || value.cpf.toString().toLowerCase().includes(this.search)
            ) 
        })
        this.dataFiltered;
    }
  }, // .first_name }} {{ props.row.last_name
  created() {},
  mounted() {
    this.listClients();
  },
};
</script>