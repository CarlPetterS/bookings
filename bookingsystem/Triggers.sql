--This file contains triggers and trigger procedures handling bookings

-- Trigger procedure that raises exceptions for deletes on bookings that has already past
create or replace function check_delete() returns trigger language plpgsql as $$
BEGIN
IF (old."start_date" < current_timestamp) THEN RAISE EXCEPTION 'Can not delete a meeting that already started';
END IF;
return old;
end $$;

-- Trigger that runs on all deletes of bookings
CREATE TRIGGER check_delete
BEFORE DELETE
ON "Bookings"
FOR EACH ROW
EXECUTE PROCEDURE check_delete();

-- Trigger procedure that raises exceptions for all inserts with invalid dates
create or replace function check_date_logic() returns trigger language plpgsql as $$
BEGIN
-- If meeting overlaps with meeting in the same room
IF (EXISTS (SELECT * FROM "Bookings"
  WHERE "Bookings"."roomId" = new."roomId" AND NOT(new."start_date" >= "Bookings"."end_date" OR new."end_date" <= "Bookings"."start_date")
))
THEN RAISE EXCEPTION 'Meeting overlaps with existing meeting';
END IF;
-- If start date has already past
IF (new."start_date" < current_timestamp)
THEN RAISE EXCEPTION 'Start time of the meeting has already past';
END IF;
-- If start_date is after end_date
IF (new."start_date" > new."end_date")
THEN RAISE EXCEPTION 'Start time of meeting can not be after end time';
END IF;
-- else return the instance
return new;
end $$;

-- Trigger that runs on all inserts and updates on bookings
CREATE TRIGGER check_date
  BEFORE INSERT OR UPDATE
  ON "Bookings"
  FOR EACH ROW
EXECUTE PROCEDURE check_date_logic();


--
