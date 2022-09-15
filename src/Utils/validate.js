const errorMessages = {
  name: "invalid name",
  description: "invalid description",
  color: "invalid color",
  date: "invalid date",
  demandID: "invalid demandID",
  sectorID: "invalid sectorID",
  categoryID: "invalid category id",
  userID: "invalid user id",
  userName: "invalid userName",
  userSector: "invalid sector",
  userID: "invalid user",
}

const validateOpen = (open) => {
  const regex = /^(true|false)$/;
  return regex.test(open);
};

const validateImportant = (important) => {
  const regex = /^(true|false)$/;
  return regex.test(important);
};

const validateSectorID = (sectorID) => {
  const errors = [];
  if (!sectorID) {
    errors.push(errorMessages['sectorID']);
  }
  return errors;
};

const validateCategory = (name, description, color) => {
  const errors = [];

  if (!name) {
    errors.push(errorMessages['name']);
  } if (!description) {
    errors.push(errorMessages['description']);
  } if (!color) {
    errors.push(errorMessages['color']);
  }

  return errors;
};

const validateAlert = (name, description, date, demandID, sectorID) => {
  const errors = [];

  if (!name) {
    errors.push(errorMessages['name']);
  } if (!description) {
    errors.push(errorMessages['description']);
  } if (!date) {
    errors.push(errorMessages['date']);
  } if (!demandID) {
    errors.push(errorMessages['demandID']);
  } if (!sectorID) {
    errors.push(errorMessages['sectorID']);
  }

  return errors;
};

const validateDemand = (
  name, description, categoryID, sectorID, clientID, userID,
) => {
  const errors = [];

  if (!name) {
    errors.push(errorMessages['name']);
  } if (!description) {
    errors.push(errorMessages['description']);
  } if (categoryID.length === 0) {
    errors.push(errorMessages['categoryID']);
  } if (!sectorID) {
    errors.push("invalid sector id");
  } if (!clientID) {
    errors.push("invalid client id");
  } if (!userID) {
    errors.push("invalid user id");
  }

  return errors;
};

const validateDemandUpdate = (
  userName, description, visibilityRestriction, userSector, userID, important,
) => {
  const errors = [];

  if (!userName) {
    errors.push(errorMessages['userName']);
  } if (!description) {
    errors.push(errorMessages['description']);
  } if (!validateOpen(visibilityRestriction)) {
    errors.push("invalid visibilityRestriction");
  } if (!userSector) {
    errors.push(errorMessages['userSector']);
  } if (!userID) {
    errors.push(errorMessages['userID']);
  } if (!validateImportant(important)) {
    errors.push("invalid important");
  }

  return errors;
};

module.exports = {
  validateCategory,
  validateAlert,
  validateDemand,
  validateOpen,
  validateDemandUpdate,
  validateSectorID,
};
