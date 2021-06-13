import React, { useContext, useState } from "react";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import firebase from "firebase/app";

import { CartContext } from "../../context/CartContext/CartContext";
import { getFirestore } from "../../firebase/Firebase";

const ModalCompra = props => {
  const { cart, clearItems, precioTotal } = useContext(CartContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState(" ");
  const [emailErr, setEmailErr] = useState(false);
  const [idOrden, setIdOrden] = useState(null);
  const [disForm, setDisForm] = useState(false);

  const generarOrden = e => {
    e.preventDefault();
    const comprador = { name, phone, email };

    const db = getFirestore();
    const ordersCollection = db.collection("orders");

    let orden = {};
    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.buyer = { comprador };
    orden.total = precioTotal;
    orden.items = cart.map((cartItem) => {
      const id = cartItem.prod.id;
      const title = cartItem.prod.title;
      const price = cartItem.prod.price * cartItem.cant;
      return { id, title, price };
    });

    ordersCollection
      .add(orden)
      .then((IdDocumento) => {
        setIdOrden(IdDocumento.id);
      })
      .then(setDisForm(true))
      .catch((err) => console.log(err))
      .finally(() => console.log("termino la promesa"));
  };
  let handleEmail = () => {
    if (email !== email2) {
      setEmailErr(true);
      return false;
    } else {
      setEmailErr(false);
      return true;
    }
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ingrese los datos para generar su orden de compra
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <fieldset disabled={disForm}>
          <Form onSubmit={generarOrden}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required={true}
                  type="name"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  required={true}
                  type="phone"
                  placeholder="Telefono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required={true}
                  onKeyUpCapture={() => handleEmail()}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Confirme su Email</Form.Label>
                <Form.Control
                  required={true}
                  onKeyUpCapture={() => handleEmail()}
                  type="email"
                  placeholder="Confirme su Email"
                  value={email2}
                  onChange={(e) => setEmail2(e.target.value)}
                />
              </Form.Group>
            </Form.Row>

            {emailErr ? (
              <div>
                <p>Los emails no coinciden!</p>
                <Button
                  variant = "outline-secondary"
                  disabled="{true}"
                  type="submit"
                  className=" mt-auto"
                >
                  Comprar
                </Button>
              </div>
            ) : (
              <Button variant = "outline-info" type="submit" className="mt-auto">
                Comprar
              </Button>
            )}
          </Form>
        </fieldset>
      </Modal.Body>
      <small>{idOrden ? ` Su orden fue generada con el ID: ${idOrden}` : null}</small>
      <Modal.Footer>
        <Button variant = "outline-secondary" onClick={clearItems}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCompra;
