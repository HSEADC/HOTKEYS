const {spawn} = require('child_process')
const pyFile = spawn('python', ['src/lib/tasks/generate-pages.py'])

pyFile.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})

pyFile.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`)
})

pyFile.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
})
