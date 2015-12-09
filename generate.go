package main

import (
    "bytes"
    "io/ioutil"
    "strings"
    "strconv"
    "path/filepath"
    "crypto/rand"
    "math/big"
)

func GeneratePassphrase(numberOfParts int) []string {
    words := loadWords("./wordslist.txt")
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

func loadWords(path string) map[string]string {
    absolutePath, _ := filepath.Abs(path)
    content, _ := ioutil.ReadFile(absolutePath)
    lines := strings.Split(string(content), "\n")
    words := make(map[string]string, len(lines) - 1)

    for _, line := range lines {
        parts := strings.Split(line, "  ")
        if len(parts) == 2 {
            words[parts[0]] = parts[1]
        }
    }

    return words
}
