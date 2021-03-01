const readline = require('readline')
const { execSync } = require('child_process')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let complete = false

rl.question('Sauvegarder la base de donnée avant de stopper les conteneurs ? [O/n] ', function (yesno) {
  let command
  if (['n', 'no', 'non'].includes(yesno.toLowerCase())) {
    command = 'docker-compose -f docker-compose.yml -f docker-compose.dev.yml down '
  } else {
    command = 'docker exec mysqldb mysqldump -u root --password=root --all-databases > ./_docker/data/db_%date%-%time::=-%.sql && docker exec mysqldb mysqldump -u root --password=root --all-databases > ./_docker/data/last.sql && docker-compose -f docker-compose.yml -f docker-compose.dev.yml down'
  }
  execSync(command)
  complete = true
  rl.close()
})

rl.on('close', function () {
  if (!complete) {
    console.log('\nAnnulation')
  }
  process.exit(0)
})
