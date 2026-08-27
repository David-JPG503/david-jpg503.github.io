document.addEventListener('DOMContentLoaded', () => {
  /*
    PROJECT DATA
    Add, remove, or reorder all projects in this array.
    Each project needs a title, type, tag, image, description, and media list.
  */
  const projects = [
    {
      title: 'Fotograf Jon Marius Nilsson',
      type: 'photo',
      tag: 'Praksis · 2026',
      image: 'images/Burger.jpg',
      description: 'Matfoto og fargekorrigering i Capture One.',
      media: [
        { type: 'image', src: 'images/Burger.jpg' },
        { type: 'image', src: 'images/Burger2.jpg' },
        { type: 'image', src: 'images/Burger3.jpg' },
        { type: 'image', src: 'images/Burger4.jpg' },
        { type: 'image', src: 'images/Burger5.jpg' },
        { type: 'image', src: 'images/Burger6.jpg' },
        { type: 'image', src: 'images/Pommes.jpg' },
        { type: 'image', src: 'images/Ringer.jpg' },
        { type: 'image', src: 'images/Outside.jpg' },
        { type: 'image', src: 'images/Outside2.jpg' },
        { type: 'image', src: 'images/Bar_Bok.jpg' }
      ]
    },

    {
      title: 'PHM Norge',
      type: 'video',
      tag: 'Praksis · 2025—26',
      image: 'images/PHM_Black.png',
      description: 'Opptak, klipp og innhold for sosiale medier.',
      media: [
        {
          type: 'video',
          src: 'Videos2/Brøytning_Video Med_Caption_Compressed.mp4',
          poster: 'images/PHM_Black.png'
        },
        {
          type: 'video',
          src: 'Videos2/Kort Annet Versjon Brøytning_Compressed.mp4',
          poster: 'images/PHM_Black.png'
        },
        {
          type: 'video',
          src: 'Videos2/Bortkjøring Av Snø_Compressed.mp4',
          poster: 'images/PHM_Black.png'
        },
        {
          type: 'video',
          src: 'Videos2/Blåsing_Måking_Compressed.mp4',
          poster: 'images/PHM_Black.png'
        }
      ]
    },

    {
      title: 'Kunsthøgskolen i Oslo',
      type: 'video',
      tag: 'Praksis · 2025',
      image: 'images/Dokumentar.png',
      description: 'Kort dokumentar produsert med lærlingene.',
      media: [
        {
          type: 'video',
          src: 'Videos3/Ståle Rue Dokumentar_Compressed.mp4',
          poster: 'images/Dokumentar.png'
        }
      ]
    },

    {
      title: 'Foto',
      type: 'photo',
      tag: 'Personlig arbeid',
      image: 'images/Gull_Maske.jpg',
      description: 'Lys, tekstur og små øyeblikk.',
      media: [
        { type: 'image', src: 'images/Gull_Maske.jpg' },
        { type: 'image', src: 'images/Drage_Kinesisk.jpg' },
        { type: 'image', src: 'images/Vin1.jpg' },
        { type: 'image', src: 'images/Vin2.jpg' },
        { type: 'image', src: 'images/Vin3.jpg' },
        { type: 'image', src: 'images/Vin4.jpg' },
        { type: 'image', src: 'images/Rosa_Tre.jpg' },
        { type: 'image', src: 'images/Glass_Hvit_Striper.jpg' },
        { type: 'image', src: 'images/Glass_Sort_Striper.jpg' },
        { type: 'image', src: 'images/Glass_Litt_Trist.jpg' },
        { type: 'image', src: 'images/Kloden_Ute.jpg' },
        { type: 'image', src: 'images/Blad4.jpg' },
        { type: 'image', src: 'images/Johannes.jpg' },
        { type: 'image', src: 'images/Vanndråpe_3.jpg' },
        { type: 'image', src: 'images/Snø_Bilde_1.jpg' },
        { type: 'image', src: 'images/Snø_Bilde_2.jpg' }
      ]
    },

    {
      title: 'Pepsi',
      type: 'video',
      tag: 'Skoleprosjekt',
      image: 'images/Pepsi_2.jpg',
      description: 'Plakatdesign og en kort animert reklame.',
      media: [
        { type: 'image', src: 'images/Pepsi_2.jpg' },
        { type: 'image', src: 'images/Pepsi_3.jpg' },
        {
          type: 'video',
          src: 'Videos/Pepsi_Short_Ad_video.mp4',
          poster: 'images/Pepsi_2.jpg'
        }
      ]
    },

    {
      title: 'Magasin, skrekkplakat & trailer',
      type: 'video',
      tag: 'Skoleprosjekt',
      image: 'images/Magasinforside_version_2.jpg',
      description: 'Min første oppgave i medieproduksjon.',
      media: [
        { type: 'image', src: 'images/Magasinforside_version_2.jpg' },
        { type: 'image', src: 'images/Plakat_Whisper_in_the_Dark.jpg' },
        {
          type: 'video',
          src: 'Videos/Short_Trailer_with_video_templates.mp4',
          poster: 'images/Magasinforside_version_2.jpg'
        }
      ]
    },

    {
      title: 'Silhuettkunst',
      type: 'photo',
      tag: 'Kuben · 2024',
      image: 'images/Battle cats_uten_min_kallnavn_autograf.jpg',
      description: 'Illustrasjoner laget i Photoshop.',
      media: [
        {
          type: 'image',
          src: 'images/Battle cats_uten_min_kallnavn_autograf.jpg'
        },
        {
          type: 'image',
          src: 'images/Jurassic Park_min_egen_versjon_bilde.jpg'
        }
      ]
    },

    {
      title: 'Pixel kunst',
      type: 'photo',
      tag: 'Personlig arbeid',
      image: 'images/Mutated_Blender_Logo.png',
      description: 'Pixelkunst og digitale eksperimenter.',
      media: [
        { type: 'image', src: 'images/Mutated_Blender_Logo.png' },
        { type: 'image', src: 'images/Swamp_Icons.png' },
        { type: 'image', src: 'images/PNG_Pixel_Overlay.png' }
      ]
    }
  ];

  const grid = document.getElementById('project-grid');
  const modal = document.getElementById('galleryModal');
  const mediaContainer = modal.querySelector('.modal-media-container');
  const closeButton = modal.querySelector('.modal-close');
  const previousButton = modal.querySelector('.modal-prev');
  const nextButton = modal.querySelector('.modal-next');

  let activeMedia = [];
  let activeIndex = 0;

  function renderProjects(filter = 'all') {
    const visibleProjects = projects.filter((project) => {
      return filter === 'all' || project.type === filter;
    });

    grid.innerHTML = visibleProjects
      .map((project, index) => {
        const projectIndex = projects.indexOf(project);
        const videoPlayButton = project.type === 'video'
          ? '<span class="play-button">▶</span>'
          : '';

        return `
          <article class="project-card ${project.type === 'video' ? 'is-video' : ''}" data-index="${projectIndex}">
            <button class="card-image" aria-label="Åpne ${project.title}">
              <img src="${project.image}" alt="${project.title}" loading="lazy" />
              ${videoPlayButton}
              <span class="card-number">0${index + 1}</span>
            </button>
            <div class="card-copy">
              <p class="card-tag">${project.tag}</p>
              <h3>${project.title}</h3>
              <p>${project.description}</p>
            </div>
            <button class="text-button" aria-label="Se ${project.title}">
              Se prosjekt <span>↗</span>
            </button>
          </article>
        `;
      })
      .join('');

    grid.querySelectorAll('.project-card').forEach((card) => {
      card.addEventListener('click', () => {
        openModal(projects[card.dataset.index]);
      });
    });
  }

  function updateMedia() {
    const item = activeMedia[activeIndex];
    const counter = `<p>${activeIndex + 1} / ${activeMedia.length}</p>`;

    if (item.type === 'video') {
      mediaContainer.innerHTML = `
        <video
          src="${item.src}"
          poster="${item.poster || ''}"
          controls
          autoplay
          playsinline
        ></video>
        ${counter}
      `;
      return;
    }

    mediaContainer.innerHTML = `
      <img src="${item.src}" alt="Prosjektbilde ${activeIndex + 1}" />
      ${counter}
    `;
  }

  function openModal(project) {
    activeMedia = project.media;
    activeIndex = 0;
    updateMedia();

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    closeButton.focus();
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    mediaContainer.innerHTML = '';
    document.body.classList.remove('modal-open');
  }

  function moveMedia(step) {
    activeIndex = (activeIndex + step + activeMedia.length) % activeMedia.length;
    updateMedia();
  }

  document.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((item) => {
        item.classList.remove('active');
      });

      button.classList.add('active');
      renderProjects(button.dataset.filter);
    });
  });

  closeButton.addEventListener('click', closeModal);
  previousButton.addEventListener('click', () => moveMedia(-1));
  nextButton.addEventListener('click', () => moveMedia(1));

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('active')) {
      return;
    }

    if (event.key === 'Escape') {
      closeModal();
    }

    if (event.key === 'ArrowLeft') {
      moveMedia(-1);
    }

    if (event.key === 'ArrowRight') {
      moveMedia(1);
    }
  });

  renderProjects();
});
