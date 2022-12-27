import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Register.css';

function RegCard() {
  return (
  <div className="RegCard">
    <Card style={{ width: '18rem' }}>
      <Card.Img  className='img_dummy' variant="top" src="https://picsum.photos/200" alt='dummy pic' />
      <Card.Body>
        <Card.Title>Register as Student</Card.Title>
        <div className="reg-btn">
        <Button variant="primary">Register</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default RegCard;