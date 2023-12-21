const LoginModel = require("../models/Login"); // Import the Login model

// Controller to add staff summary
exports.addLogin = async (req, res) => {
  try {
    const formData = req.body;

    // Create a new staff summary document with only 'staffid,' 'password,' and 'specialization'
    const loginData = new LoginModel({
      staffid: formData.staffid,
      password: formData.password,
      specialization: formData.specialization,
    });
    await loginData.save();

    res.json({ success: true, message: "Staff summary added successfully" });
  } catch (error) {
    console.error("Error adding staff summary:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred while adding staff summary",
      });
  }
};

// Controller to retrieve credentials based on role and username
exports.getCredentials = async (req, res) => {
  try {
    const { role, username } = req.body;

    // Search for a user with the given role and username
    const user = await LoginModel.findOne({
      specialization: role,
      staffid: username,
    });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const { staffid, password, specialization } = user;

    res.json({
      success: true,
      credentials: { staffid, password, specialization },
    });
  } catch (error) {
    console.error("Error retrieving credentials:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred while retrieving credentials",
      });
  }
};

// Controller to store staff ID for the authenticated user
exports.storeStaffID = async (req, res) => {
  try {
    // Inside the /api/storeStaffID route handler
    console.log("Received a request to store staff ID");
    const token = req.header("Authorization");
    console.log("Token:", token); // Check if the token is correctly received

    // Your code to store the staff ID and respond to the request
  } catch (error) {
    console.error("Error storing Staff ID:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// >>>>>>> db1cd2a5ae3e20af285f7ca6708809391a7d4a59
