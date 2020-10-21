CREATE TABLE publications (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(255) NOT NULL,
	description TEXT,
	image JSON, 
	createat DATE NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE comments(
	id INT NOT NULL AUTO_INCREMENT,
	fullname VARCHAR(255) NOT NULL,
	message TEXT NOT NULL,
	publicationId INT NOT NULL,
	createat DATE NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (publicationId) REFERENCES publications(id)
);