<template>
  <div class="login-container">
    <div class="login-card">
      <img src="@/assets/Logo2.0.png" alt="Logo" class="logo">
      <h2>Welcome!</h2>

      <input 
        type="email" 
        placeholder="Email Address" 
        class="input-box"
        v-model="email"
      />
      
      <div class="password-container">
        <input 
          type="password" 
          placeholder="Password" 
          class="input-box" 
          id="password-field"
          v-model="password"
        />
        <button type="button" class="eye-icon" @click="togglePasswordVisibility">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </button>
      </div>

      <div class="remember-me">
        <input type="checkbox" id="remember" v-model="rememberMe" />
        <label for="remember">Remember me</label>
      </div>

      <button class="login-btn" @click="handleLogin">Sign In</button>
      <button class="google-btn">
        <svg class="google-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </button>
      <p class="signin-text">
        Don't have an account? <router-link to="/signup"><span>Sign up</span></router-link>
      </p>   
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const togglePasswordVisibility = () => {
  const field = document.getElementById('password-field');
  if (field.type === 'password') {
    field.type = 'text';
  } else {
    field.type = 'password';
  }
};

const handleLogin = async () => {
  if (!email.value || !password.value) {
    alert('Please fill in both fields');
    return;
  }

  try {
    const response = await axios.post('/auth/login', {
      email: email.value,
      password: password.value
    });
    
    // Si la respuesta contiene el token, lo guardamos
    localStorage.setItem('token', response.data.token); // Guardamos el token en el almacenamiento local

    // Redirigir al home (o donde sea necesario)
    router.push('/home');
  } catch (error) {
    console.error('Error en el login:', error.response.data);
    alert('Error en el login. Verifica tus credenciales.');
  }
};
</script>


<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("@/assets/Music.png");
  background-size: cover;
  background-position: center;
  padding: 1rem;
}

.login-card {
  background: #1e1e1e;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  color: white;
  width: 100%;
  max-width: 380px;
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

.input-box {
  width: 100%;
  padding: 12px 5px;
  margin: 10px 0;
  border: none;
  border-radius: 6px;
  background: #2d2d2d;
  color: white;
  font-size: 14px;
  transition: box-shadow 0.2s;
}

.input-box:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 180, 255, 0.3);
}

.password-container {
  position: relative;
  margin-bottom: 0.5rem;
}

.eye-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background: transparent;
  border: none;
  color: #aaa;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}

.eye-icon:hover {
  color: #00b4ff;
}

.eye-icon svg {
  display: block;
}

.remember-me {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  margin: 1rem 0;
  gap: 8px;
  color: #ccc;
}

.login-btn {
  background: #000;
  color: white;
  padding: 12px;
  border: none;
  width: 100%;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 600;
  transition: background 0.3s;
}

.login-btn:hover {
  background: #0052cc;
}

.google-btn {
  background: white;
  color: #333;
  padding: 12px;
  border: none;
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.google-btn:hover {
  background: #f5f5f5;
}

.google-icon {
  width: 18px;
  height: 18px;
}

.signin-text {
  margin-top: 1.5rem;
  font-size: 14px;
  color: #aaa;
}

.signin-text a span {
  color: #00b4ff;
  text-decoration: none;
  transition: color 0.2s;
}

.signin-text a:hover span {
  color: #00d0ff;
  text-decoration: underline;
}
</style>
