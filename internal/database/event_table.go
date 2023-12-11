package eventsdb

import (
	"main.go/models"
)

func CreateEvent(event models.Event) (*models.Event, error) {
	_, err := dbmap.Query(
		"INSERT INTO event (title, date, time, location, host_name, description, contact_info, public_private, num_of_RSVP, max_attendees, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
		event.EventTitle, event.Date, event.Time, event.Location, event.HostName, event.Description, event.ContactInfo, event.PublicPrivate, event.NumRSVP, event.MaxAttendees, event.ImageURL)

	if err != nil {
		return nil, err
	}

	eventrow, err := dbmap.Query(
		"SELECT event_id, title, date, time, location, host_name, description, contact_info, public_private, num_of_RSVP, max_attendees, image_url FROM event ORDER BY event_id DESC LIMIT 1")
	var events []models.Event

	for eventrow.Next() {
		var event models.Event
		// for each row, scan into the event struct
		err = eventrow.Scan(&event.EventID, &event.EventTitle, &event.Date, &event.Time, &event.Location, &event.HostName, &event.Description, &event.ContactInfo, &event.PublicPrivate, &event.NumRSVP, &event.MaxAttendees, &event.ImageURL)
		if err != nil {
			return nil, err
		}
		// append the event into events array
		events = append(events, event)
	}
	return &events[0], nil
}

func GetEvent(eventID string) (*models.Event, error) {
	var events []models.Event
	eventrow, err := dbmap.Query(
		"SELECT event_id, title, date, time, location, host_name, description, contact_info, public_private, num_of_RSVP, max_attendees, image_url FROM event WHERE event_id=?;",
		eventID)

	for eventrow.Next() {
		var event models.Event
		// for each row, scan into the event struct
		err = eventrow.Scan(&event.EventID, &event.EventTitle, &event.Date, &event.Time, &event.Location, &event.HostName, &event.Description, &event.ContactInfo, &event.PublicPrivate, &event.NumRSVP, &event.MaxAttendees, &event.ImageURL)
		if err != nil {
			return nil, err
		}
		// append the event into events array
		events = append(events, event)
	}
	if len(events) == 0 {
		return nil, nil
	}
	return &events[0], nil
}
