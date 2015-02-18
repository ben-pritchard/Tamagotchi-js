$(document).ready(function() {

  var newTamagotchi = { food: 100, sleep: 100, activity: 100, isDead: function() {
    if ((this.food === 0) || (this.sleep === 0) || (this.activity === 0)) {
      return true;
    } else {
      return false;
    }
  } }

  var counter = setInterval(timer, 100);

  $("#add-food").click(function() {
    newTamagotchi.food += 10;
  });

  $("#add-sleep").click(function() {
    newTamagotchi.sleep += 10;
  });

  $("#add-activity").click(function() {
    newTamagotchi.activity += 10;
  });

  function timer()
  {
    newTamagotchi.food = newTamagotchi.food - 1;
    newTamagotchi.sleep = newTamagotchi.sleep - 1;
    newTamagotchi.activity = newTamagotchi.activity - 1;

    if (newTamagotchi.isDead() === true)
    {
      clearInterval(counter);
      $('#food').css('width', newTamagotchi.food + "%");
      $('#sleep').css('width', newTamagotchi.sleep + "%");
      $('#activity').css('width', newTamagotchi.activity + "%");
      alert("Your Tamagotchi is DEAD!")
      return;
    }

    $('#food').css('width', newTamagotchi.food + "%");
    $('#sleep').css('width', newTamagotchi.sleep + "%");
    $('#activity').css('width', newTamagotchi.activity + "%");
  }

});
