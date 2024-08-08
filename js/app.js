const menuBars = document.getElementById("hamburger");
const menuContent = document.getElementById("mobileMenu");
const lists = document.querySelectorAll("#mobileMenu ul li");
const barsIcon = document.getElementById("barsIcon");
const xIcon = document.getElementById("xIcon");

menuBars.addEventListener("click", () => {
  barsIcon.classList.toggle("toggleIcon");
  xIcon.classList.toggle("toggleIcon");
  menuContent.classList.toggle("activeMobileMenu");
  menuContent.style.zIndex = "-1";
});

lists.forEach((item) => {
  item.addEventListener("click", () => {
    barsIcon.classList.toggle("toggleIcon");
    xIcon.classList.toggle("toggleIcon");
    menuContent.classList.toggle("activeMobileMenu");
  });
});
// nav action ended

// service data for do loop to card
const serviceData = [
  {
    img: "./images/serviceMan.jpg",
    title: "Service",
    listNumber: "01",
    cardTitle: "ゼロセールス",
    descrTitle_Jpn: "ZERO SALES",
    cardDescr:
      "営業戦略の立案からマーケティング実行まで企業様の営業においての0→1を構築します。営業リソース0、営業データ0など企業様のありとあらゆる0をプロフェッショナルたちがご支援いたします。",
    descrDescrMobile:
      "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
  },
  {
    img: "./images/serviceMan2.jpg",
    title: "Service",
    listNumber: "02",
    cardTitle: "ゼロセールス",
    descrTitle_Jpn: "ZERO SALES",
    cardDescr:
      "営業戦略の立案からマーケティング実行まで企業様の営業においての0→1を構築します。営業リソース0、営業データ0など企業様のありとあらゆる0をプロフェッショナルたちがご支援いたします。",
    descrDescrMobile:
      "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/0cdc/90d7/34853c8aae0bbdc4dc6a860747924a37?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7s-PkqEVGgJkwbtJ77QjgdbnbwnNzyT9j7ZpGYo1E-lCoEUjOqJNXlGnSgF-7UcY41OJ-ADGmFxFpcJGclEGvMxP3qq6n4FhcK~xsMnzGyE5EhW2yivFKJkB5W2J6v4yai0iXxb8CAPAdf2HmLVFRgmcWcYJ-CRbUYc72BiXudBhuaGRo8rbDdk7ghJR36ZqFc~gqcL24rNCBUtP8SFGdsDy-ewBdagOM4KyQdY8oSyGSLKjEQHY1Ot0Hor1SswZ4BbKdDNNy8VRRKbZKHtVDN6siPCOygWfd3XW8wD~1pDbX-IwOt35KVzCghseQzFFi7CPPrDDn3yWnHrnJB4PA__",
    title: "Service",
    listNumber: "03",
    cardTitle: "ゼロセールス",
    descrTitle_Jpn: "ZERO SALES",
    cardDescr:
      "営業戦略の立案からマーケティング実行まで企業様の営業においての0→1を構築します。営業リソース0、営業データ0など企業様のありとあらゆる0をプロフェッショナルたちがご支援いたします。",
    descrDescrMobile:
      "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
  },
  {
    img: "./images/service3.jpg",
    title: "Service",
    listNumber: "04",
    cardTitle: "ゼロセールス",
    descrTitle_Jpn: "ZERO SALES",
    cardDescr:
      "営業戦略の立案からマーケティング実行まで企業様の営業においての0→1を構築します。営業リソース0、営業データ0など企業様のありとあらゆる0をプロフェッショナルたちがご支援いたします。",
    descrDescrMobile:
      "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
  },
];

const cardParent = document.getElementById("cards");

serviceData.map((item) => {
  cardParent.innerHTML += `
    <div class="card">
                <img class="cardImg" src="${item.img}" alt="service">
                <div class="cardDescrBox">
                  <div class="underImg flex">
                    <p class="cardNumber">${item.title} <span class="serviceCount">${item.listNumber}</span></p>
                    <p class="cardTitile">${item.cardTitle}</p>
                  </div>
                  <div class="cardDescription">
                    <p class="descrTitle_Jpn">${item.cardTitle}</p>
                    <p class="descrTitle_En">${item.descrTitle_Jpn}</p>
                    <p class="descrDescr">
                      ${item.cardDescr}
                    </p>
                    <p class="descrDescrMobile">${item.descrDescrMobile}</p>
                    <a href="#">
                      <button class="viewMoreBtn viewMoreBtnService">View More <i
                          class="fa-solid fa-arrow-right"></i></button>
                    </a>
                  </div>
                </div>
              </div>
  `;
});

// slider started
const memberSlideLeftArrow = document.getElementById("memberSlideLeftArrow");
const memberSlideRightArrow = document.getElementById("memberSlideRightArrow");
const slideLists = document.querySelectorAll(".slideContent__item");

let slideNm = 0;

const sliderEvent = (isNext) => {
  isNext == "prev" ? (slideNm = slideNm + 3) : (slideNm = slideNm - 3);
  switch (isNext) {

    case "prev":
      if (slideNm < 0) {
        for (const elem of slideLists) {
          elem.style.transform = `translateX(${slideNm}rem)`;
        }
      } else {
        for (const elem of slideLists) {
          elem.style.transform = `translateX(-${slideNm}rem)`;
        }
      }
      console.log(`translateX(-${slideNm}rem)`);
      break;
      
    case "next":
      if (slideNm < 0) {
        for (const elem of slideLists) {
          elem.style.transform = `translateX(${slideNm}rem)`;
        }
      } else {
        for (const elem of slideLists) {
          elem.style.transform = `translateX(-${slideNm}rem)`;
        }
      }
      console.log(`translateX(-${slideNm}rem)`);
      break;
    default:
      break;
  }
};

memberSlideLeftArrow.addEventListener("click", () => sliderEvent("prev"));
memberSlideRightArrow.addEventListener("click", () => sliderEvent("next"));
