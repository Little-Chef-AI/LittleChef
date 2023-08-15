# LittleChef - Empowering Young Cooks

Welcome to Little Chef, a delightful web application designed to inspire and guide young users on their culinary journey. With Little Chef, you can discover and create exciting recipes using the ingredients you already have at home. This README provides an overview of the project, its infrastructure, key functionalities, and design decisions that make it a standout application even for FAANG engineers.

## Table of Contents

- [Project Description](#project-description)
- [Infrastructure](#infrastructure)
- [Backend Functions](#backend-functions)
- [Frontend Functions](#frontend-functions)
- [User Interface](#user-interface)
- [Getting Started](#getting-started)
- [Design Documents](#design-documents)
- [Contributing](#contributing)
- [License](#license)

## Project Description

Little Chef is a web application tailored for young users eager to explore the world of cooking. It empowers users to input their available ingredients and generates unique recipes based on what they have. Users can save their favorite recipes for future reference, creating a personalized collection of culinary adventures. Little Chef aims to make learning how to cook an enjoyable, interactive, and engaging experience for users of all ages.

## Infrastructure

Little Chef is built using modern technologies to provide a seamless experience:

- **Frontend**: We utilize **ReactJS** and **ChakraUI**. ReactJS is a powerful JavaScript library for building user interfaces, while ChakraUI offers accessible and reusable UI components, enhancing the application's design and usability.

- **Backend**: Our server-side operations are powered by **PHP**, a versatile scripting language for dynamic web applications. We've integrated **MySQL** as a relational database management system to store user data and generated recipes securely.

## Backend Functions

The backend is responsible for crucial operations:

- **Authentication**: Secure user registration and login system to protect user data and ensure authorized access.

- **Database**: Utilizing MySQL, we store user information and saved recipes. The `user` table maintains user profiles, while the `recipe` table stores generated recipes, associating them with the correct user.

- **REST API**: We integrate the power of the **OpenAI API** to enhance recipe generation, allowing users to explore unique and creative culinary ideas.

## Frontend Functions

The frontend offers a user-friendly experience:

- **User Interface**: Little Chef boasts an intuitive interface for users to input their ingredients and generate recipes. The frontend's React components seamlessly integrate with ChakraUI to deliver an aesthetically pleasing and accessible design.

- **Recipe Book**: Users can create their recipe books, compiling generated recipes into a personalized collection that can be accessed at any time.

## User Interface

Little Chef's user interface is designed to be intuitive and visually appealing. Users will find it easy to:

1. Input ingredients.
2. Generate recipes.
3. Save favorite recipes.
4. Create and manage their recipe book.

## Getting Started

Follow these steps to set up and run Little Chef locally:

1. Clone this repository.
2. Install the required dependencies for both frontend and backend using `npm install` or `yarn install`.
3. Configure your MySQL database and update the backend configuration accordingly.
4. Obtain an API key for the OpenAI API and update the backend API configuration.
5. Run the backend server and the frontend application using appropriate commands.

## Design Documents

Explore our design documents for a deeper understanding of Little Chef's architecture and implementation details:

- [Database Design](./docs/database-design.md)
- [API Integration](./docs/api-integration.md)
- [Frontend Components](./docs/frontend-components.md)

## Contributing

We welcome contributions from the community! If you'd like to enhance Little Chef, please follow our [Contribution Guidelines](./CONTRIBUTING.md).

## License

Little Chef is open-source and available under the [MIT License](./LICENSE). Feel free to use, modify, and distribute the code as per the license terms.

---

Little Chef is more than just a web application; it's an exciting journey into the world of cooking for young and aspiring chefs. Join us in revolutionizing culinary education and making it fun, interactive, and accessible for all. Happy cooking!

[![Little Chef Logo](./images/little-chef-logo.png)](https://www.littlechef.com)

