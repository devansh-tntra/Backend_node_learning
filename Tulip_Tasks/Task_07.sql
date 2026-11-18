CREATE TABLE Projects (
    id  NUMBER PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Tasks (
    id NUMBER PRIMARY KEY,
    project_id INTEGER NOT NULL,
    title VARCHAR(150) NOT NULL,
    status VARCHAR(50) DEFAULT 'todo',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_project
        FOREIGN KEY (project_id)
        REFERENCES projects(id)
);



INSERT INTO Projects (id, name)
VALUES (1, 'Node.js Backend Engineering')
RETURNING id;



INSERT INTO tasks (id, project_id, title, status)
VALUES
(1, 1, 'Create REST API', 'todo'),
(2, 1, 'Connect PostgreSQL Database', 'in_progress');



SELECT
    t.id AS task_id,
    t.title AS task_title,
    t.status AS task_status,
    p.name AS project_name
FROM tasks t
INNER JOIN projects p
    ON t.project_id = p.id;

