<?php
/**
 * Findly — Shared Navbar Component
 * Include with: <?php include 'includes/navbar.php'; ?>
 * Set $activeNav = 'home'|'browse'|'report'|'admin'|'login' before including if using PHP rendering.
 */
$activeNav = $activeNav ?? '';
?>
<nav class="navbar navbar-expand-lg findly-nav">
  <div class="container">
    <a class="findly-brand" href="index.html">
      <span class="brand-mark">✦</span> Findly
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#findlyNavContent" aria-controls="findlyNavContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="bi bi-list fs-5"></i>
    </button>

    <div class="collapse navbar-collapse" id="findlyNavContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
        <li class="nav-item">
          <a class="nav-link <?= ($activeNav === 'home') ? 'active' : '' ?>" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link <?= ($activeNav === 'browse') ? 'active' : '' ?>" href="browse.html">Browse Catalog</a>
        </li>
        <!-- TODO: PHP if session role === 'admin' -->
        <li class="nav-item">
          <a class="nav-link <?= ($activeNav === 'admin') ? 'active' : '' ?>" href="admin.html">Admin Console</a>
        </li>
        <!-- TODO: PHP endif -->
      </ul>

      <div class="d-flex align-items-center gap-2 mt-3 mt-lg-0">
        <a class="nav-link-report" href="report.html">
          <i class="bi bi-tag-fill me-1"></i> Report Item
        </a>

        <!-- TODO: PHP if user logged in -->
        <!--
        <div class="dropdown">
          <button class="btn btn-sm btn-outline-secondary dropdown-toggle font-mono" type="button" data-bs-toggle="dropdown">
            <i class="bi bi-person-circle me-1"></i> Student #1042
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow-sm">
            <li><a class="dropdown-menu-item text-danger text-decoration-none px-3 py-1 fs-7" href="logout.php"><i class="bi bi-box-arrow-right me-1"></i> Sign Out</a></li>
          </ul>
        </div>
        -->
        <!-- TODO: PHP else (guest state) -->
        <a class="nav-link <?= ($activeNav === 'login') ? 'active' : '' ?>" href="login.html">Sign In</a>
        <a class="nav-link-register" href="login.html?tab=register">Register</a>
        <!-- TODO: PHP endif -->
      </div>
    </div>
  </div>
</nav>
