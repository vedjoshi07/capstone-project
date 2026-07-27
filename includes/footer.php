<?php
/**
 * Findly — Shared Footer Component
 * Include with: <?php include 'includes/footer.php'; ?>
 */
?>
<footer class="findly-footer">
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4">
        <div class="footer-brand">
          <span class="brand-mark">✦</span> Findly
        </div>
        <p class="footer-tagline">Campus Lost &amp; Found Management System</p>
        <p class="fs-7 text-white-50 mb-0">Ganpat University • Student &amp; Staff Service</p>
      </div>

      <div class="col-6 col-md-3 col-lg-2 ms-lg-auto">
        <div class="footer-col-title">Navigation</div>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="browse.html">Browse Catalog</a></li>
          <li><a href="report.html">Report Item</a></li>
          <li><a href="admin.html">Admin Console</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-3 col-lg-2">
        <div class="footer-col-title">Quick Actions</div>
        <ul class="footer-links">
          <li><a href="report.html?type=lost">Report Lost</a></li>
          <li><a href="report.html?type=found">Report Found</a></li>
          <li><a href="login.html">Student Sign In</a></li>
          <li><a href="login.html?tab=register">Create Account</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-3 col-lg-3">
        <div class="footer-col-title">Campus Security</div>
        <ul class="footer-links">
          <li class="fs-7 text-white-50"><i class="bi bi-geo-alt me-1 text-brass"></i> Main Security Office, Gate 1</li>
          <li class="fs-7 text-white-50"><i class="bi bi-clock me-1 text-brass"></i> Mon–Fri: 8:00 AM – 6:00 PM</li>
          <li class="fs-7 text-white-50"><i class="bi bi-telephone me-1 text-brass"></i> Ext: 4092 / 4093</li>
        </ul>
      </div>
    </div>

    <hr class="footer-divider">

    <div class="footer-bottom">
      <div>&copy; <?= date('Y') ?> Findly System. All rights reserved.</div>
      <div class="footer-ref">TAG-SYS-v1.0.4 • GANPAT-UNIV</div>
    </div>
  </div>
</footer>

<!-- Bootstrap 5 JS Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

<!-- Findly Application Logic -->
<script src="assets/js/main.js"></script>
