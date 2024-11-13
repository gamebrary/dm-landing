<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">About Us</h1>

    <div class="row">
      <div class="col-lg-6">
        <h3>Who We Are</h3>
        <p>
          At <strong>Dugout Master</strong>, we're a passionate team dedicated to revolutionizing the way coaches and players manage their teams. We understand the importance of organization, communication, and strategy on the field, which is why we built a platform designed to make managing your team a breeze.
        </p>
        <p>
          Our goal is simple: to provide coaches with the tools they need to create lineups, manage player data, and improve team performance, all in one place. Whether you're managing a solo team or multiple teams at a club level, we have a solution for you.
        </p>
      </div>
      <div class="col-lg-6">
        <h3>Our Mission</h3>
        <p>
          Our mission is to empower coaches, players, and sports organizations with a seamless, intuitive platform that helps them stay organized, save time, and focus on what truly matters—winning games and developing players.
        </p>
        <p>
          We believe that every coach should have access to powerful tools, whether you're managing a single team or a large club. That's why we offer flexible pricing options, tailored to meet the needs of both solo and club coaches. We are committed to constantly improving and evolving our platform to meet the needs of our users.
        </p>
      </div>
    </div>

    <div class="mt-5">
      <h3>Our Team</h3>
      <p>
        We are a diverse group of developers, sports enthusiasts, and problem solvers. Our team consists of seasoned professionals from various fields, each contributing their expertise to build the best product for our users. Whether it's development, customer support, or design, we work together to create an exceptional user experience.
      </p>
    </div>

    <div class="mt-5">
      <h3>Contact Us</h3>
      <p>
        Have questions? We'd love to hear from you! Reach out to our team via email at <strong><a href="mailto:support@dugoutmaster.com">support@dugoutmaster.com</a></strong> or give us a call at <strong>[Your Phone Number]</strong>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUsPage',
};
</script>

<style scoped>
.container {
  max-width: 900px;
}

h1, h3 {
  color: #2c3e50;
}

p {
  font-size: 1.1em;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  text-decoration: underline;
}
</style>
