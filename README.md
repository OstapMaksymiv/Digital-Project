# Construction Company

This project is a web application for a construction company, developed using React, Firebase, and Vite. The design was sourced from an online template, while all other functionalities were implemented independently.

## Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Contact](#contact)

## Features

- **Home Page**: General information about the company.
- **Gallery**: Photo gallery of completed projects.
- **Projects**: List of all company projects.
- **Project**: Detailed information about individual projects.
- **Certifications**: Information about the company's certifications and achievements.
- **Contact**: Contact information and feedback form.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repo
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Configure Firebase (add your Firebase configurations in the `.env` file).

5. Run the application:

    ```bash
    npm run dev
    ```

## Usage

After starting the project, open your browser and go to `http://localhost:3000`.

## Project Structure


### Main Components

- **Layout.jsx**: The overall page layout, including the header (Header), main content (Outlet), and footer (Footer).

    ```jsx
    import { Outlet } from 'react-router-dom';
    import Header from './component/HeaderFolder/Header';
    import Footer from './component/Footer/Footer';

    export function Layout() {
        return (
            <>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </>
        );
    }
    ```

- **App.jsx**: The main application file that defines the routing.

    ```jsx
    import Main from './pages/Main/Main';
    import Gallery from './pages/Gallery/Gallery';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import { Layout } from './Layout';
    import Projects from './pages/Projects/Projects';
    import Project from './pages/Project/Project';
    import Contacts from './pages/Contacts/Contacts';
    import Certifications from './pages/Certifications/Certifications';
    import './app.css';

    function App() {
      return (
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Main />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Project/:id" element={<Project />} />
              <Route path="/Certifications" element={<Certifications />} />
              <Route path="/Contacts" element={<Contacts />} />
            </Route>
          </Routes>
        </Router>
      );
    }

    export default App;
    ```

## Technologies

- **React**: For building the user interface.
- **Firebase**: For data storage and authentication.
- **Vite**: For fast project build and development.

## Contact

If you have any questions or suggestions, please contact us at [your-email@example.com](mailto:your-email@example.com).

---

Thank you for using our application!

