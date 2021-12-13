import React from 'react'
import TokenPie from './TokenPie'
import TokenArea from './TokenArea'
import TokenCirculating from './TokenCirculating'
import Sources from './Sources'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row } from 'react-bootstrap';
import Links from './Links'

const App = () => <Container>
  <Row className="mx-1 mt-2">
    <h1 className="text-center">Community made BPRO Tokenomics</h1>
    <p className="text-muted text-center">Highly unofficial, but based on best knowledge</p>
  </Row>
  <Row className="mx-1">
    <Card className="my-2">
      <Card.Body>
        <Card.Title className="text-center">BPRO distribution total</Card.Title>
      <Card.Subtitle className="mb-2 text-muted text-center">Distribution total, after all distribution has ended (10 million)</Card.Subtitle>
        <TokenPie />
      </Card.Body>
    </Card>
  </Row>
  <Row className="mx-1"><Card className="my-2">
    <Card.Body>
      <Card.Title className="text-center">BPRO distribution over time</Card.Title>
      <Card.Subtitle className="mb-2 text-muted text-center">Starting 26th of April, 2021 and ending 26th of April, 2025 (4 years)</Card.Subtitle>
      <TokenArea />
    </Card.Body>
  </Card>
  </Row>
  <Row className="mx-1"><Card className="my-2">
    <Card.Body>
      <Card.Title className="text-center">Circulating supply</Card.Title>
      <Card.Subtitle className="mb-2 text-muted text-center">What has been distributed (not well defined or complete, description in tooltip)</Card.Subtitle>
      <TokenCirculating />
    </Card.Body>
  </Card>
  </Row>
  <Row className="mx-1 mb-3"><Card className="my-2">
    <Card.Body>
      <Card.Title className="text-center">Sources</Card.Title>
      <Sources />
    </Card.Body>
  </Card>
  </Row>
  <Row className="mx-1 mb-3 text-center">
      <Links />
  </Row>
</Container>

export default App;
