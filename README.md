# Shopping List Web Application with REST API

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/francislagares/allfunds-tech-challenge/tests.yaml?style=for-the-badge)


This repository hosts a fully-functional shopping list web application built with React, designed to interact with a RESTful API. The application provides users with a seamless shopping experience, allowing them to browse products, manage their shopping cart, and track their favorite items.

## Features:
- **Product List**: Display a comprehensive list of products with stock availability.
- **Shopping Cart Management**: Add products to the cart, adjust quantities, and view the total amount in the cart.
- **Favorites Management**: Mark products as favorites and view them in a separate list (optional).
- **Responsive Design**: Adaptive layout that transitions smoothly between desktop and mobile views.
- **Navigation**: Simple navigation between product list and cart views using arrow buttons.
- **Real-time Updates**: Reflect stock updates and cart changes instantly.
- **RESTful API Integration**: Seamless communication with the backend API for fetching and updating data.

## API Endpoints:
- **GET /grocery**: Retrieve the list of products.
- **PATCH /grocery/:id**: Update stock availability for a specific product.
- **GET /grocery?favorite=1**: Retrieve the list of favorite products.

## Tech Stack:
- **Frontend**: React with Styled-Components/Emotion/Sass/Less/CSS for styling.
- **Backend**: RESTful API (refer to `server-api` directory for setup instructions).
- **TypeScript**: (Optional) Enhances code quality and maintainability.
- **Testing**: Basic unit tests for components (optional, but appreciated).


## Built with

<p>
  <a href='https://www.vitejs.dev/'>
		<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
	</a>
  &nbsp;
  <a href='https://www.react.org/'>
		<img src='https://img.shields.io/badge/react-61DAFB?logoWidth=30&labelColor=black&style=for-the-badge&logo=react' />
	</a>
  &nbsp;
  <a href='https://www.typescriptlang.org/'>
    <img src="https://img.shields.io/badge/typescript-007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white" />
  </a>
  &nbsp;
</p>

## Tested with

<p>

  <a href='https://vitest.dev/'>
		<img src='https://img.shields.io/badge/vitest-6E9F18?logoWidth=30&labelColor=black&style=for-the-badge&logo=vitest&logoColor=white' />
	</a>
  &nbsp;
  <a href='https://testing-library.com/'>
    <img src="https://img.shields.io/badge/testing library-E33332.svg?&style=for-the-badge&logo=testing-library&logoColor=white" />
  </a>
  &nbsp;
</p>

# Available Scripts

- Clone the repo

  ```bash
  $ git clone https://github.com/francislagares/allfunds-tech-challenge.git
  ```

- Install the dependencies by running the following command.

  ```bash
  pnpm install
  ```

- Start the development server:

  ```bash
  pnpm start
  ```
  Open [http://localhost:5173](http://localhost:5173) with your browser to see the welcome page.

- To run the test suites:

  ```bash
  pnpm test:ci
  ```


# Docker - Development Environment

- Create and run a container

  ```bash
  $ docker compose up -d
  ```
  Open [http://localhost:5173](http://localhost:5173) with your browser to see the
  result.

- To stop a container

  ```bash
  $ docker compose stop
  ```
- To remove a container

  ```bash
  $ docker compose down
  ```
# Author


Created by [@francislagares](https://www.linkedin.com/in/francislagares/) - feel free to contact me!
* 