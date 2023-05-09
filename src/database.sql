-- public.users definition
-- Drop table
-- DROP TABLE public.users;

CREATE TABLE public.users (
	id int4 NOT NULL,
	"name" varchar NOT NULL,
	lastname varchar NOT NULL,
	email varchar NOT NULL,
	"role" int4 NOT NULL DEFAULT 1,
	phone varchar NULL,
	"password" varchar NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id)
);
CREATE INDEX users_id_idx ON public.users USING btree (id);

-- public.absences definition
-- Drop table
-- DROP TABLE public.absences;

CREATE TABLE public.absences (
	id int4 NOT NULL,
	user_id int4 NOT NULL,
	start_date timestamp NOT NULL,
	finish_date timestamp NOT NULL,
	status int4 NOT NULL DEFAULT 0,
	request text NULL,
	title varchar NOT NULL,
	response text NULL,
	date_registered timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT absences_pk PRIMARY KEY (id),
	CONSTRAINT absences_fk FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE INDEX absences_id_idx ON public.absences USING btree (id);