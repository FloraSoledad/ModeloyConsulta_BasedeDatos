module.exports = (sequelize, dataTypes) => {
    const alias = "Movie";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoincrement: true,
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false,
        },
        awars: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultvalue: '0',
        },
        realese_date: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        length: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        genre_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    };
    const config = {
        tableName: "movies",
        timesName: true,
        underscored: true
    }
    
    const Movie = sequelize.define(alias, cols, config);
    
    return Movie;
};
