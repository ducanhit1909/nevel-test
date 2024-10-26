"use client";
import { Game } from "@/app/utils";
import React from "react";
import { Button, Modal } from "react-bootstrap";

interface DetailHotGameModalProps {
  show: boolean;
  handleClose: () => void;
  data?: Game;
}

const DetailHotGameModal: React.FC<DetailHotGameModalProps> = ({
  show,
  handleClose,
  data,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Detail game</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="bg-white rounded-lg">
          <div className="p-2">
            <div className="flex items-start space-x-4">
              <img
                className="w-20 h-20 rounded-lg object-cover"
                src={data?.avatar}
                alt={data?.title}
                loading="lazy"
              />
              <div className="">
                <div className="text-lg font-bold">{data?.title}</div>
                <p className="mt-2 text-gray-600 text-sm md:text-base">
                  {data?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailHotGameModal;
