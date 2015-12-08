package server

import "github.com/gin-gonic/gin"

type App struct {
    Engine *gin.Engine
}

func NewApp() *App {
    engine := gin.Default()

    app := &App{
        Engine: engine,
    }

    // TODO(vojta) figure out relative pats instead of "server/*"
    app.Engine.LoadHTMLGlob("server/templates/*.templ.html")
    app.Engine.Static("/static", "server/static")

    app.Engine.GET("/api/passphrase/", ApiGetPassphraseRoute)
    app.Engine.GET("/", IndexRoute)

    return app
}

func (app *App) Run(port string) {
    app.Engine.Run(port)
}
