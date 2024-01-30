const { caesarCipher, symbolCipher, reverseCipher} = require('./encryption');

const encryptionMethod = getEncryptionMethod()
process.stdin.on('data', (userInput) => {
    displayEncryption( encryptionMethod, userInput)
} )


function getEncryptionMethod(){
    let encryptionMethod;
    const encryptionType = process.argv[2];
    if(encryptionType === 'symbol'){
        encryptionMethod =symbolCipher;
    } else if(encryptionType === 'reverse'){
        encryptionMethod =reverseCipher;
    } else if(encryptionType === 'caeser'){
        let amount = Number(process.argv[3])
        if(Number.isNaN(amount)){
            process.stdout.write('Please enter valid argument \n')
            process.exit()
        } 
        encryptionMethod = (str) => caesarCipher( str, amount);
    }
        else{
            process.stdout.write('Please select valid encryption type\n');
            process.exit();
    }
     
    
    process.stdout.write('Please enter your data for encryption \n');
    
    return encryptionMethod;

}

function displayEncryption( encryptionMethod, userInput){
    let str = userInput.toString().trim();
    let output = encryptionMethod(str);
    process.stdout.write(`your Encrypted data is: ${output} \n`);
    process.exit();
}

