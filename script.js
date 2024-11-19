document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    
    // Lista de imágenes (deben estar en la carpeta 'images')
    const images = [
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg'
        // Agrega más imágenes según las que tengas en la carpeta 'images'
    ];
    
    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Imagen de la galería';
        img.onclick = () => openImageInFullScreen(src);
        gallery.appendChild(img);
    });
});

// Abrir imagen en pantalla completa
function openImageInFullScreen(url) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    const img = document.createElement('img');
    img.src = url;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    overlay.onclick = () => overlay.remove();
}
