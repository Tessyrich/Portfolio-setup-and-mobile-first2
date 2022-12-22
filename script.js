const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const popContainer = document.getElementById('pop-container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuBar.classList.toggle('show-navbar');
});

document.querySelectorAll('.head-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menuBar.classList.remove('show-navbar');
}));

function ClosePopUp() {
  popContainer.style.display = 'none';
}
const dataCards = [
  {
    id: 0,
    IMGURL: './images/imgnew/SnapshootPortfolio.png',
    title: 'Keeping track of hundreds of components',
    titlesmall: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    tecnologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://tessyrich.github.io/Portfolio-setup-and-mobile-first2/',
    LinkToSource: 'https://github.com/Tessyrich/Portfolio-Setup-and-mobile-first2',
  },
  {
    id: 1,
    IMGURL: './images/imgnew/ImgPlaceholder(2).png',
    title: 'Keeping track of hundreds of components',
    titlesmall: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    tecnologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://tessyrich.github.io/Portfolio-setup-and-mobile-first2/',
    LinkToSource: 'https://github.com/Tessyrich/Portfolio-Setup-and-mobile-first2',
  },
  {
    id: 2,
    IMGURL: './images/imgnew/SnapshootPortfolio.png',
    title: 'Keeping track of hundreds of components',
    titlesmall: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    tecnologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://tessyrich.github.io/Portfolio-setup-and-mobile-first2/',
    LinkToSource: 'https://github.com/Tessyrich/Portfolio-Setup-and-mobile-first2',
  },
  {
    id: 3,
    IMGURL: './images/imgnew/ImgPlaceholder(2).png',
    title: 'Keeping track of hundreds of components',
    titlesmall: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    tecnologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://tessyrich.github.io/Portfolio-setup-and-mobile-first2/',
    LinkToSource: 'https://github.com/Tessyrich/Portfolio-Setup-and-mobile-first2',
  },
  {
    id: 4,
    IMGURL: './images/imgnew/SnapshootPortfolio.png',
    title: 'Keeping track of hundreds of components',
    titlesmall: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    tecnologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://tessyrich.github.io/Portfolio-setup-and-mobile-first2/',
    LinkToSource: 'https://github.com/Tessyrich/Portfolio-Setup-and-mobile-first2',
  },
  {
    id: 5,
    IMGURL: './images/imgnew/SnapshootPortfolio.png',
    title: 'Keeping track of hundreds of components',
    titlesmall: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    tecnologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://tessyrich.github.io/Portfolio-setup-and-mobile-first2/',
    ILinkToSource: 'https://github.com/Tessyrich/Portfolio-Setup-and-mobile-first2',
  },
];

const arrayOnclickBtn = document.querySelectorAll('.see1');

const renderCards = (indx) => {
  dataCards.map((card, cardIndx) => {
    if (cardIndx === indx) {
      document.querySelector('.pop-up').innerHTML = `
          <div class="mult">
          <div class="ham va">
            <h2 class="post post-small">${card.titlesmall}</h2>
            <h2 class="post post-big">${card.title}</h2>
            <span class="close-pop" id="close-pop" onclick='ClosePopUp()'>&times;</span>
          </div>
          <ul class="tag-main tagmain-details">
            <li class="tag2 tagmain3"><a href="#">${card.tecnologies.tech1}</a></li>
            <li class="tag3 tagmain3"><a href="#">${card.tecnologies.tech2}</a></li>
            <li class="tag4 tagmain3"><a href="#">${card.tecnologies.tech3}</a></li>
          </ul>
        </div>
        <div class="details-main">
          <div class="details-img"><img src=${card.IMGURL} class="det-img"></div>
          <div class="details-text">
            <div class="text">
              <p class="support sub-details">${card.description}</p>
            </div>
            <div class="but-details">
              <section class="buttom buttom-first">
                <a href=${card.LinkToLive} class="see">See live</a>
                <img src="./images/icon-see live.png" alt="image icon see live">
              </section>
              <section class="buttom buttom-sec">
                <a href=${card.LinkToSource} class="see">See source</a>
                <img src="./images/Icon -GitHub.png" alt=" image icon Twitter">
              </section>
            </div>
          </div>
          </div>
          `;
    }
    return dataCards;
  });
};

for (let i = 0; i < arrayOnclickBtn.length; i += 1) {
  arrayOnclickBtn[i].addEventListener('click', () => {
    renderCards(i);
    ClosePopUp();
    popContainer.style.display = 'block';
  });
}

// FORM VALIDATION
const formVal = document.querySelector('.form');
const emailEl = document.querySelector('#email');

const errMsgEmail = document.querySelector('small');
formVal.addEventListener('submit', (e) => {
  e.preventDefault();
  const regex = /[A-Z]/;


