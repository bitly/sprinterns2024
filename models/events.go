package models

type Event struct {
	EventID       int    `json:"event_id,omitempty"`
	NumRSVP       int    `json:"num_of_RSVP"`
	EventTitle    string `json:"event_title"`
	Date          string `json:"date" `
	Time          string `json:"time" `
	Location      string `json:"location" `
	HostName      string `json:"host_name" `
	Description   string `json:"description" `
	ContactInfo   string `json:"contact_info" `
	PublicPrivate string `json:"public_private" `
	MaxAttendees  int    `json:"max_attendees" `
	ImageURL      string `json:"image_url"`
}
