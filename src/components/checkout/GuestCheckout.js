import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Form, FormGroup, FormText, Label, Input } from "reactstrap";
import "./GuestCheckout.css";

// Minified Bootstrap CSS file (for Forms)
import "../../bootstrap_forms.min.css";

const GuestCheckout = () => {
  return (
    <div className="checkout_container">
      <div className="checkout_container_header">
        <Link to="/availability/timepreference">
          <FontAwesomeIcon
            className="checkout_back_arrow"
            icon={faChevronLeft}
          />
        </Link>
        <h1>CHECKOUT</h1>
      </div>
      <div className="checkout_header">
        <h2>CHECKOUT AS GUEST</h2>
      </div>
      <div className="guest_checkout_form_container">
        <div className="required_fields_container">
          <p className="red_asterisk">* </p>{" "}
          <p className="required_fields_statement"> Required Fields</p>
        </div>
        <Form>
          <FormGroup>
            <Label for="firstName">
              {" "}
              <div className="required_label">
                First Name<p className="required_label red_asterisk">* </p>
              </div>
            </Label>
            <Input type="text" name="firstName" className="input_field" />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">
              <div className="required_label">
                Last Name<p className="required_label red_asterisk">* </p>
              </div>
            </Label>
            <Input type="text" name="lastName" className="input_field" />
          </FormGroup>
          <FormGroup>
            <Label for="guestEmail">
              <div className="required_label">
                Email<p className="required_label red_asterisk">* </p>
              </div>
            </Label>
            <Input type="email" name="email" className="input_field" />
          </FormGroup>
          <FormGroup>
            <Label for="phoneNumber">
              <div className="required_label">
                Phone Number<p className="required_label red_asterisk">* </p>
              </div>
            </Label>
            <Input type="tel" name="phoneNumber" className="input_field" />
          </FormGroup>
          <FormGroup>
            <Label for="appointmentNotes">Appointment Notes</Label>
            <Input
              type="textarea"
              className="form_appointment_notes"
              style={{ fontFamily: "Montserrat" }}
              name="appointmentNotes"
            />
            <FormText
              className="form_appointment_notes_caption"
              style={{ color: "rgb(151, 151, 151)" }}
            >
              To protect your privacy, do not include any privileged material
              such as personal health information.
            </FormText>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default GuestCheckout;
