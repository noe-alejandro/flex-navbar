const App = document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    const anchorTag = document.querySelector('.toggle-anchor');
    const flexNavUL = document.querySelector('.flex-nav ul');

    anchorTag.addEventListener('click', (e) => {
        flexNavUL.classList.toggle('open');
    });
});

export default App;
