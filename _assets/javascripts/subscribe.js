function setAnalyticsEvent (event) {
  gtag('event', event, {
    'event_category': 'section_view',
    'event_label': event
  });
}

function goToSubscribeForm () {
  var formEl = document.getElementById('subscribe-form');
  var blurEl = document.getElementById('out-of-focus');

  formEl.scrollIntoView(true);
  blurEl.style.visibility = 'visible';
  blurEl.style.opacity = '0.9';

  document.getElementById('email').focus();

  setTimeout(function () {
    blurEl.style.visibility = 'hidden';
    blurEl.style.opacity = '0';
  }, 5000);

  setAnalyticsEvent('scroll_to_subscribe');
}
