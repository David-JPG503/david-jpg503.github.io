document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('galleryModal');
  const mediaContainer = modal.querySelector('.modal-media-container');
  const closeBtn = modal.querySelector('.modal-close');
  const prevBtn = modal.querySelector('.modal-prev');
  const nextBtn = modal.querySelector('.modal-next');

  const projectMedia = {
    "Triad Solutions": [
      { type: "image", src: "images/Triad Solutions_original_jpg.jpg" },
      { type: "image", src: "images/Triad Solutions_title_under_jpg.jpg" },
      { type: "image", src: "images/Triad Solutions_black_original_jpg.jpg" },
      { type: "image", src: "images/Triad Solutions_title_under_black_jpg.jpg" }
    ],
    "VEKTORA": [
      { type: "image", src: "images/Logo_uten_rektangel_annet_version_jpg.jpg" },
      { type: "image", src: "images/Logo_uten_rektangel_Outline_annet_version_jpg.jpg" },
      { type: "image", src: "images/Logo.png" },
      { type: "image", src: "images/Logo_outline_med_rektangel.png" },
      { type: "image", src: "images2/Hanging Wall Sign MockUp 5.jpg" },
      { type: "image", src: "images2/Hanging Wall Sign MockUp 5 (1).jpg" },
      { type: "image", src: "images2/Hanging Wall Sign MockUp 5 (2).jpg" },
      { type: "image", src: "images2/Hanging Wall Sign MockUp 5 (3).jpg" },
      { type: "image", src: "images2/Mug PSD MockUp 3.jpg" },
      { type: "image", src: "images2/Mug PSD MockUp 3 (1).jpg" },
      { type: "image", src: "images2/Mug PSD MockUp 3 (2).jpg" }
    ],
    "AquaMarine": [
      { type: "image", src: "images2/1 (1).jpg" },
      { type: "image", src: "images2/1.jpg" },
      { type: "image", src: "images2/1 (2).jpg" },
      { type: "image", src: "images/Fish_logo_original_rectangle.png" },
      { type: "image", src: "images/Outline_Fish_Logo_Rectangle.png" },
      { type: "image", src: "images/Gentleman_Fish_Original.jpg" },
      { type: "image", src: "images2/Shop Facade Logo MockUp.jpg" },
      { type: "image", src: "images2/Shop Facade Logo MockUp (1).jpg" },
      { type: "image", src: "images2/Snapback Cap PSD MockUp.jpg" },
      { type: "image", src: "images2/Snapback Cap PSD MockUp (1).jpg" },
      { type: "image", src: "images2/Snapback Cap PSD MockUp (2).jpg" }
    ],
    "Silhouette arts": [
      { type: "image", src: "images/Battle cats_uten_min_kallnavn_autograf.jpg" },
      { type: "image", src: "images/Jurassic Park_min_egen_versjon_bilde.jpg" }
    ],
    "Pixel arts": [
      { type: "image", src: "images/Mutated_Blender_Logo.png" },
      { type: "image", src: "images/Mutated_Blender_Logo_Gradient_Overlay.png" },
      { type: "image", src: "images/Swamp_Icons.png" },
      { type: "image", src: "images/PNG_Pixel_Overlay.png" },
      { type: "image", src: "images/PNG_Pixel_Soft-light.png" },
      { type: "image", src: "images/PNG_Pixel_Substract.png" }
    ],
    "ASCII art video": [
      { type: "video", src: "Videos/ASCII_Art_AE_video.mp4" }
    ]
  };


  let currentProject = null;
  let currentIndex = 0;

  function updateModalMedia() {
    const mediaItems = projectMedia[currentProject];
    const currentItem = mediaItems[currentIndex];

    mediaContainer.innerHTML = ''; // Clear previous media

    if (currentItem.type === 'image') {
      const img = document.createElement('img');
      img.src = currentItem.src;
      img.alt = `Screenshot ${currentIndex + 1} of ${currentProject}`;
      img.style.maxWidth = '90vw';
      img.style.maxHeight = '80vh';
      img.style.borderRadius = 'var(--radius)';
      mediaContainer.appendChild(img);
    } else if (currentItem.type === 'video') {
      const video = document.createElement('video');
      video.src = currentItem.src;
      video.controls = true;
      video.autoplay = true;
      video.style.maxWidth = '90vw';
      video.style.maxHeight = '80vh';
      video.style.borderRadius = 'var(--radius)';
      mediaContainer.appendChild(video);
    }
  }

  document.querySelectorAll('.view-project-btn').forEach(button => {
    button.addEventListener('click', () => {
      currentProject = button.closest('.project-card').dataset.project;
      currentIndex = 0;

      if (!projectMedia[currentProject]) return;

      updateModalMedia();
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  function showNextMedia() {
    if (!currentProject) return;
    const mediaItems = projectMedia[currentProject];
    currentIndex = (currentIndex + 1) % mediaItems.length;
    updateModalMedia();
  }

  function showPrevMedia() {
    if (!currentProject) return;
    const mediaItems = projectMedia[currentProject];
    currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    updateModalMedia();
  }

  nextBtn.addEventListener('click', e => {
    e.stopPropagation();
    showNextMedia();
  });

  prevBtn.addEventListener('click', e => {
    e.stopPropagation();
    showPrevMedia();
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    mediaContainer.innerHTML = '';
    currentProject = null;
    currentIndex = 0;
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeBtn.click();
    }
  });

  // Keyboard navigation & close
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeBtn.click();
    } else if (e.key === 'ArrowRight') {
      showNextMedia();
    } else if (e.key === 'ArrowLeft') {
      showPrevMedia();
    }
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');
      const cards = document.querySelectorAll('.project-card');

      cards.forEach(card => {
        const type = card.getAttribute('data-type');
        card.style.display = (filter === 'all' || filter === type) ? 'flex' : 'none';
      });
    });
  });
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const errorDiv = document.getElementById("error-message");
    if (errorDiv) errorDiv.textContent = "";

    const submitBtn = document.getElementById("submit_btn");

    const formData = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value, // Optional
        message: document.getElementById("message").value,
    };

    emailjs.send("service_20ln28y", "template_j1ncgrq", formData)
        .then(function (response) {
            submitBtn.innerHTML = "Sent";
            submitBtn.disabled = true;
            document.getElementById("contact-form").reset();

            setTimeout(function () {
                submitBtn.innerHTML = "Send Message";
                submitBtn.disabled = false;
            }, 3000);
        })
        .catch(function (error) {
            if (errorDiv) {
                errorDiv.textContent = "Failed to send message. Please try again.";
                errorDiv.style.color = "white";
            }
            console.error("EmailJS Error:", error);
        });
});