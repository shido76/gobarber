module.exports = {
  dialect: 'postgres',
  host: '172.27.0.2',
  username: 'postgres',
  password: '123456',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
