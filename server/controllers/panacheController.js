const db = require("../db");

// Initialize table
const initializeDatabase = async () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS panache_members (
      id INT AUTO_INCREMENT PRIMARY KEY,
      full_name VARCHAR(255) NOT NULL,
      student_id VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      category VARCHAR(100),
      experience VARCHAR(100),
      style TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
    db.query(sql, (err) => {
        if (err) console.error("Error creating panache table:", err);
        else console.log("Panache members table ready");
    });
};

const addMember = (req, res) => {
    const { full_name, student_id, email, phone, category, experience, style } = req.body;

    if (!full_name || !student_id || !email || !phone) {
        return res.status(400).json({ success: false, message: "Required fields missing" });
    }

    const sql = `
    INSERT INTO panache_members 
    (full_name, student_id, email, phone, category, experience, style)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

    db.query(
        sql,
        [full_name, student_id, email, phone, category, experience, style],
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
