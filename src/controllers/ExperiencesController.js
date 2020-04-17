const generateUniqueId = require("../utils/generateUniqueId");

const connection = require("../database/connection");

module.exports = {
  async list(request, response) {
    const experiences = await connection("experiences").select();

    if (!experiences) {
      return response
        .status(400)
        .json({ error: "Nenhuma experiência encontrada." });
    }

    return response.json(experiences);
  },

  async create(request, response) {
    const {
      local,
      dateBegin,
      dateEnd,
      description,
      image,
      isActual,
    } = request.body;

    // criando ID
    const id = generateUniqueId();

    await connection("experiences").insert({
      id,
      local,
      dateBegin,
      dateEnd,
      description,
      image,
      isActual,
    });

    return response.json({ id });
  },
};
