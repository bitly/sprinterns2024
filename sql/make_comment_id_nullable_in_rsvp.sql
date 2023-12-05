use events;

ALTER TABLE rsvp
MODIFY comment_id integer DEFAULT NULL;

-- ALTER TABLE event
-- DROP COLUMN #_of_RSVP;
-- ALTER TABLE event
-- ADD COLUMN num_of_RSVP integer;


-- ALTER TABLE rsvp
-- ADD COLUMN contact_info text;