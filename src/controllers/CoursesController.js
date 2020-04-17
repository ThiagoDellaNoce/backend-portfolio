const generateUniqueId = require("../utils/generateUniqueId");

const connection = require("../database/connection");

module.exports = {
  async list(request, response) {
    const courses = await connection("courses").select();

    if (!courses) {
      return response.status(400).json({ error: "Nenhum cursos encontrado." });
    }

    return response.json(courses);
  },

  async create(request, response) {
    const { title, platform, description } = request.body;

    // criando ID
    const id = generateUniqueId();

    await connection("courses").insert({
      id,
      title,
      platform,
      description,
    });

    return response.json({ id });
  },
};
