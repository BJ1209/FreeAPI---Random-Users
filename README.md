# Random Users App

A beautiful React application that fetches and displays random user profiles from the FreeAPI service. Browse through paginated results and view detailed information about users from around the world.

## Features

- 🌍 Fetch random users from the FreeAPI service
- 📱 Responsive grid layout displaying users in 5 columns
- 🎴 Beautiful card-based UI with hover animations
- 📄 Pagination support (Previous/Next Page)
- 🎨 Modern gradient background with smooth transitions
- 📊 Display user information including:
  - Profile picture
  - Full name with title
  - Email and phone numbers
  - Location (city, state, country)
  - Age and nationality

## Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients, flexbox, and grid
- **FreeAPI** - Random user data source

## Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

## Usage

Start the development server:

```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## Project Structure

```
src/
├── App.jsx              # Main application component with pagination logic
├── App.css              # Global styles and grid layout
├── components/
│   ├── User.jsx         # User card component
│   └── User.css         # User card styling
├── index.css            # Root styles
└── main.jsx             # Application entry point
```

## How It Works

1. **App Component** - Manages state for users, page number, and pagination
2. **API Integration** - Fetches users from `https://api.freeapi.app/api/v1/public/randomusers`
3. **User Component** - Displays individual user information in a card format
4. **Pagination** - Navigate between pages with Previous/Next buttons

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
