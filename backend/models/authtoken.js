module.exports = (sequelize, DataTypes) => {
  const AuthToken = sequelize.define("AuthToken", {
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "compositeIndex",
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  // set up the associations so we can make queries that include the related
  // objects
  AuthToken.associate = function ({User}) {
    AuthToken.belongsTo(User);
  };

  // generates a random 15 character token and associates it with a user
  AuthToken.generate = async function (id) {
    if (!id) {
      throw new Error("AuthToken requires a user ID");
    }

    let token = "";

    const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 15; i++) {
      token += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }

    return AuthToken.create({token, id});
  };

  return AuthToken;
};
