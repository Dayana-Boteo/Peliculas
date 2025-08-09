module.exports = {
  HOST: "ep-bold-recipe-afxcmk1m-pooler.c-2.us-west-2.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_UKwPIMuQa34s",
  DB: "neondb",
  dialect: "postgres",
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
