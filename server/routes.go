package server

import (
    "strings"
    "strconv"

    "github.com/gin-gonic/gin"
)

func IndexRoute(c *gin.Context) {
    c.HTML(200, "index.templ.html", gin.H{
        "title": "Diceware passphrase generator",
    })
}

func ApiGeneratePassphraseRoute(c *gin.Context) {
    // extracting length of password from query parameters
    var length int = 5
    if len(c.Query("parts")) > 0 {
        parts, _ := strconv.ParseInt(c.Query("parts"), 10, 64)
        length = int(parts)

        // if its not matching number range, throw 400 error request
        if length <= 0 || 99 < length {
            c.JSON(400, gin.H{
                "meta": gin.H{
                    "message": "Parts need to be integer in range <1,99>.",
                },
            })
            return
        }
    }

    // generate password
    passphrase := GeneratePassword(length)

    // send success response
    c.JSON(200, gin.H{
        "meta": gin.H{
            "message": "Ok.",
        },
        "data": gin.H{
            "passphrase": gin.H{
                "text": strings.Join(passphrase, ""),
                "parts": passphrase,
            },
        },
    })
}
