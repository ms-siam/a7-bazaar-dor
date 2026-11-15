# BazaarDor

BazaarDor is a web application that shows daily market prices of essential items in Bangladesh. It covers rice, lentils, oil, vegetables, fish, meat, eggs, dairy and spices, with market-wise price details and daily price changes in one place.

Live site: https://a7-bazaar-dor.vercel.app

## Technologies Used

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- HeroUI
- Better Auth (email, Google and GitHub sign-in)
- MongoDB Atlas
- React Toastify
- React Icons
- Vercel (deployment)

## Key Features

1. Daily price overview: the homepage shows items whose prices increased or decreased today, along with a full list of all products.

2. Category browsing: products are grouped into categories such as rice, lentils, oil, vegetables, fish, meat, eggs and dairy, and spices, with a scrolling live price ticker.

3. Product details: each product page shows today's price, the lowest, highest and average price, and a market-wise price table across divisions.

4. Sorting: product lists can be sorted by default order, price low to high, or price high to low.

5. Authentication and protected pages: users can sign up and sign in with email, Google or GitHub. Category, product and profile pages are protected, and only the homepage is public.

## Getting Started

1. Clone the repository

```
git clone https://github.com/ms-siam/a7-bazaar-dor.git
cd a7-bazaar-dor
```

2. Install dependencies

```
npm install
```

3. Create a `.env.local` file in the project root

```
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_random_secret
BETTER_AUTH_URL=http://localhost:3000
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. Run the development server

```
npm run dev
```

5. Open http://localhost:3000 in your browser.

## Data Source

Product and category data comes from the Programming Hero BazaarDor API:

- https://openapi.programming-hero.com/api/bazardor/products
- https://openapi.programming-hero.com/api/bazardor/categories

## Deployment

The project is deployed on Vercel. Environment variables must be set in the Vercel project settings, and the production callback URLs must be added in the Google and GitHub OAuth apps.