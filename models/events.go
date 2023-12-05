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

type CreateRSVP struct {
	EventID       int    `json:"event_id" binding:"required"`
	ResponderName string `json:"name" binding:"required"`
	RSVP          string `json:"rsvp" binding:"required"`
}

type GetRSVP struct {
	ResponseID int    `json:"response_id"`
	EventID    int    `json:"event_id"`
	Name       string `json:"name`
	RSVP       string `json:"rsvp" `
	CommentID  *int   `json:"comment_id" `
}
