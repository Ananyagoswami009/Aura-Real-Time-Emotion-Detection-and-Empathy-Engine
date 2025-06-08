# Aura: Real-Time Emotion Detection and Empathy Engine

## Overview
Aura is a cutting-edge application designed to detect emotions in real-time and provide empathetic responses. Built using Next.js, Tailwind CSS, and Hume AI's voice-react library, Aura leverages advanced AI technologies to analyze voice inputs and deliver meaningful interactions.

## Features
- **Real-Time Emotion Detection**: Analyze voice inputs to detect emotions in real-time.
- **Empathy Engine**: Generate empathetic responses based on detected emotions.
- **Interactive UI**: A modern and responsive user interface built with Tailwind CSS.
- **Voice Integration**: Powered by Hume AI's voice-react library for seamless voice processing.
- **Animations**: Smooth animations using Framer Motion.

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Voice Processing**: [Hume AI Voice React](https://www.hume.ai/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **TypeScript**: For type safety and better developer experience.

## Installation

### Prerequisites
- Node.js (v18 or higher)
- pnpm (v10 or higher)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd empathic-voice-interface-starter-main
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env.local` file in the root directory and add the following:
   ```env
   HUME_API_KEY=your_api_key_here
   HUME_SECRET_KEY=your_secret_key_here
   NEXT_PUBLIC_HUME_CONFIG_ID=your_config_id_here
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Project Structure
```
.
├── app/
│   ├── error.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Chat.tsx
│   ├── Controls.tsx
│   ├── Expressions.tsx
│   ├── Messages.tsx
│   ├── MicFFT.tsx
│   ├── Nav.tsx
│   ├── StartCall.tsx
│   └── ui/
│       ├── button.tsx
│       └── toggle.tsx
├── utils/
│   ├── expressionColors.ts
│   ├── expressionLabels.ts
│   ├── getHumeAccessToken.ts
│   └── index.ts
├── public/
│   ├── favicon.ico
├── .env.example
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Scripts
- `pnpm dev`: Start the development server.
- `pnpm build`: Build the application for production.
- `pnpm start`: Start the production server.
- `pnpm lint`: Run linting checks.

## Environment Variables
The following environment variables are required:
- `HUME_API_KEY`: Your Hume API key.
- `HUME_SECRET_KEY`: Your Hume secret key.
- `NEXT_PUBLIC_HUME_CONFIG_ID`: Your Hume configuration ID.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- [Hume AI](https://www.hume.ai/) for their voice-react library.
- [Next.js](https://nextjs.org/) for the amazing framework.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.
- [Framer Motion](https://www.framer.com/motion/) for animations.

---

Feel free to reach out if you have any questions or need assistance!
