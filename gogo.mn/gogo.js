const gogo = [
  {
    image_url: "./photo.jpg",
    title:
      "Газар хөдлөлтийн улмаас амиа алдсан хүний тоо нэмэгдэж магадгүй байна",
    description:
      "Даваа гаргийн шөнө Хятадын баруун хойд нутагт 5.9 магнитудын хүчтэй газар хөдлөлт болсон. Үүний улмаас амиа алдсан хүний тоо 127 хүрчээ.",
    share: 1,
    minute: "17 минутын өмнө",
  },
];

const root = document.getElementById("root");

function createElement(gogo) {
  const cardDiv = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardTitle = document.createElement("h1");
  const cardDesk = document.createElement("p");
  const cardShare = document.createElement("p");
  const cardMinute = document.createElement("p");

  cardDiv.setAttribute("class", "card");
  cardImg.setAttribute("src", gogo.image_url);
  cardTitle.setAttribute("class", "title");
  cardDesk.setAttribute("class", "desk");
  cardShare.setAttribute("class", "share");
  cardMinute.setAttribute("class", "minute");

  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardTitle);
  cardDiv.appendChild(cardDesk);
  cardDiv.appendChild(cardShare);
  cardDiv.appendChild(cardMinute);

  cardTitle.innerText = gogogo.title;
  cardDesk.innerText = gogogo.description;
  cardShare.innerText = gogogo.share;
  cardMinute.innerText = gogogo.minute;
  return cardDiv;
}
