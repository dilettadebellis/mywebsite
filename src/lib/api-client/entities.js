import { connection } from "./index";

async function getAll(entityName, params, headers = {}) {
  return await connection.get(`/entities/${entityName}`, {
    ...headers,
    ...params,
  });
}

async function getById(entityName, id, params, headers = {}) {
  return await connection.get(`/entities/${entityName}/${id}`, {
    ...headers,
    ...params,
  });
}

const entities = {
  getAll,
  getById,
};

export default entities;
