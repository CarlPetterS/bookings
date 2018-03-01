-- This file contains sample queries for presentation

-- Insert new users
INSERT INTO "People"
(id, name, "createdAt", "updatedAt")
VALUES (8, 'Heidi', current_timestamp, current_timestamp);

INSERT INTO "Employees"
(id, position, "createdAt", "updatedAt", "personId", "teamId")
VALUES (6, 'intern', current_timestamp, current_timestamp, 8, 3);

-- delete old users
DELETE FROM "Employees"
WHERE "Employees"."id" = 1;

-- insert teams
INSERT INTO "Teams"
(id, name, "createdAt", "updatedAt")
VALUES (5, 'GoTeamYeah', current_timestamp, current_timestamp);

-- delete teams
DELETE FROM "Teams"
WHERE "Teams"."id" = 2;

-- Show all participants of a given meeting
SELECT "People"."name" FROM "Participants"
INNER JOIN "People"
ON "People"."id" = "Participants"."personId"
WHERE "Participants"."bookingId" = 1;

-- Show cost accrued by teams for any given time interval
SELECT "teamId", SUM("cost") FROM "CostLogs"
GROUP BY "teamId";
