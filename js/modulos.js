document.addEventListener('DOMContentLoaded', function() {
    let source = (document.title == "Indice" ? '"img/pokemon-2.png"' : '"../img/pokemon-2.png"')
    let link = (document.title == "Indice" ? '' : '../')

    const header = `<img src=${source} alt="Logo"><nav><i class="fa-solid fa-bars"></i><ul><li><a href="${link}index.html">Equipo</a></li><li><a href="${link}html/a.html">Bolsa</a></li><li><a href="${link}html/b.html">Perfil</a></li></ul></nav>`;
    const footer = '<p>Jesus Baute y Patricio Muras</p><p>© 2025 Liga Pokémon</p>';
    document.querySelector('header').innerHTML = header;
    document.querySelector('footer').innerHTML = footer;
});