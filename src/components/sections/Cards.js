import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

export function Cards() {
    return (
        <CardDeck>
            <Card className="Cards">
                <Card.Img className="cardImg" variant="top" src="/logo192.png" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
            </Card>
            <Card className="Cards">
                <Card.Img className="cardImg" variant="top" src="/logo192.png" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
        content.{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="Cards">
                <Card.Img className="cardImg" variant="top" src="/logo192.png" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
      </Card.Text>
                </Card.Body>
                
            </Card>
        </CardDeck>
    );
}

export default Cards;