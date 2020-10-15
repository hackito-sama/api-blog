CREATE TABLE publication (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(255) NOT NULL,
	description TEXT,
	image JSON, 
	create_at DATE NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE comments(
	id INT NOT NULL AUTO_INCREMENT,
	fullname VARCHAR(255) NOT NULL,
	COMMENT TEXT NOT NULL,
	publication_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (publication_id) REFERENCES publication(id)
)