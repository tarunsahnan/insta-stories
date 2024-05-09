This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Note: Please use yarn for dependency management as pre-commit and pre-push hooks have been set up accordingly.

Following are the steps to run it locally:

1. install the dependencies:

```bash
yarn install
```

2. run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Choices

1. Implemented gradient border color for stories.
2. Removed the scrollbar to align with Instagram's design.
3. Clicking on a story opens a full-screen modal.
4. Navigating between stories by clicking: left side for previous, right side for next .
5. UI controls like dragging facilitate story navigation.
6. Automatic transition to the next story after 5 seconds of inactivity.
7. Implemented a close button to exit the story view.
8. Clicking on any story in the homepage displays the expanded view with that story as the current image.

## Optimizations

1. I have implemented nextjs <Image> tag for images as it optimizes images for performance by automatically providing features like lazy loading, responsive sizes, and efficient formats.
2. I have written API routes in Next.js which provides streamlined development, deployment, and performance benefits.

## Deployment

1. I have set up pre-commit and pre-push hooks to run test cases before allowing any operation.
2. The project is deployed on [Netlify](https://master--insta-stories-test.netlify.app/), which automatically updates whenever a new commit is pushed to the master branch. Before building the project, Netlify runs a test command to ensure all unit test cases pass.
