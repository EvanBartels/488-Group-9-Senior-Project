<template>
    <div class="signup-container">
      <h2>Sign Up</h2>
      <form @submit.prevent="signup">
        <label for="firstname">First Name:</label>
        <input type="text" v-model="name" required>

        <label for="lastname">Last Name:</label>
        <input type="text" v-model="name" required>
  
        <label for="email">Email:</label>
        <input type="email" v-model="email" required>
  
        <label for="password">Password:</label>
        <input type="password" v-model="password" required>
  
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      };
    },
    methods: {
      signup() {
        // The implementation logic for signup will need to go here and be 
        // adjusted once we have a proper backend, right now this is just
        // a placeholder. -Evan

        //let's just log the signup data for now.
        console.log('First Name:', this.firstname);
        console.log('Last Name:', this.lastname);
        console.log('Email:', this.email);
        console.log('Password:', this.password);
  
        // You can redirect the user to another page after successful signup.
        // For now, let's just clear the form fields.
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.password = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .signup-container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>