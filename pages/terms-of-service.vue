<template>
  <div class="container my-5">
    <h1 class="text-center mb-4">Dugout Master - Terms and Conditions</h1>
    <p class="text-center">Last updated: <strong>{{ lastUpdated }}</strong></p>

    <div class="content">
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By registering for, accessing, or using <strong>Dugout Master</strong>, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our <router-link to="/privacy-policy">Privacy Policy</router-link>. These Terms apply to all users of the Service, including but not limited to users who are registered account holders, visitors, or contributors of content.
        </p>
      </section>

      <section>
        <h2>2. Changes to Terms</h2>
        <p>
          We reserve the right to modify or update these Terms and Conditions at any time without prior notice. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. It is your responsibility to check the Terms periodically for updates.
        </p>
      </section>

      <section>
        <h2>3. Eligibility</h2>
        <p>
          To use <strong>Dugout Master</strong>, you must be at least 13 years old or have the consent of a parent or guardian. By creating an account, you represent and warrant that you meet these eligibility requirements.
        </p>
      </section>

      <section>
        <h2>4. User Accounts</h2>
        <ul>
          <li><strong>Registration:</strong> To access certain features of the Service, you must create an account by providing accurate and complete information during the registration process.</li>
          <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account login credentials. You agree to notify us immediately of any unauthorized use of your account.</li>
          <li><strong>Account Termination:</strong> We may suspend or terminate your account at any time if we believe you are violating these Terms.</li>
        </ul>
      </section>

      <section>
        <h2>5. License and Use of Service</h2>
        <p>
          We grant you a limited, non-exclusive, non-transferable, and revocable license to use <strong>Dugout Master</strong> for personal and/or organizational purposes. You agree not to use the Service for any unlawful or prohibited purposes, including but not limited to:
        </p>
        <ul>
          <li>Attempting to reverse-engineer or modify the Service.</li>
          <li>Distributing, licensing, or sublicensing the Service.</li>
          <li>Engaging in any activities that may harm or interfere with the Service or the use of the Service by others.</li>
        </ul>
      </section>

      <section>
        <h2>6. Membership Tiers and Payments</h2>
        <p>
          <strong>Solo Teams:</strong> A membership plan for individual teams.<br>
          <strong>Club Teams:</strong> A membership plan that allows users to manage multiple teams.
        </p>
        <p>
          Pricing, billing details, and features for each membership tier will be provided at the time of registration or upon upgrading. All payments are final, and refunds are at our sole discretion unless otherwise required by law.
        </p>
      </section>

      <section>
        <h2>7. Content Ownership and Intellectual Property</h2>
        <ul>
          <li><strong>User Content:</strong> Any content that you upload, post, or otherwise transmit through the Service (including but not limited to team data, game schedules, and other media) remains your property. You grant <strong>Dugout Master</strong> a worldwide, non-exclusive, royalty-free license to use, distribute, and display such content as necessary to provide the Service.</li>
          <li><strong>Dugout Master Content:</strong> All content provided by <strong>Dugout Master</strong>, including but not limited to software, design, graphics, and logos, is the intellectual property of <strong>Dugout Master</strong> and its licensors. You may not use, reproduce, or distribute this content without express written permission from us.</li>
        </ul>
      </section>

      <section>
        <h2>8. Privacy and Data Collection</h2>
        <p>
          Your privacy is important to us. Our <router-link to="/privacy-policy">Privacy Policy</router-link> explains how we collect, use, and protect your personal information. By using <strong>Dugout Master</strong>, you consent to the collection and use of your data as outlined in the Privacy Policy.
        </p>
      </section>

      <section>
        <h2>9. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, <strong>Dugout Master</strong>, its owners, employees, and affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Service, even if we have been advised of the possibility of such damages.
        </p>
      </section>

      <section>
        <h2>10. Disclaimer of Warranties</h2>
        <p>
          <strong>Dugout Master</strong> is provided on an "as-is" and "as-available" basis without any warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or secure, nor do we make any guarantees about the accuracy or reliability of the content available on or through the Service.
        </p>
      </section>

      <section>
        <h2>11. Governing Law and Dispute Resolution</h2>
        <p>
          These Terms and Conditions are governed by and construed in accordance with the laws of <strong>[Your Country/State]</strong>, without regard to its conflict of law principles. Any dispute arising out of or relating to these Terms or the use of the Service will be subject to the exclusive jurisdiction of the courts located in <strong>[Your City/State]</strong>.
        </p>
      </section>

      <section>
        <h2>12. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to the Service without prior notice if we believe you have violated these Terms or for any other reason, at our sole discretion.
        </p>
      </section>

      <section>
        <h2>13. Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
        <p><strong>Dugout Master</strong><br>
          Email: <a href="mailto:support@dugoutmaster.com">support@dugoutmaster.com</a><br>
          Phone: <a href="tel:+1-800-123-4567">+1-800-123-4567</a>
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastUpdated: 'Insert Date', // Update this with the actual date
    };
  },
};
</script>

<style scoped>
/* Add any styles you want specific to this page */
.container {
  max-width: 800px;
}

.content {
  line-height: 1.6;
}

h2 {
  margin-top: 2rem;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}
</style>
