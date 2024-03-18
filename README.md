# Description
This project is a React web application developed during a 2-day React-athon. It focuses on showcasing different cat breeds using data from a public API. Users can explore various cat breeds, search for specific breeds, and learn about their characteristics and temperaments.

# Deployment link
The project is deployed and can be accessed here: https://futurefurbaby.netlify.app/

# Getting Started/Code Installation
To access the code for this project, you can follow these steps:

Navigate to the GitHub repository. 

Clone the repository to your local machine using Git by running the following command in your terminal:



git clone https://github.com/evynrose/SEB-project-2.git
Once the repository is cloned, navigate into the project directory:


cd SEB-project-2
Install dependencies by running:


npm install
After installing dependencies, you can start the development server by running:


npm run dev
The project should now be running locally. You can access it in your web browser at http://localhost:3000.

# Timeframe & Working Team (Solo/Pair/Group)
This project was completed during a 2-day React-athon, working alongside Syed Siddiqui.

# Technologies Used
React

# Brief
Technical Requirements:

Consume a public API – the project should utilize a public API that makes sense for the application.
The app should include a router with several "pages".
Include wireframes that you designed before building the app.
Ensure semantically clean HTML, focusing on structural sense rather than appearance.
Deploy the application online and make it accessible to the public.

Necessary Deliverables:

A working application, hosted somewhere on the internet.
A link to your hosted working app in the URL section of your GitHub repo.
A Git repository hosted on GitHub, containing a link to your hosted project and frequent commits dating back to the very beginning of the 
project.

# Planning
We used excallidraw to draw out and psuedo-code our project. This is the link to the image: https://imgur.com/a/Ga2YSED

# Build/Code Process
1. Setting Up the Components
   
We began by setting up the main components of our React application, including CatBreeds, CatCards, Home, Navbar, and App.

3. Fetching Cat Data

In the CatBreeds component, we utilized React's useEffect hook to fetch data from the Cat API (https://api.thecatapi.com/v1/breeds) upon the page being first loaded. We made use of the fetch function to send a GET request to the API, including the necessary headers for authentication.

4. Displaying Cat Breeds

We implemented functionality to display cat breeds dynamically based on user input. The filterCatBreeds function filtered cat breeds based on the search query entered by the user. We then mapped over the filtered cat breeds and rendered them as individual CatCards.

5. Creating the Home Page

The Home component was designed to serve as the landing page of our application. It includes a hero section with a welcoming message and an image of a cat. Users are encouraged to explore the site further to find their future furbaby.

6. Implementing Navigation

We created a Navbar component to provide navigation links to different sections of the application. Links to the home page and the cat breeds page were included to facilitate easy navigation.

7. Routing

We utilized React Router to handle routing within our application. The App component wraps our entire application with a Router component and defines routes using the Routes and Route components. Different paths are mapped to corresponding components, such as Home and CatBreeds.

8. Styling

Styling was implemented using Bulma CSS framework alongside custom CSS. Components were styled to ensure a visually appealing and user-friendly interface.


# Challenges
During the development of this project, we faced challenges with the git repository, which led us to adopt a driver-navigator approach to pair coding. While this approach was effective in ensuring code quality and precision, it also resulted in limited time for styling. However, it allowed us to focus on perfecting our code and implementing functionality efficiently.

# Wins
One significant win during the development of this project was the successful implementation of the search bar functionality. Despite the challenges we faced, we were able to incorporate the search feature seamlessly, enhancing the user experience and allowing for easier navigation and exploration of cat breeds.

# Key Learnings/Takeaways
This project provided us with valuable opportunities to master React and enjoy teamwork in development. Through collaborative efforts and problem-solving, we enhanced our skills and deepened our understanding of React's functionalities. Additionally, the experience of working together fostered a sense of camaraderie and teamwork, contributing to a rewarding development process.

# Bugs
One notable issue encountered during the project was the inconsistency in the availability of photos for certain cat breeds in the API. This resulted in varying sizes and visual inconsistencies in the display of cat breeds, detracting from the overall visual appeal of the application.

# Future Improvements
Moving forward, we have several ideas for improving the project:

Addressing Bugs: We plan to investigate solutions for the inconsistency in photo availability for cat breeds in the API. Additionally, we aim to enhance the overall visual consistency of the application.

Expanding to Dogs and Exotic Pets: In addition to cat breeds, we intend to incorporate information and features for dog breeds and exotic pets. This expansion will broaden the appeal of the application and cater to a wider audience of pet enthusiasts.

Enhancing Styling: We recognize the importance of visual aesthetics and user experience. Therefore, we plan to dedicate time to further refining and enhancing the styling of the application, ensuring a cohesive and visually appealing design across all pages and components.
