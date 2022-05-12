<template>
  <div class="row" style="display: flex; justify-content: center">
        <b-notification :type="notification.type" aria-close-label="Close notification" v-show="notification.show">{{notification.message}}</b-notification>
    <v-card class="col-11" style="margin: 30px 0; justify-content: left">
      <div style="text-align: center; display: flex; justify-content: center">
        <v-card-title>Creation new clients</v-card-title>
      </div>
      <b-field
        label="First Name"
        :type="firstName.length < 1 ? 'is-danger' : 'is-success'"
        :message="firstName.length < 1 ? 'This First Name is invalid' : ''"
      >
        <b-input v-model="firstName" placeholder="Your first name"></b-input>
      </b-field>
      <b-field
        label="Last Name"
        :type="lastName.length < 1 ? 'is-danger' : 'is-success'"
        :message="lastName.length < 1 ? 'This Last Name is invalid' : ''"
      >
        <b-input placeholder="Your Last name" v-model="lastName"></b-input>
      </b-field>
      <b-field
        label="CPF"
        :type="cpf.length < 11 ? 'is-danger' : 'is-success'"
        :message="cpf.length < 11 ? 'This CPF is invalid' : ''"
      >
        <b-input placeholder="Your CPF" v-model="cpf"></b-input>
      </b-field>
      <div class="buttons">
        <b-button type="is-info" @click="save" expanded>Save Client</b-button>
      </div>
    </v-card>
  </div>
</template>

<script>
import http from "../http";
export default {
  data() {
    return {
      notification: {
        type: 'is-danger',
        show: false,
        message: ''
      },      
      firstName: "",
      lastName: "",
      cpf: "",
    };
  },
  methods: {
    save() {
      if (this.firstName.length > 1 && this.lastName.length > 1 && this.cpf.length > 10) {
        http.post("/clients", {first_name: this.firstName, last_name: this.lastName, cpf: this.cpf,})
          .then((response) => {
            if(response.data.success){
              this.showNotification('is-success',response.data.message);
              this.$router.go(-1);
            }else{
              this.showNotification('is-danger', response.data.message);
            }
          })
          .catch((err) => console.warn(err.message));
      }else{
        this.showNotification('is-danger', 'please, complete the form');
      }
    },
    showNotification(type, message, duration){
      this.notification.type = type
      this.notification.show = true;
      this.notification.message = message;
      setTimeout(() =>{this.notification.show = false}, duration | 2000)
    },
    clear(){
      this.firstName= "";
      this.lastName = "";
      this.cpf = "";
      this.notification = {type: 'is-danger', show: false, message: ''}
    }
  },
  mounted() {

  },
};
</script>