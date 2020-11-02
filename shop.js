

var shop = [
    {
      image: './img/1.png',
      title: 'Dog Food',
      price: 9.99,
      description : 'Pedigree dog food for adult dogs, do not give to puppies',
      amount: 5
    },
    {
      image: './img/2.png',
      title: 'Leash',
      price: 5.49,
      description : 'Leash for dogs, long lasting and the perfect length',
      amount: 5
    },
    {
      image: 'img/3.png',
      title: 'Tennis ball',
      price: 3.49,
      description : 'Green tennis ball to play with your friends (and dogs)',
      amount: 5
    },
    {
      image: 'img/4.png',
      title: 'Dog Sweater',
      price: 15.99,
      description : 'Christmas green dog sweater, dont let them be cold',
      amount: 5
    },
    {
      image: 'img/5.png',
      title: 'Turtle Statue',
      price: 29.99,
      description : 'Totally not a real turtle I used because I ran out of images',
      amount: 5
    },
    {
      image: 'img/6.png',
      title: 'Pet bed',
      price: 19.99,
      description : 'Dont know what to say about this one, buy it please adsadsadkskadsk',
      amount: 5
    },
    {
      image: 'img/7.png',
      title: 'Cat Yarn',
      price: 1.99,
      description : 'Cat yarn, not much to it',
      amount: 5
    },
    {
      image: 'img/8.png',
      title: 'Cat toy',
      price: 7.99,
      description : 'Cat toy shaped like a mouse, requires batteries',
      amount: 5
    },
    {
      image: 'img/9.png',
      title: 'Dog toy',
      price: 11.99,
      description : 'It doesnt have that annoying squishy sound!',
      amount: 5
    }
    
  
    
    ]
    
    var postHTML = '<h2 class="article-title">' + "Your Items" + '</h5>';
  
  
    for (var i=0; i < shop.length; i++){
        var image = '<img class="article-image" src="' + shop[i].image + '"/>';
        var numItems = '<p style="text-align: right">x' + shop[i].amount + '</p></span>';
        var heading = '<h3 class="article-title2">' + shop[i].title + '</h3>';
        var headingPrice = '<h3 class="article-title2">' + shop[i].title + '</h3>' + '<p class="article-price"> $' + shop[i].price + '</p></span>';
        var description = '<div class="article-description"><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> Buy Item</button></div></div>';
        var concatThis = '<div class="border-test"'+ numItems + image + headingPrice + description + '</div>';
        postHTML = postHTML + concatThis;
    }
    document.getElementById('market').innerHTML = postHTML