# Bard Test App ![Bard thinking logo](https://raw.githubusercontent.com/AnJayDo/bard-test-app/main/public/sparkle_thinking_v2.gif "Bard")

## Requirements

- [NodeJS](https://nodejs.org/en): At leat v18.13.0
- [NextJS](https://nextjs.org/): Recommend latest version
- [Bard Experiment](https://bard.google.com/): For getting cookie

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Setup an API endpoint

Create ``src/app/api/route.ts`` file to work with [Next Router Handlers](https://nextjs.org/docs/app/building-your-application/routing/router-handlers)

```js
import { NextResponse } from 'next/server'
 
export async function GET() {
  return NextResponse.json({ name: 'Test Bard API endpoint built on Nextjs' })
}
```

From this example. Create more endpoints.

## Integrate Bard AI service

Using [bard-ai](https://bard-ai-docs.vercel.app/) (This is not the official Google package). We will get into it later.

Create a ``src/app/lib/bardService.ts``
```js
import Bard, { askAI } from 'bard-ai';

const cookie = process.env.BARD_COOKIE || <YOUR_COOKIE>;

export async function askBard(question: string, useJSON?: boolean | undefined) {
    await Bard.init(cookie);
    return await askAI(question, useJSON);
}
```

## Create Firebase for PaLM

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
