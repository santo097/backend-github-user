import { DataTypes } from "sequelize";
import { sequelize } from '../Utilities/Database.js';

export const GitUser = sequelize.define("gituser", {
    login:{
        type:DataTypes.STRING,
    },
    iduser:{
        type:DataTypes.BIGINT,
    },
    node_id:{
        type:DataTypes.STRING,
    },
    avatar_url:{
        type:DataTypes.STRING,
    },
    url:{
        type:DataTypes.STRING,
    },
    html_url:{
        type:DataTypes.STRING,
    },
    type:{
        type:DataTypes.STRING,
    },
    site_admin:{
        type:DataTypes.BOOLEAN,
    },
    name:{
        type:DataTypes.STRING,

    },
    company:{
        type:DataTypes.STRING,

    },
    blog:{
        type:DataTypes.STRING,

    },
    twitter_username:{
        type:DataTypes.STRING,

    },
    public_repos:{
        type:DataTypes.INTEGER,

    },
    public_gists:{
        type:DataTypes.INTEGER,

    },
    followers:{
        type:DataTypes.INTEGER,

    },
    following:{
        type:DataTypes.INTEGER,

    },
});
