# message-mixer
Message Encryption system 
## Problem Statement
Message Encryption service providing three different encryption menthod:
There are three encryption methods provided by this service:

1) “Caesar Cipher” in which the characters of the input message are shifted alphabetically by a given amount.
2) “Symbol Cipher” in which select characters from the input message are replaced with visually similar symbols.
3) “Reverse Cipher” in which each word of the input message is reversed in place.

Following command can be run to test the code.

```node message-mixer.js ['caesar'|'symbol'|'reverse'] [amount]```

``` $ node message-mixer.js caesar 4
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> lipps asvph
 
$ node message-mixer.js 'reverse'
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> olleh dlrow ```

