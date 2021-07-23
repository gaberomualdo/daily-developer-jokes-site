---
---

const datepicker = new Datepicker(document.querySelector('.picker'), {
  minDate: "January 12, 2020",
  maxDate: "{{ site.posts.first.date | date: "%B %-d, %Y" }}"
});
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
setInterval(() => {
  const d = datepicker.getDate();
  if(!d) return;
  const m = d.getMonth();
  const y = d.getFullYear();
  const day = d.getDate();
  const month = months[m];
  const dayOfWeek = days[d.getDay()];
  let res = `${dayOfWeek}, ${month} ${day}, ${y}`;

  document.querySelector('.block a.btn').classList.add('disabled');
  document.querySelector('.block span.btn').classList.add('disabled');
  
  const dateIdx = dates.indexOf(res);
  if(dateIdx > -1) {
    res = "From " + res;
    if(document.querySelector('.block a.btn').classList.contains('disabled'))
      document.querySelector('.block a.btn').classList.remove('disabled');
    if(document.querySelector('.block a.btn span').innerHTML !== res) {
      document.querySelector('.block a.btn span').innerHTML = res;
      document.querySelector('.block a.btn').setAttribute('href', urls[dateIdx]);
    }
  } else {
    document.querySelector('.block span.btn').classList.remove('disabled');
  }
}, 150);