# Barber Booking App

A modern booking application for barber shops built with Next.js and TypeScript.

## Features

- Browse and search for barbers
- View barber profiles and services
- Book appointments with your favorite barbers
- Manage your upcoming and past appointments
- User profile and preferences management
- Onboarding experience for new users

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Troubleshooting

### File Watcher Limit Issue

If you encounter an error like:

```
OS file watch limit reached
```

This happens because the system has a limit on the number of files that can be watched by a user. You can fix this by increasing the limit with:

```bash
# For Linux
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## Technology Stack

- Next.js
- TypeScript
- Tailwind CSS
- React Context API for state management

## Project Structure

- `app/` - Next.js application routes
- `components/` - Reusable React components
- `providers/` - React context providers
- `hooks/` - Custom React hooks
- `lib/` - Utility functions and shared code
- `public/` - Static assets

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
