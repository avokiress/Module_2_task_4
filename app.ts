const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

type commentList = Comment[]

const getData = (url: string): Promise<commentList> => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
}

getData(COMMENTS_URL)
  .then(data => {
    if (data && data.length > 0) {
      data.forEach(element => console.log(`ID: ${element.id}, Email: ${element.email}`))
    }
  })
  .catch(error => {
    /* show error message */
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */