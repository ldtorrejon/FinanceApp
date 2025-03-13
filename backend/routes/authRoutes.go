package routes

import (
	"fmt"
	"net/http"

	"github.com/ldtorrejon/MoneyChecker/backend/routes/security"
)

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	token, err := security.GenerateToken("testuser")
	if err != nil {
		http.Error(w, "Could not generate token", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "Token: %s", token)
}

func SetupRoutes() {
	http.HandleFunc("/api/auth/login", LoginHandler)
}