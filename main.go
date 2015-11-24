package main

import (
    "runtime"
    "os"
    "./server"

    "github.com/codegangsta/cli"
)

func main() {
    runtime.GOMAXPROCS(runtime.NumCPU())

    app := cli.NewApp()
    app.Name = "diceware"
    app.Usage = "Diceware password generator"

    app.Commands = []cli.Command{
        {
            Name:   "run",
            Usage:  "Runs server",
            Action: RunServer,
        },
    }
    app.Run(os.Args)
}

func RunServer(c *cli.Context) {
    app := server.NewApp()
    app.Run(":8000")
}
