package models

// Event contains information about a single event
type CreateEvent struct {
	NumRSVP       int    `json:"num_of_RSVP"`
	EventTitle    string `json:"event_title" binding:"required"`
	Date          string `json:"date" binding:"required"`
	Time          string `json:"time" binding:"required"`
	Location      string `json:"location" binding:"required"`
	HostName      string `json:"host_name" binding:"required"`
	Description   string `json:"description" binding:"required"`
	ContactInfo   string `json:"contact_info" binding:"required"`
	PublicPrivate string `json:"public_private" binding:"required"`
	MaxAttendees  int    `json:"max_attendees" binding:"required"`
}

type GetEvent struct {
	EventID       int    `json:"event_id"`
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
}


// Event contains information about a single event
type UpdateEvent struct {
	// EventID       int    `json:"event_id" binding:"required"`
	NumRSVP       int    `json:"num_of_RSVP"`
	EventTitle    string `json:"event_title"`
	Date          string `json:"date"`
	Time          string `json:"time"`
	Location      string `json:"location"`
	HostName      string `json:"host_name"`
	Description   string `json:"description"`
	ContactInfo   string `json:"contact_info"`
	PublicPrivate string `json:"public_private"`
	MaxAttendees  int    `json:"max_attendees"`
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

