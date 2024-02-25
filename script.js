const API_URL = "https://api.artic.edu/api/v1/artworks";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const artworks = data.data;
        const gallery = document.querySelector('.gallery');
        
        artworks.forEach(artwork => {
            const image = document.createElement('img');
            const imageUrl = artwork.image_id ? `./images/${artwork.image_id}.jpg` : 'placeholder.jpg'; 
            image.src = imageUrl;
            image.alt = artwork.title;
            image.addEventListener('click', () => {
                alert(`Title: ${artwork.title}\nArtist: ${artwork.artist_display}\nDate: ${artwork.date_display}`);
            });
            gallery.appendChild(image);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });