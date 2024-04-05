FROM golang:1.20.10-alpine

WORKDIR /usr/src/app
COPY ./hello.go .
EXPOSE 3000

ENTRYPOINT [ "go", "run", "hello.go" ]

RUN touch hello.go