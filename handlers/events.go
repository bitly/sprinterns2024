package handlers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	eventsdb "main.go/internal/database"
	"main.go/models"
)

func setCors(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")
}

func HandleCors(c *gin.Context) {
	setCors(c)

	c.AbortWithStatus(204)
	return

}

// creates a new event
func CreateEvent(c *gin.Context) {
	setCors(c)
	var event models.Event

	// Call BindJSON to bind the received JSON to event +add error handling later
	if err := c.BindJSON(&event); err != nil {
		fmt.Printf("ERROR: %+v", err)
		c.IndentedJSON(http.StatusBadRequest, nil) //bad data
		return
	}

	createdEvent, err := eventsdb.CreateEvent(event)
	if err != nil {
		fmt.Printf("ERROR: %+v", err)
		c.IndentedJSON(http.StatusInternalServerError, nil) //server error
		return
	}

	c.JSON(201, createdEvent) //success
}

func GetEvent(c *gin.Context) {
	setCors(c)

	eventID := c.Param("eventID")

	event, err := eventsdb.GetEvent(eventID)
	if err != nil {
		fmt.Printf("ERROR: %+v", err)
		c.IndentedJSON(http.StatusInternalServerError, err) //server error
		return
	}

	if event == nil {
		c.IndentedJSON(http.StatusNotFound, nil) //event not found
		return
	}
	c.JSON(201, event) //success
}
