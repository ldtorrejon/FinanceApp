package routes

import (
	"fmt"
	"net/http"
)

func AuthHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Testing the auth api")
}

func SetupRoutes() {
	http.HandleFunc("/api/auth", AuthHandler)
}