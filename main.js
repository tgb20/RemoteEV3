const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

ssh.connect({
    host: '192.168.2.5',
    username: 'robot',
    password: 'maker'
}).then(() => {
    ssh.putFile('main.py', '/home/robot/main.py').then(() => {
        console.log('File Copied!');
        ssh.execCommand('chmod +x main.py').then((result) => {
            console.log(result);
            ssh.execCommand('./main.py').then((result) => {
                console.log(result);
            });
        });
    }, (error) => {
        console.log(error);
    });
});