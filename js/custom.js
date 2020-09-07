// Root Card Element
const card = $(".card");

let storeTimeOut;

// Width of browsers
const windowWidth = $(window).width();
const windowHeight = $(window).height();

// Number of card area and count of card
let cardCount = 1;
let cardArea = 512;

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Set Card postion dynamically
const setCardPosition = (element, cardArea) => {
  const marginLeft = Math.floor(Math.random() * (windowWidth - cardArea));
  const marginTop = Math.floor(Math.random() * (windowHeight - cardArea));
  element.css({
    marginLeft: marginLeft + "px",
    marginTop: marginTop + "px",
    height: cardArea + "px",
    width: cardArea + "px",
    position: "absolute",
  });
};

// Color card  Random
const setCardColors = (element) => {
  element.css("background-color", getRandomColor());
};

// First iteration
setCardPosition(card, cardArea);
setCardColors(card);

const addCardToMainContainer = (count) => {
  while (count !== 0) {
    $("#main-container").append("<div class='card'></div>");
    count = count - 1;
  }
};

const addCrazyMode = () => {
  storeTimeOut = setInterval(() => {
    $(".card").each(function () {
      setCardColors($(this));
      setCardPosition($(this), cardArea);
      $(this).click(firstCardActivation);
    });
  }, 2000);
};

const removeCrazyMode = () => {
  clearTimeout(storeTimeOut);
};

const firstCardActivation = () => {
  addCardToMainContainer(3 * cardCount);
  cardCount *= 4;
  cardArea /= 4;
  alert("The Card clicked");

  $(".card").each(function () {
    setCardColors($(this));
    setCardPosition($(this), cardArea);
    $(this).click(firstCardActivation);
  });
};

card.click(firstCardActivation);
