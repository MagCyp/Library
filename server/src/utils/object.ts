const pick = (obj, fields) => {
  const picked = {};

  for (const key in obj) {
    if (fields.includes(key)) {
      picked[key] = obj[key];
    }
  }

  return picked;
};

const skip = (obj, fields) => {
  const skipped = {};

  for (const key in obj) {
    if (!fields.includes(key)) {
      skipped[key] = obj[key];
    }
  }

  return skipped;
};

const isEmptyObject = (obj) =>
  typeof obj === "object" &&
  Object.keys(obj).length === 0 &&
  obj.constructor === Object;

const objects = { isEmptyObject, pick, skip };

export { objects };
