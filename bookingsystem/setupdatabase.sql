DELETE FROM "Teams";
DELETE FROM "Rooms";
DELETE FROM "People";
DELETE FROM "Employees";
DELETE FROM "BusinessPartners";
DELETE FROM "Facilities";
DELETE FROM "Bookings";
DELETE FROM "CostLogs";
DELETE FROM "Participants";


INSERT INTO "Teams" (id, name, "createdAt", "updatedAt") VALUES (0, 'delta', current_timestamp, current_timestamp);
INSERT INTO "Teams" (id, name, "createdAt", "updatedAt") VALUES (1, 'omega', current_timestamp, current_timestamp);
INSERT INTO "Teams" (id, name, "createdAt", "updatedAt") VALUES (2, 'gamma', current_timestamp, current_timestamp);
INSERT INTO "Teams" (id, name, "createdAt", "updatedAt") VALUES (3, 'economy', current_timestamp, current_timestamp);


INSERT INTO "Rooms" (id, name, cost_per_hr, "createdAt", "updatedAt") VALUES (0, 'abborren', 800, current_timestamp, current_timestamp);
INSERT INTO "Rooms" (id, name, cost_per_hr, "createdAt", "updatedAt") VALUES (1, 'makrillen', 500, current_timestamp, current_timestamp);
INSERT INTO "Rooms" (id, name, cost_per_hr, "createdAt", "updatedAt") VALUES (2, 'sillen', 300, current_timestamp, current_timestamp);
INSERT INTO "Rooms" (id, name, cost_per_hr, "createdAt", "updatedAt") VALUES (3, 'forellen', 700, current_timestamp, current_timestamp);


INSERT INTO "People" (id, name, "createdAt", "updatedAt") VALUES (0, 'Carl Petter', current_timestamp, current_timestamp);
INSERT INTO "People" (id, name, "createdAt", "updatedAt") VALUES (1, 'Isabella', current_timestamp, current_timestamp);
INSERT INTO "People" (id, name, "createdAt", "updatedAt") VALUES (2, 'Pontus', current_timestamp, current_timestamp);
INSERT INTO "People" (id, name, "createdAt", "updatedAt") VALUES (3, 'Bo', current_timestamp, current_timestamp);
INSERT INTO "People" (id, name, "createdAt", "updatedAt") VALUES (4, 'Gunnel', current_timestamp, current_timestamp);
INSERT INTO "People" (id, name, "createdAt", "updatedAt") VALUES (5, 'Gunnar', current_timestamp, current_timestamp);


INSERT INTO "Employees" (id, position, "createdAt", "updatedAt", "personId", "teamId") VALUES (0, 'CTO', current_timestamp, current_timestamp, 0, 0);
INSERT INTO "Employees" (id, position, "createdAt", "updatedAt", "personId", "teamId") VALUES (1, 'CEO', current_timestamp, current_timestamp, 1, 0);
INSERT INTO "Employees" (id, position, "createdAt", "updatedAt", "personId", "teamId") VALUES (2, 'KAM', current_timestamp, current_timestamp, 2, 3);


INSERT INTO "BusinessPartners" (id, position, company, "createdAt", "updatedAt", "personId") VALUES (0, 'Economic advisor', 'Cyberia', current_timestamp, current_timestamp, 3);
INSERT INTO "BusinessPartners" (id, position, company, "createdAt", "updatedAt", "personId") VALUES (1, 'Consultant Strategist', 'Dermacom', current_timestamp, current_timestamp, 4);
INSERT INTO "BusinessPartners" (id, position, company, "createdAt", "updatedAt", "personId") VALUES (2, 'consultant Revisor', 'Ernston & Hitch', current_timestamp, current_timestamp, 5);


INSERT INTO "Facilities" (id, name, cost, "createdAt", "updatedAt", "roomId") VALUES (0, 'Projector', '60', current_timestamp, current_timestamp, 1);
INSERT INTO "Facilities" (id, name, cost, "createdAt", "updatedAt", "roomId") VALUES (1, 'Projector', '60', current_timestamp, current_timestamp, 2);
INSERT INTO "Facilities" (id, name, cost, "createdAt", "updatedAt", "roomId") VALUES (2, 'Baguettes', '400', current_timestamp, current_timestamp, 0);
INSERT INTO "Facilities" (id, name, cost, "createdAt", "updatedAt", "roomId") VALUES (3, 'big conference TV', '300', current_timestamp, current_timestamp, 0);
