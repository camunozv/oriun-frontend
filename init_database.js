const sql = require("better-sqlite3");
const db = sql("calls.db");

// This script was created for TESTING PURPOSES ONLY for fetching data from a data base.
const dummyCalls = [
  {
    university_id: 10031,
    active: 0,
    begin_date: "01-22-2023",
    deadline_date: "01-24-2023",
    min_advance: 4,
    min_papa: "4",
    format: "presential",
    study_level: "Maestría",
    year: "2023",
    semester: "2023-1",
    description: "convocatoria chimba",
    available_slots: "4",
    note: "convocatoria bacana"
  },
  {
    university_id: 10032,
    active: 0,
    begin_date: "01-22-2023",
    deadline_date: "01-24-2023",
    min_advance: 4,
    min_papa: "4",
    format: "virtual",
    study_level: "Pregrado",
    year: "2023",
    semester: "2023-1",
    description: "convocatoria zzzz",
    available_slots: "4",
    note: "convocatoria de astaiza"
  },
  {
    university_id: 10033,
    active: 0,
    begin_date: "01-22-2023",
    deadline_date: "01-24-2023",
    min_advance: 4,
    min_papa: "4",
    format: "virtual",
    study_level: "Doctorado",
    year: "2023",
    semester: "2023-1",
    description: "convocatoria muy chimba",
    available_slots: "4",
    note: "convocatoria del MIT"
  },
  {
    university_id: 10034,
    active: 0,
    begin_date: "01-22-2023",
    deadline_date: "01-24-2023",
    min_advance: 4,
    min_papa: "4",
    format: "Híbrida",
    study_level: "Pregrado",
    year: "2023",
    semester: "2023-1",
    description: "convocatoria mas o menos chimba",
    available_slots: "4",
    note: "convocatoria que puede ser chimba o no XD"
  },

];

db.prepare(`
   CREATE TABLE IF NOT EXISTS calls (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
       university_id INTEGER NOT NULL,
       active INTEGER NOT NULL,
       begin_date TEXT NOT NULL,
       deadline_date TEXT NOT NULL,
       min_advance INTEGER NOT NULL,
       min_papa TEXT NOT NULL,
       format TEXT NOT NULL,
       study_level TEXT NOT NULL,
       year TEXT NOT NULL,
       semester TEXT NOT NULL,
       description TEXT NOT NULL,
       available_slots TEXT NOT NULL,
       note TEXT NOT NULL
   ) 
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO calls VALUES (
         NULL,
         @university_id,
         @active,
         @begin_date,
         @deadline_date,
         @min_advance,
         @min_papa,
         @format,
         @study_level,
         @year,
         @semester,
         @description,
         @available_slots,
         @note
    )
   `);

  for (const call of dummyCalls) {
    stmt.run(call);
  }
}

initData();
