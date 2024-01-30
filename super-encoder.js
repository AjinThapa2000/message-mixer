const { caesarCipher, reverseCipher, symbolCipher }= require('./encryption');
//encoding and decoding function
const randomAmount = 10
//message encoding function 
const encoder = (str) => {
    return reverseCipher(symbolCipher(caesarCipher(str, randomAmount)));

}


// message decoding fuction
const decoding  = (str) => {
    return caesarCipher(symbolCipher(reverseCipher(str)),randomAmount*-1);

}


const handleOutput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if(process.argv[2] === 'encode'){
        output = encoder(str);
    }
    if( process.argv[2] === 'decode'){
        output = decoding(str);
    }
    process.stdout.write(output + "\n");
    process.exit();
}

process.stdout.write(' Please enter message for encoding or decoding \n');
process.stdin.on('data', handleOutput);

