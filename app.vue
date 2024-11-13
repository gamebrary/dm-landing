<template>
  <div>
<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="https://dugoutmaster-68d9a.web.app/assets/logo-CyQ2y0hA.png" alt="Dugout Master" height="40" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pricing">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-primary ms-3" href="https://app.dugoutmaster.com/signup">Sign Up</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-primary ms-2" href="https://app.dugoutmaster.com/login">Log In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
    <NuxtRouteAnnouncer />
    <NuxtPage />

    <footer class="bg-dark text-white py-4">
    <div class="container">
      <div class="row">

        <!-- Logo & About -->
        <div class="col-md-4">
          <h5 class="text-uppercase mb-3">Dugout Master</h5>
          <p>Your ultimate baseball team management tool. Simplify coaching, track player performance, and strategize with ease.</p>
        </div>

        <!-- Links Section -->
        <div class="col-md-4">
          <h5 class="text-uppercase mb-3">Quick Links</h5>
          <ul class="list-unstyled">
            <li><a href="/about" class="text-white">About Us</a></li>
            <li><a href="/features" class="text-white">Features</a></li>
            <li><a href="/pricing" class="text-white">Pricing</a></li>
            <li><a href="https://app.dugoutmaster.com/signup" class="text-white">Sign Up</a></li>
            <li><a href="https://app.dugoutmaster.com/login" class="text-white">Login</a></li>
          </ul>
        </div>

        <!-- Contact & Social Media -->
        <div class="col-md-4">
          <h5 class="text-uppercase mb-3">Contact</h5>
          <p>Email: <a href="mailto:support@dugoutmaster.com" class="text-white">support@dugoutmaster.com</a></p>
          <p>Phone: +1 (800) 123-4567</p>
          <div class="social-links">
            <a href="https://twitter.com/dugoutmaster" target="_blank" class="text-white me-3">
              <i class="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://facebook.com/dugoutmaster" target="_blank" class="text-white me-3">
              <i class="fab fa-facebook"></i> Facebook
            </a>
            <a href="https://instagram.com/dugoutmaster" target="_blank" class="text-white">
              <i class="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>

      </div>

      <!-- Legal Information -->
      <div class="text-center mt-4">
        <small>
          &copy; 2024 Dugout Master. All Rights Reserved. |
          <a href="/privacy-policy" class="text-white">Privacy Policy</a> |
          <a href="/terms-of-service" class="text-white">Terms of Service</a>
        </small>
      </div>
    </div>
  </footer>
  </div>
</template>

<style scoped>
.navbar {
  border-bottom: 2px solid #f1f1f1;
}

.navbar-brand img {
  max-height: 40px;
}

.navbar-nav .nav-link {
  font-size: 1.1rem;
  font-weight: 500;
}

.navbar-nav .nav-link.active {
  font-weight: 600;
}

.navbar-nav .btn {
  font-size: 1rem;
}

.navbar-toggler-icon {
  background-color: #007bff;
}
</style>