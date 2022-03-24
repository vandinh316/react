import { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

import "./FetchApi.scss";

function FetchApi() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((reponse) => reponse.json())
      .then((response) => setPosts(response));
    console.log("re-render");
  }, [posts]);
  console.log("render");

  return (
    <Row xs={2} md={4} className="g-4">
      {posts.map((post) => (
        <Col key={post.id}>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/600/24f355"
            />
            <Card.Body>
              <Card.Title>{post.name}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default FetchApi;
