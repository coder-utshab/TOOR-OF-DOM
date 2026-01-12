//24-7 NodeList, htmlcollection,
// parentNode, childnodes, createElement


const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightgray';

} 


const placescontainer = document.getElementById('places-container');
placescontainer.classList.add('text-center');
placescontainer.classList.remove('large-text')
