# 🏨 Hotel CRS Backend (NestJS + File-Based Storage)

A modular, production-ready **Central Reservation System** backend to manage Hotels, Hotel Types, and Room Types using **file-based JSON storage** instead of a database.

---

## ✨ Features

* 🏨 Manage hotel information with location support
* 🏷️ CRUD operations for Hotel Types (e.g., Hotel, Resort, Apartment)
* 🛏️ CRUD operations for Room Types (e.g., Single, Deluxe)
* 📦 Built using [NestJS](https://nestjs.com) (TypeScript)
* 💾 Local `.json` files for persistent data storage (no database needed)
* 🧱 Clean modular architecture with 3 main modules: `hotel`, `hotel-type`, `room-type`
* ✅ Total of 12 RESTful APIs

---

## 📁 Folder Structure

```
hotel-crs/
├── src/
│   ├── hotel/
│   ├── hotel-type/
│   └── room-type/
├── data/
│   ├── hotels.json
│   ├── hotel-types.json
│   └── room-types.json
├── main.ts
├── app.module.ts
└── README.md
```

---

## 📜 API Documentation

### ✅ Hotel APIs

| Method | Endpoint                                      | Description    |
| ------ | --------------------------------------------- | -------------- |
| GET    | [`/hotel`](http://localhost:3000/hotel)       | Get all hotels |
| POST   | [`/hotel`](http://localhost:3000/hotel)       | Create a hotel |
| PUT    | [`/hotel/:id`](http://localhost:3000/hotel/1) | Update a hotel |
| DELETE | [`/hotel/:id`](http://localhost:3000/hotel/1) | Delete a hotel |

### ✅ Hotel Type APIs

| Method | Endpoint                                          | Description         |
| ------ | ------------------------------------------------- | ------------------- |
| GET    | [`/hotel-type`](http://localhost:3000/hotel-type) | Get all hotel types |
| POST   | [`/hotel-type`](http://localhost:3000/hotel-type) | Add a hotel type    |
| PUT    | [`/hotel-type`](http://localhost:3000/hotel-type) | Update a hotel type |
| DELETE | [`/hotel-type`](http://localhost:3000/hotel-type) | Delete a hotel type |

### ✅ Room Type APIs

| Method | Endpoint                                        | Description        |
| ------ | ----------------------------------------------- | ------------------ |
| GET    | [`/room-type`](http://localhost:3000/room-type) | Get all room types |
| POST   | [`/room-type`](http://localhost:3000/room-type) | Add a room type    |
| PUT    | [`/room-type`](http://localhost:3000/room-type) | Update a room type |
| DELETE | [`/room-type`](http://localhost:3000/room-type) | Delete a room type |

---

## 🔁 Sample cURL Usage

**Add a Hotel:**

```bash
curl -X POST http://localhost:3000/hotel \
-H "Content-Type: application/json" \
-d '{
  "code": "H001",
  "name": "Hotel Aman Palace",
  "address": "Ring Road",
  "type": "Hotel",
  "roomTypes": ["Single", "Double"],
  "latitude": 28.65,
  "longitude": 77.22
}'
```

**Add a Hotel Type:**

```bash
curl -X POST http://localhost:3000/hotel-type \
-H "Content-Type: application/json" \
-d '{"type": "Resort"}'
```

**Add a Room Type:**

```bash
curl -X POST http://localhost:3000/room-type \
-H "Content-Type: application/json" \
-d '{"type": "Presidential Suite"}'
```

---

## 🗃️ Data Files (Local JSON)

| File             | Description                 |
| ---------------- | --------------------------- |
| hotels.json      | Stores hotel objects        |
| hotel-types.json | Array of hotel type strings |
| room-types.json  | Array of room type strings  |

> All files are located in the `data/` folder.

---

## 🧱 ER Diagram (ASCII Format)

```
+----------------+
|     Hotel      |
+----------------+
| id             |
| code           |
| name           |
| address        |
| type ----------> "HotelType"
| roomTypes[] ---> ["Single", "Deluxe"]
| latitude       |
| longitude      |
+----------------+

HotelType = ["Hotel", "Resort", "Apartment"]
RoomType  = ["Single", "Double", "Deluxe", "Super Deluxe"]
```

---

## ⚙️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run start:dev
```

> ⚠️ Make sure the `data/` folder and all `.json` files exist and are initialized as empty arrays (`[]`) before starting the server.

---

## 🔢 Full API List (12 Total)

### Hotel Module (4 APIs)

* [`GET    /hotel`](http://localhost:3000/hotel) - List all hotels
* [`POST   /hotel`](http://localhost:3000/hotel) - Add a new hotel
* [`PUT    /hotel/:id`](http://localhost:3000/hotel/1) - Update an existing hotel
* [`DELETE /hotel/:id`](http://localhost:3000/hotel/1) - Remove a hotel

### Hotel Type Module (4 APIs)

* [`GET    /hotel-type`](http://localhost:3000/hotel-type) - List all hotel types
* [`POST   /hotel-type`](http://localhost:3000/hotel-type) - Add a new hotel type
* [`PUT    /hotel-type`](http://localhost:3000/hotel-type) - Update an existing hotel type
* [`DELETE /hotel-type`](http://localhost:3000/hotel-type) - Remove a hotel type

### Room Type Module (4 APIs)

* [`GET    /room-type`](http://localhost:3000/room-type) - List all room types
* [`POST   /room-type`](http://localhost:3000/room-type) - Add a new room type
* [`PUT    /room-type`](http://localhost:3000/room-type) - Update an existing room type
* [`DELETE /room-type`](http://localhost:3000/room-type) - Remove a room type

---

## 👨‍💻 Developer Info

| Field   | Info                      |
| ------- | ------------------------- |
| Name    | Aman Raj                  |
| Role    | Software Developer Intern |
| Company | PROVAB Technosoft         |
| Stack   | NestJS, TypeScript, JSON  |

---

## 📄 License

MIT License – For demo, training, and internal development use only.

