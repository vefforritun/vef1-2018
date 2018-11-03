const url = 'http://apis.is/concerts';

fetch(url)
  .then((result) => {
    if (!result.ok) {
      throw new Error('Non 200 status');
    }
    return result.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
