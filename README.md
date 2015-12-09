# Diceware passphrase generator tool

Diceware is a method for creating passphrases, passwords, and other cryptographic variables using an ordinary die from a pair of dice as a hardware random number generator. For each word in the passphrase, five rolls of the dice are required. The numbers from 1 to 6 that come up in the rolls are assembled as a five-digit number, e.g. 43146. That number is then used to look up a word in a word list. In the English list 43146 corresponds to munch. Lists have been compiled for several languages, including Chinese, English, Finnish, German, Italian, Maori, Polish, Romanian, Russian, Spanish and Swedish. A Diceware word list is any list of 6^5 = 7,776 unique words, preferably ones the user will find easy to spell and to remember. The contents of the word list do not have to be protected or concealed in any way, as the security of a Diceware passphrase is in the number of words selected, and the number of words each selected word could be taken from.

## Todo's

- write tests and add Travis CI support
