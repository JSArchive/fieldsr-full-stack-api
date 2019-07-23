# Full Stack API

Today we are going to build a full-stack API from scratch.

## Description

We will be building an API that can manage evening courses, participants, and faculty at UW. That means we should be able to:

- Create new courses
- Create and assign students to a course
- Create and assign faculty to a course

### Data & Fields

We will want to be able to capture the following information:

What we Decided:
We're going to create a Course, Student, and Faculty Model

#### Courses

- Name of the course
- Start Date for the course
- End Date for the course
- Location including building address and room number

#### Students

- First and last name
- Preferred name or nickname
- Email address

#### Faculty

- First and last name
- Preferred name or nickname
- Email address
- Role

## Features

In addition to basic CRUD operations, we will also want to be able to:

- Provide an endpoint for a course that returns a random student to call on during class
  * GET /courses/:id/students/random
    X /randomStudent/5dsdfs2321a
    - Math.random()
- Provide an endpoint that will mark attendance for a student for a specified date
  PATCH /students/:id

CRUD
"RESTful" API Design

GET ALL - GET - /books - 200
GET ONE - GET - /books/:id - 200
  * CAN'T FIND IT - 404
CREATE - POST - /books - 201
  * VALIDATION ERROR - 400/422
UPDATE - PUT/PATCH - /books/:id - 200
  * PUT -> Assume and/or validate for the entire entity
  * PATCH -> Assume one or more valid fields
  * CAN'T FIND IT - 404
  * VALIDATION ERROR - 400/422
DESTROY - DELETE - /books/:id - 200
  * CAN'T FIND IT - 404