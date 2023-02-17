import { exec } from 'child_process';

exec(
  'find / -type f -name "chromium" -print -quit 2>/dev/null',
  (err, stdout, stderr) => {
    if (err) {
      console.error(`Error running command: ${err}`);
      return;
    }
    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
      return;
    }
    console.log(`Chromium path: ${stdout.trim()}`);
  },
);
