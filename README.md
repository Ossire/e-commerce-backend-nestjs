# E-Commerce Backend API

## How to run locally

1. Clone the repository and run `npm install`.
2. Create a `.env` file in the root directory.
3. Add the following environment variables. _(Note: A live cloud database is provided below for convenience so you do not need to seed a local database)._

\`\`\`env
DATABASE_URL="postgresql://neondb_owner:npg_jEHoO9MvSri1@ep-gentle-block-amve84qw-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

JWT_SECRET="your_secret_key_here"
\`\`\`

4. Run `npm run start:dev`.
5. The API will be available at `http://localhost:3000/api/v1`.

_Note: My CORS is dynamically configured to accept requests from both `http://localhost:4200` (local development) and the live production frontend._
