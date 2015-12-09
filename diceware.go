package diceware

import (
    "bytes"
    "strconv"
    "crypto/rand"
    "math/big"
)

func GeneratePassphrase(numberOfParts int) []string {
    passphrase := make([]string, numberOfParts)
    max := *big.NewInt(5)

    for i := 0; i < numberOfParts; i++ {
        var part bytes.Buffer

        for j := 0; j < int(max.Int64()); j++ {
            index, _ := rand.Int(rand.Reader, &max)
            part.WriteString(strconv.Itoa(int(index.Int64()) + 1))
        }

        passphrase[i] = words[part.String()]
    }

    return passphrase
}
