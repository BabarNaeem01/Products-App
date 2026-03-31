# Products App

Simple product catalog app built with React Native, Expo, Node.js, Express, and MySQL.

This project shows my ability to build a complete mobile-to-database workflow with a lightweight backend and a clean, readable frontend.

## Why This Project Matters

- Built a full-stack app with clear separation of concerns
- Served product data through an Express API
- Connected React Native UI to a MySQL-backed service
- Designed the codebase to be easy for other developers to follow

## Project Structure

- `products-frontend` - Expo React Native mobile UI
- `products-backend` - Express and MySQL API layer
- `db/schema.sql` - MySQL schema and seed data

## What It Does

- Reads product records from MySQL
- Exposes them through `GET /products`
- Displays product name, price, and stock in the mobile app

## API

- Port: `4004`
- Endpoint: `GET /products`

## Tech Stack

- Frontend: React Native, Expo
- Backend: Node.js, Express
- Database: MySQL
- Connection layer: `mysql2`

## Run It

1. Import `db/schema.sql` into MySQL
2. Add database values in `products-backend/.env`
3. Start backend from `products-backend`
4. Start frontend from `products-frontend`

## Recruiter Note

This project represents how I work as a developer: ship useful features, keep the stack clean, and make sure the product is easy to run, read, and extend.
