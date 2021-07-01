import React from 'react';
import { Row, Col, Card, Image, ListGroup, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return <div></div>;
};

export default ProductScreen;
