import express from "npm:express";
import cookieParser from "npm:cookie-parser";
import crypto from "node:crypto";

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.json()); // needed for POST & PUT

// In-memory data
const people = [
  { id: 1, firstName: "Anna", lastName: "Müller", age: 17 },
  { id: 2, firstName: "Lukas", lastName: "Gruber", age: 18 },
  { id: 3, firstName: "Sarah", lastName: "Huber", age: 17 },
];

// Root route – cookie handling
app.get("/", (req, res) => {
  let id = req.cookies?.id;

  if (!id) {
    id = crypto.randomUUID();
    res.cookie("id", id, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 30,
    });
  }

  res.send(`Hello World! Your id is ${id}`);
});

// GET all people
app.get("/people", (_req, res) => {
  res.json(people);
});

// GET person by id
app.get("/people/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = people.find(p => p.id === id);

  if (!person) {
    return res.status(404).json({ error: "Person not found" });
  }

  res.json(person);
});

// POST create new person
app.post("/people", (req, res) => {
  const { firstName, lastName, age } = req.body;

  if (!firstName || !lastName || typeof age !== "number") {
    return res.status(400).json({ error: "Invalid data" });
  }

  const newPerson = {
    id: people.length ? Math.max(...people.map(p => p.id)) + 1 : 1,
    firstName,
    lastName,
    age,
  };

  people.push(newPerson);
  res.status(201).json(newPerson);
});

// PUT update existing person
app.put("/people/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = people.find(p => p.id === id);

  if (!person) {
    return res.status(404).json({ error: "Person not found" });
  }

  const { firstName, lastName, age } = req.body;

  if (firstName) person.firstName = firstName;
  if (lastName) person.lastName = lastName;
  if (typeof age === "number") person.age = age;

  res.json(person);
});

// DELETE person
app.delete("/people/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = people.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Person not found" });
  }

  const deletedPerson = people.splice(index, 1);
  res.json(deletedPerson[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
