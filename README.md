# Kundan.ai - Personal Portfolio Website

This is a personal portfolio website for Kundan Kumar, a freelancer specializing in Python, AI/ML, Algorithmic Trading, and Automation. The website is built with Next.js and showcases his skills, services, projects, and contact information. It also features AI-powered content generation for the bio, service descriptions, and skill suggestions.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Generative AI:** [Firebase Genkit](https://firebase.google.com/docs/genkit)
- **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Deployment:** [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm, yarn, or pnpm

### Environment Variables

To run the Genkit AI features, you'll need a Google AI API key.

1.  Create a `.env` file in the root of the project.
2.  Add your API key to the `.env` file:

```
GEMINI_API_KEY=your_api_key_here
```

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```
2.  Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Running the Development Server

You need to run two separate processes for the Next.js app and the Genkit AI flows.

1.  **Start the Next.js app:**
    ```bash
    npm run dev
    ```
    The application will be available at [http://localhost:9002](http://localhost:9002).

2.  **Start the Genkit development server:**
    Open a new terminal and run:
    ```bash
    npm run genkit:watch
    ```
    This will start the Genkit flows and make them available for the Next.js app to call.

## Project Structure

- `src/app/`: Main Next.js application pages and layout.
- `src/components/`: Reusable React components.
  - `src/components/sections/`: Components for each section of the homepage (Hero, Skills, etc.).
  - `src/components/ui/`: ShadCN UI components.
- `src/ai/`: Contains all the Genkit AI-related code.
  - `src/ai/flows/`: Genkit flows for AI-powered features.
- `src/lib/`: Contains utility functions and static data.
  - `src/lib/data.ts`: All the text content and data for the website.
- `public/`: Static assets.
