function showSlideshow() {
   let images = $(".slideshow-image");
   let numberOfImages = images.length;

   if (numberOfImages == 0) {
      return;
   }

   hideAllImages(images, numberOfImages);
   imageIndex = getIndexOfNextImage(imageIndex);
   if (imageIndex > numberOfImages) {
      imageIndex = restartSlideshow();
   }

   showCurrentImage(images, imageIndex);
   // imagem muda a cada 4 segundos
   return setTimeout(showSlideshow, 4000);
}


function restartSlideshow() {
   return 0;
}


function disableSlideshow(slideshowId) {
   clearTimeout(slideshowId);
   return false;
}


function removeSlideshow() {
   $("section").remove(".slideshow");
}


function hideAllImages(images, numberOfImages) {
   for (let i = 0; i < numberOfImages; i++) {
      images.eq(i).css("display", "none");
   }
}


function getIndexOfNextImage(imageIndex) {
   return imageIndex += 1;
}


function showCurrentImage(images, imageIndex) {
   images.eq(imageIndex - 1).css("display", "block");
}


function getSearchContentOption() {
   let text = $(".search-content option:selected").val();
   return text;
}


function getSearchResultOption() {
   let text = $(".search-result option:selected").val();
   return text;
}


function getInputText() {
   return $(".search-text").val();
}

function getInputNumber() {
   return $(".search-number").val();
}


function getTitleText(element) {
   return element.text();
}


function getResults(response) {
   let result = {
      title: "",
      description: "",
      youtubeLink: "",
      wikipediaLink: "",
   };
   let results = [];

   response.Similar.Results.forEach(function(element) {
      result.title = element.Name;
      result.description = element.wTeaser;
      result.youtubeLink = element.yUrl;
      result.wikipediaLink = element.wUrl;
      results.push(JSON.parse(JSON.stringify(result)));
   });

   return results;
}


function getNumberOfResultsObtained(response) {
   return response.Similar.Results.length;
}


function createHtmlCards(results, searchResultType) {
   results.forEach(function(currentResult) {
      let card = new HtmlCard();
      card.setHtmlAttributes(currentResult);
      card.setHtmlText(currentResult.title, currentResult.description);
      card.createHtmlTag(searchResultType);
      card.addHtmlToPage();
   });
}


function destroyHtmlCards() {
   $(".cards").children(".card").remove();
}


function addFavoriteFromArray(favorites, title) {
   favorites.push(title);
   return favorites;
}


function removeFavoriteFromArray(favorites, title) {
   return favorites = $.grep(favorites, function(currentItem) {
      // retorna todos os ítens diferentes de title
      return currentItem != title;
   });
}


function createHtmlFavorite(title, searchResultType) {
   let favorite = new HtmlFavorite();
   favorite.setHtmlAttributes();
   favorite.setHtmlText(title);
   favorite.createHtmlTag(searchResultType);
   favorite.addHtmlToPage();
}


function destroyHtmlFavorite(element) {
   element.remove();
}


function getNumberOfFavorites() {
   let currentNumber = $(".header-number-favorites").text();
   return currentNumber;
}


function increaseNumberOfFavorites(currentNumber) {
   currentNumber = parseInt(currentNumber);
   return currentNumber += 1;
}


function decreaseNumberOfFavorites(currentNumber) {
   currentNumber = parseInt(currentNumber);
   return currentNumber -= 1;
}


function updateNumberOfFavoritesOnPage(number) {
   $(".header-number-favorites").text(number);
}


function showMessage(message, error) {
   alertify.set("notifier", "position", "top-center");
   alertify.notify(message, error);
}