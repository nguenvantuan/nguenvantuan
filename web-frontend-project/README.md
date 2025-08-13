# Web Frontend Project

This project is a web application built using React and TypeScript. It features a horizontal navigation bar and several pages that provide information about scholarships, schools, fields of study, and rankings.

## Project Structure

```
web-frontend-project
├── public
│   └── index.html          # Main HTML file serving as the entry point
├── src
│   ├── components
│   │   └── Navbar.tsx      # Navigation bar component
│   ├── pages
│   │   ├── Home.tsx        # Home page component
│   │   ├── Scholarships.tsx # Scholarships page component
│   │   ├── Schools.tsx     # Schools page component
│   │   ├── FieldsOfStudy.tsx # Fields of Study page component
│   │   └── Rankings.tsx     # Rankings page component
│   ├── App.tsx             # Main application component
│   └── index.tsx           # Entry point for the React application
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Features

- Horizontal navigation bar with links to:
  - Home
  - Scholarships
  - Schools
  - Fields of Study
  - Rankings

- Each page is a separate component that can be routed to from the navigation bar.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd web-frontend-project
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## License

This project is licensed under the MIT License.