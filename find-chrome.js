import { exec } from 'child_process';

exec('which chromium', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error running command: ${err}`);
    return;
  }
  if (stderr) {
    console.error(`Command stderr: ${stderr}`);
    return;
  }
  console.log(`Chromium path: ${stdout.trim()}`);
});
