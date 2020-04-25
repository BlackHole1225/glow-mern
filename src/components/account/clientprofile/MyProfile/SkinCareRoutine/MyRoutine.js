import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faPlusCircle,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./SkinCareRoutine.css";
import { Transition } from "react-spring/renderprops";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { Form, FormGroup, Label, Input } from "reactstrap";

const MyRoutine = () => {
  const splashScreenComplete = useSelector(
    (state) => state.splashScreenComplete.splashScreenComplete
  );
  const userAuthenticated = useSelector(
    (state) => state.userAuthenticated.user_authenticated
  );
  const logoutClicked = useSelector(
    (state) => state.logoutClicked.log_out_clicked
  );
  const selectedItemBackRef = useRef(null);
  const individualItemMorningRef = useRef(null);
  const individualItemEveningRef = useRef(null);
  const addProductRef = useRef(null);
  const [itemToggled, changeItemToggled] = useState("");
  const [addProductClicked, changeAddProductClicked] = useState(false);

  const redirectToHome = () => {
    if (!splashScreenComplete) {
      return <Redirect to="/" />;
    }
  };

  const redirectToLogInPage = () => {
    if (!userAuthenticated) {
      return <Redirect to="/account/login" />;
    }
  };

  useEffect(() => {
    const checkModalRef = setInterval(() => {
      let currentRef;

      if (selectedItemBackRef) {
        currentRef = selectedItemBackRef.current;
      }

      if (currentRef) {
        if (itemToggled) {
          disableBodyScroll({ targetElement: currentRef });
        } else {
          enableBodyScroll({ targetElement: currentRef });
        }
      }
    }, 100);
    return () => {
      clearInterval(checkModalRef);
      clearAllBodyScrollLocks();
    };
  }, [itemToggled]);

  // Allows click only if selected item modal is not active

  const handleItemToggled = (e, item) => {
    if (
      (e.currentTarget && individualItemMorningRef) ||
      (e.currentTarget && individualItemEveningRef)
    ) {
      if (
        individualItemMorningRef.current ||
        individualItemEveningRef.current
      ) {
        if (
          individualItemMorningRef.current.className ===
            e.currentTarget.className ||
          individualItemEveningRef.current.className ===
            e.currentTarget.className
        ) {
          if (selectedItemBackRef) {
            if (!selectedItemBackRef.current) {
              if (item) {
                if (item) {
                  changeItemToggled(item);
                }
              }
            }
          }
        }
      }
    }
  };

  // Function for back arrow click to reset selected toggled item

  const handleAppointmentUntoggled = (e) => {
    if (e.currentTarget && selectedItemBackRef) {
      if (selectedItemBackRef.current) {
        if (
          selectedItemBackRef.current.className === e.currentTarget.className
        ) {
          changeItemToggled("");
        }
      }
    }
  };

  // Function for add product button click

  const handleAddProductToggle = (e) => {
    if (e.currentTarget && addProductRef) {
      if (addProductRef.current) {
        if (addProductRef.current.className === e.currentTarget.className) {
          changeAddProductClicked(true);
        }
      }
    }
  };

  return (
    <div
      className="skin_care_routine_container"
      style={{
        zIndex: logoutClicked ? -1 : "auto",
      }}
    >
      {redirectToHome()}
      {redirectToLogInPage()}
      <div
        className="skin_care_routine_header"
        style={{ zIndex: logoutClicked ? 0 : 3 }}
      >
        <Link to="/account/clientprofile/profile">
          <FontAwesomeIcon
            className="skin_care_routine_back_arrow"
            icon={faChevronLeft}
          />
        </Link>
        <h1>SKIN CARE ROUTINE</h1>
      </div>
      <div
        className="skin_care_routine_sub_header"
        style={{ zIndex: logoutClicked ? -1 : 2 }}
      >
        <Link
          to="/account/clientprofile/profile/routine"
          className="skin_care_routine_sub_header_container_link"
        >
          <div className="skin_care_routine_recommended_container_not_active">
            <h2>RECOMMENDED</h2>
          </div>
        </Link>
        <div className="skin_care_routine_my_routine_container_active">
          <h2>MY ROUTINE</h2>
        </div>
      </div>
      <div className="skin_care_routine_top_caption">
        <p>
          Keep us updated on what skin care products you're using and how you're
          using them
        </p>
      </div>
      <div className="skin_care_routine_content_container">
        <div className="skin_care_routine_morning_content_container">
          <div className="skin_care_routine_morning_header">
            <h2>Morning</h2>
          </div>
          <div className="skin_care_routine_morning_items_container">
            <div
              className="skin_care_routine_morning_my_routine_individual_item_container"
              onClick={(e) => handleItemToggled(e, "morning_cleanser")}
              ref={individualItemMorningRef}
            >
              <div className="skin_care_routine_icon_container">
                <svg viewBox="0 0 50.006 50.006" height="3rem" width="100%">
                  <path
                    strokeWidth=".794"
                    d="M20.737 48.765c-.497-.363-.516-.883-.586-16.044-.082-17.693-.177-16.822 1.854-16.968l1.129-.082.146-7.805h1.574V5.192c0-2.638-.008-2.673-.596-2.537-.327.076-1.875.285-3.44.464l-2.844.326v1.02c0 .844-.091 1.02-.529 1.02-.458 0-.529-.176-.529-1.307 0-.72.11-1.375.244-1.458.757-.468 8.456-1.213 11.83-1.145l3.668.073.15 6.185 1.438.165.146 7.806h1.01c1.992 0 1.886-.933 1.886 16.623 0 15.303-.012 15.668-.529 16.185-.504.504-.882.529-8.019.529-6.05 0-7.589-.072-8.004-.376zm15.43-16.359l-.068-15.676-6.88-.074c-3.783-.041-7.146-.01-7.474.07l-.595.146v15.43c0 8.485.08 15.507.176 15.604.097.097 3.492.177 7.543.177h7.366zm-2.979-20.174v-3.44l-8.863-.145v7.17l8.863-.145zm-1.455-7.011V2.575h-5.82v5.291h5.82z"
                    stroke="#000"
                    strokeOpacity="1"
                    strokeMiterlimit="4"
                    strokeDasharray="none"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h2>Cleanser</h2>
              <FontAwesomeIcon
                className="skin_care_routine_user_add_icon"
                icon={faPlusCircle}
              />
              <Transition
                items={itemToggled}
                from={{ transform: "translateX(-100%)" }}
                enter={{ transform: "translateX(0%)" }}
                leave={{ transform: "translateX(-100%)" }}
                config={{ duration: 200 }}
              >
                {(itemToggled) =>
                  itemToggled === "morning_cleanser" &&
                  ((styleprops) => (
                    <div
                      className="my_individual_selected_item_container"
                      style={styleprops}
                    >
                      <div className="my_individual_selected_item_contents_container">
                        <div className="my_individual_selected_item_top_container">
                          <div
                            className="my_individual_selected_item_back_container"
                            ref={selectedItemBackRef}
                            onClick={(e) => handleAppointmentUntoggled(e)}
                          >
                            <FontAwesomeIcon
                              icon={faLongArrowAltLeft}
                              className="my_individual_selected_item_back_arrow_icon"
                            />
                          </div>
                        </div>
                        <div className="my_individual_selected_item_header">
                          <p>Cleanser (AM)</p>
                        </div>
                      </div>
                      {addProductClicked ? (
                        <Form className="add_product_form">
                          <FormGroup className="add_product_form_field">
                            <Label for="productName">
                              {" "}
                              <div className="top_form_container">
                                Product Name
                              </div>
                            </Label>
                            <Input
                              type="text"
                              name="productName"
                              maxLength={50}
                              placeholder="Product name"
                              className="input_field_product_name"
                            />
                          </FormGroup>
                        </Form>
                      ) : (
                        <div className="my_individual_selected_item_empty_state_container">
                          <div className="my_individual_selected_item_empty_state_icon_container">
                            <svg
                              viewBox="0 0 50.006 50.006"
                              height="5rem"
                              width="100%"
                            >
                              <path
                                className="my_individual_selected_item_empty_state_icon"
                                d="M20.737 48.765c-.497-.363-.516-.883-.586-16.044-.082-17.693-.177-16.822 1.854-16.968l1.129-.082.146-7.805h1.574V5.192c0-2.638-.008-2.673-.596-2.537-.327.076-1.875.285-3.44.464l-2.844.326v1.02c0 .844-.091 1.02-.529 1.02-.458 0-.529-.176-.529-1.307 0-.72.11-1.375.244-1.458.757-.468 8.456-1.213 11.83-1.145l3.668.073.15 6.185 1.438.165.146 7.806h1.01c1.992 0 1.886-.933 1.886 16.623 0 15.303-.012 15.668-.529 16.185-.504.504-.882.529-8.019.529-6.05 0-7.589-.072-8.004-.376zm15.43-16.359l-.068-15.676-6.88-.074c-3.783-.041-7.146-.01-7.474.07l-.595.146v15.43c0 8.485.08 15.507.176 15.604.097.097 3.492.177 7.543.177h7.366zm-2.979-20.174v-3.44l-8.863-.145v7.17l8.863-.145zm-1.455-7.011V2.575h-5.82v5.291h5.82z"
                                strokeOpacity="1"
                                strokeMiterlimit="4"
                                strokeDasharray="none"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                          <div className="my_individual_selected_item_empty_state_text_container">
                            <h2>No morning cleanser information</h2>
                            <p>
                              Start by adding some product information and check
                              back here after
                            </p>
                          </div>
                          <div className="my_individual_selected_item_bottom_buttons_container">
                            <div
                              className="my_individual_selected_item_add_product_button"
                              ref={addProductRef}
                              onClick={(e) => handleAddProductToggle(e)}
                            >
                              <p>Add Product</p>
                            </div>
                            <div
                              className="my_individual_selected_item_back_to_routine_button"
                              onClick={() => changeItemToggled("")}
                            >
                              <p>Back to Routine</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                }
              </Transition>
            </div>
            <div
              className="skin_care_routine_morning_my_routine_individual_item_container"
              onClick={(e) => handleItemToggled(e, "morning_toner")}
              ref={individualItemMorningRef}
            >
              <div className="skin_care_routine_icon_container">
                <svg height="3rem" width="100%" viewBox="0 0 50.006 50.006">
                  <path d="M16.847 47.9c-1.354-.265-2.44-1.156-2.993-2.454l-.228-.533V14.676l.181-.451a4.083 4.083 0 012.675-2.434l.502-.15.002-2.894c0-3.2.03-3.444.492-4.238.348-.598 1.156-1.314 1.798-1.594 1.018-.445 1.078-.45 5.508-.426l4.012.022.544.19c1.42.496 2.392 1.504 2.694 2.797.092.39.117 1.108.118 3.32l.002 2.823.515.154c1.282.384 2.224 1.276 2.666 2.525l.177.498V44.77l-.175.498c-.485 1.384-1.738 2.421-3.217 2.663-.748.122-14.634.094-15.273-.031zm15.563-1.657c.609-.27 1.018-.669 1.25-1.22.149-.352.153-.726.153-15.228 0-14.32-.006-14.881-.147-15.216-.301-.714-.907-1.205-1.72-1.396-.686-.161-14.068-.161-14.754 0-.808.19-1.452.71-1.746 1.41-.112.267-.122 1.78-.103 15.309l.022 15.012.174.293c.377.635.897 1.022 1.603 1.194.372.09 1.468.104 7.587.092l7.152-.014zm-14.927-22.6c-.509-.199-.499-.108-.499-4.524v-3.994l.269-.242.268-.242h14.077l.516.415.022 4.026c.024 4.478.037 4.363-.498 4.564-.395.149-13.775.146-14.154-.003zm13.011-4.484v-3.024H18.643v6.047h11.851zm0-10.235c0-1.505-.035-2.824-.08-3.04-.201-.953-.94-1.646-1.958-1.837-.57-.106-7.205-.106-7.775 0-.787.148-1.479.652-1.83 1.336-.162.317-.17.44-.193 3.264l-.023 2.935h11.859z" />
                </svg>
              </div>
              <h2>Toner</h2>
              <FontAwesomeIcon
                className="skin_care_routine_user_add_icon"
                icon={faPlusCircle}
              />
              <Transition
                items={itemToggled}
                from={{ transform: "translateX(-100%)" }}
                enter={{ transform: "translateX(0%)" }}
                leave={{ transform: "translateX(-100%)" }}
                config={{ duration: 200 }}
              >
                {(itemToggled) =>
                  itemToggled === "morning_toner" &&
                  ((styleprops) => (
                    <div
                      className="my_individual_selected_item_container"
                      style={styleprops}
                    >
                      <div className="my_individual_selected_item_contents_container">
                        <div className="my_individual_selected_item_top_container">
                          <div
                            className="my_individual_selected_item_back_container"
                            ref={selectedItemBackRef}
                            onClick={(e) => handleAppointmentUntoggled(e)}
                          >
                            <FontAwesomeIcon
                              icon={faLongArrowAltLeft}
                              className="my_individual_selected_item_back_arrow_icon"
                            />
                          </div>
                        </div>
                        <div className="my_individual_selected_item_header">
                          <p>Toner (AM)</p>
                        </div>
                      </div>
                      <div className="my_individual_selected_item_empty_state_container">
                        <div className="my_individual_selected_item_empty_state_icon_container">
                          <svg
                            className="my_individual_selected_item_empty_state_icon"
                            height="5rem"
                            width="100%"
                            viewBox="0 0 50.006 50.006"
                          >
                            <path d="M16.847 47.9c-1.354-.265-2.44-1.156-2.993-2.454l-.228-.533V14.676l.181-.451a4.083 4.083 0 012.675-2.434l.502-.15.002-2.894c0-3.2.03-3.444.492-4.238.348-.598 1.156-1.314 1.798-1.594 1.018-.445 1.078-.45 5.508-.426l4.012.022.544.19c1.42.496 2.392 1.504 2.694 2.797.092.39.117 1.108.118 3.32l.002 2.823.515.154c1.282.384 2.224 1.276 2.666 2.525l.177.498V44.77l-.175.498c-.485 1.384-1.738 2.421-3.217 2.663-.748.122-14.634.094-15.273-.031zm15.563-1.657c.609-.27 1.018-.669 1.25-1.22.149-.352.153-.726.153-15.228 0-14.32-.006-14.881-.147-15.216-.301-.714-.907-1.205-1.72-1.396-.686-.161-14.068-.161-14.754 0-.808.19-1.452.71-1.746 1.41-.112.267-.122 1.78-.103 15.309l.022 15.012.174.293c.377.635.897 1.022 1.603 1.194.372.09 1.468.104 7.587.092l7.152-.014zm-14.927-22.6c-.509-.199-.499-.108-.499-4.524v-3.994l.269-.242.268-.242h14.077l.516.415.022 4.026c.024 4.478.037 4.363-.498 4.564-.395.149-13.775.146-14.154-.003zm13.011-4.484v-3.024H18.643v6.047h11.851zm0-10.235c0-1.505-.035-2.824-.08-3.04-.201-.953-.94-1.646-1.958-1.837-.57-.106-7.205-.106-7.775 0-.787.148-1.479.652-1.83 1.336-.162.317-.17.44-.193 3.264l-.023 2.935h11.859z" />
                          </svg>
                        </div>
                        <div className="my_individual_selected_item_empty_state_text_container">
                          <h2>No morning toner information</h2>
                          <p>
                            Start by adding some product information and check
                            back here after
                          </p>
                        </div>
                        <div className="my_individual_selected_item_bottom_buttons_container">
                          <div className="my_individual_selected_item_add_product_button">
                            <p>Add Product</p>
                          </div>
                          <div
                            className="my_individual_selected_item_back_to_routine_button"
                            onClick={() => changeItemToggled("")}
                          >
                            <p>Back to Routine</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Transition>
            </div>
            <div
              className="skin_care_routine_morning_my_routine_individual_item_container"
              onClick={(e) => handleItemToggled(e, "morning_serum")}
              ref={individualItemMorningRef}
            >
              <div className="skin_care_routine_icon_container">
                <svg height="3rem" width="100%" viewBox="0 0 50.006 50.006">
                  <path d="M25.948 48.373c-.45-.15-1.22-.996-1.358-1.493-.162-.58-.162-21.14 0-21.72.149-.535.91-1.343 1.415-1.501.234-.074.994-.119 1.998-.119h1.62v-2.1c0-2.1 0-2.101.226-2.34l.225-.24h7.918l.225.24c.226.239.226.24.226 2.34v2.1h1.62c1.004 0 1.764.045 1.998.119.505.158 1.266.966 1.415 1.501.162.58.162 21.14 0 21.72-.149.536-.91 1.344-1.415 1.502-.512.16-15.63.152-16.113-.009zm15.901-1.718l.269-.285v-20.7l-.538-.57h-4.156l-.226-.239c-.185-.196-.225-.336-.225-.78v-.54h-1.47v-1.56h1.47v-1.56h-5.88v1.56h3.675v1.56h-3.675v.54c0 .444-.04.584-.226.78l-.225.24h-4.157l-.269.285-.268.285v20.7l.537.57H41.58zm-14.241-1.531c-.19-.256-.19-.306-.19-8.731v-8.474l.45-.479h6.148c6.08 0 6.15.003 6.39.203l.241.202v17.057l-.225.239c-.208.22-.294.24-1.103.24h-.877v-1.56h.735V29h-10.29v14.82h8.085v1.56h-9.174zm-19.546 1c-.85-.295-1.535-.965-1.944-1.902-.198-.452-.239-.683-.233-1.328.006-.752.05-.91 1.264-4.436.816-2.37 1.326-3.716 1.449-3.827a.773.773 0 01.445-.17c.14 0 .34.076.445.17.123.11.633 1.457 1.448 3.827 1.214 3.526 1.26 3.684 1.265 4.436.005.646-.035.875-.236 1.334-.32.734-.898 1.381-1.521 1.705-.61.317-1.753.408-2.382.19zm1.651-1.558c.627-.278 1.17-1.276 1.034-1.904-.087-.404-1.653-4.983-1.704-4.983-.051 0-1.618 4.58-1.705 4.983-.133.616.401 1.617 1.014 1.9.362.168.988.17 1.361.004zm-1.18-12.685c-.224-.237-.225-.253-.225-2.12v-1.88l16.577-17.595-.939-1.012c-1.289-1.39-1.302-1.272.343-3.03 1.228-1.313 1.297-1.37 1.654-1.37.35 0 .43.061 1.29.97l.917.97 2.189-2.31c2.368-2.5 2.603-2.681 3.604-2.778 1.09-.104 2.19.568 2.734 1.67.207.42.246.622.246 1.278.001 1.256-.087 1.394-2.59 4.065l-2.174 2.32.937 1.01c1.292 1.394 1.307 1.273-.376 3.059-1.683 1.786-1.568 1.77-2.883.397l-.954-.996L12.3 32.121h-1.77c-1.758 0-1.773-.002-1.996-.24zm11.213-9.9l8.085-8.58-1.883-1.998-16.17 17.159v1.999h1.884z" />
                </svg>
              </div>
              <h2>Serum</h2>
              <FontAwesomeIcon
                className="skin_care_routine_user_add_icon"
                icon={faPlusCircle}
              />
              <Transition
                items={itemToggled}
                from={{ transform: "translateX(-100%)" }}
                enter={{ transform: "translateX(0%)" }}
                leave={{ transform: "translateX(-100%)" }}
                config={{ duration: 200 }}
              >
                {(itemToggled) =>
                  itemToggled === "morning_serum" &&
                  ((styleprops) => (
                    <div
                      className="my_individual_selected_item_container"
                      style={styleprops}
                    >
                      <div className="my_individual_selected_item_contents_container">
                        <div className="my_individual_selected_item_top_container">
                          <div
                            className="my_individual_selected_item_back_container"
                            ref={selectedItemBackRef}
                            onClick={(e) => handleAppointmentUntoggled(e)}
                          >
                            <FontAwesomeIcon
                              icon={faLongArrowAltLeft}
                              className="my_individual_selected_item_back_arrow_icon"
                            />
                          </div>
                        </div>
                        <div className="my_individual_selected_item_header">
                          <p>Serum (AM)</p>
                        </div>
                      </div>
                      <div className="my_individual_selected_item_empty_state_container">
                        <div className="my_individual_selected_item_empty_state_icon_container">
                          <svg
                            className="my_individual_selected_item_empty_state_icon"
                            height="5rem"
                            width="100%"
                            viewBox="0 0 50.006 50.006"
                          >
                            <path d="M25.948 48.373c-.45-.15-1.22-.996-1.358-1.493-.162-.58-.162-21.14 0-21.72.149-.535.91-1.343 1.415-1.501.234-.074.994-.119 1.998-.119h1.62v-2.1c0-2.1 0-2.101.226-2.34l.225-.24h7.918l.225.24c.226.239.226.24.226 2.34v2.1h1.62c1.004 0 1.764.045 1.998.119.505.158 1.266.966 1.415 1.501.162.58.162 21.14 0 21.72-.149.536-.91 1.344-1.415 1.502-.512.16-15.63.152-16.113-.009zm15.901-1.718l.269-.285v-20.7l-.538-.57h-4.156l-.226-.239c-.185-.196-.225-.336-.225-.78v-.54h-1.47v-1.56h1.47v-1.56h-5.88v1.56h3.675v1.56h-3.675v.54c0 .444-.04.584-.226.78l-.225.24h-4.157l-.269.285-.268.285v20.7l.537.57H41.58zm-14.241-1.531c-.19-.256-.19-.306-.19-8.731v-8.474l.45-.479h6.148c6.08 0 6.15.003 6.39.203l.241.202v17.057l-.225.239c-.208.22-.294.24-1.103.24h-.877v-1.56h.735V29h-10.29v14.82h8.085v1.56h-9.174zm-19.546 1c-.85-.295-1.535-.965-1.944-1.902-.198-.452-.239-.683-.233-1.328.006-.752.05-.91 1.264-4.436.816-2.37 1.326-3.716 1.449-3.827a.773.773 0 01.445-.17c.14 0 .34.076.445.17.123.11.633 1.457 1.448 3.827 1.214 3.526 1.26 3.684 1.265 4.436.005.646-.035.875-.236 1.334-.32.734-.898 1.381-1.521 1.705-.61.317-1.753.408-2.382.19zm1.651-1.558c.627-.278 1.17-1.276 1.034-1.904-.087-.404-1.653-4.983-1.704-4.983-.051 0-1.618 4.58-1.705 4.983-.133.616.401 1.617 1.014 1.9.362.168.988.17 1.361.004zm-1.18-12.685c-.224-.237-.225-.253-.225-2.12v-1.88l16.577-17.595-.939-1.012c-1.289-1.39-1.302-1.272.343-3.03 1.228-1.313 1.297-1.37 1.654-1.37.35 0 .43.061 1.29.97l.917.97 2.189-2.31c2.368-2.5 2.603-2.681 3.604-2.778 1.09-.104 2.19.568 2.734 1.67.207.42.246.622.246 1.278.001 1.256-.087 1.394-2.59 4.065l-2.174 2.32.937 1.01c1.292 1.394 1.307 1.273-.376 3.059-1.683 1.786-1.568 1.77-2.883.397l-.954-.996L12.3 32.121h-1.77c-1.758 0-1.773-.002-1.996-.24zm11.213-9.9l8.085-8.58-1.883-1.998-16.17 17.159v1.999h1.884z" />
                          </svg>
                        </div>
                        <div className="my_individual_selected_item_empty_state_text_container">
                          <h2>No morning serum information</h2>
                          <p>
                            Start by adding some product information and check
                            back here after
                          </p>
                        </div>
                        <div className="my_individual_selected_item_bottom_buttons_container">
                          <div className="my_individual_selected_item_add_product_button">
                            <p>Add Product</p>
                          </div>
                          <div
                            className="my_individual_selected_item_back_to_routine_button"
                            onClick={() => changeItemToggled("")}
                          >
                            <p>Back to Routine</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Transition>
            </div>
            <div
              className="skin_care_routine_morning_my_routine_individual_item_container"
              onClick={(e) => handleItemToggled(e, "morning_moisturizer")}
              ref={individualItemMorningRef}
            >
              <div className="skin_care_routine_icon_container">
                <svg height="3rem" width="100%" viewBox="0 0 50.006 50.006">
                  <path d="M11.545 46.731c-2.98-.902-5.427-3.695-6.204-7.078-.236-1.029-.314-2.606-.314-6.375 0-4.588.035-5.084.416-5.925.228-.504.64-1.033.916-1.174.498-.256.5-.271.5-3.616 0-2.306.077-3.444.244-3.633.15-.168.88-.275 1.884-.275h1.64l.457-1.332c1.046-3.039 3.823-6.837 6.86-9.384 2.596-2.177 8.314-5.109 9.286-4.761.51.182.653.854.4 1.878-.117.477-.214 1.56-.214 2.408-.003 3.972 2.48 7.48 7.193 10.165l1.802 1.026h2.916c2.38 0 2.974.066 3.235.36.26.293.32.958.32 3.57v3.21l.638.605c1.095 1.038 1.194 1.61 1.19 6.87-.003 6.721-.48 8.643-2.741 11.052-1.217 1.297-2.269 1.952-3.906 2.433-1.713.503-24.848.481-26.518-.025zm27.311-2.12c1.532-.858 2.72-2.191 3.46-3.884l.668-1.53.064-5.397c.053-4.49.013-5.473-.238-5.855-.298-.453-.538-.459-17.8-.459-17.134 0-17.507.01-17.942.453-.436.445-.443.545-.378 5.964.065 5.38.08 5.542.595 6.773.889 2.125 2.69 3.823 4.607 4.342.424.115 6.417.19 13.385.17l12.618-.04zm2.398-21.598V20.49H8.487v5.047h32.767zm-20.92-5.333c-1.034-1.71-1.327-2.92-1.22-5.02.076-1.474.177-1.938.473-2.182.464-.383.538-.384.99-.012.327.27.339.432.119 1.693-.316 1.807.097 3.581 1.135 4.876 1.24 1.547 1.533 1.62 6.529 1.62h4.444l-1.32-1c-.727-.55-1.938-1.737-2.692-2.638-2.05-2.451-2.997-4.873-3.002-7.673-.003-1.514-.194-1.534-.849-.088-.42.93-.46 1.447-.32 4.173.043.848.004.923-.517.99-.48.063-.61-.049-.865-.737-.347-.934-.4-3.486-.092-4.399.115-.34.165-.67.112-.73-.188-.212-3.596 2.106-5.206 3.542-1.93 1.72-3.646 4.008-4.83 6.444-.475.974-.864 1.85-.866 1.944-.001.095 1.925.172 4.281.172h4.284l-.589-.975z" />
                </svg>
              </div>
              <h2>Moisturizer</h2>
              <FontAwesomeIcon
                className="skin_care_routine_user_add_icon"
                icon={faPlusCircle}
              />
              <Transition
                items={itemToggled}
                from={{ transform: "translateX(-100%)" }}
                enter={{ transform: "translateX(0%)" }}
                leave={{ transform: "translateX(-100%)" }}
                config={{ duration: 200 }}
              >
                {(itemToggled) =>
                  itemToggled === "morning_moisturizer" &&
                  ((styleprops) => (
                    <div
                      className="my_individual_selected_item_container"
                      style={styleprops}
                    >
                      <div className="my_individual_selected_item_contents_container">
                        <div className="my_individual_selected_item_top_container">
                          <div
                            className="my_individual_selected_item_back_container"
                            ref={selectedItemBackRef}
                            onClick={(e) => handleAppointmentUntoggled(e)}
                          >
                            <FontAwesomeIcon
                              icon={faLongArrowAltLeft}
                              className="my_individual_selected_item_back_arrow_icon"
                            />
                          </div>
                        </div>
                        <div className="my_individual_selected_item_header">
                          <p>Moisturizer (AM)</p>
                        </div>
                      </div>
                      <div className="my_individual_selected_item_empty_state_container">
                        <div className="my_individual_selected_item_empty_state_icon_container">
                          <svg
                            className="my_individual_selected_item_empty_state_icon"
                            height="5rem"
                            width="100%"
                            viewBox="0 0 50.006 50.006"
                          >
                            <path d="M11.545 46.731c-2.98-.902-5.427-3.695-6.204-7.078-.236-1.029-.314-2.606-.314-6.375 0-4.588.035-5.084.416-5.925.228-.504.64-1.033.916-1.174.498-.256.5-.271.5-3.616 0-2.306.077-3.444.244-3.633.15-.168.88-.275 1.884-.275h1.64l.457-1.332c1.046-3.039 3.823-6.837 6.86-9.384 2.596-2.177 8.314-5.109 9.286-4.761.51.182.653.854.4 1.878-.117.477-.214 1.56-.214 2.408-.003 3.972 2.48 7.48 7.193 10.165l1.802 1.026h2.916c2.38 0 2.974.066 3.235.36.26.293.32.958.32 3.57v3.21l.638.605c1.095 1.038 1.194 1.61 1.19 6.87-.003 6.721-.48 8.643-2.741 11.052-1.217 1.297-2.269 1.952-3.906 2.433-1.713.503-24.848.481-26.518-.025zm27.311-2.12c1.532-.858 2.72-2.191 3.46-3.884l.668-1.53.064-5.397c.053-4.49.013-5.473-.238-5.855-.298-.453-.538-.459-17.8-.459-17.134 0-17.507.01-17.942.453-.436.445-.443.545-.378 5.964.065 5.38.08 5.542.595 6.773.889 2.125 2.69 3.823 4.607 4.342.424.115 6.417.19 13.385.17l12.618-.04zm2.398-21.598V20.49H8.487v5.047h32.767zm-20.92-5.333c-1.034-1.71-1.327-2.92-1.22-5.02.076-1.474.177-1.938.473-2.182.464-.383.538-.384.99-.012.327.27.339.432.119 1.693-.316 1.807.097 3.581 1.135 4.876 1.24 1.547 1.533 1.62 6.529 1.62h4.444l-1.32-1c-.727-.55-1.938-1.737-2.692-2.638-2.05-2.451-2.997-4.873-3.002-7.673-.003-1.514-.194-1.534-.849-.088-.42.93-.46 1.447-.32 4.173.043.848.004.923-.517.99-.48.063-.61-.049-.865-.737-.347-.934-.4-3.486-.092-4.399.115-.34.165-.67.112-.73-.188-.212-3.596 2.106-5.206 3.542-1.93 1.72-3.646 4.008-4.83 6.444-.475.974-.864 1.85-.866 1.944-.001.095 1.925.172 4.281.172h4.284l-.589-.975z" />
                          </svg>
                        </div>
                        <div className="my_individual_selected_item_empty_state_text_container">
                          <h2>No morning moisturizer information</h2>
                          <p>
                            Start by adding some product information and check
                            back here after
                          </p>
                        </div>
                        <div className="my_individual_selected_item_bottom_buttons_container">
                          <div className="my_individual_selected_item_add_product_button">
                            <p>Add Product</p>
                          </div>
                          <div
                            className="my_individual_selected_item_back_to_routine_button"
                            onClick={() => changeItemToggled("")}
                          >
                            <p>Back to Routine</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Transition>
            </div>
            <div
              className="skin_care_routine_morning_my_routine_individual_item_container"
              onClick={(e) => handleItemToggled(e, "morning_spf")}
              ref={individualItemMorningRef}
            >
              <div className="skin_care_routine_icon_container">
                <svg height="3rem" width="100%" viewBox="0 0 50.006 50.006">
                  <path d="M18.26 43.005c0-3.431-.06-4.147-.363-4.395-1.504-1.227-3-6.15-3.928-12.932-.667-4.867-1.531-16.786-1.533-21.132v-.973h26.328l-.127 2.691c-.654 13.945-1.403 21.041-2.797 26.495-.624 2.442-1.701 4.977-2.446 5.757-.398.417-.452.895-.51 4.467l-.063 4-14.561.121zm13.28 2.374c0-.274-.345-.344-1.703-.344-1.136 0-1.853-.111-2.155-.336-.627-.466-3.666-.478-4.056-.016-.195.231-.864.355-2.164.4-1.249.045-1.915.163-1.98.353-.075.224 1.224.287 5.981.287 5.247 0 6.077-.047 6.077-.344zm-8.27-1.947c.992-.646 3.935-.646 4.775 0 .435.334.953.45 2.039.453l1.456.005v-4.582H19.425v2.139c0 1.175.07 2.206.155 2.29.086.084.793.152 1.573.152 1.022-.002 1.612-.129 2.116-.457zm9.307-5.863c2.09-2.055 4.108-14.198 4.604-27.697l.067-1.833-1.34-.069c-1.247-.064-1.34-.107-1.34-.63 0-.533.07-.56 1.399-.56h1.397V4.716h-23.53V6.78h18.871v1.145h-18.87v.634c0 .349.105 2.282.235 4.296.833 12.945 2.362 21.867 4.177 24.374l.512.706h6.723c5.844 0 6.773-.048 7.096-.365zm-7.56-7.195c0-.824.058-.916.582-.916.524 0 .583.092.583.916s-.059.917-.583.917-.582-.092-.582-.917zm-5.366-1.497c-.248-.294-.189-.462.363-1.029.622-.638.685-.655 1.089-.296.414.369.407.404-.202 1.03-.728.746-.845.774-1.25.295zm10.485-.226c-.552-.578-.552-.58-.088-1.035.464-.456.465-.456 1.13.226.557.572.617.74.369 1.035-.42.496-.775.44-1.41-.226zm-5.51-.369c-3.164-.548-5.05-3.499-4.16-6.51.693-2.342 2.62-3.768 5.092-3.768 3.047 0 5.283 2.215 5.283 5.234 0 3.269-2.896 5.62-6.215 5.044zm3.31-1.907c.95-.713 1.727-2.156 1.734-3.225.008-1.008-.919-2.656-1.826-3.248-1.601-1.047-3.473-.958-4.848.229-2.306 1.99-1.805 5.455.972 6.724 1.109.507 2.95.284 3.969-.48zm-10.608-3.217c0-.515.093-.572.932-.572s.932.057.932.572c0 .516-.093.573-.932.573s-.932-.057-.932-.573zm14.444 0c0-.526.085-.572 1.048-.572.963 0 1.049.046 1.049.572 0 .526-.086.573-1.049.573s-1.048-.047-1.048-.573zM19.93 18.62c-.6-.627-.632-.914-.149-1.309.3-.244.47-.186 1.047.357.646.608.665.675.305 1.066-.493.535-.593.525-1.203-.114zm10.14.123c-.371-.403-.355-.462.308-1.086.66-.622.723-.638 1.098-.269.376.37.358.431-.308 1.086-.683.673-.719.681-1.098.269zm-5.055-2.8c0-.824.058-.916.582-.916.524 0 .583.092.583.917 0 .824-.059.916-.583.916s-.582-.092-.582-.916z" />
                </svg>
              </div>
              <h2>SPF</h2>
              <FontAwesomeIcon
                className="skin_care_routine_user_add_icon"
                icon={faPlusCircle}
              />
              <Transition
                items={itemToggled}
                from={{ transform: "translateX(-100%)" }}
                enter={{ transform: "translateX(0%)" }}
                leave={{ transform: "translateX(-100%)" }}
                config={{ duration: 200 }}
              >
                {(itemToggled) =>
                  itemToggled === "morning_spf" &&
                  ((styleprops) => (
                    <div
                      className="my_individual_selected_item_container"
                      style={styleprops}
                    >
                      <div className="my_individual_selected_item_contents_container">
                        <div className="my_individual_selected_item_top_container">
                          <div
                            className="my_individual_selected_item_back_container"
                            ref={selectedItemBackRef}
                            onClick={(e) => handleAppointmentUntoggled(e)}
                          >
                            <FontAwesomeIcon
                              icon={faLongArrowAltLeft}
                              className="my_individual_selected_item_back_arrow_icon"
                            />
                          </div>
                        </div>
                        <div className="my_individual_selected_item_header">
                          <p>SPF (AM)</p>
                        </div>
                      </div>
                      <div className="my_individual_selected_item_empty_state_container">
                        <div className="my_individual_selected_item_empty_state_icon_container">
                          <svg
                            className="my_individual_selected_item_empty_state_icon"
                            height="5rem"
                            width="100%"
                            viewBox="0 0 50.006 50.006"
                          >
                            <path d="M18.26 43.005c0-3.431-.06-4.147-.363-4.395-1.504-1.227-3-6.15-3.928-12.932-.667-4.867-1.531-16.786-1.533-21.132v-.973h26.328l-.127 2.691c-.654 13.945-1.403 21.041-2.797 26.495-.624 2.442-1.701 4.977-2.446 5.757-.398.417-.452.895-.51 4.467l-.063 4-14.561.121zm13.28 2.374c0-.274-.345-.344-1.703-.344-1.136 0-1.853-.111-2.155-.336-.627-.466-3.666-.478-4.056-.016-.195.231-.864.355-2.164.4-1.249.045-1.915.163-1.98.353-.075.224 1.224.287 5.981.287 5.247 0 6.077-.047 6.077-.344zm-8.27-1.947c.992-.646 3.935-.646 4.775 0 .435.334.953.45 2.039.453l1.456.005v-4.582H19.425v2.139c0 1.175.07 2.206.155 2.29.086.084.793.152 1.573.152 1.022-.002 1.612-.129 2.116-.457zm9.307-5.863c2.09-2.055 4.108-14.198 4.604-27.697l.067-1.833-1.34-.069c-1.247-.064-1.34-.107-1.34-.63 0-.533.07-.56 1.399-.56h1.397V4.716h-23.53V6.78h18.871v1.145h-18.87v.634c0 .349.105 2.282.235 4.296.833 12.945 2.362 21.867 4.177 24.374l.512.706h6.723c5.844 0 6.773-.048 7.096-.365zm-7.56-7.195c0-.824.058-.916.582-.916.524 0 .583.092.583.916s-.059.917-.583.917-.582-.092-.582-.917zm-5.366-1.497c-.248-.294-.189-.462.363-1.029.622-.638.685-.655 1.089-.296.414.369.407.404-.202 1.03-.728.746-.845.774-1.25.295zm10.485-.226c-.552-.578-.552-.58-.088-1.035.464-.456.465-.456 1.13.226.557.572.617.74.369 1.035-.42.496-.775.44-1.41-.226zm-5.51-.369c-3.164-.548-5.05-3.499-4.16-6.51.693-2.342 2.62-3.768 5.092-3.768 3.047 0 5.283 2.215 5.283 5.234 0 3.269-2.896 5.62-6.215 5.044zm3.31-1.907c.95-.713 1.727-2.156 1.734-3.225.008-1.008-.919-2.656-1.826-3.248-1.601-1.047-3.473-.958-4.848.229-2.306 1.99-1.805 5.455.972 6.724 1.109.507 2.95.284 3.969-.48zm-10.608-3.217c0-.515.093-.572.932-.572s.932.057.932.572c0 .516-.093.573-.932.573s-.932-.057-.932-.573zm14.444 0c0-.526.085-.572 1.048-.572.963 0 1.049.046 1.049.572 0 .526-.086.573-1.049.573s-1.048-.047-1.048-.573zM19.93 18.62c-.6-.627-.632-.914-.149-1.309.3-.244.47-.186 1.047.357.646.608.665.675.305 1.066-.493.535-.593.525-1.203-.114zm10.14.123c-.371-.403-.355-.462.308-1.086.66-.622.723-.638 1.098-.269.376.37.358.431-.308 1.086-.683.673-.719.681-1.098.269zm-5.055-2.8c0-.824.058-.916.582-.916.524 0 .583.092.583.917 0 .824-.059.916-.583.916s-.582-.092-.582-.916z" />
                          </svg>
                        </div>
                        <div className="my_individual_selected_item_empty_state_text_container">
                          <h2>No morning SPF information</h2>
                          <p>
                            Start by adding some product information and check
                            back here after
                          </p>
                        </div>
                        <div className="my_individual_selected_item_bottom_buttons_container">
                          <div className="my_individual_selected_item_add_product_button">
                            <p>Add Product</p>
                          </div>
                          <div
                            className="my_individual_selected_item_back_to_routine_button"
                            onClick={() => changeItemToggled("")}
                          >
                            <p>Back to Routine</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Transition>
            </div>
          </div>
        </div>
        <div className="skin_care_routine_evening_content_container">
          <div className="skin_care_routine_evening_header">
            <h2>Evening</h2>
          </div>
          <div className="skin_care_routine_evening_items_container">
            <div
              className="skin_care_routine_evening_my_routine_individual_item_container"
              onClick={(e) => handleItemToggled(e, "evening_oil_cleanser")}
              ref={individualItemEveningRef}
            >
              <div className="skin_care_routine_icon_container">
                <svg viewBox="0 0 50.006 50.006" height="3rem" width="100%">
                  <path
                    strokeWidth=".794"
                    d="M20.737 48.765c-.497-.363-.516-.883-.586-16.044-.082-17.693-.177-16.822 1.854-16.968l1.129-.082.146-7.805h1.574V5.192c0-2.638-.008-2.673-.596-2.537-.327.076-1.875.285-3.44.464l-2.844.326v1.02c0 .844-.091 1.02-.529 1.02-.458 0-.529-.176-.529-1.307 0-.72.11-1.375.244-1.458.757-.468 8.456-1.213 11.83-1.145l3.668.073.15 6.185 1.438.165.146 7.806h1.01c1.992 0 1.886-.933 1.886 16.623 0 15.303-.012 15.668-.529 16.185-.504.504-.882.529-8.019.529-6.05 0-7.589-.072-8.004-.376zm15.43-16.359l-.068-15.676-6.88-.074c-3.783-.041-7.146-.01-7.474.07l-.595.146v15.43c0 8.485.08 15.507.176 15.604.097.097 3.492.177 7.543.177h7.366zm-2.979-20.174v-3.44l-8.863-.145v7.17l8.863-.145zm-1.455-7.011V2.575h-5.82v5.291h5.82z"
                    stroke="#000"
                    strokeOpacity="1"
                    strokeMiterlimit="4"
                    strokeDasharray="none"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <g
                    stroke="#000"
                    strokeWidth="1.058"
                    strokeMiterlimit="4"
                    strokeDasharray="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path fill="none" d="M36.718 29.288l-16.108-.054z" />
                    <path fill="none" d="M20.61 37.315h16.217z" />
                    <path d="M17.221 13.194c-.828-.133-1.482-.708-1.689-1.484-.148-.556-.03-1.045.489-2.038.45-.86 1.353-2.281 1.472-2.317.092-.028.138.012.33.293.884 1.284 1.54 2.49 1.726 3.171.293 1.078-.505 2.196-1.695 2.375-.18.027-.464.027-.633 0zm.886-.306c.699-.228 1.175-.803 1.25-1.51.053-.49-.324-1.365-1.168-2.707-.35-.557-.622-.96-.647-.96-.04 0-.737 1.089-1.065 1.664-.347.608-.596 1.147-.705 1.525-.056.194-.056.554 0 .756.176.626.666 1.094 1.325 1.266.26.067.749.051 1.01-.034z" />
                    <path d="M28.472 35.385c-.635-.097-1.137-.52-1.295-1.089-.113-.408-.023-.767.375-1.496.345-.631 1.037-1.674 1.129-1.7.07-.021.105.008.253.214.678.943 1.18 1.828 1.323 2.328.225.791-.387 1.612-1.3 1.743-.137.02-.355.02-.485 0zm.68-.225c.535-.167.9-.589.959-1.108.04-.36-.25-1.002-.897-1.987-.268-.409-.476-.705-.496-.705-.03 0-.565.8-.817 1.222-.266.446-.457.842-.54 1.12a1.205 1.205 0 000 .554c.135.46.51.803 1.016.93.2.049.574.037.774-.026z" />
                  </g>
                </svg>
              </div>
              <h2>Oil Cleanser</h2>
              <FontAwesomeIcon
                className="skin_care_routine_user_add_icon"
                icon={faPlusCircle}
              />
              <Transition
                items={itemToggled}
                from={{ transform: "translateX(-100%)" }}
                enter={{ transform: "translateX(0%)" }}
                leave={{ transform: "translateX(-100%)" }}
                config={{ duration: 200 }}
              >
                {(itemToggled) =>
                  itemToggled === "evening_oil_cleanser" &&
                  ((styleprops) => (
                    <div
                      className="my_individual_selected_item_container"
                      style={styleprops}
                    >
                      <div className="my_individual_selected_item_contents_container">
                        <div className="my_individual_selected_item_top_container">
                          <div
                            className="my_individual_selected_item_back_container"
                            ref={selectedItemBackRef}
                            onClick={(e) => handleAppointmentUntoggled(e)}
                          >
                            <FontAwesomeIcon
                              icon={faLongArrowAltLeft}
                              className="my_individual_selected_item_back_arrow_icon"
                            />
                          </div>
                        </div>
                        <div className="my_individual_selected_item_header">
                          <p>Oil Cleanser</p>
                        </div>
                      </div>
                      <div className="my_individual_selected_item_empty_state_container">
                        <div className="my_individual_selected_item_empty_state_icon_container">
                          <svg
                            className="my_individual_selected_item_empty_state_icon"
                            height="5rem"
                            width="100%"
                            viewBox="0 0 50.006 50.006"
                          >
                            <path
                              strokeWidth=".794"
                              d="M20.737 48.765c-.497-.363-.516-.883-.586-16.044-.082-17.693-.177-16.822 1.854-16.968l1.129-.082.146-7.805h1.574V5.192c0-2.638-.008-2.673-.596-2.537-.327.076-1.875.285-3.44.464l-2.844.326v1.02c0 .844-.091 1.02-.529 1.02-.458 0-.529-.176-.529-1.307 0-.72.11-1.375.244-1.458.757-.468 8.456-1.213 11.83-1.145l3.668.073.15 6.185 1.438.165.146 7.806h1.01c1.992 0 1.886-.933 1.886 16.623 0 15.303-.012 15.668-.529 16.185-.504.504-.882.529-8.019.529-6.05 0-7.589-.072-8.004-.376zm15.43-16.359l-.068-15.676-6.88-.074c-3.783-.041-7.146-.01-7.474.07l-.595.146v15.43c0 8.485.08 15.507.176 15.604.097.097 3.492.177 7.543.177h7.366zm-2.979-20.174v-3.44l-8.863-.145v7.17l8.863-.145zm-1.455-7.011V2.575h-5.82v5.291h5.82z"
                              strokeOpacity="1"
                              strokeMiterlimit="4"
                              strokeDasharray="none"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            />
                            <g
                              strokeWidth="1.058"
                              strokeMiterlimit="4"
                              strokeDasharray="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                fill="none"
                                d="M36.718 29.288l-16.108-.054z"
                              />
                              <path fill="none" d="M20.61 37.315h16.217z" />
                              <path d="M17.221 13.194c-.828-.133-1.482-.708-1.689-1.484-.148-.556-.03-1.045.489-2.038.45-.86 1.353-2.281 1.472-2.317.092-.028.138.012.33.293.884 1.284 1.54 2.49 1.726 3.171.293 1.078-.505 2.196-1.695 2.375-.18.027-.464.027-.633 0zm.886-.306c.699-.228 1.175-.803 1.25-1.51.053-.49-.324-1.365-1.168-2.707-.35-.557-.622-.96-.647-.96-.04 0-.737 1.089-1.065 1.664-.347.608-.596 1.147-.705 1.525-.056.194-.056.554 0 .756.176.626.666 1.094 1.325 1.266.26.067.749.051 1.01-.034z" />
                              <path d="M28.472 35.385c-.635-.097-1.137-.52-1.295-1.089-.113-.408-.023-.767.375-1.496.345-.631 1.037-1.674 1.129-1.7.07-.021.105.008.253.214.678.943 1.18 1.828 1.323 2.328.225.791-.387 1.612-1.3 1.743-.137.02-.355.02-.485 0zm.68-.225c.535-.167.9-.589.959-1.108.04-.36-.25-1.002-.897-1.987-.268-.409-.476-.705-.496-.705-.03 0-.565.8-.817 1.222-.266.446-.457.842-.54 1.12a1.205 1.205 0 000 .554c.135.46.51.803 1.016.93.2.049.574.037.774-.026z" />
                            </g>
                          </svg>
                        </div>
                        <div className="my_individual_selected_item_empty_state_text_container">
                          <h2>No oil cleanser information</h2>
                          <p>
                            Start by adding some product information and check
                            back here after
                          </p>
                        </div>
                        <div className="my_individual_selected_item_bottom_buttons_container">
                          <div className="my_individual_selected_item_add_product_button">
                            <p>Add Product</p>
                          </div>
                          <div
                            className="my_individual_selected_item_back_to_routine_button"
                            onClick={() => changeItemToggled("")}
                          >
                            <p>Back to Routine</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Transition>
            </div>
            <div
              className="skin_care_routine_evening_my_routine_individual_item_container"
              onClick={(e) => handleItemToggled(e, "evening_cleanser")}
              ref={individualItemEveningRef}
            >
              <div className="skin_care_routine_icon_container">
                <svg viewBox="0 0 50.006 50.006" height="3rem" width="100%">
                  <path
                    strokeWidth=".794"
                    d="M20.737 48.765c-.497-.363-.516-.883-.586-16.044-.082-17.693-.177-16.822 1.854-16.968l1.129-.082.146-7.805h1.574V5.192c0-2.638-.008-2.673-.596-2.537-.327.076-1.875.285-3.44.464l-2.844.326v1.02c0 .844-.091 1.02-.529 1.02-.458 0-.529-.176-.529-1.307 0-.72.11-1.375.244-1.458.757-.468 8.456-1.213 11.83-1.145l3.668.073.15 6.185 1.438.165.146 7.806h1.01c1.992 0 1.886-.933 1.886 16.623 0 15.303-.012 15.668-.529 16.185-.504.504-.882.529-8.019.529-6.05 0-7.589-.072-8.004-.376zm15.43-16.359l-.068-15.676-6.88-.074c-3.783-.041-7.146-.01-7.474.07l-.595.146v15.43c0 8.485.08 15.507.176 15.604.097.097 3.492.177 7.543.177h7.366zm-2.979-20.174v-3.44l-8.863-.145v7.17l8.863-.145zm-1.455-7.011V2.575h-5.82v5.291h5.82z"
                    stroke="#000"
                    strokeOpacity="1"
                    strokeMiterlimit="4"
                    strokeDasharray="none"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h2>Cleanser</h2>
              <FontAwesomeIcon
                className="skin_care_routine_user_add_icon"
                icon={faPlusCircle}
              />
              <Transition
                items={itemToggled}
                from={{ transform: "translateX(-100%)" }}
                enter={{ transform: "translateX(0%)" }}
                leave={{ transform: "translateX(-100%)" }}
                config={{ duration: 200 }}
              >
                {(itemToggled) =>
                  itemToggled === "evening_cleanser" &&
                  ((styleprops) => (
                    <div
                      className="my_individual_selected_item_container"
                      style={styleprops}
                    >
                      <div className="my_individual_selected_item_contents_container">
                        <div className="my_individual_selected_item_top_container">
                          <div
                            className="my_individual_selected_item_back_container"
                            ref={selectedItemBackRef}
                            onClick={(e) => handleAppointmentUntoggled(e)}
                          >
                            <FontAwesomeIcon
                              icon={faLongArrowAltLeft}
                              className="my_individual_selected_item_back_arrow_icon"
                            />
                          </div>
                        </div>
                        <div className="my_individual_selected_item_header">
                          <p>Cleanser (PM)</p>
                        </div>
                      </div>
                      <div className="my_individual_selected_item_empty_state_container">
                        <div className="my_individual_selected_item_empty_state_icon_container">
                          <svg
                            className="my_individual_selected_item_empty_state_icon"
                            height="5rem"
                            width="100%"
                            viewBox="0 0 50.006 50.006"
                          >
                            <path
                              strokeWidth=".794"
                              d="M20.737 48.765c-.497-.363-.516-.883-.586-16.044-.082-17.693-.177-16.822 1.854-16.968l1.129-.082.146-7.805h1.574V5.192c0-2.638-.008-2.673-.596-2.537-.327.076-1.875.285-3.44.464l-2.844.326v1.02c0 .844-.091 1.02-.529 1.02-.458 0-.529-.176-.529-1.307 0-.72.11-1.375.244-1.458.757-.468 8.456-1.213 11.83-1.145l3.668.073.15 6.185 1.438.165.146 7.806h1.01c1.992 0 1.886-.933 1.886 16.623 0 15.303-.012 15.668-.529 16.185-.504.504-.882.529-8.019.529-6.05 0-7.589-.072-8.004-.376zm15.43-16.359l-.068-15.676-6.88-.074c-3.783-.041-7.146-.01-7.474.07l-.595.146v15.43c0 8.485.08 15.507.176 15.604.097.097 3.492.177 7.543.177h7.366zm-2.979-20.174v-3.44l-8.863-.145v7.17l8.863-.145zm-1.455-7.011V2.575h-5.82v5.291h5.82z"
                              strokeOpacity="1"
                              strokeMiterlimit="4"
                              strokeDasharray="none"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <div className="my_individual_selected_item_empty_state_text_container">
                          <h2>No evening cleanser information</h2>
                          <p>
                            Start by adding some product information and check
                            back here after
                          </p>
                        </div>
                        <div className="my_individual_selected_item_bottom_buttons_container">
                          <div className="my_individual_selected_item_add_product_button">
                            <p>Add Product</p>
                          </div>
                          <div
                            className="my_individual_selected_item_back_to_routine_button"
                            onClick={() => changeItemToggled("")}
                          >
                            <p>Back to Routine</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Transition>
            </div>
            <div
              className="skin_care_routine_evening_my_routine_individual_item_container"
              onClick={(e) => handleItemToggled(e, "evening_exfoliator")}
              ref={individualItemEveningRef}
            >
              <div className="skin_care_routine_icon_container">
                <svg viewBox="0 0 50.006 50.006" height="3rem" width="100%">
                  <path
                    strokeWidth=".529"
                    d="M18.764 47.511c-.827-.284-1.393-.792-1.773-1.592-.281-.591-.309-1.058-.297-5.06.007-2.425-.03-4.75-.083-5.168-.053-.418-.354-3.064-.67-5.88-.316-2.817-.722-6.413-.902-7.992-.18-1.579-.399-3.534-.487-4.345A2681.97 2681.97 0 0013.18 5.448c-.134-1.144-.162-1.967-.071-2.134.139-.254.879-.271 12.025-.271 11.145 0 11.887.017 12.029.271.097.174.039 1.276-.161 3.065a2188.57 2188.57 0 00-.805 7.371c-.27 2.518-.637 5.904-.813 7.526-.177 1.622-.548 5.043-.823 7.604-.276 2.56-.61 5.633-.741 6.828-.143 1.288-.24 3.745-.24 6.038 0 3.833-.004 3.871-.407 4.521-.223.36-.684.82-1.025 1.023-.618.366-.622.366-6.686.402-4.852.028-6.194-.008-6.698-.18zm11.118-.888c.912-.044 1.337-.14 1.68-.381.826-.58.865-.791.867-4.754l.003-3.686H17.837l.012 3.53c.015 4.158.083 4.457 1.138 4.966.584.282.994.35 2.131.35h1.408c3.495-.037 4.948.08 7.356-.025zm2.632-10.101c.04-.107.484-4 .986-8.651.502-4.652 1.28-11.827 1.726-15.945.447-4.118.813-7.558.813-7.643 0-.1-3.765-.154-10.905-.154-5.997 0-10.905.045-10.905.1 0 .055.702 6.287 1.56 13.85.859 7.562 1.675 14.762 1.815 16 .14 1.237.284 2.337.32 2.444.052.15 1.657.194 7.292.194 5.633 0 7.242-.043 7.298-.194zm-12.432-7.893c-.163-.09-.367-.34-.454-.557-.167-.414-1.46-11.363-1.499-12.677-.019-.672.04-.812.502-1.203l.523-.442h5.909c6.372 0 6.57.023 7.023.823.181.32.173.773-.05 2.767-.148 1.311-.452 4.025-.676 6.031-.52 4.66-.512 4.62-1.013 5.06-.417.365-.474.371-3.66.371-2.751 0-3.267-.037-3.45-.246-.157-.178-.169-.316-.044-.504.15-.224.59-.264 3.298-.3l3.125-.043.098-.578c.054-.318.169-1.242.255-2.053.19-1.782.768-6.87.986-8.683.118-.986.109-1.34-.039-1.426-.287-.168-11.15-.154-11.432.014-.231.139.02 2.943 1.015 11.29l.17 1.428.821.046c.932.053 1.322.385.95.81-.252.286-1.879.337-2.358.073zM15.92 8.685a.611.611 0 01.064-.504c.15-.224 1.075-.255 8.923-.293 4.815-.024 8.913-.007 9.106.037.393.09.588.431.446.782-.082.203-1.264.232-9.265.232-8.339 0-9.18-.023-9.274-.253zm.966-1.484c-.116-.11-.196-.642-.196-1.308 0-.958.044-1.136.305-1.214.69-.207.843.031.843 1.312 0 .959-.054 1.228-.26 1.302-.366.133-.468.12-.692-.092zm2.766-.104c-.245-.434-.218-1.922.041-2.257.119-.154.359-.253.533-.222.284.052.317.197.317 1.375 0 1.236-.022 1.32-.358 1.365a.51.51 0 01-.533-.261zm2.654.188c-.14-.053-.205-.467-.205-1.296 0-1.092.035-1.229.336-1.32.59-.177.812.18.812 1.31 0 1.24-.241 1.574-.943 1.306zm2.417-.211c-.098-.173-.156-.742-.129-1.264.051-.999.314-1.361.846-1.168.388.141.396 2.511.01 2.651-.416.151-.539.114-.727-.22zm2.66.181c-.153-.09-.2-.477-.165-1.353.042-1.07.09-1.234.366-1.284.475-.086.748.402.748 1.335 0 1.21-.336 1.67-.95 1.302zm2.458-.054c-.117-.11-.197-.642-.197-1.308 0-.958.045-1.136.305-1.214.677-.203.843.037.843 1.22 0 1.075-.16 1.489-.574 1.489-.099 0-.269-.084-.377-.187zm2.766-.104c-.245-.434-.218-1.922.04-2.257.12-.154.36-.253.534-.222.284.052.317.197.317 1.375 0 1.236-.022 1.32-.358 1.365a.51.51 0 01-.533-.261z"
                    strokeOpacity="1"
                    strokeMiterlimit="4"
                    strokeDasharray="none"
                  />
                  <path
                    strokeWidth="1.535"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                    d="M21.828 28.31h2.778z"
                    strokeMiterlimit="4"
                    strokeDasharray="none"
                  />
                </svg>
              </div>
              <h2>Exfoliator</h2>
              <FontAwesomeIcon
                className="skin_care_routine_user_add_icon"
                icon={faPlusCircle}
              />
              <Transition
                items={itemToggled}
                from={{ transform: "translateX(-100%)" }}
                enter={{ transform: "translateX(0%)" }}
                leave={{ transform: "translateX(-100%)" }}
                config={{ duration: 200 }}
              >
                {(itemToggled) =>
                  itemToggled === "evening_exfoliator" &&
                  ((styleprops) => (
                    <div
                      className="my_individual_selected_item_container"
                      style={styleprops}
                    >
                      <div className="my_individual_selected_item_contents_container">
                        <div className="my_individual_selected_item_top_container">
                          <div
                            className="my_individual_selected_item_back_container"
                            ref={selectedItemBackRef}
                            onClick={(e) => handleAppointmentUntoggled(e)}
                          >
                            <FontAwesomeIcon
                              icon={faLongArrowAltLeft}
                              className="my_individual_selected_item_back_arrow_icon"
                            />
                          </div>
                        </div>
                        <div className="my_individual_selected_item_header">
                          <p>Exfoliator</p>
                        </div>
                      </div>
                      <div className="my_individual_selected_item_empty_state_container">
                        <div className="my_individual_selected_item_empty_state_icon_container">
                          <svg
                            className="my_individual_selected_item_empty_state_icon"
                            height="5rem"
                            width="100%"
                            viewBox="0 0 50.006 50.006"
                          >
                            <path
                              strokeWidth=".529"
                              d="M18.764 47.511c-.827-.284-1.393-.792-1.773-1.592-.281-.591-.309-1.058-.297-5.06.007-2.425-.03-4.75-.083-5.168-.053-.418-.354-3.064-.67-5.88-.316-2.817-.722-6.413-.902-7.992-.18-1.579-.399-3.534-.487-4.345A2681.97 2681.97 0 0013.18 5.448c-.134-1.144-.162-1.967-.071-2.134.139-.254.879-.271 12.025-.271 11.145 0 11.887.017 12.029.271.097.174.039 1.276-.161 3.065a2188.57 2188.57 0 00-.805 7.371c-.27 2.518-.637 5.904-.813 7.526-.177 1.622-.548 5.043-.823 7.604-.276 2.56-.61 5.633-.741 6.828-.143 1.288-.24 3.745-.24 6.038 0 3.833-.004 3.871-.407 4.521-.223.36-.684.82-1.025 1.023-.618.366-.622.366-6.686.402-4.852.028-6.194-.008-6.698-.18zm11.118-.888c.912-.044 1.337-.14 1.68-.381.826-.58.865-.791.867-4.754l.003-3.686H17.837l.012 3.53c.015 4.158.083 4.457 1.138 4.966.584.282.994.35 2.131.35h1.408c3.495-.037 4.948.08 7.356-.025zm2.632-10.101c.04-.107.484-4 .986-8.651.502-4.652 1.28-11.827 1.726-15.945.447-4.118.813-7.558.813-7.643 0-.1-3.765-.154-10.905-.154-5.997 0-10.905.045-10.905.1 0 .055.702 6.287 1.56 13.85.859 7.562 1.675 14.762 1.815 16 .14 1.237.284 2.337.32 2.444.052.15 1.657.194 7.292.194 5.633 0 7.242-.043 7.298-.194zm-12.432-7.893c-.163-.09-.367-.34-.454-.557-.167-.414-1.46-11.363-1.499-12.677-.019-.672.04-.812.502-1.203l.523-.442h5.909c6.372 0 6.57.023 7.023.823.181.32.173.773-.05 2.767-.148 1.311-.452 4.025-.676 6.031-.52 4.66-.512 4.62-1.013 5.06-.417.365-.474.371-3.66.371-2.751 0-3.267-.037-3.45-.246-.157-.178-.169-.316-.044-.504.15-.224.59-.264 3.298-.3l3.125-.043.098-.578c.054-.318.169-1.242.255-2.053.19-1.782.768-6.87.986-8.683.118-.986.109-1.34-.039-1.426-.287-.168-11.15-.154-11.432.014-.231.139.02 2.943 1.015 11.29l.17 1.428.821.046c.932.053 1.322.385.95.81-.252.286-1.879.337-2.358.073zM15.92 8.685a.611.611 0 01.064-.504c.15-.224 1.075-.255 8.923-.293 4.815-.024 8.913-.007 9.106.037.393.09.588.431.446.782-.082.203-1.264.232-9.265.232-8.339 0-9.18-.023-9.274-.253zm.966-1.484c-.116-.11-.196-.642-.196-1.308 0-.958.044-1.136.305-1.214.69-.207.843.031.843 1.312 0 .959-.054 1.228-.26 1.302-.366.133-.468.12-.692-.092zm2.766-.104c-.245-.434-.218-1.922.041-2.257.119-.154.359-.253.533-.222.284.052.317.197.317 1.375 0 1.236-.022 1.32-.358 1.365a.51.51 0 01-.533-.261zm2.654.188c-.14-.053-.205-.467-.205-1.296 0-1.092.035-1.229.336-1.32.59-.177.812.18.812 1.31 0 1.24-.241 1.574-.943 1.306zm2.417-.211c-.098-.173-.156-.742-.129-1.264.051-.999.314-1.361.846-1.168.388.141.396 2.511.01 2.651-.416.151-.539.114-.727-.22zm2.66.181c-.153-.09-.2-.477-.165-1.353.042-1.07.09-1.234.366-1.284.475-.086.748.402.748 1.335 0 1.21-.336 1.67-.95 1.302zm2.458-.054c-.117-.11-.197-.642-.197-1.308 0-.958.045-1.136.305-1.214.677-.203.843.037.843 1.22 0 1.075-.16 1.489-.574 1.489-.099 0-.269-.084-.377-.187zm2.766-.104c-.245-.434-.218-1.922.04-2.257.12-.154.36-.253.534-.222.284.052.317.197.317 1.375 0 1.236-.022 1.32-.358 1.365a.51.51 0 01-.533-.261z"
                              strokeOpacity="1"
                              strokeMiterlimit="4"
                              strokeDasharray="none"
                            />
                            <path
                              strokeWidth="1.535"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                              d="M21.828 28.31h2.778z"
                              strokeMiterlimit="4"
                              strokeDasharray="none"
                            />
                          </svg>
                        </div>
                        <div className="my_individual_selected_item_empty_state_text_container">
                          <h2>No exfoliator information</h2>
                          <p>
                            Start by adding some product information and check
                            back here after
                          </p>
                        </div>
                        <div className="my_individual_selected_item_bottom_buttons_container">
                          <div className="my_individual_selected_item_add_product_button">
                            <p>Add Product</p>
                          </div>
                          <div
                            className="my_individual_selected_item_back_to_routine_button"
                            onClick={() => changeItemToggled("")}
                          >
                            <p>Back to Routine</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Transition>
            </div>
            <div
              className="skin_care_routine_evening_my_routine_individual_item_container"
              onClick={(e) => handleItemToggled(e, "evening_treatment_mask")}
              ref={individualItemEveningRef}
            >
              <div className="skin_care_routine_icon_container">
                <svg height="3rem" width="100%" viewBox="0 0 50.006 50.006">
                  <g stroke="#000" strokeLinecap="round" strokeLinejoin="round">
                    <path
                      d="M28.437 47.19c-.209-.045-1.748-.542-3.42-1.104-3.915-1.316-5.443-1.618-8.21-1.622-2.689-.005-4.421-.34-5.949-1.155-4.676-2.492-6.003-10.143-3.224-18.596 2.262-6.883 5.24-12.42 9.144-17.009 1.438-1.69 2-2.135 2.306-1.829.136.137-.165.585-.976 1.452-1.644 1.757-3.256 3.946-3.256 4.422 0 .22.3.897.665 1.503.65 1.078.84 1.767.49 1.767-.098 0-.441-.462-.764-1.026-.917-1.604-1.083-1.565-2.335.55-1.948 3.293-3.734 7.449-4.793 11.154-.929 3.248-1.063 4.04-1.218 7.177-.113 2.319-.09 2.805.153 3.088.369.43.603.422 1.41-.054.986-.581 1.003-.135.026.666-.604.494-.853.84-.853 1.181 0 .762 1.046 2.739 1.924 3.635 1.726 1.764 3.443 2.31 7.29 2.314 2.9.004 4.659.372 9.025 1.892 2.694.937 2.804.958 4.94.956 1.202-.002 2.308-.08 2.458-.175.23-.145.237-.331.048-1.151-.124-.538-.226-1.193-.226-1.455 0-.768.463-.41.58.449.136 1.006.646 1.766 1.182 1.766.878 0 2.823-1.13 4.008-2.328 1.341-1.356 2.137-2.755 2.951-5.186.617-1.843 1.44-6.035 1.27-6.475-.12-.312-2.05-1.212-3.394-1.582-.943-.26-1.227-.469-.905-.668.239-.147 1.461.174 3.032.798 1.17.464 1.228.47 1.473.136.394-.54.712-.057.66 1.006-.075 1.585-1.14 6.43-1.75 7.97-1.686 4.25-4.254 6.556-8.197 7.36-1.338.273-4.63.375-5.565.173zm-7.264-11.654c-3.654-.51-6.023-1.69-5.664-2.822.54-1.703 8.557-1.04 11.335.939.703.5.726 1.189.054 1.629-.581.38-3.795.523-5.725.254zm5.22-.417c1.737-.83-.603-2.197-4.986-2.912-2.847-.464-5.008-.25-5.49.542-.176.291-.102.438.455.909.904.763 2.823 1.297 6.365 1.77.986.131 3.11-.048 3.656-.31zm17.384-5.47c-.173-.277-.205-.959-.118-2.518.294-5.258-.944-11.223-3.179-15.316-.958-1.755-1.592-2.61-3.06-4.127-1-1.033-1.087-1.182-.812-1.41.27-.223.453-.102 1.463.965 3.173 3.355 5.339 8.308 6.058 13.855.253 1.953.276 7.557.034 8.408-.143.504-.158.51-.386.144zm-22.552-.127c-.623-.15-1.251-.372-1.397-.494-.471-.39-.623-1.083-.412-1.869.297-1.1.678-.954.668.256-.007.958.02 1.01.67 1.33.374.182 1.193.385 1.82.45 1.086.114 1.163.094 1.555-.404.227-.289.412-.77.412-1.07 0-.356.098-.543.285-.543.342 0 .373.64.075 1.497-.391 1.121-1.49 1.375-3.676.847zm10.982-4.254c-3.05-.535-4.635-1.858-4.338-3.618.265-1.568 1.971-2.208 4.463-1.674.54.116 1.197.418 1.482.682.408.377.435.446.132.34-1.348-.473-2.6-.688-3.591-.617-.931.067-1.197.168-1.568.6-.845.982-.498 2.172.83 2.844 3.26 1.651 6.134 1.307 6.134-.736 0-.317.087-.474.237-.425.363.12.39.812.056 1.458-.539 1.041-1.979 1.472-3.837 1.146zm-16.303-3.119c-1.615-.433-2.043-1.53-1.19-3.046.556-.985 1.803-1.476 3.4-1.337 2.987.26 4.03 1.866 2.32 3.576-1.037 1.037-2.623 1.32-4.53.807zm3.639-.663c1.293-.788 1.547-2.015.567-2.744-.422-.313-.87-.411-2.09-.456-1.833-.067-2.63.295-3.094 1.405-.355.85-.204 1.334.56 1.8.85.518 3.203.516 4.057-.005zM34.45 5.341c-2.571-1.566-6.22-2.31-9.453-1.93-1.865.22-2.952.615-4.213 1.528-.858.622-1.374.74-1.374.317 0-.371 1.115-1.175 2.614-1.885l1.281-.607 3.42.006c3.176.005 3.532.042 4.985.511 1.58.51 3.815 1.642 4.228 2.14.216.26.12.675-.152.66-.072-.003-.673-.336-1.336-.74z"
                      strokeWidth=".95"
                    />
                    <path
                      d="M33.771 21.123c.152.065.305.126.46.183.047.017.084.052.13.07.065.04.122.087.184.13l.227.165c.14.113.264.243.38.378.1.128.19.261.261.406.046.081.078.168.1.257l.003.018.615-.332a1.293 1.293 0 00-.116-.285 2.514 2.514 0 00-.272-.42 4.292 4.292 0 00-.383-.393c-.074-.059-.154-.11-.23-.168-.061-.043-.12-.09-.18-.135-.043-.032-.101-.045-.143-.08-.157-.051-.888.28-1.036.206-.547-.463.19-.132 0 0z"
                      strokeWidth=".661"
                    />
                  </g>
                </svg>
              </div>
              <h2>Treatment Mask</h2>
              <FontAwesomeIcon
                className="skin_care_routine_user_add_icon"
                icon={faPlusCircle}
              />
              <Transition
                items={itemToggled}
                from={{ transform: "translateX(-100%)" }}
                enter={{ transform: "translateX(0%)" }}
                leave={{ transform: "translateX(-100%)" }}
                config={{ duration: 200 }}
              >
                {(itemToggled) =>
                  itemToggled === "evening_treatment_mask" &&
                  ((styleprops) => (
                    <div
                      className="my_individual_selected_item_container"
                      style={styleprops}
                    >
                      <div className="my_individual_selected_item_contents_container">
                        <div className="my_individual_selected_item_top_container">
                          <div
                            className="my_individual_selected_item_back_container"
                            ref={selectedItemBackRef}
                            onClick={(e) => handleAppointmentUntoggled(e)}
                          >
                            <FontAwesomeIcon
                              icon={faLongArrowAltLeft}
                              className="my_individual_selected_item_back_arrow_icon"
                            />
                          </div>
                        </div>
                        <div className="my_individual_selected_item_header">
                          <p>Treatment Mask</p>
                        </div>
                      </div>
                      <div className="my_individual_selected_item_empty_state_container">
                        <div className="my_individual_selected_item_empty_state_icon_container">
                          <svg
                            className="my_individual_selected_item_empty_state_icon"
                            height="5rem"
                            width="100%"
                            viewBox="0 0 50.006 50.006"
                          >
                            <g strokeLinecap="round" strokeLinejoin="round">
                              <path
                                d="M28.437 47.19c-.209-.045-1.748-.542-3.42-1.104-3.915-1.316-5.443-1.618-8.21-1.622-2.689-.005-4.421-.34-5.949-1.155-4.676-2.492-6.003-10.143-3.224-18.596 2.262-6.883 5.24-12.42 9.144-17.009 1.438-1.69 2-2.135 2.306-1.829.136.137-.165.585-.976 1.452-1.644 1.757-3.256 3.946-3.256 4.422 0 .22.3.897.665 1.503.65 1.078.84 1.767.49 1.767-.098 0-.441-.462-.764-1.026-.917-1.604-1.083-1.565-2.335.55-1.948 3.293-3.734 7.449-4.793 11.154-.929 3.248-1.063 4.04-1.218 7.177-.113 2.319-.09 2.805.153 3.088.369.43.603.422 1.41-.054.986-.581 1.003-.135.026.666-.604.494-.853.84-.853 1.181 0 .762 1.046 2.739 1.924 3.635 1.726 1.764 3.443 2.31 7.29 2.314 2.9.004 4.659.372 9.025 1.892 2.694.937 2.804.958 4.94.956 1.202-.002 2.308-.08 2.458-.175.23-.145.237-.331.048-1.151-.124-.538-.226-1.193-.226-1.455 0-.768.463-.41.58.449.136 1.006.646 1.766 1.182 1.766.878 0 2.823-1.13 4.008-2.328 1.341-1.356 2.137-2.755 2.951-5.186.617-1.843 1.44-6.035 1.27-6.475-.12-.312-2.05-1.212-3.394-1.582-.943-.26-1.227-.469-.905-.668.239-.147 1.461.174 3.032.798 1.17.464 1.228.47 1.473.136.394-.54.712-.057.66 1.006-.075 1.585-1.14 6.43-1.75 7.97-1.686 4.25-4.254 6.556-8.197 7.36-1.338.273-4.63.375-5.565.173zm-7.264-11.654c-3.654-.51-6.023-1.69-5.664-2.822.54-1.703 8.557-1.04 11.335.939.703.5.726 1.189.054 1.629-.581.38-3.795.523-5.725.254zm5.22-.417c1.737-.83-.603-2.197-4.986-2.912-2.847-.464-5.008-.25-5.49.542-.176.291-.102.438.455.909.904.763 2.823 1.297 6.365 1.77.986.131 3.11-.048 3.656-.31zm17.384-5.47c-.173-.277-.205-.959-.118-2.518.294-5.258-.944-11.223-3.179-15.316-.958-1.755-1.592-2.61-3.06-4.127-1-1.033-1.087-1.182-.812-1.41.27-.223.453-.102 1.463.965 3.173 3.355 5.339 8.308 6.058 13.855.253 1.953.276 7.557.034 8.408-.143.504-.158.51-.386.144zm-22.552-.127c-.623-.15-1.251-.372-1.397-.494-.471-.39-.623-1.083-.412-1.869.297-1.1.678-.954.668.256-.007.958.02 1.01.67 1.33.374.182 1.193.385 1.82.45 1.086.114 1.163.094 1.555-.404.227-.289.412-.77.412-1.07 0-.356.098-.543.285-.543.342 0 .373.64.075 1.497-.391 1.121-1.49 1.375-3.676.847zm10.982-4.254c-3.05-.535-4.635-1.858-4.338-3.618.265-1.568 1.971-2.208 4.463-1.674.54.116 1.197.418 1.482.682.408.377.435.446.132.34-1.348-.473-2.6-.688-3.591-.617-.931.067-1.197.168-1.568.6-.845.982-.498 2.172.83 2.844 3.26 1.651 6.134 1.307 6.134-.736 0-.317.087-.474.237-.425.363.12.39.812.056 1.458-.539 1.041-1.979 1.472-3.837 1.146zm-16.303-3.119c-1.615-.433-2.043-1.53-1.19-3.046.556-.985 1.803-1.476 3.4-1.337 2.987.26 4.03 1.866 2.32 3.576-1.037 1.037-2.623 1.32-4.53.807zm3.639-.663c1.293-.788 1.547-2.015.567-2.744-.422-.313-.87-.411-2.09-.456-1.833-.067-2.63.295-3.094 1.405-.355.85-.204 1.334.56 1.8.85.518 3.203.516 4.057-.005zM34.45 5.341c-2.571-1.566-6.22-2.31-9.453-1.93-1.865.22-2.952.615-4.213 1.528-.858.622-1.374.74-1.374.317 0-.371 1.115-1.175 2.614-1.885l1.281-.607 3.42.006c3.176.005 3.532.042 4.985.511 1.58.51 3.815 1.642 4.228 2.14.216.26.12.675-.152.66-.072-.003-.673-.336-1.336-.74z"
                                strokeWidth=".95"
                              />
                              <path
                                d="M33.771 21.123c.152.065.305.126.46.183.047.017.084.052.13.07.065.04.122.087.184.13l.227.165c.14.113.264.243.38.378.1.128.19.261.261.406.046.081.078.168.1.257l.003.018.615-.332a1.293 1.293 0 00-.116-.285 2.514 2.514 0 00-.272-.42 4.292 4.292 0 00-.383-.393c-.074-.059-.154-.11-.23-.168-.061-.043-.12-.09-.18-.135-.043-.032-.101-.045-.143-.08-.157-.051-.888.28-1.036.206-.547-.463.19-.132 0 0z"
                                strokeWidth=".661"
                              />
                            </g>
                          </svg>
                        </div>
                        <div className="my_individual_selected_item_empty_state_text_container">
                          <h2>No treatment mask information</h2>
                          <p>
                            Start by adding some product information and check
                            back here after
                          </p>
                        </div>
                        <div className="my_individual_selected_item_bottom_buttons_container">
                          <div className="my_individual_selected_item_add_product_button">
                            <p>Add Product</p>
                          </div>
                          <div
                            className="my_individual_selected_item_back_to_routine_button"
                            onClick={() => changeItemToggled("")}
                          >
                            <p>Back to Routine</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Transition>
            </div>
            <div
              className="skin_care_routine_evening_my_routine_individual_item_container"
              onClick={(e) => handleItemToggled(e, "evening_toner")}
              ref={individualItemEveningRef}
            >
              <div className="skin_care_routine_icon_container">
                <svg height="3rem" width="100%" viewBox="0 0 50.006 50.006">
                  <path d="M16.847 47.9c-1.354-.265-2.44-1.156-2.993-2.454l-.228-.533V14.676l.181-.451a4.083 4.083 0 012.675-2.434l.502-.15.002-2.894c0-3.2.03-3.444.492-4.238.348-.598 1.156-1.314 1.798-1.594 1.018-.445 1.078-.45 5.508-.426l4.012.022.544.19c1.42.496 2.392 1.504 2.694 2.797.092.39.117 1.108.118 3.32l.002 2.823.515.154c1.282.384 2.224 1.276 2.666 2.525l.177.498V44.77l-.175.498c-.485 1.384-1.738 2.421-3.217 2.663-.748.122-14.634.094-15.273-.031zm15.563-1.657c.609-.27 1.018-.669 1.25-1.22.149-.352.153-.726.153-15.228 0-14.32-.006-14.881-.147-15.216-.301-.714-.907-1.205-1.72-1.396-.686-.161-14.068-.161-14.754 0-.808.19-1.452.71-1.746 1.41-.112.267-.122 1.78-.103 15.309l.022 15.012.174.293c.377.635.897 1.022 1.603 1.194.372.09 1.468.104 7.587.092l7.152-.014zm-14.927-22.6c-.509-.199-.499-.108-.499-4.524v-3.994l.269-.242.268-.242h14.077l.516.415.022 4.026c.024 4.478.037 4.363-.498 4.564-.395.149-13.775.146-14.154-.003zm13.011-4.484v-3.024H18.643v6.047h11.851zm0-10.235c0-1.505-.035-2.824-.08-3.04-.201-.953-.94-1.646-1.958-1.837-.57-.106-7.205-.106-7.775 0-.787.148-1.479.652-1.83 1.336-.162.317-.17.44-.193 3.264l-.023 2.935h11.859z" />
                </svg>
              </div>
              <h2>Toner</h2>
              <FontAwesomeIcon
                className="skin_care_routine_user_add_icon"
                icon={faPlusCircle}
              />
              <Transition
                items={itemToggled}
                from={{ transform: "translateX(-100%)" }}
                enter={{ transform: "translateX(0%)" }}
                leave={{ transform: "translateX(-100%)" }}
                config={{ duration: 200 }}
              >
                {(itemToggled) =>
                  itemToggled === "evening_toner" &&
                  ((styleprops) => (
                    <div
                      className="my_individual_selected_item_container"
                      style={styleprops}
                    >
                      <div className="my_individual_selected_item_contents_container">
                        <div className="my_individual_selected_item_top_container">
                          <div
                            className="my_individual_selected_item_back_container"
                            ref={selectedItemBackRef}
                            onClick={(e) => handleAppointmentUntoggled(e)}
                          >
                            <FontAwesomeIcon
                              icon={faLongArrowAltLeft}
                              className="my_individual_selected_item_back_arrow_icon"
                            />
                          </div>
                        </div>
                        <div className="my_individual_selected_item_header">
                          <p>Toner (PM)</p>
                        </div>
                      </div>
                      <div className="my_individual_selected_item_empty_state_container">
                        <div className="my_individual_selected_item_empty_state_icon_container">
                          <svg
                            className="my_individual_selected_item_empty_state_icon"
                            height="5rem"
                            width="100%"
                            viewBox="0 0 50.006 50.006"
                          >
                            <path d="M16.847 47.9c-1.354-.265-2.44-1.156-2.993-2.454l-.228-.533V14.676l.181-.451a4.083 4.083 0 012.675-2.434l.502-.15.002-2.894c0-3.2.03-3.444.492-4.238.348-.598 1.156-1.314 1.798-1.594 1.018-.445 1.078-.45 5.508-.426l4.012.022.544.19c1.42.496 2.392 1.504 2.694 2.797.092.39.117 1.108.118 3.32l.002 2.823.515.154c1.282.384 2.224 1.276 2.666 2.525l.177.498V44.77l-.175.498c-.485 1.384-1.738 2.421-3.217 2.663-.748.122-14.634.094-15.273-.031zm15.563-1.657c.609-.27 1.018-.669 1.25-1.22.149-.352.153-.726.153-15.228 0-14.32-.006-14.881-.147-15.216-.301-.714-.907-1.205-1.72-1.396-.686-.161-14.068-.161-14.754 0-.808.19-1.452.71-1.746 1.41-.112.267-.122 1.78-.103 15.309l.022 15.012.174.293c.377.635.897 1.022 1.603 1.194.372.09 1.468.104 7.587.092l7.152-.014zm-14.927-22.6c-.509-.199-.499-.108-.499-4.524v-3.994l.269-.242.268-.242h14.077l.516.415.022 4.026c.024 4.478.037 4.363-.498 4.564-.395.149-13.775.146-14.154-.003zm13.011-4.484v-3.024H18.643v6.047h11.851zm0-10.235c0-1.505-.035-2.824-.08-3.04-.201-.953-.94-1.646-1.958-1.837-.57-.106-7.205-.106-7.775 0-.787.148-1.479.652-1.83 1.336-.162.317-.17.44-.193 3.264l-.023 2.935h11.859z" />
                          </svg>
                        </div>
                        <div className="my_individual_selected_item_empty_state_text_container">
                          <h2>No evening toner information</h2>
                          <p>
                            Start by adding some product information and check
                            back here after
                          </p>
                        </div>
                        <div className="my_individual_selected_item_bottom_buttons_container">
                          <div className="my_individual_selected_item_add_product_button">
                            <p>Add Product</p>
                          </div>
                          <div
                            className="my_individual_selected_item_back_to_routine_button"
                            onClick={() => changeItemToggled("")}
                          >
                            <p>Back to Routine</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Transition>
            </div>

            <div
              className="skin_care_routine_evening_my_routine_individual_item_container"
              onClick={(e) => handleItemToggled(e, "evening_serum")}
              ref={individualItemEveningRef}
            >
              <div className="skin_care_routine_icon_container">
                <svg height="3rem" width="100%" viewBox="0 0 50.006 50.006">
                  <path d="M25.948 48.373c-.45-.15-1.22-.996-1.358-1.493-.162-.58-.162-21.14 0-21.72.149-.535.91-1.343 1.415-1.501.234-.074.994-.119 1.998-.119h1.62v-2.1c0-2.1 0-2.101.226-2.34l.225-.24h7.918l.225.24c.226.239.226.24.226 2.34v2.1h1.62c1.004 0 1.764.045 1.998.119.505.158 1.266.966 1.415 1.501.162.58.162 21.14 0 21.72-.149.536-.91 1.344-1.415 1.502-.512.16-15.63.152-16.113-.009zm15.901-1.718l.269-.285v-20.7l-.538-.57h-4.156l-.226-.239c-.185-.196-.225-.336-.225-.78v-.54h-1.47v-1.56h1.47v-1.56h-5.88v1.56h3.675v1.56h-3.675v.54c0 .444-.04.584-.226.78l-.225.24h-4.157l-.269.285-.268.285v20.7l.537.57H41.58zm-14.241-1.531c-.19-.256-.19-.306-.19-8.731v-8.474l.45-.479h6.148c6.08 0 6.15.003 6.39.203l.241.202v17.057l-.225.239c-.208.22-.294.24-1.103.24h-.877v-1.56h.735V29h-10.29v14.82h8.085v1.56h-9.174zm-19.546 1c-.85-.295-1.535-.965-1.944-1.902-.198-.452-.239-.683-.233-1.328.006-.752.05-.91 1.264-4.436.816-2.37 1.326-3.716 1.449-3.827a.773.773 0 01.445-.17c.14 0 .34.076.445.17.123.11.633 1.457 1.448 3.827 1.214 3.526 1.26 3.684 1.265 4.436.005.646-.035.875-.236 1.334-.32.734-.898 1.381-1.521 1.705-.61.317-1.753.408-2.382.19zm1.651-1.558c.627-.278 1.17-1.276 1.034-1.904-.087-.404-1.653-4.983-1.704-4.983-.051 0-1.618 4.58-1.705 4.983-.133.616.401 1.617 1.014 1.9.362.168.988.17 1.361.004zm-1.18-12.685c-.224-.237-.225-.253-.225-2.12v-1.88l16.577-17.595-.939-1.012c-1.289-1.39-1.302-1.272.343-3.03 1.228-1.313 1.297-1.37 1.654-1.37.35 0 .43.061 1.29.97l.917.97 2.189-2.31c2.368-2.5 2.603-2.681 3.604-2.778 1.09-.104 2.19.568 2.734 1.67.207.42.246.622.246 1.278.001 1.256-.087 1.394-2.59 4.065l-2.174 2.32.937 1.01c1.292 1.394 1.307 1.273-.376 3.059-1.683 1.786-1.568 1.77-2.883.397l-.954-.996L12.3 32.121h-1.77c-1.758 0-1.773-.002-1.996-.24zm11.213-9.9l8.085-8.58-1.883-1.998-16.17 17.159v1.999h1.884z" />
                </svg>
              </div>
              <h2>Serum</h2>
              <FontAwesomeIcon
                className="skin_care_routine_user_add_icon"
                icon={faPlusCircle}
              />
              <Transition
                items={itemToggled}
                from={{ transform: "translateX(-100%)" }}
                enter={{ transform: "translateX(0%)" }}
                leave={{ transform: "translateX(-100%)" }}
                config={{ duration: 200 }}
              >
                {(itemToggled) =>
                  itemToggled === "evening_serum" &&
                  ((styleprops) => (
                    <div
                      className="my_individual_selected_item_container"
                      style={styleprops}
                    >
                      <div className="my_individual_selected_item_contents_container">
                        <div className="my_individual_selected_item_top_container">
                          <div
                            className="my_individual_selected_item_back_container"
                            ref={selectedItemBackRef}
                            onClick={(e) => handleAppointmentUntoggled(e)}
                          >
                            <FontAwesomeIcon
                              icon={faLongArrowAltLeft}
                              className="my_individual_selected_item_back_arrow_icon"
                            />
                          </div>
                        </div>
                        <div className="my_individual_selected_item_header">
                          <p>Serum (PM)</p>
                        </div>
                      </div>
                      <div className="my_individual_selected_item_empty_state_container">
                        <div className="my_individual_selected_item_empty_state_icon_container">
                          <svg
                            className="my_individual_selected_item_empty_state_icon"
                            height="5rem"
                            width="100%"
                            viewBox="0 0 50.006 50.006"
                          >
                            <path d="M25.948 48.373c-.45-.15-1.22-.996-1.358-1.493-.162-.58-.162-21.14 0-21.72.149-.535.91-1.343 1.415-1.501.234-.074.994-.119 1.998-.119h1.62v-2.1c0-2.1 0-2.101.226-2.34l.225-.24h7.918l.225.24c.226.239.226.24.226 2.34v2.1h1.62c1.004 0 1.764.045 1.998.119.505.158 1.266.966 1.415 1.501.162.58.162 21.14 0 21.72-.149.536-.91 1.344-1.415 1.502-.512.16-15.63.152-16.113-.009zm15.901-1.718l.269-.285v-20.7l-.538-.57h-4.156l-.226-.239c-.185-.196-.225-.336-.225-.78v-.54h-1.47v-1.56h1.47v-1.56h-5.88v1.56h3.675v1.56h-3.675v.54c0 .444-.04.584-.226.78l-.225.24h-4.157l-.269.285-.268.285v20.7l.537.57H41.58zm-14.241-1.531c-.19-.256-.19-.306-.19-8.731v-8.474l.45-.479h6.148c6.08 0 6.15.003 6.39.203l.241.202v17.057l-.225.239c-.208.22-.294.24-1.103.24h-.877v-1.56h.735V29h-10.29v14.82h8.085v1.56h-9.174zm-19.546 1c-.85-.295-1.535-.965-1.944-1.902-.198-.452-.239-.683-.233-1.328.006-.752.05-.91 1.264-4.436.816-2.37 1.326-3.716 1.449-3.827a.773.773 0 01.445-.17c.14 0 .34.076.445.17.123.11.633 1.457 1.448 3.827 1.214 3.526 1.26 3.684 1.265 4.436.005.646-.035.875-.236 1.334-.32.734-.898 1.381-1.521 1.705-.61.317-1.753.408-2.382.19zm1.651-1.558c.627-.278 1.17-1.276 1.034-1.904-.087-.404-1.653-4.983-1.704-4.983-.051 0-1.618 4.58-1.705 4.983-.133.616.401 1.617 1.014 1.9.362.168.988.17 1.361.004zm-1.18-12.685c-.224-.237-.225-.253-.225-2.12v-1.88l16.577-17.595-.939-1.012c-1.289-1.39-1.302-1.272.343-3.03 1.228-1.313 1.297-1.37 1.654-1.37.35 0 .43.061 1.29.97l.917.97 2.189-2.31c2.368-2.5 2.603-2.681 3.604-2.778 1.09-.104 2.19.568 2.734 1.67.207.42.246.622.246 1.278.001 1.256-.087 1.394-2.59 4.065l-2.174 2.32.937 1.01c1.292 1.394 1.307 1.273-.376 3.059-1.683 1.786-1.568 1.77-2.883.397l-.954-.996L12.3 32.121h-1.77c-1.758 0-1.773-.002-1.996-.24zm11.213-9.9l8.085-8.58-1.883-1.998-16.17 17.159v1.999h1.884z" />
                          </svg>
                        </div>
                        <div className="my_individual_selected_item_empty_state_text_container">
                          <h2>No evening serum information</h2>
                          <p>
                            Start by adding some product information and check
                            back here after
                          </p>
                        </div>
                        <div className="my_individual_selected_item_bottom_buttons_container">
                          <div className="my_individual_selected_item_add_product_button">
                            <p>Add Product</p>
                          </div>
                          <div
                            className="my_individual_selected_item_back_to_routine_button"
                            onClick={() => changeItemToggled("")}
                          >
                            <p>Back to Routine</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Transition>
            </div>
            <div
              className="skin_care_routine_evening_my_routine_individual_item_container"
              onClick={(e) => handleItemToggled(e, "evening_moisturizer")}
              ref={individualItemEveningRef}
            >
              <div className="skin_care_routine_icon_container">
                <svg height="3rem" width="100%" viewBox="0 0 50.006 50.006">
                  <path d="M11.545 46.731c-2.98-.902-5.427-3.695-6.204-7.078-.236-1.029-.314-2.606-.314-6.375 0-4.588.035-5.084.416-5.925.228-.504.64-1.033.916-1.174.498-.256.5-.271.5-3.616 0-2.306.077-3.444.244-3.633.15-.168.88-.275 1.884-.275h1.64l.457-1.332c1.046-3.039 3.823-6.837 6.86-9.384 2.596-2.177 8.314-5.109 9.286-4.761.51.182.653.854.4 1.878-.117.477-.214 1.56-.214 2.408-.003 3.972 2.48 7.48 7.193 10.165l1.802 1.026h2.916c2.38 0 2.974.066 3.235.36.26.293.32.958.32 3.57v3.21l.638.605c1.095 1.038 1.194 1.61 1.19 6.87-.003 6.721-.48 8.643-2.741 11.052-1.217 1.297-2.269 1.952-3.906 2.433-1.713.503-24.848.481-26.518-.025zm27.311-2.12c1.532-.858 2.72-2.191 3.46-3.884l.668-1.53.064-5.397c.053-4.49.013-5.473-.238-5.855-.298-.453-.538-.459-17.8-.459-17.134 0-17.507.01-17.942.453-.436.445-.443.545-.378 5.964.065 5.38.08 5.542.595 6.773.889 2.125 2.69 3.823 4.607 4.342.424.115 6.417.19 13.385.17l12.618-.04zm2.398-21.598V20.49H8.487v5.047h32.767zm-20.92-5.333c-1.034-1.71-1.327-2.92-1.22-5.02.076-1.474.177-1.938.473-2.182.464-.383.538-.384.99-.012.327.27.339.432.119 1.693-.316 1.807.097 3.581 1.135 4.876 1.24 1.547 1.533 1.62 6.529 1.62h4.444l-1.32-1c-.727-.55-1.938-1.737-2.692-2.638-2.05-2.451-2.997-4.873-3.002-7.673-.003-1.514-.194-1.534-.849-.088-.42.93-.46 1.447-.32 4.173.043.848.004.923-.517.99-.48.063-.61-.049-.865-.737-.347-.934-.4-3.486-.092-4.399.115-.34.165-.67.112-.73-.188-.212-3.596 2.106-5.206 3.542-1.93 1.72-3.646 4.008-4.83 6.444-.475.974-.864 1.85-.866 1.944-.001.095 1.925.172 4.281.172h4.284l-.589-.975z" />
                </svg>
              </div>
              <h2>Moisturizer</h2>
              <FontAwesomeIcon
                className="skin_care_routine_user_add_icon"
                icon={faPlusCircle}
              />
              <Transition
                items={itemToggled}
                from={{ transform: "translateX(-100%)" }}
                enter={{ transform: "translateX(0%)" }}
                leave={{ transform: "translateX(-100%)" }}
                config={{ duration: 200 }}
              >
                {(itemToggled) =>
                  itemToggled === "evening_moisturizer" &&
                  ((styleprops) => (
                    <div
                      className="my_individual_selected_item_container"
                      style={styleprops}
                    >
                      <div className="my_individual_selected_item_contents_container">
                        <div className="my_individual_selected_item_top_container">
                          <div
                            className="my_individual_selected_item_back_container"
                            ref={selectedItemBackRef}
                            onClick={(e) => handleAppointmentUntoggled(e)}
                          >
                            <FontAwesomeIcon
                              icon={faLongArrowAltLeft}
                              className="my_individual_selected_item_back_arrow_icon"
                            />
                          </div>
                        </div>
                        <div className="my_individual_selected_item_header">
                          <p>Moisturizer (PM)</p>
                        </div>
                      </div>
                      <div className="my_individual_selected_item_empty_state_container">
                        <div className="my_individual_selected_item_empty_state_icon_container">
                          <svg
                            className="my_individual_selected_item_empty_state_icon"
                            height="5rem"
                            width="100%"
                            viewBox="0 0 50.006 50.006"
                          >
                            <path d="M11.545 46.731c-2.98-.902-5.427-3.695-6.204-7.078-.236-1.029-.314-2.606-.314-6.375 0-4.588.035-5.084.416-5.925.228-.504.64-1.033.916-1.174.498-.256.5-.271.5-3.616 0-2.306.077-3.444.244-3.633.15-.168.88-.275 1.884-.275h1.64l.457-1.332c1.046-3.039 3.823-6.837 6.86-9.384 2.596-2.177 8.314-5.109 9.286-4.761.51.182.653.854.4 1.878-.117.477-.214 1.56-.214 2.408-.003 3.972 2.48 7.48 7.193 10.165l1.802 1.026h2.916c2.38 0 2.974.066 3.235.36.26.293.32.958.32 3.57v3.21l.638.605c1.095 1.038 1.194 1.61 1.19 6.87-.003 6.721-.48 8.643-2.741 11.052-1.217 1.297-2.269 1.952-3.906 2.433-1.713.503-24.848.481-26.518-.025zm27.311-2.12c1.532-.858 2.72-2.191 3.46-3.884l.668-1.53.064-5.397c.053-4.49.013-5.473-.238-5.855-.298-.453-.538-.459-17.8-.459-17.134 0-17.507.01-17.942.453-.436.445-.443.545-.378 5.964.065 5.38.08 5.542.595 6.773.889 2.125 2.69 3.823 4.607 4.342.424.115 6.417.19 13.385.17l12.618-.04zm2.398-21.598V20.49H8.487v5.047h32.767zm-20.92-5.333c-1.034-1.71-1.327-2.92-1.22-5.02.076-1.474.177-1.938.473-2.182.464-.383.538-.384.99-.012.327.27.339.432.119 1.693-.316 1.807.097 3.581 1.135 4.876 1.24 1.547 1.533 1.62 6.529 1.62h4.444l-1.32-1c-.727-.55-1.938-1.737-2.692-2.638-2.05-2.451-2.997-4.873-3.002-7.673-.003-1.514-.194-1.534-.849-.088-.42.93-.46 1.447-.32 4.173.043.848.004.923-.517.99-.48.063-.61-.049-.865-.737-.347-.934-.4-3.486-.092-4.399.115-.34.165-.67.112-.73-.188-.212-3.596 2.106-5.206 3.542-1.93 1.72-3.646 4.008-4.83 6.444-.475.974-.864 1.85-.866 1.944-.001.095 1.925.172 4.281.172h4.284l-.589-.975z" />
                          </svg>
                        </div>
                        <div className="my_individual_selected_item_empty_state_text_container">
                          <h2>No evening moisturizer information</h2>
                          <p>
                            Start by adding some product information and check
                            back here after
                          </p>
                        </div>
                        <div className="my_individual_selected_item_bottom_buttons_container">
                          <div className="my_individual_selected_item_add_product_button">
                            <p>Add Product</p>
                          </div>
                          <div
                            className="my_individual_selected_item_back_to_routine_button"
                            onClick={() => changeItemToggled("")}
                          >
                            <p>Back to Routine</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Transition>
            </div>
            <div
              className="skin_care_routine_evening_my_routine_individual_item_container"
              onClick={(e) => handleItemToggled(e, "evening_night_mask")}
              ref={individualItemEveningRef}
            >
              <div className="skin_care_routine_icon_container">
                <svg viewBox="0 0 50.006 50.006" height="3rem" width="100%">
                  <g
                    stroke="#000"
                    strokeOpacity="1"
                    strokeWidth=".794"
                    strokeMiterlimit="4"
                    strokeDasharray="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5.349 46.471a1.355 1.355 0 01-.41-.184c-.377-.244-.643-.67-.75-1.202-.065-.328-.064-6.25.002-6.58.13-.654.573-1.21 1.072-1.345l.159-.043v-.746c0-.927 0-.927.267-.953l.193-.019.12-.314c.23-.603.688-1.06 1.202-1.2.258-.071.352-.07.792.003l.36.061.235-.153c.274-.177.537-.47.672-.746.092-.187.185-.506.247-.843.041-.225.104-.25.457-.18.788.156 1.33.6 1.62 1.33.115.29.214.69.253 1.021l.018.153.215.044c.348.073.632.305.83.68l.085.163h.21c.125 0 .225.019.245.045.025.033.035.275.035.85v.802l.123.026c.068.015.2.067.296.116.095.05.175.086.18.08a.903.903 0 00-.05-.173c-.08-.23-.073-.332.024-.397.246-.167.995-.53 1.162-.563.554-.112 1.194.32 1.446.977.143.372 2.088 6.537 2.12 6.72.102.578-.027 1.215-.336 1.664-.19.277-.35.4-.901.697-.357.191-.484.244-.523.217-.033-.023-.43-1.232-1.104-3.362a401.367 401.367 0 00-1.092-3.42c-.033-.08-.039.317-.04 2.538 0 2.24-.008 2.667-.045 2.856-.142.71-.63 1.278-1.188 1.382-.25.047-7.949.045-8.2-.002zm8.428-.445c.237-.125.508-.464.617-.771l.084-.238v-6.439l-.095-.251c-.12-.319-.372-.633-.607-.757l-.168-.088-4.069-.01c-4.432-.011-4.255-.02-4.539.198-.296.227-.513.654-.563 1.108-.04.354-.039 5.749 0 6.065.075.6.399 1.075.84 1.23.137.05.716.056 4.245.05l4.086-.008.169-.089zm3.828-.198c.454-.244.654-.458.806-.86.082-.217.096-.299.105-.594.008-.29-.001-.378-.062-.588-.192-.664-2.036-6.432-2.093-6.549-.222-.45-.642-.717-1.058-.672-.14.015-.298.08-.602.242-.226.121-.407.237-.4.258.145.468 2.837 8.943 2.848 8.966.008.018.03.025.048.016l.408-.219zm-4.395-9.397l-.008-.653H5.727l-.008.653-.008.653h7.508zm-.605-1.079c-.104-.17-.337-.358-.504-.403-.2-.054-4.443-.743-4.577-.743-.192 0-.494.111-.672.247-.21.16-.456.484-.56.74l-.092.225h3.222c3.055 0 3.22-.004 3.183-.066zm-1.073-1.06c-.068-.483-.231-.925-.451-1.227-.243-.332-.687-.59-1.188-.69l-.122-.025-.031.161c-.102.526-.331.987-.646 1.298a1.689 1.689 0 00-.193.21c-.002.017 2.427.437 2.595.448.058.004.06-.006.036-.176z" />
                    <path d="M8.954 44.182c-.486-.066-.93-.402-1.245-.94-.131-.223-.286-.61-.293-.729-.005-.07.017-.125.06-.156.04-.028.065-.026.129.01.453.261.968.212 1.387-.13.14-.116.232-.218.357-.399.252-.365.403-.803.455-1.319a4.42 4.42 0 00.006-.59 3.535 3.535 0 00-.1-.58.832.832 0 01-.027-.131c0-.044.023-.107.05-.133a.077.077 0 01.056-.026c.03-.003.04 0 .09.033.226.144.466.4.63.674.243.402.387.864.443 1.418.015.148.014.553-.003.707-.066.63-.261 1.17-.575 1.59-.281.375-.628.612-1.015.69a2.127 2.127 0 01-.405.01zm.394-.344c.295-.067.559-.232.784-.492.063-.072.202-.275.253-.368a2.98 2.98 0 00.342-1.192 4.595 4.595 0 00-.006-.594 3.05 3.05 0 00-.153-.705 2.299 2.299 0 00-.516-.872.766.766 0 00-.053-.05 3.733 3.733 0 01.029.234c.067.65-.03 1.3-.279 1.857-.01.023-.043.09-.072.146-.3.578-.76.962-1.257 1.045-.199.034-.42.019-.607-.042a.15.15 0 00-.048-.011c0 .009.08.166.118.23.148.255.322.451.526.596.17.12.358.2.545.229.073.011.326.004.395-.011z" />
                    <path d="M29.789 46.613c-2.133-.252-4.439-1.217-6.428-2.692-.955-.709-2.609-2.354-3.46-3.442-2.313-2.962-3.932-6.732-4.663-10.863-.23-1.3-.24-1.505-.238-4.462.002-3.362.098-4.402.632-6.877 1.602-7.428 5.964-12.36 12.058-13.636 2.168-.454 4.751-.442 6.943.033 5.915 1.28 10.135 5.965 11.822 13.126.663 2.811.972 6.403.788 9.14-.346 5.137-2.048 9.803-4.934 13.524-.828 1.067-2.592 2.803-3.6 3.542-2.744 2.01-5.976 2.955-8.92 2.607zm3.386-1.188c1.714-.355 3.481-1.157 4.991-2.263 1.078-.79 2.934-2.693 3.793-3.887 2.543-3.538 4.046-7.94 4.273-12.51a34.567 34.567 0 00-.263-5.884c-1.158-8.313-5.21-13.727-11.34-15.158-2.08-.485-4.837-.487-7.03-.004-2.666.587-5.251 2.162-7.005 4.266-2.903 3.484-4.487 8.46-4.624 14.521-.07 3.077.154 5.072.852 7.599 1.394 5.048 4.654 9.657 8.356 11.813 2.624 1.528 5.385 2.048 7.996 1.507zm-3.945-5.75c-1.369-.382-3.063-1.5-3.45-2.276-.208-.415-.167-.963.097-1.287.33-.407 1.796-1.476 2.557-1.866.849-.434 1.693-.522 2.308-.24.398.182.416.182.719.015.387-.213 1.187-.23 1.728-.037.64.228 1.06.479 2.129 1.263 1.569 1.153 1.675 1.64.596 2.728a6.282 6.282 0 01-2.51 1.568c-.633.216-.905.252-2.131.279-1.162.025-1.517 0-2.043-.147zm3.452-.996c1.143-.298 3.103-1.583 2.91-1.907-.098-.164-1.762-1.372-2.217-1.609-.617-.322-1.179-.352-1.777-.095l-.507.217-.504-.216c-.618-.265-1.074-.232-1.763.126-.66.344-2.177 1.466-2.177 1.612 0 .184.876.953 1.497 1.312.836.485 1.706.69 2.95.696.648.003 1.254-.049 1.588-.136zm-2.472-7.88c-.494-.166-1.102-.539-1.375-.84-.265-.295-.207-.674.128-.832.196-.093.284-.064.7.233.62.44.886.538 1.457.535.506-.002 1.054-.216 1.545-.604.36-.284.523-.299.725-.067.35.4.01.907-.933 1.387-.606.309-1.635.395-2.247.189zm-7.146-2.465c-1.424-.312-2.731-1.282-3.272-2.429-.23-.488-.265-.67-.265-1.362 0-.698.035-.875.281-1.413.51-1.114 1.66-2.022 3.03-2.393.703-.19 2.036-.213 2.73-.045 1.408.34 2.642 1.281 3.19 2.434.256.538.292.71.292 1.369 0 .654-.038.837-.292 1.393-.873 1.907-3.331 2.963-5.694 2.446zm2.229-1.013c.797-.175 1.357-.46 1.905-.97.645-.601.849-1.044.852-1.854.003-.766-.233-1.282-.85-1.86-1.217-1.138-3.507-1.371-5.117-.52-.492.26-1.131.892-1.35 1.335-1.1 2.233 1.595 4.52 4.56 3.87zm11.83 1.108c-1.07-.171-2.145-.7-2.86-1.406-2.595-2.564-.38-6.449 3.676-6.449 1.946 0 3.695.97 4.453 2.468.237.467.262.603.262 1.454.001.808-.03 1.005-.22 1.41-.474.999-1.66 1.953-2.908 2.34-.505.156-1.905.263-2.403.183zm1.799-1.113c1.731-.38 2.784-1.446 2.78-2.814-.002-.353-.068-.717-.174-.96-.354-.807-1.352-1.549-2.441-1.815-.592-.144-1.716-.146-2.323-.004-1.033.243-1.992.948-2.365 1.738-1.075 2.275 1.545 4.508 4.523 3.855z" />
                  </g>
                </svg>
              </div>
              <h2>Night Mask</h2>
              <FontAwesomeIcon
                className="skin_care_routine_user_add_icon"
                icon={faPlusCircle}
              />
              <Transition
                items={itemToggled}
                from={{ transform: "translateX(-100%)" }}
                enter={{ transform: "translateX(0%)" }}
                leave={{ transform: "translateX(-100%)" }}
                config={{ duration: 200 }}
              >
                {(itemToggled) =>
                  itemToggled === "evening_night_mask" &&
                  ((styleprops) => (
                    <div
                      className="my_individual_selected_item_container"
                      style={styleprops}
                    >
                      <div className="my_individual_selected_item_contents_container">
                        <div className="my_individual_selected_item_top_container">
                          <div
                            className="my_individual_selected_item_back_container"
                            ref={selectedItemBackRef}
                            onClick={(e) => handleAppointmentUntoggled(e)}
                          >
                            <FontAwesomeIcon
                              icon={faLongArrowAltLeft}
                              className="my_individual_selected_item_back_arrow_icon"
                            />
                          </div>
                        </div>
                        <div className="my_individual_selected_item_header">
                          <p>Night Mask</p>
                        </div>
                      </div>
                      <div className="my_individual_selected_item_empty_state_container">
                        <div className="my_individual_selected_item_empty_state_icon_container">
                          <svg
                            className="my_individual_selected_item_empty_state_icon"
                            height="5rem"
                            width="100%"
                            viewBox="0 0 50.006 50.006"
                          >
                            <g
                              strokeOpacity="1"
                              strokeWidth=".794"
                              strokeMiterlimit="4"
                              strokeDasharray="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5.349 46.471a1.355 1.355 0 01-.41-.184c-.377-.244-.643-.67-.75-1.202-.065-.328-.064-6.25.002-6.58.13-.654.573-1.21 1.072-1.345l.159-.043v-.746c0-.927 0-.927.267-.953l.193-.019.12-.314c.23-.603.688-1.06 1.202-1.2.258-.071.352-.07.792.003l.36.061.235-.153c.274-.177.537-.47.672-.746.092-.187.185-.506.247-.843.041-.225.104-.25.457-.18.788.156 1.33.6 1.62 1.33.115.29.214.69.253 1.021l.018.153.215.044c.348.073.632.305.83.68l.085.163h.21c.125 0 .225.019.245.045.025.033.035.275.035.85v.802l.123.026c.068.015.2.067.296.116.095.05.175.086.18.08a.903.903 0 00-.05-.173c-.08-.23-.073-.332.024-.397.246-.167.995-.53 1.162-.563.554-.112 1.194.32 1.446.977.143.372 2.088 6.537 2.12 6.72.102.578-.027 1.215-.336 1.664-.19.277-.35.4-.901.697-.357.191-.484.244-.523.217-.033-.023-.43-1.232-1.104-3.362a401.367 401.367 0 00-1.092-3.42c-.033-.08-.039.317-.04 2.538 0 2.24-.008 2.667-.045 2.856-.142.71-.63 1.278-1.188 1.382-.25.047-7.949.045-8.2-.002zm8.428-.445c.237-.125.508-.464.617-.771l.084-.238v-6.439l-.095-.251c-.12-.319-.372-.633-.607-.757l-.168-.088-4.069-.01c-4.432-.011-4.255-.02-4.539.198-.296.227-.513.654-.563 1.108-.04.354-.039 5.749 0 6.065.075.6.399 1.075.84 1.23.137.05.716.056 4.245.05l4.086-.008.169-.089zm3.828-.198c.454-.244.654-.458.806-.86.082-.217.096-.299.105-.594.008-.29-.001-.378-.062-.588-.192-.664-2.036-6.432-2.093-6.549-.222-.45-.642-.717-1.058-.672-.14.015-.298.08-.602.242-.226.121-.407.237-.4.258.145.468 2.837 8.943 2.848 8.966.008.018.03.025.048.016l.408-.219zm-4.395-9.397l-.008-.653H5.727l-.008.653-.008.653h7.508zm-.605-1.079c-.104-.17-.337-.358-.504-.403-.2-.054-4.443-.743-4.577-.743-.192 0-.494.111-.672.247-.21.16-.456.484-.56.74l-.092.225h3.222c3.055 0 3.22-.004 3.183-.066zm-1.073-1.06c-.068-.483-.231-.925-.451-1.227-.243-.332-.687-.59-1.188-.69l-.122-.025-.031.161c-.102.526-.331.987-.646 1.298a1.689 1.689 0 00-.193.21c-.002.017 2.427.437 2.595.448.058.004.06-.006.036-.176z" />
                              <path d="M8.954 44.182c-.486-.066-.93-.402-1.245-.94-.131-.223-.286-.61-.293-.729-.005-.07.017-.125.06-.156.04-.028.065-.026.129.01.453.261.968.212 1.387-.13.14-.116.232-.218.357-.399.252-.365.403-.803.455-1.319a4.42 4.42 0 00.006-.59 3.535 3.535 0 00-.1-.58.832.832 0 01-.027-.131c0-.044.023-.107.05-.133a.077.077 0 01.056-.026c.03-.003.04 0 .09.033.226.144.466.4.63.674.243.402.387.864.443 1.418.015.148.014.553-.003.707-.066.63-.261 1.17-.575 1.59-.281.375-.628.612-1.015.69a2.127 2.127 0 01-.405.01zm.394-.344c.295-.067.559-.232.784-.492.063-.072.202-.275.253-.368a2.98 2.98 0 00.342-1.192 4.595 4.595 0 00-.006-.594 3.05 3.05 0 00-.153-.705 2.299 2.299 0 00-.516-.872.766.766 0 00-.053-.05 3.733 3.733 0 01.029.234c.067.65-.03 1.3-.279 1.857-.01.023-.043.09-.072.146-.3.578-.76.962-1.257 1.045-.199.034-.42.019-.607-.042a.15.15 0 00-.048-.011c0 .009.08.166.118.23.148.255.322.451.526.596.17.12.358.2.545.229.073.011.326.004.395-.011z" />
                              <path d="M29.789 46.613c-2.133-.252-4.439-1.217-6.428-2.692-.955-.709-2.609-2.354-3.46-3.442-2.313-2.962-3.932-6.732-4.663-10.863-.23-1.3-.24-1.505-.238-4.462.002-3.362.098-4.402.632-6.877 1.602-7.428 5.964-12.36 12.058-13.636 2.168-.454 4.751-.442 6.943.033 5.915 1.28 10.135 5.965 11.822 13.126.663 2.811.972 6.403.788 9.14-.346 5.137-2.048 9.803-4.934 13.524-.828 1.067-2.592 2.803-3.6 3.542-2.744 2.01-5.976 2.955-8.92 2.607zm3.386-1.188c1.714-.355 3.481-1.157 4.991-2.263 1.078-.79 2.934-2.693 3.793-3.887 2.543-3.538 4.046-7.94 4.273-12.51a34.567 34.567 0 00-.263-5.884c-1.158-8.313-5.21-13.727-11.34-15.158-2.08-.485-4.837-.487-7.03-.004-2.666.587-5.251 2.162-7.005 4.266-2.903 3.484-4.487 8.46-4.624 14.521-.07 3.077.154 5.072.852 7.599 1.394 5.048 4.654 9.657 8.356 11.813 2.624 1.528 5.385 2.048 7.996 1.507zm-3.945-5.75c-1.369-.382-3.063-1.5-3.45-2.276-.208-.415-.167-.963.097-1.287.33-.407 1.796-1.476 2.557-1.866.849-.434 1.693-.522 2.308-.24.398.182.416.182.719.015.387-.213 1.187-.23 1.728-.037.64.228 1.06.479 2.129 1.263 1.569 1.153 1.675 1.64.596 2.728a6.282 6.282 0 01-2.51 1.568c-.633.216-.905.252-2.131.279-1.162.025-1.517 0-2.043-.147zm3.452-.996c1.143-.298 3.103-1.583 2.91-1.907-.098-.164-1.762-1.372-2.217-1.609-.617-.322-1.179-.352-1.777-.095l-.507.217-.504-.216c-.618-.265-1.074-.232-1.763.126-.66.344-2.177 1.466-2.177 1.612 0 .184.876.953 1.497 1.312.836.485 1.706.69 2.95.696.648.003 1.254-.049 1.588-.136zm-2.472-7.88c-.494-.166-1.102-.539-1.375-.84-.265-.295-.207-.674.128-.832.196-.093.284-.064.7.233.62.44.886.538 1.457.535.506-.002 1.054-.216 1.545-.604.36-.284.523-.299.725-.067.35.4.01.907-.933 1.387-.606.309-1.635.395-2.247.189zm-7.146-2.465c-1.424-.312-2.731-1.282-3.272-2.429-.23-.488-.265-.67-.265-1.362 0-.698.035-.875.281-1.413.51-1.114 1.66-2.022 3.03-2.393.703-.19 2.036-.213 2.73-.045 1.408.34 2.642 1.281 3.19 2.434.256.538.292.71.292 1.369 0 .654-.038.837-.292 1.393-.873 1.907-3.331 2.963-5.694 2.446zm2.229-1.013c.797-.175 1.357-.46 1.905-.97.645-.601.849-1.044.852-1.854.003-.766-.233-1.282-.85-1.86-1.217-1.138-3.507-1.371-5.117-.52-.492.26-1.131.892-1.35 1.335-1.1 2.233 1.595 4.52 4.56 3.87zm11.83 1.108c-1.07-.171-2.145-.7-2.86-1.406-2.595-2.564-.38-6.449 3.676-6.449 1.946 0 3.695.97 4.453 2.468.237.467.262.603.262 1.454.001.808-.03 1.005-.22 1.41-.474.999-1.66 1.953-2.908 2.34-.505.156-1.905.263-2.403.183zm1.799-1.113c1.731-.38 2.784-1.446 2.78-2.814-.002-.353-.068-.717-.174-.96-.354-.807-1.352-1.549-2.441-1.815-.592-.144-1.716-.146-2.323-.004-1.033.243-1.992.948-2.365 1.738-1.075 2.275 1.545 4.508 4.523 3.855z" />
                            </g>
                          </svg>
                        </div>
                        <div className="my_individual_selected_item_empty_state_text_container">
                          <h2>No night mask information</h2>
                          <p>
                            Start by adding some product information and check
                            back here after
                          </p>
                        </div>
                        <div className="my_individual_selected_item_bottom_buttons_container">
                          <div className="my_individual_selected_item_add_product_button">
                            <p>Add Product</p>
                          </div>
                          <div
                            className="my_individual_selected_item_back_to_routine_button"
                            onClick={() => changeItemToggled("")}
                          >
                            <p>Back to Routine</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Transition>
            </div>
            <div
              className="skin_care_routine_evening_my_routine_individual_item_container"
              onClick={(e) => handleItemToggled(e, "evening_oil")}
              ref={individualItemEveningRef}
            >
              <div className="skin_care_routine_icon_container">
                <svg height="3rem" width="100%" viewBox="0 0 50.006 50.006">
                  <path d="M17.587 48.028c-1.094-.102-2.098-.52-2.863-1.188A3.658 3.658 0 0113.568 45l-.075-.29v-7.444c0-7.032.004-7.466.058-7.825a8.596 8.596 0 011.193-3.31 9.737 9.737 0 011.554-1.956 14.257 14.257 0 011.472-1.207l.309-.21v-4.549c0-4.47 0-4.551.063-4.688a.775.775 0 01.417-.402l.17-.078 2.369-.026.328-.823.329-.822-.036-.451a38.846 38.846 0 01-.037-1.883c-.002-1.476.027-1.966.16-2.73.304-1.74.923-2.88 1.88-3.464 1.03-.627 2.433-.617 3.465.027.725.452 1.268 1.264 1.598 2.393.392 1.336.505 3.045.366 5.534l-.032.59.33.815.329.814 1.171.013c1.107.012 1.18.016 1.317.069a.942.942 0 01.449.374l.072.121.008 4.587.009 4.586.23.153c1.297.868 2.416 2.043 3.167 3.332.704 1.207 1.072 2.378 1.172 3.729.024.33.031 2.625.023 7.602-.01 6.564-.015 7.147-.064 7.344-.401 1.605-1.783 2.737-3.752 3.075-.232.04-.923.044-7.996.048-4.46.003-7.85-.006-7.997-.019zm15.586-1.52c.908-.103 1.724-.599 2.12-1.288.06-.107.143-.295.183-.418l.071-.223v-7.34c0-6.963-.002-7.359-.058-7.708-.361-2.285-1.745-4.285-3.91-5.649l-.308-.193h-3.07l-.007 8.935-.009 8.935-.069.2c-.234.677-.755 1.202-1.486 1.495a3.34 3.34 0 01-2.347.014c-.823-.314-1.408-.951-1.57-1.708-.023-.106-.033-2.938-.033-9.013v-8.859h-3.076l-.31.195c-1.867 1.166-3.222 2.916-3.734 4.821a11.63 11.63 0 00-.154.683l-.073.38v14.864l.075.21c.227.64.744 1.157 1.45 1.451.23.096.563.182.824.214.288.034 15.186.035 15.49 0zm-7.345-4.623a.92.92 0 00.432-.353l.085-.13.008-8.857.008-8.856h-1.84v8.818c0 7.957.004 8.831.049 8.94.088.214.35.414.648.496.13.035.461.004.61-.058zm5.134-23.528V14.55H19.919v7.616h11.043zm-3.142-5.362c0-.018-.123-.34-.274-.716l-.274-.684.044-.788c.054-.962.055-2.729.002-3.335-.116-1.317-.328-2.156-.704-2.786-.216-.361-.467-.615-.707-.714a1.273 1.273 0 00-.892-.021c-.148.05-.41.255-.558.436-.455.555-.747 1.516-.889 2.928-.062.622-.076 2.057-.028 3.002.068 1.366.08 1.257-.191 1.921-.127.311-.25.615-.274.677l-.043.111h2.394c1.841 0 2.394-.007 2.394-.031z" />
                  <path
                    d="M27.119 34.531c.353-.213.76-.274 1.152-.332.331-.066.654-.012.976.073.281.075.541.217.804.347.414.184.829.368 1.244.55.462.204.949.326 1.437.425.392.073.789.09 1.185.075.375-.008.718-.16 1.051-.339.465-.245.888-.574 1.334-.856-1.613.949-.23.291.145-.12l-.833.376v0c-.64.512 2.435-1.645-.145.101l-.21.143c-.035.024-.14.093-.104.07.802-.505.822-.514.5-.327-.326.184-.657.358-1.03.373a5.25 5.25 0 01-1.179-.054c-.486-.09-.97-.207-1.43-.408-.412-.179-.821-.368-1.232-.552-.266-.133-.527-.284-.812-.363-.33-.089-.66-.165-1-.098-.392.055-.796.11-1.16.292l-.693.624zM14.294 35.119c.353-.213.76-.274 1.152-.332.331-.066.654-.012.976.073.281.075.541.217.804.347.414.184.829.368 1.244.55.462.204.949.326 1.437.425.392.073.789.09 1.185.075.375-.008.718-.16 1.051-.339.465-.245.888-.574 1.334-.856-1.613.949-.23.291.145-.12l-.833.376v0c-.64.512 2.435-1.645-.145.101l-.21.143c-.035.024-.14.093-.104.07.802-.505.822-.514.5-.327-.326.184-.657.358-1.03.373a5.25 5.25 0 01-1.179-.054c-.486-.09-.97-.207-1.43-.408-.412-.179-.821-.368-1.232-.552-.266-.133-.527-.284-.812-.363-.33-.089-.66-.165-1-.098-.392.055-.796.11-1.16.292l-.693.624z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.274"
                  />
                </svg>
              </div>
              <h2>Oil</h2>
              <FontAwesomeIcon
                className="skin_care_routine_user_add_icon"
                icon={faPlusCircle}
              />
              <Transition
                items={itemToggled}
                from={{ transform: "translateX(-100%)" }}
                enter={{ transform: "translateX(0%)" }}
                leave={{ transform: "translateX(-100%)" }}
                config={{ duration: 200 }}
              >
                {(itemToggled) =>
                  itemToggled === "evening_oil" &&
                  ((styleprops) => (
                    <div
                      className="my_individual_selected_item_container"
                      style={styleprops}
                    >
                      <div className="my_individual_selected_item_contents_container">
                        <div className="my_individual_selected_item_top_container">
                          <div
                            className="my_individual_selected_item_back_container"
                            ref={selectedItemBackRef}
                            onClick={(e) => handleAppointmentUntoggled(e)}
                          >
                            <FontAwesomeIcon
                              icon={faLongArrowAltLeft}
                              className="my_individual_selected_item_back_arrow_icon"
                            />
                          </div>
                        </div>
                        <div className="my_individual_selected_item_header">
                          <p>Oil</p>
                        </div>
                      </div>
                      <div className="my_individual_selected_item_empty_state_container">
                        <div className="my_individual_selected_item_empty_state_icon_container">
                          <svg
                            className="my_individual_selected_item_empty_state_icon"
                            height="5rem"
                            width="100%"
                            viewBox="0 0 50.006 50.006"
                          >
                            <path d="M17.587 48.028c-1.094-.102-2.098-.52-2.863-1.188A3.658 3.658 0 0113.568 45l-.075-.29v-7.444c0-7.032.004-7.466.058-7.825a8.596 8.596 0 011.193-3.31 9.737 9.737 0 011.554-1.956 14.257 14.257 0 011.472-1.207l.309-.21v-4.549c0-4.47 0-4.551.063-4.688a.775.775 0 01.417-.402l.17-.078 2.369-.026.328-.823.329-.822-.036-.451a38.846 38.846 0 01-.037-1.883c-.002-1.476.027-1.966.16-2.73.304-1.74.923-2.88 1.88-3.464 1.03-.627 2.433-.617 3.465.027.725.452 1.268 1.264 1.598 2.393.392 1.336.505 3.045.366 5.534l-.032.59.33.815.329.814 1.171.013c1.107.012 1.18.016 1.317.069a.942.942 0 01.449.374l.072.121.008 4.587.009 4.586.23.153c1.297.868 2.416 2.043 3.167 3.332.704 1.207 1.072 2.378 1.172 3.729.024.33.031 2.625.023 7.602-.01 6.564-.015 7.147-.064 7.344-.401 1.605-1.783 2.737-3.752 3.075-.232.04-.923.044-7.996.048-4.46.003-7.85-.006-7.997-.019zm15.586-1.52c.908-.103 1.724-.599 2.12-1.288.06-.107.143-.295.183-.418l.071-.223v-7.34c0-6.963-.002-7.359-.058-7.708-.361-2.285-1.745-4.285-3.91-5.649l-.308-.193h-3.07l-.007 8.935-.009 8.935-.069.2c-.234.677-.755 1.202-1.486 1.495a3.34 3.34 0 01-2.347.014c-.823-.314-1.408-.951-1.57-1.708-.023-.106-.033-2.938-.033-9.013v-8.859h-3.076l-.31.195c-1.867 1.166-3.222 2.916-3.734 4.821a11.63 11.63 0 00-.154.683l-.073.38v14.864l.075.21c.227.64.744 1.157 1.45 1.451.23.096.563.182.824.214.288.034 15.186.035 15.49 0zm-7.345-4.623a.92.92 0 00.432-.353l.085-.13.008-8.857.008-8.856h-1.84v8.818c0 7.957.004 8.831.049 8.94.088.214.35.414.648.496.13.035.461.004.61-.058zm5.134-23.528V14.55H19.919v7.616h11.043zm-3.142-5.362c0-.018-.123-.34-.274-.716l-.274-.684.044-.788c.054-.962.055-2.729.002-3.335-.116-1.317-.328-2.156-.704-2.786-.216-.361-.467-.615-.707-.714a1.273 1.273 0 00-.892-.021c-.148.05-.41.255-.558.436-.455.555-.747 1.516-.889 2.928-.062.622-.076 2.057-.028 3.002.068 1.366.08 1.257-.191 1.921-.127.311-.25.615-.274.677l-.043.111h2.394c1.841 0 2.394-.007 2.394-.031z" />
                            <path
                              d="M27.119 34.531c.353-.213.76-.274 1.152-.332.331-.066.654-.012.976.073.281.075.541.217.804.347.414.184.829.368 1.244.55.462.204.949.326 1.437.425.392.073.789.09 1.185.075.375-.008.718-.16 1.051-.339.465-.245.888-.574 1.334-.856-1.613.949-.23.291.145-.12l-.833.376v0c-.64.512 2.435-1.645-.145.101l-.21.143c-.035.024-.14.093-.104.07.802-.505.822-.514.5-.327-.326.184-.657.358-1.03.373a5.25 5.25 0 01-1.179-.054c-.486-.09-.97-.207-1.43-.408-.412-.179-.821-.368-1.232-.552-.266-.133-.527-.284-.812-.363-.33-.089-.66-.165-1-.098-.392.055-.796.11-1.16.292l-.693.624zM14.294 35.119c.353-.213.76-.274 1.152-.332.331-.066.654-.012.976.073.281.075.541.217.804.347.414.184.829.368 1.244.55.462.204.949.326 1.437.425.392.073.789.09 1.185.075.375-.008.718-.16 1.051-.339.465-.245.888-.574 1.334-.856-1.613.949-.23.291.145-.12l-.833.376v0c-.64.512 2.435-1.645-.145.101l-.21.143c-.035.024-.14.093-.104.07.802-.505.822-.514.5-.327-.326.184-.657.358-1.03.373a5.25 5.25 0 01-1.179-.054c-.486-.09-.97-.207-1.43-.408-.412-.179-.821-.368-1.232-.552-.266-.133-.527-.284-.812-.363-.33-.089-.66-.165-1-.098-.392.055-.796.11-1.16.292l-.693.624z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.274"
                            />
                          </svg>
                        </div>
                        <div className="my_individual_selected_item_empty_state_text_container">
                          <h2>No oil information</h2>
                          <p>
                            Start by adding some product information and check
                            back here after
                          </p>
                        </div>
                        <div className="my_individual_selected_item_bottom_buttons_container">
                          <div className="my_individual_selected_item_add_product_button">
                            <p>Add Product</p>
                          </div>
                          <div
                            className="my_individual_selected_item_back_to_routine_button"
                            onClick={() => changeItemToggled("")}
                          >
                            <p>Back to Routine</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Transition>
            </div>
            <div
              className="skin_care_routine_evening_my_routine_individual_item_container"
              onClick={(e) => handleItemToggled(e, "evening_spot_treatment")}
              ref={individualItemEveningRef}
            >
              <div className="skin_care_routine_icon_container">
                <svg height="3.5rem" width="100%" viewBox="0 0 50.006 50.006">
                  <path
                    d="M42.271 44.824c-.278-.14-4.608-4.195-4.826-4.52a.662.662 0 01-.049-.713c.084-.171.079-.183-.218-.46-.22-.205-.305-.332-.305-.451 0-.436.372-.486.761-.103.144.141.286.255.315.252.03-.002.237-.231.461-.509l.408-.504-.407-.391c-.223-.216-.425-.392-.447-.392-.022 0-.154.145-.293.322-.576.734-1.734 1.542-2.725 1.902-1.293.47-2.897.47-4.183.003-4.015-1.459-5.669-6.605-3.337-10.383.655-1.06 1.53-1.876 2.594-2.42 2.542-1.299 5.466-.77 7.44 1.345.82.88 1.381 1.923 1.694 3.155.145.57.164.759.168 1.702.004.901-.016 1.149-.132 1.64-.075.317-.177.643-.226.723-.114.186-.39.194-.541.015-.109-.128-.108-.146.03-.692.205-.819.237-2.078.074-2.92-.226-1.162-.68-2.088-1.452-2.96-1.16-1.308-2.515-1.936-4.195-1.943-1.57-.008-2.866.53-3.98 1.649-1.152 1.16-1.751 2.552-1.819 4.231-.053 1.312.221 2.47.836 3.536 1.907 3.307 6.221 3.934 8.868 1.289.265-.265.588-.634.717-.82.324-.468.42-.457 1.035.128.816.776.745.727.871.606a.598.598 0 01.666-.09c.1.054 1.211 1.071 2.47 2.262 2.056 1.946 2.302 2.2 2.422 2.498.38.943-.25 2.368-1.284 2.906-.468.244-1.05.288-1.41.108zm1.053-.75c.3-.133.713-.57.892-.944.159-.33.195-.835.08-1.093-.055-.12-4.034-3.945-4.384-4.213-.088-.068-.197.037-.832.804-.401.485-.802.974-.891 1.087l-.161.206 2.127 2.016c1.17 1.109 2.194 2.065 2.276 2.126.186.137.596.142.893.01zm-21.836-1.226c-.927-.22-1.573-.62-3.328-2.062-1.909-1.566-4.036-3.707-5.104-5.136-1.022-1.368-1.778-2.72-2.169-3.88-.176-.522-.502-1.878-.694-2.88-.278-1.453-.607-3.97-.61-4.658 0-.16-.02-.322-.045-.362-.064-.106-1.426 1.46-1.712 1.969a5.9 5.9 0 00-.396.933c-.147.466-.163.608-.164 1.48-.003.894.01 1.007.171 1.532.194.63.44 1.072 1.05 1.875.492.649.7 1.04.824 1.549.118.484.117.97-.003 1.464-.19.783-.46 1.14-.769 1.014-.242-.098-.26-.324-.06-.757.153-.334.17-.44.17-1.016 0-.78-.083-.983-.78-1.893-.76-.994-1.088-1.702-1.272-2.738-.197-1.117-.018-2.506.45-3.493.661-1.337 1.53-1.793 2.296-3.054.13-.22.282-.45.337-.51.055-.06.285-.64.513-1.287.765-2.18 1.765-4.117 2.955-5.723.632-.853 2.364-2.695 3.217-3.422 1.036-.883 2.1-1.54 3.495-2.16.62-.275.75-.302.939-.194.12.068.157.344.068.494-.025.043-.316.197-.647.344-.914.405-2.045 1.038-2.66 1.489-1.601 1.17-3.561 3.314-4.71 5.151-.924 1.475-1.455 2.662-2.278 5.088-.374 1.102-.381 1.189-.234 2.844.227 2.538.848 5.8 1.339 7.038 1.08 2.722 3.594 5.671 7.46 8.753.564.45 1.201.92 1.417 1.045a3.595 3.595 0 001.87.494c.694 0 1.136-.111 1.776-.447.476-.25 1.959-1.397 3.143-2.432.666-.58.85-.648 1.02-.373.057.093.08.212.057.29-.082.277-3.048 2.717-3.828 3.149-.714.395-1.193.53-1.989.558-.483.017-.82-.006-1.115-.076zm-.215-5.484c-.4-.14-1.248-.799-1.298-1.009-.047-.198.068-.405.25-.454.122-.033.238.03.59.317.24.197.512.388.604.425.093.038.6.068 1.143.067 1.11-.002 1.206-.03 1.811-.538.195-.163.385-.297.424-.297.159 0 .337.205.337.387 0 .151-.072.252-.376.522-.207.184-.526.41-.708.5-.312.157-.394.168-1.387.182-.884.013-1.109-.004-1.39-.102zm11.295-1.593c-.092-.15-.094-.186-.014-.338.077-.146.153-.18.569-.253.629-.11 1.038-.316 1.446-.727.426-.43.674-.96.748-1.6.044-.372.087-.508.188-.596.16-.139.233-.141.405-.013.109.081.134.162.134.425 0 1.678-1.488 3.27-3.055 3.27-.276 0-.33-.022-.42-.168zm-11.08-.44c-1.033-.173-2.15-.606-2.227-.862-.05-.167.027-.32.422-.845.424-.564.61-.742.932-.891.44-.205.81-.226 1.35-.077.576.159.675.161 1.107.027.229-.071.474-.095.77-.074.631.043.965.26 1.518.988.618.813.599.972-.148 1.27-1.283.513-2.517.667-3.724.464zm2.71-.896c.329-.092.621-.191.649-.22.065-.07-.271-.523-.505-.68-.31-.211-.645-.24-1.173-.102-.59.155-.623.155-1.172 0-.558-.159-.803-.16-1.115-.01-.248.12-.708.625-.672.739.027.086.394.215 1.037.364.789.183 2.112.142 2.95-.091zm8.335-.173a1.77 1.77 0 01-1.22-1.11c-.159-.446-.103-1.106.129-1.505.71-1.225 2.375-1.11 2.918.2a1.84 1.84 0 01-.398 1.965c-.412.406-.945.573-1.43.45zm.718-.808c.487-.247.68-.86.432-1.373-.45-.93-1.76-.595-1.76.45 0 .403.171.703.504.884.318.171.541.182.824.039zm-3.475-.667c-.146-.155-.154-.45-.03-1.013.274-1.24 1.233-2.264 2.395-2.556.529-.133.804-.124.95.032.14.15.154.313.038.481-.06.088-.199.134-.518.17-1.186.135-2.077 1.083-2.228 2.373-.058.49-.147.642-.377.642-.06 0-.164-.058-.23-.129zm-7.866-2.552c-.286-.068-.612-.238-1.028-.538-.631-.455-.773-.817-.417-1.066.173-.12.347-.073.47.127.05.08.274.275.5.432l.41.285H23l.41-.285c.225-.157.45-.351.5-.432.122-.2.297-.247.469-.127.377.264.216.62-.513 1.13-.341.24-.649.403-.843.448-.3.068-.877.082-1.114.026zm-7.441-5.822c-.197-.226-.146-.423.215-.827l.204-.227-.302-.241a2.668 2.668 0 00-.456-.303c-.274-.111-.64-.07-.971.108-.3.162-.322.165-.468.062-.357-.25-.09-.712.524-.906.6-.19 1.137-.076 1.676.356.445.357.791.537 1.293.67.61.163 1.118.102 2.4-.286 1.126-.341 1.227-.346 1.366-.07.04.08.042.18.004.285-.061.173-.124.198-1.545.616-1.086.32-1.687.358-2.534.162-.231-.053-.587.111-.734.339-.282.437-.459.506-.672.262zm15.413.071a.747.747 0 01-.2-.26c-.06-.124-.195-.243-.367-.324-.243-.115-.303-.12-.583-.048-.554.142-1.324.095-2.125-.131-1.732-.489-1.894-.572-1.81-.931.073-.309.253-.309 1.274-.002.521.157 1.124.318 1.34.358.79.147 1.622-.073 2.337-.618.703-.535 1.216-.66 1.82-.444.677.242.89.673.454.918-.113.064-.18.05-.421-.087a1.15 1.15 0 00-.577-.162c-.323 0-.422.043-.845.37l-.29.226.177.2c.344.387.411.73.18.905-.156.115-.219.12-.364.03zm4.839-.057c-.11-.117-.116-.187-.082-.952l.037-.826-.288-.768c-1.175-3.131-2.738-5.745-4.672-7.814-1.588-1.699-3.198-2.884-6.696-4.93-.925-.54-1.407-.859-1.438-.948a.345.345 0 01.206-.455c.185-.07.189-.069 2.214 1.133 2.933 1.74 4.498 2.9 5.977 4.43 2.101 2.172 3.796 4.96 5.072 8.345l.345.915-.044.877c-.036.734-.062.896-.158.998-.146.157-.324.155-.473-.005zm-15.477-5.121c-.963-.982-2.3-1.31-4.563-1.121l-.96.08-.11-.143c-.136-.18-.137-.272-.003-.445.143-.185.838-.277 2.125-.28 1.14-.001 1.88.112 2.56.394.784.325 1.659 1.043 1.659 1.362 0 .163-.208.383-.362.383-.066 0-.222-.104-.346-.23zm4.867.102c-.202-.216-.15-.385.237-.779.41-.416 1.247-.886 1.872-1.05.746-.197 1.833-.263 2.9-.177.534.043 1.022.108 1.084.143.154.088.25.298.205.45-.071.238-.23.268-.98.186-.844-.093-2.336-.044-2.937.097-.583.135-1.333.545-1.717.935-.346.352-.48.391-.664.195z"
                    stroke="#000"
                    strokeWidth=".529"
                  />
                </svg>
              </div>
              <h2>Spot Treatment</h2>
              <FontAwesomeIcon
                className="skin_care_routine_user_add_icon"
                icon={faPlusCircle}
              />
              <Transition
                items={itemToggled}
                from={{ transform: "translateX(-100%)" }}
                enter={{ transform: "translateX(0%)" }}
                leave={{ transform: "translateX(-100%)" }}
                config={{ duration: 200 }}
              >
                {(itemToggled) =>
                  itemToggled === "evening_spot_treatment" &&
                  ((styleprops) => (
                    <div
                      className="my_individual_selected_item_container"
                      style={styleprops}
                    >
                      <div className="my_individual_selected_item_contents_container">
                        <div className="my_individual_selected_item_top_container">
                          <div
                            className="my_individual_selected_item_back_container"
                            ref={selectedItemBackRef}
                            onClick={(e) => handleAppointmentUntoggled(e)}
                          >
                            <FontAwesomeIcon
                              icon={faLongArrowAltLeft}
                              className="my_individual_selected_item_back_arrow_icon"
                            />
                          </div>
                        </div>
                        <div className="my_individual_selected_item_header">
                          <p>Spot Treatment</p>
                        </div>
                      </div>
                      <div className="my_individual_selected_item_empty_state_container">
                        <div className="my_individual_selected_item_empty_state_icon_container">
                          <svg
                            className="my_individual_selected_item_empty_state_icon"
                            height="6rem"
                            width="100%"
                            viewBox="0 0 50.006 50.006"
                          >
                            <path
                              d="M42.271 44.824c-.278-.14-4.608-4.195-4.826-4.52a.662.662 0 01-.049-.713c.084-.171.079-.183-.218-.46-.22-.205-.305-.332-.305-.451 0-.436.372-.486.761-.103.144.141.286.255.315.252.03-.002.237-.231.461-.509l.408-.504-.407-.391c-.223-.216-.425-.392-.447-.392-.022 0-.154.145-.293.322-.576.734-1.734 1.542-2.725 1.902-1.293.47-2.897.47-4.183.003-4.015-1.459-5.669-6.605-3.337-10.383.655-1.06 1.53-1.876 2.594-2.42 2.542-1.299 5.466-.77 7.44 1.345.82.88 1.381 1.923 1.694 3.155.145.57.164.759.168 1.702.004.901-.016 1.149-.132 1.64-.075.317-.177.643-.226.723-.114.186-.39.194-.541.015-.109-.128-.108-.146.03-.692.205-.819.237-2.078.074-2.92-.226-1.162-.68-2.088-1.452-2.96-1.16-1.308-2.515-1.936-4.195-1.943-1.57-.008-2.866.53-3.98 1.649-1.152 1.16-1.751 2.552-1.819 4.231-.053 1.312.221 2.47.836 3.536 1.907 3.307 6.221 3.934 8.868 1.289.265-.265.588-.634.717-.82.324-.468.42-.457 1.035.128.816.776.745.727.871.606a.598.598 0 01.666-.09c.1.054 1.211 1.071 2.47 2.262 2.056 1.946 2.302 2.2 2.422 2.498.38.943-.25 2.368-1.284 2.906-.468.244-1.05.288-1.41.108zm1.053-.75c.3-.133.713-.57.892-.944.159-.33.195-.835.08-1.093-.055-.12-4.034-3.945-4.384-4.213-.088-.068-.197.037-.832.804-.401.485-.802.974-.891 1.087l-.161.206 2.127 2.016c1.17 1.109 2.194 2.065 2.276 2.126.186.137.596.142.893.01zm-21.836-1.226c-.927-.22-1.573-.62-3.328-2.062-1.909-1.566-4.036-3.707-5.104-5.136-1.022-1.368-1.778-2.72-2.169-3.88-.176-.522-.502-1.878-.694-2.88-.278-1.453-.607-3.97-.61-4.658 0-.16-.02-.322-.045-.362-.064-.106-1.426 1.46-1.712 1.969a5.9 5.9 0 00-.396.933c-.147.466-.163.608-.164 1.48-.003.894.01 1.007.171 1.532.194.63.44 1.072 1.05 1.875.492.649.7 1.04.824 1.549.118.484.117.97-.003 1.464-.19.783-.46 1.14-.769 1.014-.242-.098-.26-.324-.06-.757.153-.334.17-.44.17-1.016 0-.78-.083-.983-.78-1.893-.76-.994-1.088-1.702-1.272-2.738-.197-1.117-.018-2.506.45-3.493.661-1.337 1.53-1.793 2.296-3.054.13-.22.282-.45.337-.51.055-.06.285-.64.513-1.287.765-2.18 1.765-4.117 2.955-5.723.632-.853 2.364-2.695 3.217-3.422 1.036-.883 2.1-1.54 3.495-2.16.62-.275.75-.302.939-.194.12.068.157.344.068.494-.025.043-.316.197-.647.344-.914.405-2.045 1.038-2.66 1.489-1.601 1.17-3.561 3.314-4.71 5.151-.924 1.475-1.455 2.662-2.278 5.088-.374 1.102-.381 1.189-.234 2.844.227 2.538.848 5.8 1.339 7.038 1.08 2.722 3.594 5.671 7.46 8.753.564.45 1.201.92 1.417 1.045a3.595 3.595 0 001.87.494c.694 0 1.136-.111 1.776-.447.476-.25 1.959-1.397 3.143-2.432.666-.58.85-.648 1.02-.373.057.093.08.212.057.29-.082.277-3.048 2.717-3.828 3.149-.714.395-1.193.53-1.989.558-.483.017-.82-.006-1.115-.076zm-.215-5.484c-.4-.14-1.248-.799-1.298-1.009-.047-.198.068-.405.25-.454.122-.033.238.03.59.317.24.197.512.388.604.425.093.038.6.068 1.143.067 1.11-.002 1.206-.03 1.811-.538.195-.163.385-.297.424-.297.159 0 .337.205.337.387 0 .151-.072.252-.376.522-.207.184-.526.41-.708.5-.312.157-.394.168-1.387.182-.884.013-1.109-.004-1.39-.102zm11.295-1.593c-.092-.15-.094-.186-.014-.338.077-.146.153-.18.569-.253.629-.11 1.038-.316 1.446-.727.426-.43.674-.96.748-1.6.044-.372.087-.508.188-.596.16-.139.233-.141.405-.013.109.081.134.162.134.425 0 1.678-1.488 3.27-3.055 3.27-.276 0-.33-.022-.42-.168zm-11.08-.44c-1.033-.173-2.15-.606-2.227-.862-.05-.167.027-.32.422-.845.424-.564.61-.742.932-.891.44-.205.81-.226 1.35-.077.576.159.675.161 1.107.027.229-.071.474-.095.77-.074.631.043.965.26 1.518.988.618.813.599.972-.148 1.27-1.283.513-2.517.667-3.724.464zm2.71-.896c.329-.092.621-.191.649-.22.065-.07-.271-.523-.505-.68-.31-.211-.645-.24-1.173-.102-.59.155-.623.155-1.172 0-.558-.159-.803-.16-1.115-.01-.248.12-.708.625-.672.739.027.086.394.215 1.037.364.789.183 2.112.142 2.95-.091zm8.335-.173a1.77 1.77 0 01-1.22-1.11c-.159-.446-.103-1.106.129-1.505.71-1.225 2.375-1.11 2.918.2a1.84 1.84 0 01-.398 1.965c-.412.406-.945.573-1.43.45zm.718-.808c.487-.247.68-.86.432-1.373-.45-.93-1.76-.595-1.76.45 0 .403.171.703.504.884.318.171.541.182.824.039zm-3.475-.667c-.146-.155-.154-.45-.03-1.013.274-1.24 1.233-2.264 2.395-2.556.529-.133.804-.124.95.032.14.15.154.313.038.481-.06.088-.199.134-.518.17-1.186.135-2.077 1.083-2.228 2.373-.058.49-.147.642-.377.642-.06 0-.164-.058-.23-.129zm-7.866-2.552c-.286-.068-.612-.238-1.028-.538-.631-.455-.773-.817-.417-1.066.173-.12.347-.073.47.127.05.08.274.275.5.432l.41.285H23l.41-.285c.225-.157.45-.351.5-.432.122-.2.297-.247.469-.127.377.264.216.62-.513 1.13-.341.24-.649.403-.843.448-.3.068-.877.082-1.114.026zm-7.441-5.822c-.197-.226-.146-.423.215-.827l.204-.227-.302-.241a2.668 2.668 0 00-.456-.303c-.274-.111-.64-.07-.971.108-.3.162-.322.165-.468.062-.357-.25-.09-.712.524-.906.6-.19 1.137-.076 1.676.356.445.357.791.537 1.293.67.61.163 1.118.102 2.4-.286 1.126-.341 1.227-.346 1.366-.07.04.08.042.18.004.285-.061.173-.124.198-1.545.616-1.086.32-1.687.358-2.534.162-.231-.053-.587.111-.734.339-.282.437-.459.506-.672.262zm15.413.071a.747.747 0 01-.2-.26c-.06-.124-.195-.243-.367-.324-.243-.115-.303-.12-.583-.048-.554.142-1.324.095-2.125-.131-1.732-.489-1.894-.572-1.81-.931.073-.309.253-.309 1.274-.002.521.157 1.124.318 1.34.358.79.147 1.622-.073 2.337-.618.703-.535 1.216-.66 1.82-.444.677.242.89.673.454.918-.113.064-.18.05-.421-.087a1.15 1.15 0 00-.577-.162c-.323 0-.422.043-.845.37l-.29.226.177.2c.344.387.411.73.18.905-.156.115-.219.12-.364.03zm4.839-.057c-.11-.117-.116-.187-.082-.952l.037-.826-.288-.768c-1.175-3.131-2.738-5.745-4.672-7.814-1.588-1.699-3.198-2.884-6.696-4.93-.925-.54-1.407-.859-1.438-.948a.345.345 0 01.206-.455c.185-.07.189-.069 2.214 1.133 2.933 1.74 4.498 2.9 5.977 4.43 2.101 2.172 3.796 4.96 5.072 8.345l.345.915-.044.877c-.036.734-.062.896-.158.998-.146.157-.324.155-.473-.005zm-15.477-5.121c-.963-.982-2.3-1.31-4.563-1.121l-.96.08-.11-.143c-.136-.18-.137-.272-.003-.445.143-.185.838-.277 2.125-.28 1.14-.001 1.88.112 2.56.394.784.325 1.659 1.043 1.659 1.362 0 .163-.208.383-.362.383-.066 0-.222-.104-.346-.23zm4.867.102c-.202-.216-.15-.385.237-.779.41-.416 1.247-.886 1.872-1.05.746-.197 1.833-.263 2.9-.177.534.043 1.022.108 1.084.143.154.088.25.298.205.45-.071.238-.23.268-.98.186-.844-.093-2.336-.044-2.937.097-.583.135-1.333.545-1.717.935-.346.352-.48.391-.664.195z"
                              strokeWidth=".529"
                            />
                          </svg>
                        </div>
                        <div className="my_individual_selected_item_empty_state_text_container">
                          <h2>No spot treatment information</h2>
                          <p>
                            Start by adding some product information and check
                            back here after
                          </p>
                        </div>
                        <div className="my_individual_selected_item_bottom_buttons_container">
                          <div className="my_individual_selected_item_add_product_button">
                            <p>Add Product</p>
                          </div>
                          <div
                            className="my_individual_selected_item_back_to_routine_button"
                            onClick={() => changeItemToggled("")}
                          >
                            <p>Back to Routine</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRoutine;
