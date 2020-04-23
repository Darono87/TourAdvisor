const s = require("sequelize");

class Place extends s.Model{

};

const PlaceInit = (DB) => {

  Place.init({

    latitude: {
      type: s.DOUBLE,
      allowNull: false,
      validate: {
        min: -90,
        max: 90
      }
    },
    longitude: {
      type: s.DOUBLE,
      allowNull: false,
      validate: {
        min: -180,
        max: 180
      }
    },
    name: {
      type: s.STRING,
      allowNull: false
    },
    category: {
      type: s.STRING,
      allowNull: false,
      defaultValue: 'NO_CATEGORY',
      validate: {
        isIn: ['NO_CATEGORY','SHOPS','SIGHTS','HOTELS']
      }
    },
    iconPath: {
      type: s.STRING,
      validate: {
        notEmpty: true
      }
    }

  },{
    sequelize: DB,
    modelName: 'place'
  });

  return Place;
};

module.exports = {Place,PlaceInit};