function rotateText(el, textGroup) {
  setOpacity(el, 0);
  var t = rotateText.texts[textGroup];
  var t = t[Math.floor(Math.random() * (t.length - 1))];
  el.innerHTML = t;
  unfadeText(el, textGroup);
}
rotateText.texts = {
  quotes: [
    "...The big brown fox jumped over the tall fence",
    "...The wind is blowing cold snow across the dark black road",
    "...Fall has many colors and black is not one of them",
    "...the blue bird lives in the big red barn",
    "...Mr. Grant really believes that the Bull’s skills, which are widespread",
    "...Sixth quotation"
  ],
  authors: [
    "Paul is able to quickly understand customers’ needs and concerns and focus directly on what is most important to them. Paul is very personable, optimistic, and high-energy, and people respond to him with engagement and enthusiasm. Paul has also coached me be a better manager and consultant, focus on the important things, and let the little things go.",
    "I recommend Paul for a wide range of development process and technical consulting skills, and his very practical and business focused approach.",
    "I recommend Paul without any reservations. As an architect he takes a business-first approach and then makes technical tradeoffs based on business needs. With this guiding principle, Paul keeps projects moving forward. Paul is also one of the best communicators I have met.",
    "Paul was a highly effective trainer who was able to distill a difficult subject into a compressed time period. What's more, he continued to help and mentor me over subsequent months in DDD theory and practice, pointing me to invaluable materials. His training abilities come with my highest recommendation.",
    "The interaction with the instructor (who was superb!) along with classmates from a variety of development backgrounds made for one of the best learning experiences of my life."
  ],
  restaurants: [
    "Burger King",
    "McDonalds",
    "Taco Bell",
    "Wendy's"
  ]
};

function setOpacity(el, value) {
  el.style.opacity = value / 100;
  el.style.filter = "alpha(opacity=" + value + ")";
}

function unfadeText(el, tg) {
  var v = el.style.opacity * 100 + 1;
  if(v > 100) {
    setOpacity(el, 100);
    setTimeout(bundleFunction(null, fadeText, [el, tg]), 2000);
    return;
  }
  setOpacity(el, v);
  setTimeout(bundleFunction(null, unfadeText, [el, tg]), 10);
}

function fadeText(el, tg) {
  var v = el.style.opacity * 100 - 1;
  if(v < 0) {
    setOpacity(el, 0);
    rotateText(el, tg);
    //or... setTimeout(bundleFunction(null, rotateText, [el, tg]), NUMBER);
    return;
  }
  setOpacity(el, v);
  setTimeout(bundleFunction(null, fadeText, [el, tg]), 50);
}

function bundleFunction(context, func, args) {
  context = context || null;
  if(typeof func == "string" && context)
    func = context[func];
  if(!args)
    args = [];
  else if(!(args instanceof Array))
    args = [args];
  return function() {
    return func.apply(context, args);
  };
}