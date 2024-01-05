use events;
CREATE TABLE IF NOT EXISTS `event` (
	`event_id` integer PRIMARY KEY AUTO_INCREMENT,
	`title` text NOT NULL,
	`date` text NOT NULL,
	`time` text NOT NULL,
    `location` text NOT NULL,
    `host_name` text NOT NULL,
    `description` text NOT NULL,
    `contact_info` text NOT NULL,
    `public_private` text NOT NULL,
    `image_url` text DEFAULT NULL,
    `num_of_RSVP` int NOT NULL,
    `max_attendees` int NOT NULL,
	`created_at` timestamp NOT NULL default CURRENT_TIMESTAMP
) DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `rsvp` (
    `rsvp_id` integer PRIMARY KEY AUTO_INCREMENT,
    `event_id` INT NOT NULL,
    `first_name` text NOT NULL,
    `last_name` text NOT NULL, 
    `phone_number` text NOT NULL, 
    `email` text NOT NULL, 
    FOREIGN KEY (`event_id`) REFERENCES `event`(`event_id`),
    `rsvp_response` text NOT NULL
) DEFAULT CHARSET=utf8;