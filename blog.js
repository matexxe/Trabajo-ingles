function showContent(id) {
    // Ocultar todas las publicaciones
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        post.style.display = 'none'; // Oculta todos los posts
        post.classList.remove('active'); // Elimina la clase active si está presente
    });

    const iframes = document.querySelectorAll('.post-frame');
    iframes.forEach(iframe => {
        // Cambia el src del iframe para detener el contenido
        const src = iframe.src;
        iframe.src = ''; // Elimina el src para detener el video
        iframe.src = src; // Restaura el src para permitir la reproducción de nuevo
    });
    const audios = document.querySelectorAll('.post-audio');
    audios.forEach(audio => {
        audio.pause(); // Pausa el audio
        audio.currentTime = 0; // Opcional: reinicia el audio al principio
    });

    // Mostrar la publicación activa
    const activePost = document.getElementById(id);
    if (activePost) {
        activePost.style.display = 'block'; // Muestra el post correspondiente
        activePost.classList.add('active'); // Añade la clase active para aplicar estilos
        activePost.scrollIntoView({
            behavior: 'smooth', // Animación suave
            block: 'start' // Asegura que el post quede visible desde la parte superior
        });
    }
}
