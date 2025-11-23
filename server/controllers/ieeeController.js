const db = require("../db");

exports.addIEEEMember = (req, res) => {
  const { first_name, last_name, email, phone, age, preferred_team, year, skills } = req.body;

  if (!first_name || !last_name || !email || !phone) {
    return res.status(400).json({ success: false, message: "Required fields missing" });
  }

  const sql = `
    INSERT INTO ieee_members 
    (first_name, last_name, email, phone, age, preferred_team, year, skills)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [first_name, last_name, email, phone, age, preferred_team, year, skills],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, message: "DB Error" });
      return res.json({ success: true, message: "IEEE Member added!" });
    }
  );
};
