---
---

function pad(str, max) {
  str = str.toString();
  return str.length < max ? pad('0' + str, max) : str;
}

(() => {
  // nav
  document.querySelector('.nav .button:nth-child(5)').setAttribute('href', urls[Math.floor(Math.random() * urls.length)]);
  if (window.location.pathname === '/') {
    document.querySelector('.nav .button:first-child').classList.add('active');
  } else if (window.location.pathname.endsWith('{{ site.posts.first.url }}')) {
    document.querySelector('.nav .button:nth-child(2)').classList.add('active');
  } else if (window.location.pathname.endsWith('find.html')) {
    document.querySelector('.nav .button:nth-child(3)').classList.add('active');
  }

  // block fixes
  Array.from(document.querySelectorAll('div.block p')).forEach((element) => {
    if (!element.querySelector('img')) {
      element.innerHTML = element.innerHTML.split('_').join('');

      const startsWithsToIgnore = ['Have a joke idea for a future post?', 'For more jokes, and to submit your own joke']
      startsWithsToIgnore.forEach((e) => {
        if (element.innerText.startsWith(e)) element.outerHTML = '';
      })
    }
  });
  Array.from(document.querySelectorAll('div.block p em')).forEach((element) => {
    if (element.innerText.includes('This joke comes from')) {
      const formatDate = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1, 2)}-${pad(d.getDate(), 2)}`;
      const contributorURL = element.querySelector('a').getAttribute('href');
      let jokeURL = element.parentElement.parentElement.getAttribute('data-url');
      let viewJoke = true;
      if (!jokeURL) {
        jokeURL = document.querySelector('.nav .button:nth-child(5)').getAttribute('href');
        viewJoke = false;
      }
      const dAsStr = element.parentElement.parentElement.getAttribute('data-date');
      element.innerHTML = `<p><a href='${contributorURL}'>Joke Contributor</a><a href='https://github.com/dailydeveloperjokes/dailydeveloperjokes.github.io/blob/master/_posts/${formatDate(
        new Date(dAsStr)
      )}-joke.markdown'>View On GitHub</a></p><a class='btn' href='${jokeURL}'>${viewJoke ? 'View Joke' : 'Random Joke'} &nbsp;&rarr;<a>`;
    }
  });
})();
