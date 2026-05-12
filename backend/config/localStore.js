const fs = require('fs/promises');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

const ensureDataDir = async () => {
  await fs.mkdir(dataDir, { recursive: true });
};

const readCollection = async (collection) => {
  await ensureDataDir();
  const filePath = path.join(dataDir, `${collection}.json`);

  try {
    const content = await fs.readFile(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
};

const insertRecord = async (collection, record) => {
  const rows = await readCollection(collection);
  const nextRecord = {
    id: rows.length ? Math.max(...rows.map((row) => row.id || 0)) + 1 : 1,
    ...record,
    created_at: new Date().toISOString(),
  };

  rows.unshift(nextRecord);
  await fs.writeFile(path.join(dataDir, `${collection}.json`), JSON.stringify(rows, null, 2));
  return nextRecord;
};

module.exports = { readCollection, insertRecord };
