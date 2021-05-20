// Toggle Hire Form
function showHireForm() {
  var formBox = document.getElementById("form-box");
  var formEl = document.getElementById("hire-form");

  var tripetto = TripettoServices.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQktqeEluQ0xvYzh0VVdMQzRPQlNQNlBqOE5SaEVNVHlSYzdtd3NQVVp5TT0iLCJkZWZpbml0aW9uIjoiSGwvVEdVQVExYTNhRkRpQTFXanF3ODlyRTRnRHc4MVk2SEp5YXBOSlAyYz0iLCJ0eXBlIjoiY29sbGVjdCJ9.f0qdVyLRluLxDtMkgwyohh_JpmOMSQKwnUGmm7SOz9g" });

  TripettoAutoscroll.run({
      element: formEl,
      definition: tripetto.definition,
      styles: tripetto.styles,
      l10n: tripetto.l10n,
      locale: tripetto.locale,
      translations: tripetto.translations,
      attachments: tripetto.attachments,
      onSubmit: tripetto.onSubmit
  });

  formBox.style.display = "block"
  gtag('event', 'open_hire_form', {
    'event_category': 'section_view',
    'event_label': 'view_hire_form'
  });
}

function hideHireForm() {
  var formBox = document.getElementById("form-box");
  formBox.style.display = "none"
  gtag('event', 'close_hire_form', {
    'event_category': 'section_view',
    'event_label': 'close_hire_form'
  });
}
