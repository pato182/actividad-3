document.addEventListener('DOMContentLoaded', function() {
    const header = `<img src="/img/pokemon-2.png" alt="Logo"><nav><i class="fa-solid fa-bars"></i><ul><li><a href="/index.html">Equipo</a></li><li><a href="/a.html">Bolsa</a></li><li><a href="/b.html">Perfil</a></li></ul></nav>`;
    const footer = '<p>Jesus Baute y Patricio Muras</p><p>© 2025 Liga Pokémon</p>';
    document.querySelector('header').innerHTML = header;
    document.querySelector('footer').innerHTML = footer;
});