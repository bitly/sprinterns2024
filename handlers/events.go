package handlers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"main.go/models"
)

// creates a new event
func CreateEvent(c *gin.Context) {
	var event models.CreateEvent
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
    c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
    c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
    c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")
	// Call BindJSON to bind the received JSON to event +add error handling later
	if err := c.BindJSON(&event); err != nil {
		fmt.Printf("error %+v", err)
		c.IndentedJSON(http.StatusBadRequest, nil) //bad data
		return
	}

	_, err := dbmap.Query(
		"INSERT INTO event (title, date, time, location, host_name, description, contact_info, public_private, num_of_RSVP, max_attendees) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
		event.EventTitle, event.Date, event.Time, event.Location, event.HostName, event.Description, event.ContactInfo, event.PublicPrivate, event.NumRSVP, event.MaxAttendees)

	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, nil) //server error
		return
	}

	eventrow, err := dbmap.Query(
		"SELECT event_id, title, date, time, location, host_name, description, contact_info, public_private, num_of_RSVP, max_attendees FROM event ORDER BY event_id DESC LIMIT 1")
    	var events []models.GetEvent

	for eventrow.Next() {
		var event models.GetEvent
		// for each row, scan into the event struct
		err = eventrow.Scan(&event.EventID, &event.EventTitle, &event.Date, &event.Time, &event.Location, &event.HostName, &event.Description, &event.ContactInfo, &event.PublicPrivate, &event.NumRSVP, &event.MaxAttendees)
		if err != nil {
			c.IndentedJSON(http.StatusInternalServerError, nil) //server error
			return
		}
		// append the event into events array
		events = append(events, event)
	}
	fmt.Println(events[0])
	c.JSON(201, events[0]) //success
}

func GetEvent(c *gin.Context) {
	var events []models.GetEvent
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
    c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
    c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
    c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

	seeRow := c.Param("eventID")
	eventrow, err := dbmap.Query(
		"SELECT event_id, title, date, time, location, host_name, description, contact_info, public_private, num_of_RSVP, max_attendees FROM event WHERE event_id=?;",
		seeRow)

	for eventrow.Next() {
		var event models.GetEvent
		// for each row, scan into the event struct
		err = eventrow.Scan(&event.EventID, &event.EventTitle, &event.Date, &event.Time, &event.Location, &event.HostName, &event.Description, &event.ContactInfo, &event.PublicPrivate, &event.NumRSVP, &event.MaxAttendees)
		if err != nil {
			c.IndentedJSON(http.StatusInternalServerError, nil) //server error
			return
		}
		// append the event into events array
		events = append(events, event)
	}
	c.JSON(201, events) //success
}

func HandleCors(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
    c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
    c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
    c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")


    c.AbortWithStatus(204)
    return
    
}

// creates a new event
func UpdateEvent(c *gin.Context) {
	var updateEvent models.UpdateEvent
	var savedEvent []models.GetEvent

	id := c.Param("eventID")

	eventInfo, err := dbmap.Query(
		"SELECT event_id, title, date, time, location, host_name, description, contact_info, public_private, num_of_RSVP, max_attendees FROM event WHERE event_id=?;", id)

	for eventInfo.Next() {
		var event models.GetEvent
		// for each row, scan into the event struct
		err = eventInfo.Scan(&event.EventID, &event.EventTitle, &event.Date, &event.Time, &event.Location, &event.HostName, &event.Description, &event.ContactInfo, &event.PublicPrivate, &event.NumRSVP, &event.MaxAttendees)
		if err != nil {
			c.IndentedJSON(http.StatusInternalServerError, nil) //server error
			return
		}
		// append the event into events array
		savedEvent = append(savedEvent, event)
	}

	// Call BindJSON to bind the received JSON to event +add error handling later
	if err := c.BindJSON(&updateEvent); err != nil {
		c.IndentedJSON(http.StatusBadRequest, nil) //bad data
		return
	}

	if updateEvent.EventTitle == "" {
		updateEvent.EventTitle = savedEvent[0].EventTitle
	}

	if updateEvent.Date == "" {
		updateEvent.Date = savedEvent[0].Date
	}

	if updateEvent.Time == "" {
		updateEvent.Time = savedEvent[0].Time
	}

	if updateEvent.Location == "" {
		updateEvent.Location = savedEvent[0].Location
	}

	if updateEvent.HostName == "" {
		updateEvent.HostName = savedEvent[0].HostName
	}

	if updateEvent.Description == "" {
		updateEvent.Description = savedEvent[0].Description
	}

	if updateEvent.ContactInfo == "" {
		updateEvent.ContactInfo = savedEvent[0].ContactInfo
	}

	if updateEvent.PublicPrivate == "" {
		updateEvent.PublicPrivate = savedEvent[0].PublicPrivate
	}

	if updateEvent.NumRSVP == 0 {
		updateEvent.NumRSVP = savedEvent[0].NumRSVP
	}

	if updateEvent.MaxAttendees == 0 {
		updateEvent.MaxAttendees = savedEvent[0].MaxAttendees
	}

	_, err = dbmap.Query(
		"UPDATE event SET title = ?, date = ?, time = ?, location = ?, host_name = ?, description = ?, contact_info = ?, public_private = ?, num_of_RSVP = ?, max_attendees = ? WHERE event_id = ?",
		updateEvent.EventTitle, updateEvent.Date, updateEvent.Time, updateEvent.Location, updateEvent.HostName, updateEvent.Description, updateEvent.ContactInfo, updateEvent.PublicPrivate, updateEvent.NumRSVP, updateEvent.MaxAttendees, id)

	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, nil) //server error
		return
	}
	c.JSON(200, updateEvent) //success
}

func CreateRSVP(c *gin.Context) {
	var rsvp models.CreateRSVP

	// Call BindJSON to bind the received JSON to event +add error handling later
	if err := c.BindJSON(&rsvp); err != nil {
		fmt.Println(err)
		c.IndentedJSON(http.StatusBadRequest, nil) //bad data
		return
	}
	fmt.Println(rsvp)
	_, err := dbmap.Query(
		"INSERT INTO rsvp (event_id, name, rsvp) VALUES (?, ?, ?);",
		rsvp.EventID, rsvp.ResponderName, rsvp.RSVP)

	if err != nil {
		fmt.Println(err)
		c.IndentedJSON(http.StatusInternalServerError, nil) //server error
		return
	}
	c.JSON(201, rsvp) //success
}

func GetRSVP(c *gin.Context) {
	var rsvpList []models.GetRSVP

	seeRow := c.Param("responseID")
	RSVProw, err := dbmap.Query(
		"SELECT response_id, event_id, name, rsvp, comment_id FROM RSVP WHERE response_id=?;",
		seeRow)

	for RSVProw.Next() {
		var rsvp models.GetRSVP
		// for each row, scan into the event struct
		err = RSVProw.Scan(&rsvp.ResponseID, &rsvp.EventID, &rsvp.Name, &rsvp.RSVP, &rsvp.CommentID)
		if err != nil {
			c.IndentedJSON(http.StatusInternalServerError, nil) //server error
			fmt.Println(err)
			return
		}
		// append the event into events array
		rsvpList = append(rsvpList, rsvp)
	}
	c.JSON(201, rsvpList) //success

}

// deletes an event
func DeleteEvent(c *gin.Context) {
	event_ID := c.Param("eventID")

	_, err := dbmap.Query("Delete FROM rsvp WHERE event_id=?", event_ID)

	if err != nil {
		fmt.Println(err)
		c.IndentedJSON(http.StatusInternalServerError, nil) //server error
		return
	}

	_, err = dbmap.Query("Delete FROM comments WHERE event_id=?", event_ID)

	if err != nil {
		fmt.Println(err)
		c.IndentedJSON(http.StatusInternalServerError, nil) //server error
		return
	}

	_, err = dbmap.Query("Delete FROM event WHERE event_id=?", event_ID)

	if err != nil {
		fmt.Println(err)
		c.IndentedJSON(http.StatusInternalServerError, nil) //server error
		return
	}
	c.JSON(204, nil) //success
}

