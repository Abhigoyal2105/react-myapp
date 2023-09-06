import React, { useState } from "react";
import "./ProjectTitle.css";
import Modal from "../../components/Modal/Modal";

function ProjectTitle() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="title">
      <h2>Section 1 - Demographic</h2>
      <button onClick={openModal}>Add/Edit Info</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default ProjectTitle;
