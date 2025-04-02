<template>
  <div class="signin-container">
    <img src="@/assets/Logo2.0.png" alt="Logo" class="logo">
    <form class="signin-form" @submit.prevent="handleSignUp">
      <h2>Create Account</h2>

      <div class="form-grid">
        <div class="form-column">
          <input 
            type="text" 
            placeholder="Username" 
            required 
            class="input-field"
            v-model="username"
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            class="input-field"
            v-model="password"
          />
        </div>
        <div class="form-column">
          <input 
            type="email" 
            placeholder="Email address" 
            required 
            class="input-field"
            v-model="email"
          />
          <input 
            type="password" 
            placeholder="Confirm password" 
            required 
            class="input-field"
            v-model="confirmPassword"
          />
        </div>
      </div>

      <label class="terms">
        <input type="checkbox" required v-model="agreeTerms" /> 
        I agree to the terms and conditions
      </label>

      <button type="submit" class="submit-btn">Create Account</button>
      <router-link to="/login" class="login-link">
        Already have an account? <span>Log in here</span>
      </router-link>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const agreeTerms = ref(false);

// Función para manejar el registro
const handleSignUp = async () => {
  console.log("Ejecutando handleSignUp");

  // Validar que las contraseñas coincidan
  if (password.value !== confirmPassword.value) {
    console.error("Contraseñas no coinciden");
    alert("Passwords don't match!");
    return;
  }

  // Validar que todos los campos estén llenos
  if (!username.value || !email.value || !password.value || !agreeTerms.value) {
    console.error("Campos vacíos:", {
      username: username.value,
      email: email.value,
      password: password.value,
      terms: agreeTerms.value
    });
    alert("Please fill all fields!");
    return;
  }

  // Enviar los datos al backend para registrar el usuario
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', {
      username: username.value,
      email: email.value,
      password: password.value
    });

    console.log('Usuario registrado:', response.data);

    // Redirigir al login después de un registro exitoso
    router.push('/login');  // O cualquier otra página que desees redirigir después de registrarse
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    alert("Error al registrar el usuario. Intenta de nuevo.");
  }
};
</script>

<style scoped>
.signin-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-image: url("@/assets/Music.png");
  background-size: cover;
  background-position: center;
}

.logo {
  width: 150px;
  height: auto;
  margin-bottom: 30px;
}

.signin-form {
  display: flex;
  flex-direction: column;
  background: #1e1e1e;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 500px;
  color: white;
}

.signin-form h2 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.75rem;
  color: #fff;
}

.form-grid {
  display: flex;
  gap: 55px;
  margin-bottom: 10px;
}

.form-column {
  display: flex;
  flex-direction: column;
  flex: -1;
  gap: 15px;
}

.input-field {
  padding: 14px 16px;
  background: #2d2d2d;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 14px;
  transition: box-shadow 0.2s;
  width: 100%;
}

.input-field::placeholder {
  color: #aaa;
}

.input-field:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 180, 255, 0.3);
}

.terms {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 15px 0 20px;
  color: #ccc;
}

.terms input {
  margin-right: 10px;
}

.submit-btn {
  background: #000;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 5px;
  transition: background 0.3s;
  width: 100%;
  font-size: 15px;
}

.submit-btn:hover {
  background: #0052cc;
}

.login-link {
  text-align: center;
  margin-top: 22px;
  color: #aaa;
  text-decoration: none;
  font-size: 14px;
  display: block;
}

.login-link span {
  color: #00b4ff;
  transition: color 0.3s;
}

.login-link:hover span {
  color: #00d0ff;
  text-decoration: underline;
}
</style>
