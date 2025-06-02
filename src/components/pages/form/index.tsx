import { Col, Input, Modal, Row, Select } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();

  function closeHandler() {
    setIsOpen(false);
    setTimeout(() => {
      navigate("..");
    }, 250);
  }

  return (
    <Modal
      title={<p style={{ textAlign: "center", marginBottom: 25 }}>NEW NOTE</p>}
      closable={{ "aria-label": "Custom Close Button" }}
      open={isOpen}
      onOk={closeHandler}
      onCancel={closeHandler}
      centered
    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Input placeholder="Input your note" size="large" />
        </Col>
        <Col span={24}>
          <Select
            placeholder="Select category"
            size="large"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </Modal>
  );
}

export default Form;
