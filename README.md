# Gradient Group Technical Assignment

This project is a single-page application built with **React**, **Next.js**, and an **Express.js** backend server. The goal is to create a dynamic event page based on the provided Figma design, with content managed through API endpoints.

Deployed Version: https://gradient.idkuri.com
---

## Features

- Dynamic event sections populated via API:
  - Event title, date, description, location
  - Event introduction
  - Agenda
  - Speakers (images, names, titles – limited to 3 per event)
  - Event detail description
  - Mock "previous events" section
  - FAQ section
- Two mock pages/routes to demonstrate API functionality
- Placeholder for "Get Tickets" section
- Reusable hero image for all events

---

## Project Structure

```
BluePrint/           # Frontend (Next.js)
BluePrint-Backend/    # Backend (Express.js)
docker-compose-dev.yml
docker-compose-prod.yml
```

---

## Environment Variables

### Frontend `.env` (`./BluePrint/.env`)

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_IMAGE_URL=
```

- **Development:**  
  - `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_IMAGE_URL` are different to handle client-side vs server-side requests.  
  - Example values: `localhost:3000`, `docker.internal:5000` or container hostname `backend`.

- **Production:**  
  - Both URLs should point to your deployed domain.

---

## Backend Environment Variables

The backend server also uses a `.env` file to configure runtime settings. Create a file at `./BluePrint-Backend/.env` with the following:

```env
PORT=5050
```

- `PORT` – The port on which the Express.js server will run.
  - In development with Docker, this should match the port mapping in `docker-compose-dev.yml` (`5050:5050`).
  - In production, adjust if your hosting environment requires a different port.

> **Note:** Do **not** commit your real `.env` file with secrets. Only example or placeholder files (e.g., `.env.example`) should be version controlled.

## Running the Project

### Development

1. Populate `.env` in `./BluePrint` with appropriate URLs.
2. Run the development Docker setup:

```bash
docker-compose -f docker-compose-dev.yml up --build
```

### Production

1. Populate `.env` in `./BluePrint` with your production domain.
2. Run the production Docker setup:

```bash
docker-compose -f docker-compose-prod.yml up --build
```

---

## Notes

- The backend serves API endpoints that provide event data for the frontend.
- The frontend fetches data using these endpoints and dynamically renders content.

---

## Event Data

Event data for the application is stored in JSON format. This allows the frontend to dynamically fetch and render content via the backend API. The sample JSON includes:

- `title` – Event title
- `picture` – Hero image for the event
- `date` – Event date
- `introduction` – Short introduction text
- `location` – Venue/location
- `description` – Detailed event description
- `agenda` – Array of agenda items with `time`, `title`, `description`, and `location`
- `speakers` – Array of speakers with `name`, `title`, and `picture`
- `faq` – Array of frequently asked questions with `question` and `answer`

Example snippet from `events.json`:

```json
{
  "title": "The BluePrint Series: A Fireside Chat with Rich Tu",
  "picture": "/event_pictures/event.png",
  "date": "2025-05-14",
  "introduction": "Join us for an exclusive evening with Rich Tu...",
  "location": "Soho House, New York",
  "description": "Presented as part of The Gradient's Blueprint Series...",
  "agenda": [
    { "time": "10:30 AM - 11:00 AM", "title": "WELCOME AND OPENING", "description": "...", "location": "Ground Floor" }
  "speakers": [
    { "name": "Rich Tu", "title": "Artist", "picture": "/speaker_pictures/RichTu.png" }
  ],
  "faq": [
    { "question": "What is the schedule for the event?", "answer": "..." }
  ]
}
```

---

## Asset Organization

To properly render images for events and speakers:

### Speaker Images

- All speaker pictures must be stored in the `./speaker_pictures/` folder.
- File paths referenced in JSON should match the filename.
- Example:  
  ```json
  "picture": "/speaker_pictures/RichTu.png"
  ```

### Event Images

- All event hero images must be stored in the `./event_pictures/` folder.
- File paths in JSON should match the filename.  
- Example:  
  ```json
  "picture": "/event_pictures/event.png"
  ```

This structure ensures that both the frontend and backend can correctly locate and serve images when rendering the pages dynamically.
