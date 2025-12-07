const db = require("../db");

// Initialize table
const initializeDatabase = async () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS basketball_members (
      id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      role VARCHAR(100),
      level VARCHAR(100),
      achievements TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
    db.query(sql, (err) => {
        if (err) console.error("Error creating basketball table:", err);
        else console.log("Basketball members table ready");
    });
};

const addMember = (req, res) => {
    const { first_name, last_name, email, phone, role, level, achievements } = req.body;

    if (!first_name || !last_name || !email || !phone) {
        return res.status(400).json({ success: false, message: "Required fields missing" });
    }

    const sql = `
    INSERT INTO basketball_members 
    (first_name, last_name, email, phone, role, level, achievements)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

    db.query(
        sql,
        [first_name, last_name, email, phone, role, level, achievements],
        (err, result) => {
            if (err) {
                console.error("DB Error:", err);
                return res.status(500).json({ success: false, message: "DB Error" });
            }
            return res.json({ success: true, message: "Member added successfully!" });
        }
    );
};

module.exports = { initializeDatabase, addMember };
