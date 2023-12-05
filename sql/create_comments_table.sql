use events;

CREATE TABLE IF NOT EXISTS `comments` (
    `comment_id` integer PRIMARY KEY AUTO_INCREMENT,
    `event_id` int NOT NULL,
    `comment` text NOT NULL,
    `name` text NOT NULL,
    `created_at` timestamp NOT NULL default CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES event(event_id)
) DEFAULT CHARSET=utf8;