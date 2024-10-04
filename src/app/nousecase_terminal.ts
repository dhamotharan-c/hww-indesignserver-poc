import { spawn } from 'child_process';

export default function openTerminalWithCurl(updatedXmlFilePath: string) {
  const curlCommand = `curl -o ${updatedXmlFilePath}`;
  // const curlCommand = `curl -X POST -H "Content-Type: text/xml" --data @${updatedXmlFilePath}http://10.2.13.169:12345/service`;
  const childProcess = spawn('bash', ['~', curlCommand], {
    shell: true,
  });

  childProcess.stdout.on('data', (data: Buffer) => {
    console.log('Terminal output:', data.toString());
  });

  childProcess.stderr.on('data', (data: Buffer) => {
    console.error('Terminal error:', data.toString());
  });
}