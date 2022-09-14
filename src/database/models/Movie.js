const alias = "Movie";
const cols = {
    id: {
        type: dataTypes.INTEGER
    }
}

const Movie = sequelize.define(alias, cols, config);

return Movie; 