<template>
  <div class="welcome-container">
    <section class="hero">
      <header>
        <img src="@/assets/Logo.png" alt="Logo" class="logo">
        <nav>
          <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/faq">FAQ</router-link></li>
          </ul>
        </nav>
      </header>

      <div class="hero-content">
        <h2>Welcome to <br><span>WK Music</span></h2>
        <p>Discover, listen, and share your passion for music</p>
        <p>
          Welcome to WK Music, the ultimate web platform where creativity meets sound. Whether you're an artist looking to share your talent, or a music lover seeking original, royalty-free compositions, WK Music offers a unique, interactive space for personalized music services, marketplace resources, and seamless collaboration. Join today and experience music like never before
        </p>
        <router-link to="/login" class="btn">Start now!</router-link>
      </div>
      <div class="hero-image">
        <img src="@/assets/Band.png" alt="Music Band" />
      </div>
    </section>

    <!-- Sección About Us -->
    <section class="about-us">
      <h2>ABOUT US</h2>
      <div class="about-content">
        <p>WK Music is a dynamic web application that revolutionizes how music is created, shared, and experienced. Designed for music enthusiasts, content creators, and independent artists, the platform provides a space where users can request custom music, buy and sell digital resources like loops and samples, and connect through a creative community.</p>
        <ul>
          <li>Custom music commissions from independent artists.</li>
          <li>Royalty-free music for personal and commercial use.</li>
          <li>Integrated marketplace for buying and selling music resources.</li>
          <li>MP3 player and messaging system.</li>
          <li>Service plans tailored to every need and budget.</li>
        </ul>
        <img src="@/assets/Welcome1.png" alt="Music Production">
      </div>
    </section>

    <!-- Sección Vision, Mission, Values -->
    <section class="vmv">
      <div class="card">
        <h3>VISION</h3>
        <p>To become the leading platform for personalized, royalty-free music services, empowering artists and creators to thrive in a connected and creative global community.</p>
      </div>
      <div class="card">
        <h3>MISSION</h3>
        <p>To provide a unique and secure environment where clients and artists can collaborate, exchange musical ideas, and build original content that enhances creativity and monetization opportunities.</p>
      </div>
      <div class="card">
        <h3>VALUES</h3>
        <p>WK Music values creativity, collaboration, integrity, innovation, community, and quality—fostering a trusted, dynamic space where artists and clients connect to create original, high-quality music together.</p>
      </div>
    </section>

    <!-- Sección FQA -->
    <section class="faq">
      <h2>FQA</h2>
      <div class="faq-content">
        <div class="faq-card">
          <h3>What is WK Music?</h3>
          <p>A: WK Music is a web-based platform that connects music creators and fans. Clients can request personalized, royalty-free music from independent artists, purchase loops and samples, and interact with creators through an integrated messaging system.</p>
        </div>
        <div class="faq-card">
          <h3>How do I request a custom song?</h3>
          <p>A: Once registered as a client, you can browse artist profiles, choose one, and submit your request with details. The artist will review it and start working on your unique composition</p>
        </div>
        <div class="faq-card">
          <h3>What are the service plans available?</h3>
          <p>A: WK Music offers three service plans—Basic, Standard, and Premium—each with different levels of customization, pricing, and delivery time.</p>
        </div>
      </div>
    </section>

        <!-- Footer -->
        <footer>
          <img src="@/assets/Logo2.0.png" alt="WK Music Logo" class="footer-Logo">
          <nav>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Notice</a>
          </nav>
          <div class="social-icons">
            <!-- Instagram -->
            <a href="https://www.instagram.com/officialwkmusic" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <!-- Twitter -->
            <a href="https://twitter.com/officialwkmusic" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <!-- Discord -->
            <a href="https://discord.gg/nurQMvkJsY" target="_blank">
              <i class="fab fa-discord"></i>
            </a>
          </div>

        </footer>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage'
};
</script>

<style scoped>
/* Estilos generales */
.welcome-container {
  font-family: Arial, sans-serif;
}

/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  background: url("@/assets/Music.png") no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: white;
}

.hero::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Capa oscura */
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  position: relative;
  z-index: 1;
}

.hero-text {
  max-width: 50%;
}

.hero-text h1 {
  font-size: 3rem;
}

.hero-text span {
  color: #24292C;
}

.hero-image img {
  max-width: 400px;
  height: auto;
}

/* Botón */
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #24292C;
  color: #28BBDA;
  text-decoration: none;
  border-radius: 15px;
  font-weight: bold;
}

/* About Us */
.about-us {
  background: #24292C;
  color: #28BBDA;
  text-align: center;
  padding: 50px;
}

.about-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: left;
  color: white
}

.about-content img {
  width: 300px;
  border-radius: 10px;
}

/* Vision, Mission, Values */
.vmv {
  display: flex;
  justify-content: space-around;
  background: #303D4F;
  color: black;
  padding: 40px;
}

.card {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 30%;
}

/* FAQ */
.faq {
  background: #2C2C2C;
  color: white;
  text-align: center;
  padding: 50px;
}

.faq-content {
  display: flex;
  justify-content: space-around;
}

.faq-card {
  background: #333;
  padding: 20px;
  border-radius: 10px;
  width: 30%;
}

/* Footer */
footer {
  background: black;
  color: white;
  text-align: center;
  padding: 30px;
}

.footer-logo {
  width: 100px;
}

footer nav {
  margin-top: 10px;
}

footer nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
}

.social-icons {
  margin-top: 10px;
}

.social-icons a {
  color: white;
  margin: 0 10px;
  font-size: 20px;
}
</style>