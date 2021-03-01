function removeQuotes (str) {
  return str.split('"').join('')
}
module.exports = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  analyticsID: process.env.GA_ID
}
