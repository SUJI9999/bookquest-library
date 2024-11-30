# BookQuest Library

A modern web application built with React and Tailwind CSS that allows users to search for books and view detailed information about them using the Open Library API.

## Features

- Search books by title
- Display book details including:
  - Title
  - Author
  - Format
  - Publication Year
  - Subject
- Responsive design
- Modern UI with Tailwind CSS

## Tech Stack

- React 18
- Tailwind CSS
- Vite
- React Router DOM
- ESLint

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository
```bash
git clone https://github.com/SUJI999/bookquest-library.git
cd bookquest-library
```

2. Install dependencies
```bash
npm install
```

## Development
Start the development server:
```bash
npm run dev
```
Access the application at http://localhost:5173

## Production Build
Create production build:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Homepage.jsx    # Main page component
│   ├── Input.jsx       # Search input component
│   ├── Result.jsx      # Results display component
│   └── Submit.jsx      # Submit button component
├── App.jsx             # Root component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## API Reference

This project uses the [Open Library API](https://openlibrary.org/developers/api) for book data.

Endpoint used:
```http
GET https://openlibrary.org/search.json?title={searchTerm}
```

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License
MIT License. See LICENSE for details

## Additional Resources
- [React Documentation](https://react.dev/docs/getting-started)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Open Library API Documentation](https://openlibrary.org/developers/api)

