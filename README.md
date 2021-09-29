# React Coding Challenge 2

## Submission Instructions
1. Fork this repository to your GitHub account.
2. Send your GitHub username to Dave Rodriguez to request write-access to this repository. You'll be provided access to a branch named `challenge-response/<your-name>`.
3. Review the specification below and submit any questions by email to Dave Rodriguez, along with a written solution outline for how you plan to structure the components needed to build the functionality.
4. After any questions have been answered, code your solution and submit a pull request from your forked version back to the `hansoninc/react-coding-challenge-2/<your-branch-name>` branch with Dave Rodriguez (`@daverodriguez`) and Mike Louviere (`@michaellouviere`) as reviewers.

---------

## Specification

### Background
This application will introduce creating a React app from scratch for the first time, setting up routing using `react-router-dom`,  and context management using the React `useContext()` hook. It will build on the previous challenge's lessons in breaking down and implementing a component hierarchy, fetching data, managing state, and developing components that respond to external changes.

We'll be building an application to browse pet listings from Petfinder.com. This application will support the following views and elements (see requirements below):
1. A listing of adoptable pets, with quick information cards for each pet
2. Filtering the listing by type of animal (Cats, Dogs, Iguanas, Pot-bellied Pigs, etc.)
3. A detail view, with a pet's full details visible, and the ability to add a pet to your wishlist
4. A wishlist view that displays all pets currently added to the wishlist, and the ability to remove a pet

#### Wireframe
See the whiteboard wireframe for this application:
![Wireframe](/assets/wireframe.jpg)

### Requirements

#### Overall Application
1. The application must implement the following routes:
    - `/list` (default route)
    - `/list/:typeName` (same component as `/list` but with animal type filtering applied)
    - `/detail/:petId`
2. Any other route should map to a "not found" route
3. The application must support a persistent, global header with a logo or tagline and a persistent "Wishlist" component (see below)

#### List View
1. List view should query the Petfinder API "Get Animals" method and return the 50 most recently adoptable animals for a given location (choose any ZIP code you want)
2. Each animal should be displayed as a card with the following information:
    1. A photo of the animal
    2. The animal's name, type (e.g. Dog, Cat), breed (primary breed, mixed or unknown), age, gender, and size
    3. The animal's adoption status (e.g. "adoptable")
3. Each animal's card should support a "View Details" link that will load the `/detail/:petId` route, where `petId` is the animal's ID
4. Each animal's card should support an "Add to Wishlist" toggle that will add or remove the animal's ID from the global wishlist. Wishlist should be stored as a React context variable.
5. If an animal is not in the current user's wishlist, the toggle button should read, "Add to Wishlist". If an animal is in the wishlist, the button should read, "Remove from Wishlist".
6. The "Add to Wishlist" toggle button state on all visible cards should remain in sync with the contents of the wishlist at all times.
7. The List view should include a component to filter the animal list by type. The list of types should be dynamic and should be populated by an API call to the Petfinder "Get Animal Types" method.
8. Clicking on an animal type should change the current route to `/list:typeName`. This should trigger a new call to the Petfinder API "Get Animals" method that applies the `type` query parameter and reloads the list.

#### Detail View
1. TODO

#### Wishlist Component
1. TODO

### Assumptions and Implementation Notes
1. Start by going to the Petfinder API and requesting a key: https://www.petfinder.com/developers/signup/
2. Store your Petfinder API key and secret in a local .env file as `API_KEY` and `API_SECRET`. You'll use these later when configuring your Petfinder SDK client. ***Do not check your .env file into Git!***
3. Scaffold yourself a new application using the Typescript template
4. Install react-dom-router and implement the routes specified above

### References

1. Create-react-app: https://github.com/facebook/create-react-app
2. Setting up CRA with TypeScript support: https://create-react-app.dev/docs/adding-typescript/
3. React-router-dom Quick start: https://reactrouter.com/web/guides/quick-start
4. React-bootstrap: https://react-bootstrap.github.io/getting-started/introduction
5. Petfinder API docs: https://www.petfinder.com/developers/v2/docs/#introduction
6. Petfinder API JS SDK: https://github.com/petfinder-com/petfinder-js-sdk
7. React App Context: https://reactjs.org/docs/context.html
8. React useContext hook: https://reactjs.org/docs/hooks-reference.html#usecontext
