<template>
  <div class="container my-5">
    <h1 class="text-center mb-5">Features of Dugout Master</h1>

    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="Game Management">
          <div class="card-body">
            <h5 class="card-title">Game Management</h5>
            <p class="card-text">
              Simplify the way you manage games. Create lineups, track player stats, and monitor progress all in one place. Keep everything organized and accessible for every match.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="Team Lineups">
          <div class="card-body">
            <h5 class="card-title">Team Lineups</h5>
            <p class="card-text">
              Effortlessly create and manage your team lineups. Whether you're managing a solo team or a full club, our lineup management tool will help you stay organized and efficient.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="Player Profiles">
          <div class="card-body">
            <h5 class="card-title">Player Profiles</h5>
            <p class="card-text">
              Keep detailed profiles for every player, including their stats, strengths, weaknesses, and game performance. Manage everything from one centralized location.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="Player Tracking">
          <div class="card-body">
            <h5 class="card-title">Player Tracking</h5>
            <p class="card-text">
              Track player progress, view past performances, and gain insights that can help you make informed decisions when creating your lineup.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="Customizable Dashboards">
          <div class="card-body">
            <h5 class="card-title">Customizable Dashboards</h5>
            <p class="card-text">
              Customize your dashboard to meet your needs. Choose which data you want to see and how it’s presented, making your workflow more efficient.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="Analytics & Reports">
          <div class="card-body">
            <h5 class="card-title">Analytics & Reports</h5>
            <p class="card-text">
              Dive into detailed analytics and reports that help you evaluate performance and make smarter decisions for your team.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-5">
      <a href="https://app.dugoutmaster.com/signup" class="btn btn-primary btn-lg">Get Started Today</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesPage',
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-body {
  background-color: #f8f9fa;
}

.card-title {
  color: #343a40;
}

.card-text {
  color: #6c757d;
}

.btn {
  background-color: #007bff;
  border-color: #007bff;
}

.btn:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
