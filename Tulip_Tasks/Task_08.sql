-- Modify the existing Tasks table by adding a column  
ALTER TABLE Tasks
ADD due_date DATE;

-- Update the records for the new column
UPDATE Tasks
SET due_date =  '2026-11-10'
WHERE id = 1;

UPDATE Tasks
SET due_date =  '2026-11-12'
WHERE id = 2;

--adding new record
INSERT INTO Tasks (id, project_id, title, status, due_date)
VALUES (3, 1, 'Write API Documentation', 'done',  '2026-11-05');

--JOIN Query for challenge
SELECT
    t.id AS task_id,
    t.title AS task_title,
    p.name AS project_name,
    t.status AS task_status,
    t.due_date
FROM Tasks t
INNER JOIN Projects p
    ON t.project_id = p.id
WHERE
    t.due_date < (CURRENT_DATE)
    AND t.status <> 'done'
ORDER BY
    t.due_date ASC;
