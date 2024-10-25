"use client";
import React from "react";
import { Button, Modal } from "react-bootstrap";

interface UnderConstructionModalProps {
  show: boolean;
  handleClose: () => void;
}

const UnderConstructionModal: React.FC<UnderConstructionModalProps> = ({
  show,
  handleClose,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Alert</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Unser construction!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UnderConstructionModal;
