1-Backend Setuo:
✅ Dependencies (required in production):
Package	Purpose
express-	Backend framework to create APIs.
dotenv	-Loads environment variables from .env file.
cors	-Lets frontend talk to backend from different origins (important for Expo apps).
@neondatabase/serverless-	Client library to connect to Neon (a serverless Postgres database).
drizzle-orm	-SQL-like ORM to talk to your Postgres DB using JavaScript.
cron	-Lets you schedule tasks (like background jobs).

🛠️ Dev Dependencies (only for development):
Package	Purpose
nodemon	-Automatically restarts server when code changes (dev only).
drizzle-kit	-CLI tool to work with drizzle-orm


server.js ->This is the main backend entry point — when you run npm run dev, it starts this server and keeps listening for API requests.


2- Database Setup:

✅ A Neon PostgreSQL DB connected via Drizzle

✅ Table: favorites defined in code using Drizzle

✅ .env for secret configs

✅ db.js to create the connection

3-adding favourite endpoint


POST -> /api/favorites	Adds a new favorite recipe to your DB
db.insert(...)	->Inserts data using Drizzle ORM
returning()->	Gets the inserted row back
Input Validation->	Ensures required fields are sent
Error Handling->	Catches and logs any issues

4- delete a favorite route


DELETE /api/favorites/:userId/:recipeId	->Deletes a user's specific favorite
req.params	->Gets values from URL
db.delete().where(...and(...))	->Deletes only if both user and recipe match
parseInt()	->Ensures recipeId is treated as a number

5-backend deployed on https://food-delivery-backend-9jee.onrender.com/


6- react basics

| Component          | Purpose                                       |
| ------------------ | --------------------------------------------- |
| `SafeAreaView`     | Keeps UI inside visible screen area           |
| `Stack`            | Enables navigation between screens            |
| `TextInput`        | Lets user type something (e.g. email)         |
| `Image`            | Displays a picture                            |
| `TouchableOpacity` | Makes elements tappable                       |
| `Link`             | Navigates to another screen using Expo Router |
| `StyleSheet`       | Adds reusable styles to your components       |
