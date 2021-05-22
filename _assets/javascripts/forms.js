const TRIPETTO_TOKEN = {
  hire: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQktqeEluQ0xvYzh0VVdMQzRPQlNQNlBqOE5SaEVNVHlSYzdtd3NQVVp5TT0iLCJkZWZpbml0aW9uIjoiSGwvVEdVQVExYTNhRkRpQTFXanF3ODlyRTRnRHc4MVk2SEp5YXBOSlAyYz0iLCJ0eXBlIjoiY29sbGVjdCJ9.f0qdVyLRluLxDtMkgwyohh_JpmOMSQKwnUGmm7SOz9g',
  sub: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQktqeEluQ0xvYzh0VVdMQzRPQlNQNlBqOE5SaEVNVHlSYzdtd3NQVVp5TT0iLCJkZWZpbml0aW9uIjoiWmJCdllkOXFUbnZaYWQvU3hMSStGenZRZXFZNks2OTdFSVdlWWtualpHOD0iLCJ0eXBlIjoiY29sbGVjdCJ9.Erf5IgQmTcyc-EN0d1GmceX_TQG_fJCYKBXevCD1Fu0'
}

function setAnalyticsEvent (event) {
  gtag('event', event, {
    'event_category': 'section_view',
    'event_label': event
  });
}

function fetchForm (type, element) {
  var tripetto = TripettoServices.init({ token: TRIPETTO_TOKEN[type] });

  var options = {
      element,
      definition: tripetto.definition,
      styles: tripetto.styles,
      l10n: tripetto.l10n,
      locale: tripetto.locale,
      translations: tripetto.translations,
      attachments: tripetto.attachments,
      onSubmit: tripetto.onSubmit
  }

  TripettoClassic.run(options);
}

function showForm (type) {
  var holder = document.getElementById(`${type}-frame`);
  fetchForm(type, holder);

  document.getElementById(`${type}-box`).style.display = 'block';

  setAnalyticsEvent(`open_${type}_form`);
}

function hideForm (type) {
  document.getElementById(`${type}-box`).style.display = 'none';
}
