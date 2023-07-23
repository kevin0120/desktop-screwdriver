const {exec} = require('child_process');

function killProcessesByName(processName) {
    // 执行系统命令获取进程列表
    const command = `taskkill /F /IM ${processName}`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error killing process: ${error.message}`);
            return;
        }

        console.log(`Process "${processName} killed successfully.`);
  });
}


module.exports = killProcessesByName;

