<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input type="text" v-model="email" required>
  
        <label for="password">Password:</label>
        <input type="password" v-model="password" required>
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // The implementation logic for login will need to go here and be 
        // adjusted once we have a proper backend, right now this is just
        // a placeholder. -Evan

        // add your authentication logic here.
        // For simplicity, let's just log the credentials for now.
        console.log('Username:', this.username);
        console.log('Password:', this.password);
  
        // You can redirect the user to another page after successful login.
        // For now, let's just clear the form fields.
        this.username = '';
        this.password = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
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