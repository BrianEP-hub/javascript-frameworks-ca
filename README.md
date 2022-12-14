# JavaScript Frameworks Course Assignment
## Languages Used
![My Skills](https://skillicons.dev/icons?i=react,next,css,materialui,)

## Getting Started
After initial download of project run:

```bash
npm install
```

Run the development server: 

```bash
npm run dev
#or
yarn dev
```
[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
## Available Scripts

### `npm run start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view in browser.

Page will reload on save.\
You will also see any lint errors in the console.

### `npm run lint`

Runs lint check throughout project code for errors

### `npm run build`

Generates an optimized version of your application.\
This standard output includes:
- HTML files for pages using `getStaticProps` or Automatic Static Optimization
- CSS files for global styles or for individually scoped styles
- JavaScript for pre-rendering dynamic content from the Next.js server
- JavaScript for interactivity on the clientside through React

The output is generated inside the `.next` folder

All JavaScript code inside `.next` has been **compiled** and browser bundles have been\
**minified** to help achieve best performance and support modern browsers

## JS Frameworks Course Assignment

### Brief

Create either a new React or Next.js app in this repo.

For the login functionality, use either a Wordpress installation with the <a href="https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/" target="_blank">JWT plugin from Module 3</a> installed, or a Strapi installation. Do not add either of these to your repo. Your API should remain a separate project. The markers will use their own installations when marking.

You can use either a REST or GraphQL API for the API calls.

---

### Level 1

Your app should have the following paths:

- "/"
- "/detail/:param"
- "/contact"
- "/login"
- "/admin"

The admin path won't appear in your navigation.

Use reusable components where appropriate and pay attention to how the components are arranged.

#### Home

Find an API that returns at least:

- an array of items
- a single item retrieved by a parameter (id, name, slug, etc)

If you are using Next you can also hard-code json and return it from API routes created in `pages/api/*`.

You can use your own Wordpress or Strapi or any other API that you have created for these calls but it must be publically hosted - it must not be running on your localhost.

Display at least 2 properties from each result.

Each result should link to the detail page, passing a parameter in the URL.

#### Detail

Retrieve the parameter from the URL and use it in an API call to fetch one item.

Display at least 3 properties from the item.

#### Contact

Create a form with the following inputs and validation:

- First name - required, minimum 3 characters
- Last name - required, minimum 4 characters
- Email - required, must be in a valid email format
- Subject - required, this must be a select box with at least 2 options
- Message - required, minimum 10 characters.

#### Login

Create a form with username/email and password fields. The inputs should have the necessary validation for a login form (not a registration form).

The form should make a login request to either a Wordpress API with the JWT plugin installed or a Strapi API. If the login is successful redirect the user to the admin route.

If the login is unsuccessful display a message above the form.

#### Admin

This page will simply display an "Admin" heading.

---

### Level 2

Add a favourite button/icon component to each result on your home page. Clicking this button will toggle the result in/out of a favourites array.

Add a "/favourites" path to your routes. This page will display all the items currently in the favourites array.