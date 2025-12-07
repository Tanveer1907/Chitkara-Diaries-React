const db = require("../db");

// Initialize table
const initializeDatabase = async () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS cricket_members (
      id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      role VARCHAR(100),
      batting_style VARCHAR(100),
      achievements TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
    db.query(sql, (err) => {
        if (err) console.error("Error creating cricket table:", err);
        else console.log("Cricket members table ready");
    });
};

const addMember = (req, res) => {
    console.log("Adding Cricket Member:", req.body);
    const { first_name, last_name, email, phone, role, batting_style, achievements } = req.body;

    if (!first_name || !last_name || !email || !phone) {
        console.log("Missing fields");
        return res.status(400).json({ success: false, message: "Required fields missing" });
    }

    const sql = `
    INSERT INTO cricket_members 
    (first_name, last_name, email, phone, role, batting_style, achievements)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

    db.query(
        sql,
        [first_name, last_name, email, phone, role, batting_style, achievements],
        (err, result) => {
            if (err) {
                console.error("DB Error in cricketController:", err);
                return res.status(500).json({ success: false, message: "DB Error" });
            }
            console.log("Cricket Member Added. Insert ID:", result.insertId);
            return res.json({ success: true, message: "Member added successfully!" });
        }
    );
};

module.exports = { initializeDatabase, addMember };
