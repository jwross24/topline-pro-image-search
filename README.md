# Image Search and Viewing Web App

This web application allows users to search for images using the Pixabay API and view detailed information about selected images.

## Table of Contents

- [Image Search and Viewing Web App](#image-search-and-viewing-web-app)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Purpose](#purpose)
  - [How to Run the App for Development](#how-to-run-the-app-for-development)
  - [Deployment](#deployment)

## Technologies Used

This web app is built using the following technologies:

- **React/Next.js**: The frontend of the application is built using the React JavaScript library and Next.js 13 framework.

- **Pixabay API**: The Pixabay API is used to fetch image data for search and details. You will need an API key from Pixabay to use this application.

- **Tailwind CSS**: Styling is done using Tailwind

## Purpose

The purpose of this web app is to demonstrate how to create a simple image search and viewing application using React and external API integration. Users can search for images by entering keywords, view a list of search results, and click on individual images to see more details, including the user who posted the image and relevant tags.

## How to Run the App for Development

Follow these steps to run the app locally for development:

1. Clone this repository to your local machine using Git:

   ```
   git clone https://github.com/jwross24/topline-pro-image-search.git
   ```

2. Navigate to the project directory:

   ```
   cd topline-pro-image-search
   ```

3. Install dependencies using npm (Node Package Manager):

   ```
   npm install
   ```

4. Set up your Pixabay API key:

   - Visit [Pixabay](https://pixabay.com/api/docs/) to create an account and obtain an API key.
   - Create a `.env.local` file in the project root.
   - Add your API key to the `.env.local` file:

     ```
     PIXABAY_API_KEY=<your-api-key-here>
     ```

5. Start the development server:

   ```
   npm run dev
   ```

6. Open your web browser and access the app at `http://localhost:3000`.

## Deployment

The app is yet to be deployed, as I'm still trying to figure out some build issues. Hang tight!
