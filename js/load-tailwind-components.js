/**
 * Tailwind Play CDN compiles `<style type="text/tailwindcss">` in the document only.
 * This script fetches `css/tailwind-components.css` and injects it as that type so
 * `@layer components` + `@apply` work. Serve over HTTP (not file://).
 */
(function () {
  var href = "css/tailwind-components.css";

  function inject(text) {
    var el = document.createElement("style");
    el.type = "text/tailwindcss";
    el.textContent = text;
    document.head.appendChild(el);
  }

  fetch(href)
    .then(function (res) {
      if (!res.ok) throw new Error(res.status + " " + res.statusText);
      return res.text();
    })
    .then(inject)
    .catch(function (err) {
      console.warn("[Lakbay]", err && err.message ? err.message : err);
      console.warn(
        "[Lakbay] Could not load " +
          href +
          ". Use a local HTTP server so Tailwind component styles apply."
      );
    });
})();
