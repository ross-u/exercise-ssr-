# Exercise - SSR

<br>

### Getting started

Clone the repository.

```bash
# Clone the repository
git clone https://github.com/ross-u/exercise-ssr-.git

# Enter the folder
cd exercise-ssr-
```

Install the packages:

```bash
npm install
```


<br>

In the `views` folder` create a new View/Template file named `About.jsx` used to render the About page:

- Create a new route for `GET` request with the endpoint `/about`:

- It should `res.render()` a newly created view file, from `views/About.jsx`.
- In the newly created template file `About.jsx`:
  - Create an `h1` with your name.
  - Create an `h2` with your favourite book/movie/serie quote.
  - Add an image from [giphy](https://giphy.com/) that you like.
