package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/ldtorrejon/MoneyChecker/backend/database"
	"github.com/ldtorrejon/MoneyChecker/backend/routes"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello, Go Backend!")
}

func main() {

	database.ConnectDb();

	http.HandleFunc("/", handler)
	routes.SetupRoutes()
	fmt.Println("Server running on port 8080")
	
	log.Fatal(http.ListenAndServe(":8080", nil))
}
