package main

import (
    "os"
    "fmt"
    "strings"

    "github.com/codegangsta/cli"
)

var version = "1.0.0"

func main()  {
    app := cli.NewApp()
    app.Name = "diceware"
    app.Usage = "Diceware passphrase generator tool"
    app.Version = version
    app.Flags = []cli.Flag {
        cli.IntFlag{
            Name:  "parts",
            Value: 5,
            Usage: "number of passphrase parts",
        },
    }
    app.Action = func(c *cli.Context) {
        passphrase := GeneratePassphrase(c.GlobalInt("parts"))

        fmt.Println(strings.Join(passphrase[:], " "))
        fmt.Println(strings.Join(passphrase[:], ""))
    }
    app.Run(os.Args)
}
