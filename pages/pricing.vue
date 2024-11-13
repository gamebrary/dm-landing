<template>
  <div class="container mt-5">
    <h1 class="text-center mb-5">Pricing Plans for Dugout Master</h1>

    <div class="row justify-content-center">
      <!-- Free Plan -->
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm">
          <div class="card-header text-center bg-light">
            <h4 class="mb-0">Free Plan</h4>
            <p class="text-muted">Perfect for beginners</p>
          </div>
          <div class="card-body">
            <h3 class="card-title text-center">$0<span class="small">/mo</span></h3>
            <ul class="list-unstyled">
              <li><i class="bi bi-check-circle-fill"></i> 1 Team</li>
              <li><i class="bi bi-check-circle-fill"></i> 1 Lineup</li>
              <li><i class="bi bi-check-circle-fill"></i> Basic Game Management</li>
              <li><i class="bi bi-x-circle-fill"></i> No Analytics & Reports</li>
              <li><i class="bi bi-x-circle-fill"></i> Limited Player Tracking</li>
            </ul>
            <div class="d-grid">
              <a href="https://app.dugoutmaster.com/signup" class="btn btn-outline-primary">Get Started</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Solo Team Plan -->
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm">
          <div class="card-header text-center bg-primary text-white">
            <h4 class="mb-0">Solo Team Plan</h4>
            <p class="text-light">For individual team managers</p>
          </div>
          <div class="card-body">
            <h3 class="card-title text-center">$10<span class="small">/mo</span></h3>
            <ul class="list-unstyled">
              <li><i class="bi bi-check-circle-fill"></i> 1 Team</li>
              <li><i class="bi bi-check-circle-fill"></i> Unlimited Lineups</li>
              <li><i class="bi bi-check-circle-fill"></i> Game Management Tools</li>
              <li><i class="bi bi-check-circle-fill"></i> Player Tracking</li>
              <li><i class="bi bi-check-circle-fill"></i> Analytics & Reports</li>
            </ul>
            <div class="d-grid">
              <a href="https://app.dugoutmaster.com/signup" class="btn btn-primary">Get Started</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Club Plan -->
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm">
          <div class="card-header text-center bg-dark text-white">
            <h4 class="mb-0">Club Plan</h4>
            <p class="text-light">For managing multiple teams</p>
          </div>
          <div class="card-body">
            <h3 class="card-title text-center">$30<span class="small">/mo</span></h3>
            <ul class="list-unstyled">
              <li><i class="bi bi-check-circle-fill"></i> Up to 10 Teams</li>
              <li><i class="bi bi-check-circle-fill"></i> Unlimited Lineups</li>
              <li><i class="bi bi-check-circle-fill"></i> Game Management Tools</li>
              <li><i class="bi bi-check-circle-fill"></i> Player Tracking</li>
              <li><i class="bi bi-check-circle-fill"></i> Advanced Analytics & Reports</li>
              <li><i class="bi bi-check-circle-fill"></i> Priority Support</li>
            </ul>
            <div class="d-grid">
              <a href="https://app.dugoutmaster.com/signup" class="btn btn-dark">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-5">
      <h3>Still have questions? <a href="/contact" class="text-primary">Contact Us</a></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingPage',
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.card {
  border-radius: 8px;
}

.card-header {
  border-radius: 8px 8px 0 0;
}

.card-body {
  background-color: #f8f9fa;
}

.card-title {
  font-size: 2rem;
  font-weight: 600;
}

.card ul {
  font-size: 1.1rem;
}

.card-body .btn {
  font-size: 1.1rem;
}

.text-muted {
  font-size: 0.9rem;
}

.text-light {
  font-size: 0.9rem;
}

.text-primary {
  color: #007bff !important;
}

.text-center h3 a {
  text-decoration: none;
  font-weight: bold;
}
</style>
