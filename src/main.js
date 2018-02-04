import './styles.css';
import './images/tech1.jpeg';
import './images/tech2.jpeg';
import './images/tech3.jpeg';
import './images/tech4.jpeg';
import './images/tech5.jpeg';
import './images/tech6.jpeg';
import './images/tech7.jpeg';
import './images/tech8.jpeg';

document.addEventListener("DOMContentLoaded", function(event) { 
  const imageList = document.querySelector('.list-of-images');
  const viewingImage = document.querySelector('.selected-image img');
  imageList.addEventListener('click', function(e) {
    if(e.target && e.target.nodeName === 'IMG') {
        viewingImage.src = e.target.src;
    }
  });
});
