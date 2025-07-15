# 🧾 Hotel CRS - Complete API Testing Guide (Postman)

This document covers detailed Postman test cases for the **Hotel Central Reservation System (Hotel CRS)** backend built with **NestJS** and **file-based JSON storage**. All API endpoints are thoroughly documented with example payloads and descriptions to help during **demo, QA, or stakeholder presentation**.

---

## 🚀 Getting Started

> 🛠️ **Base URL**: `http://localhost:3000`
### ✅ Before You Begin:

1. Start the NestJS development server: `npm run start:dev`
2. Ensure the following data files exist inside the `data/` folder:

   * `hotels.json`
   * `hotel-types.json`
   * `room-types.json`
3. All requests use the `Content-Type: application/json` header.
4. Import this file as a reference while creating a Postman collection.

---

## 🏨 Hotel APIs (4 endpoints)

### 1. Create Hotel

**POST** `/hotel`

```json
{
  "code": "H200",
  "name": "Postman Inn",
  "address": "Airport Road",
  "type": "Hotel",
  "roomTypes": ["Single", "Deluxe"],
  "latitude": 28.66,
  "longitude": 77.21
}
```

**Purpose:** Adds a new hotel with full address, geo-coordinates, and supported room types.

---

### 2. Get All Hotels

**GET** `/hotel`

* **Response:** Array of all hotels stored in the system.

---

### 3. Update Hotel

**PUT** `/hotel/:id`

```json
{
  "code": "H201",
  "name": "Updated Postman Inn",
  "address": "Metro Road",
  "type": "Resort",
  "roomTypes": ["Super Deluxe"],
  "latitude": 28.67,
  "longitude": 77.22
}
```

**Note:** Replace `:id` with the actual hotel ID from `GET /hotel`.

---

### 4. Delete Hotel

**DELETE** `/hotel/:id`
**Note:** Replace `:id` with the hotel ID to be deleted.

---

## 🏷️ Hotel Type APIs (4 endpoints)

### 5. Add Hotel Type

**POST** `/hotel-type`

```json
{
  "type": "Resort"
}
```

**Purpose:** Adds a new type of hotel (e.g., Resort, Apartment).

---

### 6. Get Hotel Types

**GET** `/hotel-type`

* Returns an array of all hotel types currently stored.

---

### 7. Update Hotel Type

**PUT** `/hotel-type`

```json
{
  "oldType": "Resort",
  "newType": "Resort Deluxe"
}
```

**Purpose:** Modifies a hotel type value.

---

### 8. Delete Hotel Type

**DELETE** `/hotel-type`

```json
{
  "type": "Resort Deluxe"
}
```

**Purpose:** Removes a hotel type from the list.

---

## 🛏️ Room Type APIs (4 endpoints)

### 9. Add Room Type

**POST** `/room-type`

```json
{
  "type": "Presidential Suite"
}
```

**Purpose:** Adds a new type of room to the master list.

---

### 10. Get Room Types

**GET** `/room-type`

* Lists all available room types.

---

### 11. Update Room Type

**PUT** `/room-type`

```json
{
  "oldType": "Presidential Suite",
  "newType": "Royal Suite"
}
```

**Purpose:** Changes a room type label.

---

### 12. Delete Room Type

**DELETE** `/room-type`

```json
{
  "type": "Royal Suite"
}
```

**Purpose:** Deletes a room type permanently.

---

## 🧠 Summary Table

| Module     | Method | Endpoint      | Description           |
| ---------- | ------ | ------------- | --------------------- |
| Hotel      | GET    | `/hotel`      | List all hotels       |
| Hotel      | POST   | `/hotel`      | Create a new hotel    |
| Hotel      | PUT    | `/hotel/:id`  | Update existing hotel |
| Hotel      | DELETE | `/hotel/:id`  | Delete a hotel        |
| Hotel Type | GET    | `/hotel-type` | List hotel types      |
| Hotel Type | POST   | `/hotel-type` | Add new hotel type    |
| Hotel Type | PUT    | `/hotel-type` | Edit a hotel type     |
| Hotel Type | DELETE | `/hotel-type` | Remove hotel type     |
| Room Type  | GET    | `/room-type`  | List room types       |
| Room Type  | POST   | `/room-type`  | Add new room type     |
| Room Type  | PUT    | `/room-type`  | Edit a room type      |
| Room Type  | DELETE | `/room-type`  | Delete a room type    |

---

## 📦 Additional Tips

* Always ensure `.json` files are **pre-initialized** with `[]`
* Restart the server after file changes or crashes: `Ctrl+C` then `npm run start:dev`
* Use dynamic variables in Postman to reuse hotel `id`s during `PUT` and `DELETE`
* Consider saving responses for debugging during live demo or testing

---

## 📂 Optional: Postman Collection Import

If needed, a `.postman_collection.json` can be generated and shared to import directly into Postman.

Let me know and I’ll provide it! ✅

