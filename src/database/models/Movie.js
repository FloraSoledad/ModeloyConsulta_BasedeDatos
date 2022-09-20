module.exports = (sequelize, dataTypes) => {
    const alias = "Movie";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false,
        },
        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: '0',
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        length: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        genre_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
    };
    const config = {
        tableName: "movies",
        timestamps: true, /* marca de tiempo siempre nombrar si la tiene o no(false) aunqe no este */
        underscored: true 
    }
    
    const Movie = sequelize.define(alias, cols, config); /* cols = columna */
    
    return Movie; /* retorna el modelo */
};
