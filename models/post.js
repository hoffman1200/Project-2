module.exports= function(connection, DataTypes) {
    var Post = connection.define("Post", {
        title: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        category: {
          type: DataTypes.TEXT,
          allowNull: false,
          len: [1]
        },
        body: {
          type: DataTypes.TEXT,
          allowNull: false,
          len: [1]
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            len: [1]
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [1]
        },
        latitude: {
          type: DataTypes.FLOAT(100, 10),
          allowNull: true,
          len: [1]
        },
        longitude: {
          type: DataTypes.FLOAT(100, 10),
          allowNull: true,
          len: [1]
        }
      });

    return Post;        
};
