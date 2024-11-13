<template>
  <div class="container my-5">
    <h1 class="text-center mb-4">Contact Us</h1>

    <div class="row justify-content-center">
      <div class="col-md-8">
        <p class="lead text-center mb-4">
          We'd love to hear from you! Please use the form below to get in touch, and we will respond as soon as possible.
        </p>

        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Your Name</label>
            <input
              v-model="formData.name"
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Your Email</label>
            <input
              v-model="formData.email"
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Your Message</label>
            <textarea
              v-model="formData.message"
              class="form-control"
              id="message"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>

    <div class="mt-5 text-center">
      <p class="lead">Or reach us directly:</p>
      <p>Email: <a href="mailto:support@dugoutmaster.com">support@dugoutmaster.com</a></p>
      <p>Phone: <a href="tel:+1-800-123-4567">+1-800-123-4567</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission (e.g., send the form data to a backend or email service)
      console.log('Form submitted:', this.formData);

      // Reset form fields after submission
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
      alert('Your message has been sent!');
    },
  },
};
</script>

<style scoped>
/* Center the form on mobile devices and adjust the container on larger screens */
.container {
  max-width: 600px;
}

form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-label {
  font-weight: bold;
}

button[type="submit"] {
  font-weight: bold;
}

a {
  color: #007bff;
}
</style>
