const generateUniqueId = require("../utils/generateUniqueId");

const connection = require("../database/connection");

module.exports = {
  async list(request, response) {
    const contacts = await connection("contacts").select();

    if (!contacts) {
      return response.status(400).json({ error: "Nenhum contato encontrado." });
    }

    return response.json(contacts);
  },

  async create(request, response) {
    const { name, email, subject, message } = request.body;

    // criando ID
    const id = generateUniqueId();

    await connection("contacts").insert({
      id,
      name,
      email,
      subject,
      message,
    });

    return response.json({ id });
  },
};
