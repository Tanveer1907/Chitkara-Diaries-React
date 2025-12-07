const db = require("../db");

// Initialize table
const initializeDatabase = async () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS natraj_members (
      id INT AUTO_INCREMENT PRIMARY KEY,
      full_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
    db.query(sql, (err) => {
        if (err) console.error("Error creating natraj table:", err);
        else console.log("Natraj members table ready");
    });
};

const addMember = (req, res) => {
    const { full_name, email, phone } = req.body;

    if (!full_name || !email || !phone) {
        return res.status(400).json({ success: false, message: "Required fields missing" });
    }

    const sql = `
    INSERT INTO natraj_members 
    (full_name, email, phone)
    VALUES (?, ?, ?)
  `;

    db.query(
        sql,
        [full_name, email, phone],
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
