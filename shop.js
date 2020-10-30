

var shop = [
    {
      title: 'Dog Food',
      image: './img/1.png',
      price: 9.99,
      description : 'Pedigree dog food for adult dogs, do not give to puppies '
    },
    {
      title: 'Leash',
      image: './img/2.png',
      price: 5.49,
      description : 'Leash for dogs, long lasting and the perfect length'
    },
    {
      title: 'Tennis ball',
      image: 'img/3.png',
      price: 3.49,
      description : 'Green tennis ball to play with your friends (and dogs)'
    },
    {
      title: 'Dog Sweater',
      image: 'img/4.png',
      price: 15.99,
      description : 'Christmas green dog sweater, dont let them be cold'
    },
    {
      title: 'Turtle Statue',
      image: 'img/5.png',
      price: 29.99,
      description : 'Totally not a real turtle I used because I ran out of images'
    },
    {
      title: 'Pet bed',
      image: 'img/6.png',
      price: 19.99,
      description : 'Dont know what to say about this one, buy it please adsadsadkskadsk'
    }
    
  
    
    ]
    
    var postHTML = "Your Items "
  
  
    for (var i=0; i < 6; i++){
        var heading = '<div class="article-title ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '"/>'
        var price = '<p class="article-price"> $' + shop[i].price + '</p></span>'
        var description = '<div class="article-description"><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> Buy Item</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML