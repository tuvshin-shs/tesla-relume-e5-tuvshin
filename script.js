// Product slider arrows
(function () {
  const track = document.getElementById("products-track");
  if (!track) return;
  const buttons = document.querySelectorAll(".slider-arrow");

  function step() {
    const card = track.querySelector(".product");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card ? card.offsetWidth + gap : 300;
  }

  function update() {
    const max = track.scrollWidth - track.clientWidth - 1;
    buttons.forEach((btn) => {
      const dir = Number(btn.dataset.dir);
      btn.disabled = dir < 0 ? track.scrollLeft <= 0 : track.scrollLeft >= max;
    });
  }

  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      track.scrollBy({ left: Number(btn.dataset.dir) * step(), behavior: "smooth" });
    })
  );
  track.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

// FSD video: show poster first, load the YouTube player only when Play is clicked
(function () {
  const media = document.querySelector(".fsd-card__media[data-youtube-id]");
  if (!media) return;
  const button = media.querySelector(".fsd-card__play");

  button.addEventListener("click", () => {
    const id = media.dataset.youtubeId;
    const iframe = document.createElement("iframe");
    iframe.className = "fsd-card__video";
    iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0&modestbranding=1&playsinline=1";
    iframe.title = media.dataset.title || "Video";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;

    media.innerHTML = "";
    media.appendChild(iframe);
    media.classList.add("is-playing");
  });
})();

// Mobile navigation toggle
(function () {
  const toggle = document.querySelector(".navbar__toggle");
  const menu = document.getElementById("navbar-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
})();
