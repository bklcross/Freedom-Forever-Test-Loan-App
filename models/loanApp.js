module.exports = function (sequelize, DataTypes) {
  var Loan_Application = sequelize.define("Loan_Application", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state_abbrev: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ssn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pre_tax_income: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Loan_Application;
};
