/* 
    copy contracts from source project directories to the contract 
    directory of the web project so it can pick them up during runtime
*/

const fs = require('fs');

//C:\lib\2DEV\illi-eth\build\contracts
const ethContractName = 'UpikoEth.json';
const ethContractSource = './../upiko-eth/build/contracts/';
const ethContractDestination = './src/contracts/';
const sideChainContractName = 'UpikoApp.json';
const sideChainContractSource = './../upiko-schain/build/contracts/';
const sideChainContractDestination = ethContractDestination;


function moveFile(from, to){
    // destination.txt will be created or overwritten by default.
    fs.copyFile(from, to, (err) => {
        if (err) throw err;
        console.log(`source ${from} was copied to destination ${to}`);
    });
}


    console.log("copying contracts...");  

    moveFile(ethContractSource + ethContractName, ethContractDestination + ethContractName);
    moveFile(sideChainContractSource + sideChainContractName, sideChainContractDestination + sideChainContractName);



    console.log("...copying done");  