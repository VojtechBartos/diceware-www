package main

import (
    "runtime"
    "os"

    "dicewa.re/server"
    "github.com/codegangsta/cli"
)

func main() {
    runtime.GOMAXPROCS(runtime.NumCPU())

    app := cli.NewApp()
    app.Name = "diceware"
    app.Usage = "Diceware password generator www/api"

    app.Commands = []cli.Command{
        {
            Name:   "start",
            Usage:  "Start server",
            Action: StartServer,
        },
    }
    app.Run(os.Args)
}

func StartServer(c *cli.Context) {
    app := server.NewApp()
    app.Run(":8000")
}
