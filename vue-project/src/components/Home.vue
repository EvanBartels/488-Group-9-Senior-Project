<template>
  <div>
    <h1>Welcome to my website!</h1>
    <p>Thanks for visiting. Please take a look around.</p>
    <slot name="text"></slot>
  </div>
  
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style>
h1 {
  font-size: 3rem;
  text-align: center;
  margin-top: 2rem;
}

p {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
}
</style>