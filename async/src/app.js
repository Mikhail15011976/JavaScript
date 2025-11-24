import fetch from 'node-fetch';

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

(async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';

  try {
    const data = await fetchData(url);
    console.log('Полученные данные:', data);
  } catch (error) {
    console.error('Произошла ошибка:', error.message);
  }
})();
