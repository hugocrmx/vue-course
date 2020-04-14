<template>
    <form @submit.prevent="save">
    <div class="form-group">
      <label>Nombre</label>
      <input type="text" class="form-control" v-model="$v.form.name.$model" />
      <small class="error" v-show="$v.form.name.$error">Requerido</small>
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="text" class="form-control" v-model="$v.form.email.$model" />
      <small class="error" v-show="$v.form.email.$error">Requerido</small>
    </div>

    <div class="form-group">
      <label>Edad</label>
      <input type="number" class="form-control" v-model.number="$v.form.age.$model" />
      <small class="error" v-show="$v.form.age.$error">Entre 1 y 80</small>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { required, between } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        age: null
      }
    };
  },
  validations: {
    form: {
      name: {
        required,       
      },
      email: {
          required
      },
      age: {
        between: between(1, 80)
      }
    }
  },
  methods: {
    save() {
      console.log("FORM username:" + this.form.name)
      
      this.$v.form.$touch();
      if (this.$v.form.$invalid) {
        alert("The form is wrong");
      } else {
        alert("Form was submitterd successfully");
         this.$store.dispatch('register', this.form)
      }
    }
  }
};
</script>

<style scoped>
    .error {
        color:red;
    }
</style>