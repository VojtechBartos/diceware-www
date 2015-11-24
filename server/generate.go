package server

import (
    "io/ioutil"
    "strings"
    "path/filepath"
    "crypto/rand"
    "math/big"
)

func LoadWords(path string) []string {
    absolutePath, _ := filepath.Abs(path)
    content, _ := ioutil.ReadFile(absolutePath)
    lines := strings.Split(string(content), "\n")
    words := make([]string, len(lines) - 1)

    for index, line := range lines {
        parts := strings.Split(line, "  ")
        if len(parts) == 2 {
            words[index] = parts[1]
        }
    }

    return words
}

func GeneratePassword(parts int) []string {
    // TODO(vojta) figure out relative pats instead of "server/*"
    words := LoadWords("server/data/words.txt")
    passphrase := make([]string, parts)
    max := *big.NewInt(int64(len(words) - 1))

    for i := 0; i < parts; i++ {
        index, _ := rand.Int(rand.Reader, &max)

        passphrase[i] = words[index.Int64()]
    }

    return passphrase
}
