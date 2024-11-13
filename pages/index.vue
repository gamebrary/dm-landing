<template>
  <div class="landing">
    <h1>Welcome to Dugout Master</h1>
    <p>Master the Dugout, Master the Game.</p>
    <button @click="learnMore">Learn More</button>
  </div>
</template>

<script setup>
const learnMore = () => {
  alert("Coming soon!");
}
</script>

<style>
.landing {
  text-align: center;
  padding: 50px;
  font-family: Arial, sans-serif;
}
</style>
