import { useState, useRef } from "react";
import { Form, Table, Button } from "react-bootstrap";
import "./Todo.scss";

function Todo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [courses, setCourses] = useState(() => {
    const localCourse = JSON.parse(localStorage.getItem("course")) ?? [];
    return localCourse;
  });
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourses((prev) => {
      const newCourse = [
        ...prev,
        {
          title,
          description,
        },
      ];
      const jsonCourse = JSON.stringify(newCourse);
      localStorage.setItem("course", jsonCourse);

      return newCourse;
    });

    setTitle("");
    setDescription("");
    titleRef.current.focus();
  };

  // const handleEditCourse = (data, id) => {
  //   setCourses((prev) => {
  //     const newCourse = [...prev];
  //     newCourse.splice(id, 1);
  //     setTitle(data.title);
  //     setDescription(data.description);
  //     // newCourse.push()
  //     return newCourse;
  //   });
  // };

  const handleRemoveCourse = (id) => {
    setCourses((prev) => {
      const newCourse = [...prev];
      newCourse.splice(id, 1);
      const jsonCourse = JSON.stringify(newCourse);
      localStorage.setItem("course", jsonCourse);
      return newCourse;
    });
  };

  return (
    <div className="todo">
      <Form className="form">
        <Form.Group className="mb-3" controlId="todo.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            ref={titleRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter text ..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="todo.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Table striped bordered responsive hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Course</th>
            <th>Description</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{index ? ++index : 1}</td>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>
                <Button
                  onClick={() => handleRemoveCourse(index)}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Todo;
