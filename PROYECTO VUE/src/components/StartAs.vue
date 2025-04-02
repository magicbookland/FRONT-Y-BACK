<template>
  <div class="start-as-container">
    <div class="start-as-card">
      <img src="@/assets/Logo.png" alt="Logo" class="logo">
      <h2>Start As</h2>
      <div class="options">
        <button @click="chooseOption('client')" class="option-btn1">As a Client</button>
        <button @click="chooseOption('artist')" class="option-btn2">As an Artist</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const chooseOption = (role) => {
  // Redirige a /home con el rol como query param
  router.push({
    path: '/home',
    query: { role }
  });
};
</script>

<style scoped>
/* Tus estilos actuales se mantienen igual */
.start-as-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("@/assets/Music.png");
  background-size: cover;
  background-position: center;
  padding: 1rem;
}

.start-as-card {
  background: #1e1e1e;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  color: white;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.logo {
  width: 150px;
  height: auto;
  margin-bottom: 1.5rem;
}

h2 {
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  font-weight: 600;
  color: #fff;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.option-btn1 {
  padding: 14px;
  background: #fff;
  border: none;
  border-radius: 6px;
  color: black;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;
}

.option-btn2 {
  padding: 14px;
  background: #28BBDA;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;
}

.option-btn1:hover, .option-btn2:hover {
  background: #0052cc;
}
</style>