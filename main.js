(function () {
  var yearEl = document.getElementById("copy-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var expanded = this.classList.toggle("active");
      links.classList.toggle("open");
      this.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var cfg = window.PCEA_CONFIG || {};
  var charity = (cfg.charityId || "").trim();
  document.querySelectorAll("[data-charity-id]").forEach(function (el) {
    if (charity) el.textContent = charity;
  });

  var form = document.getElementById("register-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = ((form.elements.namedItem("name") || {}).value || "").trim();
      var phone = ((form.elements.namedItem("phone") || {}).value || "").trim();
      var email = ((form.elements.namedItem("email") || {}).value || "").trim();
      var congregation = ((form.elements.namedItem("congregation") || {}).value || "").trim();
      var message = ((form.elements.namedItem("message") || {}).value || "").trim();
      var body = [
        "Membership enquiry from the PCEA Kitengela Parish website",
        "",
        "Name: " + name,
        "Phone: " + phone,
        "Email: " + email,
        "Congregation: " + congregation,
        "",
        message
      ].join("\n");
      var to = cfg.sessionEmail || "info@pceakitengela.or.ke";
      window.location.href =
        "mailto:" + to +
        "?subject=" + encodeURIComponent("Membership enquiry - " + name) +
        "&body=" + encodeURIComponent(body);
    });
  }
})();
