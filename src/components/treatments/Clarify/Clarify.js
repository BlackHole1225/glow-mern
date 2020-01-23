import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spring, animated, Keyframes } from "react-spring/renderprops";
import { InView } from "react-intersection-observer";
import ACTION_CLARIFY_TOGGLE from "../../../actions/Treatments/Clarify/ACTION_CLARIFY_TOGGLE";
import ACTION_CALM_TOGGLE_RESET from "../../../actions/Treatments/Calm/ACTION_CALM_TOGGLE_RESET";
import ACTION_CLARIFY_TOGGLE_RESET from "../../../actions/Treatments/Clarify/ACTION_CLARIFY_TOGGLE_RESET";
import ACTION_BACIAL_TOGGLE_RESET from "../../../actions/Treatments/Bacial/ACTION_BACIAL_TOGGLE_RESET";
import ACTION_GLOW_TOGGLE_RESET from "../../../actions/Treatments/Glow/ACTION_GLOW_TOGGLE_RESET";
import ACTION_REJUVENATE_TOGGLE_RESET from "../../../actions/Treatments/Rejuvenate/ACTION_REJUVENATE_TOGGLE_RESET";
import ACTION_QUENCH_TOGGLE_RESET from "../../../actions/Treatments/Quench/ACTION_QUENCH_TOGGLE_RESET";
import ACTION_QUICKIE_TOGGLE_RESET from "../../../actions/Treatments/Quickie/ACTION_QUICKIE_TOGGLE_RESET";
import ACTION_CHEMICAL_PEEL_TOGGLE_RESET from "../../../actions/Treatments/ChemicalPeel/ACTION_CHEMICAL_PEEL_TOGGLE_RESET";
import ACTION_DERMAPLANING_TOGGLE_RESET from "../../../actions/Treatments/Dermaplaning/ACTION_DERMAPLANING_TOGGLE_RESET";
import ACTION_CBD_TOGGLE_RESET from "../../../actions/Treatments/CBD/ACTION_CBD_TOGGLE_RESET";
import ACTION_MICRONEEDLE_TOGGLE_RESET from "../../../actions/Treatments/Microneedle/ACTION_MICRONEEDLE_TOGGLE_RESET";
import ACTION_CLARIFY_IN_CART from "../../../actions/InCart/Treatments/Clarify/ACTION_CLARIFY_IN_CART";
import ACTION_CLARIFY_NOT_IN_CART from "../../../actions/InCart/Treatments/Clarify/ACTION_CLARIFY_NOT_IN_CART";
import ACTION_NAVBAR_IS_VISIBLE from "../../../actions/NavbarIsVisible/ACTION_NAVBAR_IS_VISIBLE";
import ACTION_INCREMENT_COUNTER from "../../../actions/Counter/ACTION_INCREMENT_COUNTER";
import ACTION_DECREMENT_COUNTER from "../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faSquare,
  faClock,
  faTag
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import ClarifyNotification from "./ClarifyNotification";
import ClarifyRemovedNotification from "./ClarifyRemovedNotification";
import FacialInCartErrorNotification from "../FacialInCartErrorNotification";
import "./Clarify.css";

const Clarify = props => {
  // "Learn More" states
  const calmToggle = useSelector(state => state.calmToggle.toggle);
  const clarifyToggle = useSelector(state => state.clarifyToggle.toggle);
  const bacialToggle = useSelector(state => state.bacialToggle.toggle);
  const glowToggle = useSelector(state => state.glowToggle.toggle);
  const rejuvenateToggle = useSelector(state => state.rejuvenateToggle.toggle);
  const quenchToggle = useSelector(state => state.quenchToggle.toggle);
  const quickieToggle = useSelector(state => state.quickieToggle.toggle);
  const chemicalpeelToggle = useSelector(
    state => state.chemicalpeelToggle.toggle
  );
  const dermaplaningToggle = useSelector(
    state => state.dermaplaningToggle.toggle
  );
  const cbdToggle = useSelector(state => state.cbdToggle.toggle);
  const microneedleToggle = useSelector(
    state => state.microneedleToggle.toggle
  );

  // In Cart states
  const calmInCart = useSelector(state => state.calmInCart.in_cart);
  const clarifyInCart = useSelector(state => state.clarifyInCart.in_cart);
  const bacialInCart = useSelector(state => state.bacialInCart.in_cart);
  const glowInCart = useSelector(state => state.glowInCart.in_cart);
  const cbdInCart = useSelector(state => state.cbdInCart.in_cart);
  const chemicalPeelInCart = useSelector(
    state => state.chemicalPeelInCart.in_cart
  );
  const dermaplaningInCart = useSelector(
    state => state.dermaplaningInCart.in_cart
  );
  const microneedleInCart = useSelector(
    state => state.microneedleInCart.in_cart
  );
  const quenchInCart = useSelector(state => state.quenchInCart.in_cart);
  const quickieInCart = useSelector(state => state.quickieInCart.in_cart);
  const rejuvenateInCart = useSelector(state => state.rejuvenateInCart.in_cart);

  const [cartClicked, changeCartClicked] = useState(false);

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!clarifyToggle) {
      dispatch(ACTION_CLARIFY_TOGGLE());
      if (calmToggle) {
        dispatch(ACTION_CALM_TOGGLE_RESET());
      }
      if (bacialToggle) {
        dispatch(ACTION_BACIAL_TOGGLE_RESET());
      }
      if (glowToggle) {
        dispatch(ACTION_GLOW_TOGGLE_RESET());
      }
      if (rejuvenateToggle) {
        dispatch(ACTION_REJUVENATE_TOGGLE_RESET());
      }
      if (quenchToggle) {
        dispatch(ACTION_QUENCH_TOGGLE_RESET());
      }
      if (quickieToggle) {
        dispatch(ACTION_QUICKIE_TOGGLE_RESET());
      }
      if (chemicalpeelToggle) {
        dispatch(ACTION_CHEMICAL_PEEL_TOGGLE_RESET());
      }
      if (dermaplaningToggle) {
        dispatch(ACTION_DERMAPLANING_TOGGLE_RESET());
      }
      if (cbdToggle) {
        dispatch(ACTION_CBD_TOGGLE_RESET());
      }
      if (microneedleToggle) {
        dispatch(ACTION_MICRONEEDLE_TOGGLE_RESET());
      }
    } else {
      dispatch(ACTION_CLARIFY_TOGGLE_RESET());
    }
  };

  const cardDescriptionHandler = () => {
    if (clarifyToggle) {
      return (
        <>
          <div className="card_description_paragraph_toggle">
            <div className="card_description_icon_wrapper_container">
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faClock}
                />
                <p className="card_description_paragraph_title">Duration</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>50 minutes</p>
              </div>
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faTag}
                />
                <p className="card_description_paragraph_title">Price</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>$70</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <p className="card_description_paragraph">
          Dealing with pimples and irritation? Clarify employs deep-tissue
          cleansing to remove excess oils, prevent breakouts and soothe skin.
        </p>
      );
    }
  };

  const SuitcaseBounce = Keyframes.Spring({
    suitcaseBounce: [
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 100 }
      },
      {
        marginTop: "-9px",
        color: "rgb(155, 98, 107)",
        config: { duration: 300 }
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 }
      },
      {
        marginTop: "-6",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 }
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 }
      },
      {
        marginTop: "-4px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 }
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 }
      }
    ]
  });

  const checkMark = () => {
    return (
      <Spring from={{ x: 100 }} to={{ x: 0 }} config={{ duration: 2000 }}>
        {styles => (
          <svg
            width="100%"
            height="2rem"
            style={{
              marginTop: "-0.5rem",
              display: clarifyInCart ? "block" : "none"
            }}
            viewBox="0 0 13.229 13.229"
          >
            <path
              d="M2.851 7.56l2.45 2.482 5.36-6.958"
              fill="none"
              stroke="#000"
              strokeDasharray="100"
              strokeDashoffset={
                cartClicked ? (clarifyInCart ? `${styles.x}` : 0) : 0
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        )}
      </Spring>
    );
  };

  const inCartToastId = "facial_already_in_cart";

  const addToCart = () => {
    if (
      bacialInCart |
      cbdInCart |
      chemicalPeelInCart |
      calmInCart |
      dermaplaningInCart |
      glowInCart |
      microneedleInCart |
      quenchInCart |
      quickieInCart |
      rejuvenateInCart
    ) {
      if (!toast.isActive(inCartToastId)) {
        toast.dismiss();
        toast(<FacialInCartErrorNotification />, {
          className: "toast_error_container",
          toastId: inCartToastId
        });
      }
    } else {
      if (clarifyInCart) {
        toast.dismiss();
        dispatch(ACTION_CLARIFY_NOT_IN_CART());
        dispatch(ACTION_DECREMENT_COUNTER());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());
        toast(<ClarifyRemovedNotification />, {
          className: "toast_removed_container"
        });
      } else {
        toast.dismiss();
        dispatch(ACTION_CLARIFY_IN_CART());
        dispatch(ACTION_INCREMENT_COUNTER());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());
        changeCartClicked(true);
        setTimeout(() => changeCartClicked(false), 200);
        toast(<ClarifyNotification />);
      }
    }
  };

  const bookButtonBounce = () => {
    return (
      <SuitcaseBounce state="suitcaseBounce">
        {styles => (
          <span
            className="fa-layers fa-fw"
            style={
              clarifyToggle
                ? clarifyInCart |
                  bacialInCart |
                  cbdInCart |
                  chemicalPeelInCart |
                  calmInCart |
                  dermaplaningInCart |
                  glowInCart |
                  microneedleInCart |
                  quenchInCart |
                  quickieInCart |
                  rejuvenateInCart
                  ? { position: "relative" }
                  : styles
                : { position: "relative" }
            }
            onClick={() => addToCart()}
          >
            <FontAwesomeIcon
              color={
                clarifyToggle
                  ? clarifyInCart
                    ? "rgba(119, 221, 119, 0.6)"
                    : bacialInCart |
                      cbdInCart |
                      chemicalPeelInCart |
                      calmInCart |
                      dermaplaningInCart |
                      glowInCart |
                      microneedleInCart |
                      quenchInCart |
                      quickieInCart |
                      rejuvenateInCart
                    ? "rgba(211, 211, 211, 0.8"
                    : "rgba(255, 198, 207, 0.8)"
                  : clarifyInCart
                  ? "rgb(119, 221, 119, 0.6)"
                  : bacialInCart |
                    cbdInCart |
                    chemicalPeelInCart |
                    calmInCart |
                    dermaplaningInCart |
                    glowInCart |
                    microneedleInCart |
                    quenchInCart |
                    quickieInCart |
                    rejuvenateInCart
                  ? "rgba(211, 211, 211, 0.8"
                  : "rgba(255, 198, 207, 0.6)"
              }
              transform="grow-20"
              icon={faSquare}
            />
            {checkMark()}
            <FontAwesomeIcon
              style={{ display: clarifyInCart ? "none" : "block" }}
              color={
                bacialInCart |
                cbdInCart |
                chemicalPeelInCart |
                calmInCart |
                dermaplaningInCart |
                glowInCart |
                microneedleInCart |
                quenchInCart |
                quickieInCart |
                rejuvenateInCart
                  ? "rgb(151, 151, 151)"
                  : "rgb(175, 118, 127)"
              }
              icon={faSuitcase}
            />
          </span>
        )}
      </SuitcaseBounce>
    );
  };

  const bigScreenBottomWrapperRender = () => {
    return (
      <div className="big_screen_entire_bottom_wrapper">
        <div className="big_screen_price_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faTag}
          />
          <p className="big_screen_price">$70</p>
        </div>
        <div className="big_screen_duration_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faClock}
          />
          <p className="big_screen_duration">50 minutes</p>
        </div>
      </div>
    );
  };

  const smallScreenBottomWrapperRender = () => {
    return (
      <div
        className="card_bottom_wrapper"
        style={{
          color: clarifyToggle ? "rgb(155, 98, 107)" : "rgb(175, 118, 127)",
          transition: "ease all 0.5s"
        }}
      >
        <p className="card_toggler" onClick={handleToggle}>
          {clarifyToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
        </p>
        <span className="card_bottom_spacer" />
        {bookButtonBounce()}
      </div>
    );
  };

  const dynamicScreenSizeBottomCardRender = () => {
    if (props.currentScreenSize === "") {
      if (props.initialScreenSize >= 1200) {
        return bigScreenBottomWrapperRender();
      } else {
        return smallScreenBottomWrapperRender();
      }
    } else {
      if (props.currentScreenSize >= 1200) {
        return bigScreenBottomWrapperRender();
      } else {
        return smallScreenBottomWrapperRender();
      }
    }
  };

  return (
    <InView threshold={0.2} triggerOnce={true}>
      {({ inView, ref }) => (
        <div className="clarify_wrapping" ref={ref}>
          {inView ? (
            <Spring
              from={{ position: "relative", opacity: 0 }}
              to={{ position: "relative", opacity: 1 }}
              config={{ duration: 1000 }}
            >
              {styleprops => (
                <section className="card" style={styleprops}>
                  <div
                    className="card_image"
                    style={{
                      backgroundColor: clarifyToggle
                        ? "rgb(255, 198, 207)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: clarifyToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s"
                    }}
                  >
                    <Spring
                      from={{ x: 200, fill: "white" }}
                      to={{ x: 0, fill: "rgb(207, 207, 196, 0.3)" }}
                      config={{ delay: 300, duration: 1500 }}
                    >
                      {styles => (
                        <>
                          <div className="big_screen_book_now_wrapper">
                            <FontAwesomeIcon
                              className="big_screen_card_description_suitcase"
                              icon={faSuitcase}
                            />
                            <p>BOOK NOW</p>
                          </div>
                          <svg
                            className="card_svg"
                            width="100%"
                            height="15rem"
                            viewBox="0 0 50.006 50.006"
                          >
                            <circle
                              cx="25"
                              cy="25"
                              r={
                                props.currentScreenSize === ""
                                  ? props.initialScreenSize >= 1200
                                    ? "19.5"
                                    : "23"
                                  : props.currentScreenSize >= 1200
                                  ? "19.5"
                                  : "23"
                              }
                              stroke={
                                clarifyToggle
                                  ? "rgb(235, 178, 187)"
                                  : "rgba(191, 191, 191)"
                              }
                              strokeWidth="0.5"
                              fill="white"
                            />
                            <g fill="none" transform="translate(14, 12)">
                              <animated.path
                                fill={`${styles.fill}`}
                                strokeDasharray="200"
                                strokeDashoffset={`${styles.x}`}
                                className="clarify_icon_path"
                                d="M9.257 37.6l29.142.04 1.265-.197 1.112-.511 1.15-.944.805-1.297.767-1.77.077-1.69-.153-1.336-.384-1.455-.613-.943-.92-.944-.576-.432-.69-.55-.038-.355v-1.14l-.192-.864-.383-.59-.614-.826-.844-.51-.92-.433-.958.039-.767.157-.652.393-.269.079v-.786l-.191-1.062-.537-1.336-.499-.826-.575-.707-.958-.826-1.112-.511-.767-.157h-.92l-.997.196-.882.315-.614.471-.805.55-.384.512-.536-.747-.499-.983-1.073-1.376-1.15-1.1-1.113-.787-1.265-.55-1.342-.275h-1.227l-1.38.117-1.266.394-1.15.55-.997.865-.997 1.1-.614 1.062-.805 1.455-.575 1.376-.345 1.336.038 1.258.077 1.337.153 1.376.537 1.14-1.265.354-1.342.668-.959.904-.805 1.022L5 29.148l-.384 1.297.039 1.376.153 1.062.345 1.218.46 1.101.844.983.92.707.959.512z"
                                stroke="#000"
                                strokeWidth="0.8"
                              />
                              <animated.path
                                strokeDasharray="200"
                                strokeDashoffset={`${styles.x}`}
                                d="M8.304 35.53c-.339-1.946-.71-5.773 1.362-10.234s5.892-8.774 10.861-11.369c4.97-2.595 10.994-3.103 14.08-1.341 3.087 1.762 3.311 5.051 1.8 10.028-1.513 4.976-4.786 11.274-5.288 15.62-.503 4.346 1.765 6.74.253 7.684-1.512.945-6.804.441-10.71-.849s-8.065-4.713-9.889-6.12-2.13-1.473-2.469-3.42z"
                              />
                            </g>
                          </svg>
                        </>
                      )}
                    </Spring>
                    <div
                      className="card_border_right"
                      style={{
                        borderRight: clarifyToggle
                          ? "1px solid rgbA(155, 98, 107, 0.4)"
                          : "1px solid rgbA(211, 211, 211)"
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: clarifyToggle
                        ? "rgba(255, 198, 207, 0.2)"
                        : "rgba(235, 235, 235, 0.2)",
                      boxShadow: clarifyToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s"
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <h2 style={{ fontWeight: 400 }}>CLARIFY</h2>
                      <p
                        className="card_description_subheader"
                        style={{ opacity: 0.7 }}
                      >
                        Acne-fighting
                      </p>
                      {cardDescriptionHandler()}
                      {dynamicScreenSizeBottomCardRender()}
                    </div>
                  </div>
                </section>
              )}
            </Spring>
          ) : null}
        </div>
      )}
    </InView>
  );
};

export default Clarify;
