FROM golang:onbuild
MAINTAINER Vojtech Bartos <hi@vojtech.me>

RUN go get github.com/gin-gonic/gin
RUN go get github.com/codegangsta/cli

EXPOSE 8000
