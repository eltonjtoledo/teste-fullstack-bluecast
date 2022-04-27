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
  elevation="2"
  x-large @click="searchFilds"
>Buscar</v-btn>
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
          field="date_create"
          label="Data de criação"
          sortable
          v-slot="props"
          >{{props.row.date_create}}</b-table-column
        >
        <b-table-column
          field="first_name"
          label="Nome do cliente"
          sortable
          v-slot="props"
          >{{ props.row.first_name }} {{ props.row.last_name }}</b-table-column
        >
        <b-table-column
          field="description"
          label="Descrição do débito"
          sortable
          v-slot="props"
          >{{ props.row.description }}</b-table-column
        >

        <b-table-column
          field="date_expiration"
          label="Desde"
          sortable
          v-slot="props"
          >{{props.row.date_expiration}} </b-table-column
        >
        <b-table-column
          field="value"
          label="Valor R$"
          sortable
          v-slot="props"
          >{{ props.row.value }}</b-table-column
        >
      </b-table>
    </v-card>
  </div>
</template>

<script>
import Axios from "axios";
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
      Axios.get("http://localhost:3000/clients/debits").then((response) => {
        this.data = response.data.data.map(el => {
            el.date_create = this.formatDate(el.date_create);
            el.date_expiration = this.formatDate(el.date_expiration);
            return el;
        });

    this.dataFiltered = this.data;

      });
    },
    formatDate(date){
      return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
    },
    searchFilds(el){
        this.search = this.search.toLowerCase();
        this.dataFiltered = this.data.filter(value => {
            return (
                value.date_create.toLowerCase().includes(this.search) 
            || value.first_name.toLowerCase().includes(this.search) 
            || value.last_name.toLowerCase().includes(this.search) 
            || value.description.toLowerCase().includes(this.search) 
            || value.value.toString().toLowerCase().includes(this.search) 
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