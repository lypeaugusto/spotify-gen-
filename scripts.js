
document.addEventListener('DOMContentLoaded', function() {
    // Dados dos artistas
    const artistsData = [
        { name: 'Metallica', image: './artistas/metallica.jpg' },
        { name: 'Nirvana', image: './artistas/nirvana.webp' },
        { name: 'Halocene', image: './artistas/halocene.jpg' },
        { name: 'Violet Orlandi', image: './artistas/violet-orlandi.webp' }, // Corrigido caminho
        { name: 'Lauren Babic', image: './artistas/lauren-babic.jpg' }, // Caminho corrigido e barras trocadas
        { name: 'Muse', image: './artistas/muse.jpg' },
        { name: 'Billie Eilish', image: './artistas/billie-eilish.jpeg' },
        { name: 'Evanescence', image: './artistas/evanescence.jpg' },
        { name: 'My Chemical Romance', image: './artistas/mychemacal.jpg' },
        { name: 'System of a Down', image: './artistas/system-of-a-don.jpg' }, // Caminho corrigido e barras trocadas
        { name: 'Linkin Park', image: './artistas/linkin-park.jpg' }
    ];

    // Selecione o elemento onde os artistas serão exibidos
    const artistsContainer = document.querySelector('.artists');

    // Verifique se o elemento existe
    if (artistsContainer) {
        artistsData.forEach(artist => {
            const artistElement = document.createElement('div');
            artistElement.classList.add('artist');
            artistElement.innerHTML = `
                <img src="${artist.image}" alt="${artist.name}">
                <p>${artist.name}</p>
            `;
            artistsContainer.appendChild(artistElement);
        });
    }
});






    const albumsData = [
        { name: 'Master of Puppets', artist: 'Metallica', image: './imagem/metallica.jpeg' },
        { name: 'Nevermind', artist: 'Nirvana', image: './imagem/nirvana.jpg' },
        { name: 'Vitruvian', artist: 'Halocene', image: './imagem/halocene.jpeg' },
        { name: 'Covers Collection', artist: 'Violet Orlandi', image: './imagem/violet-orlandi.jpg' },
        { name: 'The In-Between', artist: 'Lauren Babic', image: './imagem/lauren-Babic.jpeg' },
        { name: 'Simulation Theory', artist: 'Muse', image: './imagem/muse.jpeg' },
        { name: 'Hit me', artist: 'Billie Eilish', image: './imagem/album-hit-me.jpg' },
        { name: 'Fallen', artist: 'Evanescence', image: './imagem/evanescence.jpeg' },
        { name: 'Helena', artist: 'My Chemical Romance', image: './imagem/mychemacal.jpeg' },
        { name: 'Toxicity', artist: 'System of a Down', image: './imagem/System-of-a-down.jpg' },
        { name: 'Hybrid Theory', artist: 'Linkin Park', image: './imagem/linkinpark.jpeg' }
    ];

    const albumsContainer = document.querySelector('.albums'); 

    if (albumsContainer) {
        albumsData.forEach(album => {
            const albumElement = document.createElement('div'); 
            albumElement.classList.add('album'); 
            albumElement.innerHTML = `
                <img src="${album.image}" alt="${album.name}">
                <p>${album.name} - ${album.artist}</p>
            `;
            albumsContainer.appendChild(albumElement); 
        });
    }

