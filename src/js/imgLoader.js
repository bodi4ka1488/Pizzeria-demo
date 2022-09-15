function preloadImages(sources, callback) {
    let counter = 0;

    function onLoad() {
      counter++;
      if (counter == sources.length) callback();
    }

    for(let source of sources) {
      let div = document.createElement('div');
      div.onload = div.onerror = onLoad;

      div.style.background = source;

    }
  }
 
  function loaded() {
    alert("Изображения загружены")
  }

  let sources = [
      "url(../images/Gin.jpg)",
      "url(../images/Viski.jpg)",
      "url(../images/Rum.jpg)",
      "url(../images/BigMac.jpg)",
      "url(../images/bigTasty.jpg)",
      "url(../images/Cheaseburger.jpg)",
      
  ]
  preloadImages(sources, loaded)