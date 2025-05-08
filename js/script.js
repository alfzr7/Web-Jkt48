// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Sample Member Data
const members = [
    { name: 'Feni', gen: 'Gen 3', img: 'Feni.jpg' },
    { name: 'Gracia', gen: 'Gen 3', img: 'Gracia.jpg' },
    { name: 'Freya', gen: 'Gen 7', img: 'Freya.jpg' },
    { name: 'Olla' , gen: 'Gen 7', img: 'Olla.jpg' },
    { name: 'Christy', gen: 'Gen 7', img: 'Christy.jpg' },
    { name: 'Eli', gen: 'Gen 7', img: 'Eli.jpg'},
    { name: 'Jessi', gen: 'Gen 7', img: 'Jessi.jpg' },
    { name: 'Muthe', gen: 'Gen 7', img: 'Muthe.jpg'}
];

// Display Members
const memberGrid = document.querySelector('.member-grid');

members.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.className = 'member-card';
    memberCard.innerHTML = `
        <div class="member-img">
            <img src="images/members/${member.img}" alt="${member.name}">
        </div>
        <div class="member-info">
            <h3>${member.name}</h3>
            <p>${member.gen}</p>
        </div>
    `;
    memberGrid.appendChild(memberCard);
});

window.addEventListener('load', function() {
    document.querySelector('.loader').classList.add('hidden');
});