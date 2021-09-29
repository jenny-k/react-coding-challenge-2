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
4. A wishlist view that displays all pets currently added to the wishlist, and allows the user to remove pets from the wishlist

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
2. Each pet should be displayed as a card with the following information:
    1. A photo of the pet 
    2. The pet's name, type (e.g. Dog, Cat), breed (primary breed, mixed or unknown), age, gender, and size
    3. The pet's adoption status (e.g. "adoptable")
3. Each animal's card should support a "View Details" link that will load the `/detail/:petId` route, where `petId` is the animal's ID
4. Each animal's card should support an "Add to Wishlist" toggle that will add or remove the animal's ID from the global wishlist. Wishlist should be stored as a React context variable.
5. If an animal is not in the current user's wishlist, the toggle button should read, "Add to Wishlist". If an animal is in the wishlist, the button should read, "Remove from Wishlist".
6. The "Add to Wishlist" toggle button state on all visible cards should remain in sync with the contents of the wishlist at all times.
7. The List view should include a component to filter the animal list by type. The list of types should be dynamic and should be populated by an API call to the Petfinder "Get Animal Types" method.
8. Clicking on an animal type should change the current route to `/list:typeName`. This should trigger a new call to the Petfinder API "Get Animals" method that applies the `type` query parameter and reloads the list.

#### Detail View
1. Detail view should have a single URL segment parameter (`petId`) that is passed in by the route.
2. When the view loads, it should query the Petfinder API ("Get Animal") method and attempt to load the details for that pet.
3. If there is an error loading the data from the Petfinder API, detail view should redirect the browser to the "Not Found" view.
4. If data is successfully returned from the API, the view should display the following information about the pet:
    1. The pet's name, type of animal (e.g. Cat, Dog), breeds (primary and secondary, or mixed or unknown, if appropriate), color (primary), age, gender, size, description,  current adoption status, and distance from the user's ZIP code (nice-to-have requirement, can be application default ZIP code)
    2. An image of the pet
    3. An embedded video of the pet, if one is available (this is a nice-to-have requirement)
    4. A list of the pet's attributes (e.g. spayed/neutered, house trained)
    5. A list of the pet's environmental considerations (e.g. no children, no cats)
    6. A link to the pet's Petfinder detail page
5. The detail view should support an "Add to Wishlist" toggle that will add or remove the pet's ID from the global wishlist. Wishlist should be stored as a React context variable.
6. If the pet is not in the current user's wishlist, the toggle button should read, "Add to Wishlist". If the pet is in the wishlist, the button should read, "Remove from Wishlist".
7. The "Add to Wishlist" toggle button state should remain in sync with the contents of the wishlist at all times.

#### Wishlist Component
1. The Wishlist Component should be part of the persistent header, visible regardless of the currently-loaded route/view
2. 3. Wishlist should display the number of pets currently on the user's wishlist
4. Wishlist should include a toggle button that will open or close a floating panel that displays all the pets in the user's wishlist
5. While the floating panel is open, each pet in the user's wishlist should be represented by a tile with the following information:
    1. A photo of the pet 
    2. The pet's name, type (e.g. Dog, Cat)
    3. The pet's adoption status (e.g. "adoptable")
7. Clicking on a pet's tile in the wishlist should redirect to the `/detail/:petId` path, where `:petId` is that pet's ID
8. Each pet tile should include a "Remove" button that will cause that pet to be removed from the user's Wishlist
9. The contents of the wishlist should remain in sync with the rest of the application (i.e. "Add to Wishlist" toggle button states) at all times
10. *Bonus requirement*: Tiles in the Wishlist should be grouped by type of animal (e.g. Cats, Dogs)
11. *Bonus requirement*: The contents of the wishlist should be stored in localStorage on the user's machine so they persist across browser reloads. At application launch, the application should (responsibly) revalidate the conetnts of localStorage by making API calls to the Petfinder API. Let's discuss strategies for this, given that there might be many pets in localStorage and there does not appear to be an endpoint or parameter that allows searching by a list of IDs.

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
