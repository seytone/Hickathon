-- public.users definition
-- Drop table
-- DROP TABLE public.users;

CREATE TABLE public.users (
	id serial PRIMARY KEY,
	"name" varchar NOT NULL,
	lastname varchar NOT NULL,
	email varchar NOT NULL,
	"password" varchar NOT NULL,
	"role" int NOT NULL DEFAULT 1
);
CREATE INDEX users_id_idx ON public.users USING btree (id);

-- public.absences definition
-- Drop table
-- DROP TABLE public.absences;

CREATE TABLE public.absences (
	id serial PRIMARY KEY,
	user_id int NOT NULL,
	title varchar NOT NULL,
	start_date timestamp NOT NULL,
	finish_date timestamp NOT NULL,
	request_msg text NULL,
	response_msg text NULL,
	status int NOT NULL DEFAULT 0,
	date_registered timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT absences_fk FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE INDEX absences_id_idx ON public.absences USING btree (id);