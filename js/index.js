// Play sound when clicking drum pads.
$(".drum-pad").click(function () {
    console.log(this)
  $(this).find("audio").trigger("play");
  displayEffect($(this).attr("id").toUpperCase().split("-").join(" "))
  padPressed(this);
});

// Play sound when specific key is pressed.
$(document).keydown(function (e) {
  const audio = $(`#${e.key.toUpperCase()}`)
  audio.trigger("play");
  console.log($(`.drum-pad ${e.key.toLowerCase()}`))
  displayEffect($(`#${e.key.toUpperCase()}`).parent().attr("id").toUpperCase().split("-").join(" "))
  padPressed($(`.${e.key.toLowerCase()}`));
});

// Play drum pad effect when a drum pad is pressed.
function padPressed(padClass) {
  const currentClass = $(padClass).attr("class");
  console.log($(padClass).attr("class"));
  if (!currentClass.includes("pressed")) {
    $(padClass).addClass("pressed");
  }
  setTimeout(() => {
    $(padClass).removeClass("pressed");
  }, 100);
}

// Play display effect when a drum pad is pressed.
function displayEffect(text) {
  const dText = $('#display-text')
  dText.text(text)
  dText.stop(true, true)
  dText.animate({opacity: 0}, 50)
  dText.animate({opacity: 0.5}, 50)
  dText.animate({opacity: 0}, 50)
  dText.animate({opacity: 1}, 50)
}