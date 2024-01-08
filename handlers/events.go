package handlers

import (
	"fmt"
	"net/http"
	"strconv"

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
	intEventID, err := strconv.Atoi(eventID)
	if err != nil {
		fmt.Printf("ERROR: %+v", err)
		c.IndentedJSON(http.StatusBadRequest, nil) //bad data
		return
	}

	event, err := eventsdb.GetEvent(intEventID)
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

// creates a new RSVP
func CreateRSVP(c *gin.Context) {
	setCors(c)
	var rsvp models.RSVP

	// Call BindJSON to bind the received JSON to event +add error handling later
	if err := c.BindJSON(&rsvp); err != nil {
		fmt.Printf("ERROR: %+v", err)
		c.IndentedJSON(http.StatusBadRequest, nil) //bad data
		return
	}

	// populated with an event
	getEvent, err := eventsdb.GetEvent(rsvp.EventID)
	if err != nil {
		fmt.Printf("ERROR: %+v", err)
		c.IndentedJSON(http.StatusInternalServerError, nil) //server error
		return
	}

	getRSVPById, err := eventsdb.GetRSVPByEventId(rsvp.EventID)
	if err != nil {
		fmt.Printf("ERROR: %+v", err)
		c.IndentedJSON(http.StatusInternalServerError, nil) //server error
		return
	}

	if !(getEvent.MaxAttendees > len(getRSVPById)) {
		fmt.Println("ERROR, MAX RSVPs.")
		c.IndentedJSON(http.StatusBadRequest, nil) //bad data
		return
	}




	createdRSVP, err := eventsdb.CreateRSVP(rsvp)
	if err != nil {
		fmt.Printf("ERROR: %+v", err)
		c.IndentedJSON(http.StatusInternalServerError, nil) //server error
		return
	}


	c.JSON(201, createdRSVP) //success
}

func GetRSVPByEventId(c *gin.Context) {
	setCors(c)

	eventID := c.Param("eventID")
	intEventID, err := strconv.Atoi(eventID)
	if err != nil {
		fmt.Printf("ERROR: %+v", err)
		c.IndentedJSON(http.StatusBadRequest, nil) //bad data
		return
	}

	rsvp, err := eventsdb.GetRSVPByEventId(intEventID)
	if err != nil {
		fmt.Printf("ERROR: %+v", err)
		c.IndentedJSON(http.StatusInternalServerError, err) //server error
		return
	}

	if rsvp == nil {
		c.IndentedJSON(http.StatusNotFound, nil) //rsvp not found
		return
	}
	c.JSON(201, rsvp) //success
}