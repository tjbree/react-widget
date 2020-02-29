import React from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    Container
} from 'reactstrap';

function Popup({ isOpen, setIsOpen, gotit, setGotit }) {
    const styles = {
        width: "450px",
        height: "550px",
        color: "#111",
        outline: "none"
    }
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const handleGotit = (e) => {
        setGotit(e.target.checked)
        setIsOpen(false)
    }
    return (
        <Container>
            {
                !gotit && <Modal isOpen={isOpen} toggle={toggle} style={styles}>
                    <ModalHeader toggle={toggle}>New Infomation</ModalHeader>
                    <ModalBody>
                        <p>This modal will provide instructions about the new feature.</p>
                        <p>If the user only closes this modal, it will show up the next time when users clicks the button.</p>
                        <p>After the user clicks "I got it, do not show this again.", this modal and the "New Feature" animation will not be displayed.</p>
                        <br/>
                        <input
                            type="checkbox"
                            id="gotit"
                            name="gotit"
                            checked={gotit}
                            onChange={(e) => handleGotit(e)}
                        />
                        <label style={{marginLeft:10}} htmlFor="gotit">I got it, do not show this again.</label>
                    </ModalBody>
                </Modal>
            }
        </Container>
    )
}

export default Popup