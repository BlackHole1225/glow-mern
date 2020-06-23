import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spring, animated, Keyframes } from "react-spring/renderprops";
import { InView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSquare,
  faClock,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import ACTION_GUASHA_TOGGLE from "../../../actions/AddOns/GuaSha/ACTION_GUASHA_TOGGLE";
import ACTION_EXTRA_EXTRACTIONS_TOGGLE_RESET from "../../../actions/AddOns/ExtraExtractions/ACTION_EXTRA_EXTRACTIONS_TOGGLE_RESET";
import ACTION_HYDRO_JELLY_TOGGLE_RESET from "../../../actions/AddOns/HydroJellyMask/ACTION_HYDRO_JELLY_TOGGLE_RESET";
import ACTION_LED_THERAPY_TOGGLE_RESET from "../../../actions/AddOns/LEDTherapy/ACTION_LED_THERAPY_TOGGLE_RESET";
import ACTION_MICROCURRENT_TOGGLE_RESET from "../../../actions/AddOns/Microcurrent/ACTION_MICROCURRENT_TOGGLE_RESET";
import ACTION_MICRODERMABRASION_TOGGLE_RESET from "../../../actions/AddOns/Microdermabrasion/ACTION_MICRODERMABRASION_TOGGLE_RESET";
import ACTION_DERMAROLLING_TOGGLE_RESET from "../../../actions/AddOns/Dermarolling/ACTION_DERMAROLLING_TOGGLE_RESET";
import ACTION_NANONEEDLING_TOGGLE_RESET from "../../../actions/AddOns/Nanoneedling/ACTION_NANONEEDLING_TOGGLE_RESET";
import ACTION_GUASHA_TOGGLE_RESET from "../../../actions/AddOns/GuaSha/ACTION_GUASHA_TOGGLE_RESET";
import ACTION_BEARD_TOGGLE_RESET from "../../../actions/AddOns/Beard/ACTION_BEARD_TOGGLE_RESET";
import ACTION_GUASHA_IN_CART from "../../../actions/InCart/AddOns/GuaSha/ACTION_GUASHA_IN_CART";
import ACTION_GUASHA_NOT_IN_CART from "../../../actions/InCart/AddOns/GuaSha/ACTION_GUASHA_NOT_IN_CART";
import ACTION_NAVBAR_IS_VISIBLE from "../../../actions/NavbarIsVisible/ACTION_NAVBAR_IS_VISIBLE";
import ACTION_INCREMENT_COUNTER from "../../../actions/Counter/ACTION_INCREMENT_COUNTER";
import ACTION_DECREMENT_COUNTER from "../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import { toast } from "react-toastify";
import GuaShaNotification from "./GuaShaNotification";
import GuaShaRemovedNotification from "./GuaShaRemovedNotification";
import AddOnsChemPeelErrorNotification from "../AddOnsChemPeelErrorNotification";
import AddOnsMicroneedlingErrorNotification from "../AddOnsMicroneedlingErrorNotification";
import "./GuaSha.css";
import "../../treatments/card_styling.css";

const GuaSha = (props) => {
  const extraExtractionsToggle = useSelector(
    (state) => state.extraExtractionsToggle.toggle
  );
  const hydroJellyToggle = useSelector(
    (state) => state.hydroJellyToggle.toggle
  );
  const ledTherapyToggle = useSelector(
    (state) => state.ledTherapyToggle.toggle
  );
  const microcurrentToggle = useSelector(
    (state) => state.microcurrentToggle.toggle
  );
  const microdermabrasionToggle = useSelector(
    (state) => state.microdermabrasionToggle.toggle
  );
  const dermarollingToggle = useSelector(
    (state) => state.dermarollingToggle.toggle
  );
  const nanoneedlingToggle = useSelector(
    (state) => state.nanoneedlingToggle.toggle
  );
  const guashaToggle = useSelector((state) => state.guashaToggle.toggle);
  const beardToggle = useSelector((state) => state.beardToggle.toggle);

  // In Cart states
  const guashaInCart = useSelector((state) => state.guashaInCart.in_cart);
  const microneedleInCart = useSelector(
    (state) => state.microneedleInCart.in_cart
  );
  const chemicalPeelInCart = useSelector(
    (state) => state.chemicalPeelInCart.in_cart
  );
  const saltCaveInCart = useSelector((state) => state.saltCaveInCart.in_cart);

  const [cartClicked, changeCartClicked] = useState(false);
  const [bookNowButtonHovered, changeBookNowButtonHovered] = useState(false);

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!guashaToggle) {
      dispatch(ACTION_GUASHA_TOGGLE());
      if (extraExtractionsToggle) {
        dispatch(ACTION_EXTRA_EXTRACTIONS_TOGGLE_RESET());
      }
      if (hydroJellyToggle) {
        dispatch(ACTION_HYDRO_JELLY_TOGGLE_RESET());
      }
      if (ledTherapyToggle) {
        dispatch(ACTION_LED_THERAPY_TOGGLE_RESET());
      }
      if (microcurrentToggle) {
        dispatch(ACTION_MICROCURRENT_TOGGLE_RESET());
      }
      if (microdermabrasionToggle) {
        dispatch(ACTION_MICRODERMABRASION_TOGGLE_RESET());
      }
      if (dermarollingToggle) {
        dispatch(ACTION_DERMAROLLING_TOGGLE_RESET());
      }
      if (nanoneedlingToggle) {
        dispatch(ACTION_NANONEEDLING_TOGGLE_RESET());
      }
      if (beardToggle) {
        dispatch(ACTION_BEARD_TOGGLE_RESET());
      }
    } else {
      dispatch(ACTION_GUASHA_TOGGLE_RESET());
    }
  };

  const cardDescriptionHandler = () => {
    if (guashaToggle) {
      return (
        <>
          <div className="card_description_add_on_paragraph_toggle">
            <div className="card_description_icon_wrapper_container">
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faClock}
                />
                <p className="card_description_paragraph_title">Duration</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>10 minutes</p>
              </div>
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faTag}
                />
                <p className="card_description_paragraph_title">Price</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>$30</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <p className="card_description_paragraph">
          This ancient Chinese acupressure massage uses natural stones to reduce
          fine lines, decrease puffiness, and help with sinus congestion.
        </p>
      );
    }
  };

  const PlusBounce = Keyframes.Spring({
    plusBounce: [
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 100 },
      },
      {
        marginTop: "-9px",
        color: "rgb(155, 98, 107)",
        config: { duration: 300 },
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "-6",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "-4px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
    ],
  });

  const checkMark = () => {
    return (
      <Spring from={{ x: 100 }} to={{ x: 0 }} config={{ duration: 2000 }}>
        {(styles) => (
          <svg
            width={
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 1800
                  ? "2rem"
                  : props.initialScreenSize >= 1600
                  ? "1rem"
                  : props.initialScreenSize >= 1200
                  ? "1rem"
                  : "100%"
                : props.currentScreenSize >= 1800
                ? "2rem"
                : props.currentScreenSize >= 1600
                ? "1rem"
                : props.currentScreenSize >= 1200
                ? "1rem"
                : "100%"
            }
            height={
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 2200
                  ? "2rem"
                  : props.initialScreenSize >= 1800
                  ? "1.3rem"
                  : props.initialScreenSize >= 1600
                  ? "1.3rem"
                  : props.initialScreenSize >= 1200
                  ? "1.1rem"
                  : props.initialScreenSize >= 360
                  ? "2rem"
                  : "1rem"
                : props.currentScreenSize >= 2200
                ? "2rem"
                : props.currentScreenSize >= 1800
                ? "1.3rem"
                : props.currentScreenSize >= 1600
                ? "1.3rem"
                : props.currentScreenSize >= 1200
                ? "1.1rem"
                : props.currentScreenSize >= 360
                ? "2rem"
                : "1rem"
            }
            style={{
              marginTop:
                props.currentScreenSize === ""
                  ? props.initialScreenSize >= 2200
                    ? "-0.2rem"
                    : props.initialScreenSize >= 1800
                    ? "0"
                    : props.initialScreenSize >= 1600
                    ? "-0.2rem"
                    : props.initialScreenSize >= 1200
                    ? "-0.1rem"
                    : props.initialScreenSize >= 360
                    ? "-0.5rem"
                    : "0rem"
                  : props.currentScreenSize >= 2200
                  ? "-0.2rem"
                  : props.currentScreenSize >= 1800
                  ? "0"
                  : props.currentScreenSize >= 1600
                  ? "-0.2rem"
                  : props.currentScreenSize >= 1200
                  ? "-0.1rem"
                  : props.currentScreenSize >= 360
                  ? "-0.5rem"
                  : "0rem",
              display: guashaInCart ? "block" : "none",
            }}
            viewBox="0 0 13.229 13.229"
          >
            <path
              d="M2.851 7.56l2.45 2.482 5.36-6.958"
              fill="none"
              stroke="#000"
              strokeDasharray="100"
              strokeDashoffset={
                cartClicked ? (guashaInCart ? `${styles.x}` : 0) : 0
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

  const chemPeelAddOnErrorToastId = "chem_peel_add_on_error";
  const microneedlingAddOnErrorToastId = "microneedling_add_on_error";

  const addToCart = () => {
    if (chemicalPeelInCart || saltCaveInCart) {
      if (!toast.isActive(chemPeelAddOnErrorToastId)) {
        toast.dismiss();
        toast(
          <AddOnsChemPeelErrorNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />,
          {
            className: "toast_error_container",
            toastId: chemPeelAddOnErrorToastId,
          }
        );
      }
    } else {
      if (microneedleInCart) {
        if (!toast.isActive(microneedlingAddOnErrorToastId)) {
          toast.dismiss();
          toast(
            <AddOnsMicroneedlingErrorNotification
              currentScreenSize={props.currentScreenSize}
              initialScreenSize={props.initialScreenSize}
            />,
            {
              className: "toast_error_container",
              toastId: microneedlingAddOnErrorToastId,
            }
          );
        }
      } else {
        if (guashaInCart) {
          toast.dismiss();
          dispatch(ACTION_GUASHA_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
          dispatch(ACTION_NAVBAR_IS_VISIBLE());

          props.resetAllCartStatesExceptTreatments();
          toast(
            <GuaShaRemovedNotification
              currentScreenSize={props.currentScreenSize}
              initialScreenSize={props.initialScreenSize}
            />,
            {
              className: "toast_removed_container",
            }
          );
        } else {
          toast.dismiss();
          dispatch(ACTION_GUASHA_IN_CART());
          dispatch(ACTION_INCREMENT_COUNTER());
          dispatch(ACTION_NAVBAR_IS_VISIBLE());
          changeCartClicked(true);
          setTimeout(() => changeCartClicked(false), 200);
          props.resetAllCartStatesExceptTreatments();
          toast(
            <GuaShaNotification
              currentScreenSize={props.currentScreenSize}
              initialScreenSize={props.initialScreenSize}
            />
          );
        }
      }
    }
  };

  const addOnBounce = () => {
    return (
      <PlusBounce state="plusBounce">
        {(styles) => (
          <span
            className="fa-layers fa-fw"
            style={
              guashaToggle
                ? guashaInCart
                  ? { position: "relative" }
                  : microneedleInCart | chemicalPeelInCart | saltCaveInCart
                  ? { position: "relative" }
                  : styles
                : { position: "relative" }
            }
            onClick={() => addToCart()}
          >
            <FontAwesomeIcon
              color={
                guashaToggle
                  ? guashaInCart
                    ? "rgb(119, 221, 119, 0.6)"
                    : microneedleInCart | chemicalPeelInCart | saltCaveInCart
                    ? "rgb(211, 211, 211)"
                    : "rgba(0, 129, 177, 0.4)"
                  : guashaInCart
                  ? "rgb(119, 221, 119, 0.6)"
                  : microneedleInCart | chemicalPeelInCart | saltCaveInCart
                  ? "rgb(211, 211, 211)"
                  : "rgba(0, 129, 177, 0.3)"
              }
              transform={
                !props.currentScreenSize
                  ? props.initialScreenSize >= 360
                    ? "grow-20"
                    : "grow-10"
                  : props.currentScreenSize >= 360
                  ? "grow-20"
                  : "grow-10"
              }
              icon={faSquare}
            />
            {checkMark()}
            <FontAwesomeIcon
              className="small_screen_card_description_plus"
              style={{ display: guashaInCart ? "none" : "block" }}
              color={
                microneedleInCart | chemicalPeelInCart | saltCaveInCart
                  ? "rgb(151, 151, 151)"
                  : "rgb(0, 129, 177)"
              }
              icon={faPlus}
            />
          </span>
        )}
      </PlusBounce>
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
          <p className="big_screen_price">$30</p>
        </div>
        <div className="big_screen_duration_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faClock}
          />
          <p className="big_screen_duration">10 minutes</p>
        </div>
      </div>
    );
  };

  const smallScreenBottomWrapperRender = () => {
    return (
      <div
        className="card_bottom_wrapper"
        style={{
          color: guashaToggle ? "rgb(0, 104, 152)" : "rgb(0, 129, 177)",
          transition: "ease all 0.5s",
        }}
      >
        <p className="card_toggler" onClick={handleToggle}>
          {guashaToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
        </p>
        <span className="card_bottom_spacer" />
        {addOnBounce()}
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

  const renderAddOnButton = () => {
    if (guashaInCart) {
      return (
        <>
          {checkMark()}
          <p className="big_screen_in_cart">IN CART</p>
        </>
      );
    } else {
      return (
        <>
          <FontAwesomeIcon
            className="big_screen_card_description_suitcase"
            icon={faPlus}
          />
          <p className="big_screen_card_add_on_button">ADD TO FACIAL</p>
        </>
      );
    }
  };

  return (
    <InView threshold={0.2} triggerOnce={true}>
      {({ inView, ref }) => (
        <div
          className="guasha_wrapping"
          ref={ref}
          style={{ display: props.nanoNeedlingGuashaRendered }}
        >
          {inView ? (
            <Spring
              from={{ position: "relative", opacity: 0 }}
              to={{ position: "relative", opacity: 1 }}
              config={{ duration: 1000 }}
            >
              {(styleprops) => (
                <section className="card" style={styleprops}>
                  <div
                    className="card_image"
                    style={{
                      backgroundColor: guashaToggle
                        ? "rgba(0, 129, 177, 0.2)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: guashaToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <Spring
                      from={{ x: 300, fill: "#fff" }}
                      to={{ x: 0, fill: "#000" }}
                      config={{ duration: 2500 }}
                    >
                      {(styles) => (
                        <>
                          <div
                            className="big_screen_book_now_wrapper"
                            onClick={() => addToCart()}
                            style={{
                              background: bookNowButtonHovered
                                ? guashaInCart
                                  ? "rgba(69, 171, 69, 0.6)"
                                  : microneedleInCart |
                                    chemicalPeelInCart |
                                    saltCaveInCart
                                  ? "rgb(201, 201, 201)"
                                  : "rgb(0, 129, 177)"
                                : guashaInCart
                                ? "rgba(119, 221, 119, 0.6)"
                                : microneedleInCart |
                                  chemicalPeelInCart |
                                  saltCaveInCart
                                ? "rgb(201, 201, 201)"
                                : "transparent",
                              border: bookNowButtonHovered
                                ? guashaInCart
                                  ? "1px solid rgb(69, 171, 69, 0.8)"
                                  : microneedleInCart |
                                    chemicalPeelInCart |
                                    saltCaveInCart
                                  ? "1px solid transparent"
                                  : "1px solid rgb(0, 129, 177)"
                                : guashaInCart
                                ? "1px solid rgb(69, 171, 69, 0.8)"
                                : microneedleInCart |
                                  chemicalPeelInCart |
                                  saltCaveInCart
                                ? "1px solid transparent"
                                : "1px solid rgb(0, 129, 177)",
                              color: bookNowButtonHovered
                                ? guashaInCart
                                  ? "rgb(0, 0, 0)"
                                  : microneedleInCart |
                                    chemicalPeelInCart |
                                    saltCaveInCart
                                  ? "rgb(141, 141, 141)"
                                  : "rgb(255, 255, 255)"
                                : guashaInCart
                                ? "rgb(0, 0, 0)"
                                : microneedleInCart |
                                  chemicalPeelInCart |
                                  saltCaveInCart
                                ? "rgb(141, 141, 141)"
                                : "rgb(0, 129, 177)",
                              cursor:
                                microneedleInCart |
                                chemicalPeelInCart |
                                saltCaveInCart
                                  ? "auto"
                                  : "pointer",
                              transition: "all 0.5s ease",
                            }}
                            onMouseEnter={() =>
                              changeBookNowButtonHovered(true)
                            }
                            onMouseLeave={() =>
                              changeBookNowButtonHovered(false)
                            }
                          >
                            {renderAddOnButton()}
                          </div>
                          <svg
                            width="100%"
                            height="15rem"
                            viewBox="0 0 56.356 56.356"
                            className="card_svg"
                          >
                            <circle
                              cx="28"
                              cy="28"
                              r={
                                props.currentScreenSize === ""
                                  ? props.initialScreenSize >= 1200
                                    ? "22.25"
                                    : "26"
                                  : props.currentScreenSize >= 1200
                                  ? "22.25"
                                  : "26"
                              }
                              stroke={
                                guashaToggle
                                  ? "rgb(25, 154, 202)"
                                  : "rgba(191, 191, 191)"
                              }
                              strokeWidth="0.5"
                              fill="white"
                            />
                            <g transform="translate(12 11)">
                              <animated.path
                                className="guasha_icon_path"
                                stroke="#000"
                                strokeDasharray="300"
                                strokeDashoffset={`${styles.x}`}
                                fill={`${styles.fill}`}
                                strokeWidth="0.6"
                                d="M42.43 55.03c-.1-.064-.155-.222-.446-1.3-.161-.596-.332-1.215-.38-1.377l-.085-.294-.41-.218-1.763-.933c-3.665-1.94-5.343-3.207-6.566-4.964-.593-.85-1.114-2.135-1.242-3.063a7.075 7.075 0 00-.056-.346 14.335 14.335 0 01-.05-.967c-.025-.857.042-1.709.198-2.497.034-.172.054-.313.044-.313-.01 0-.27.219-.58.486-1.03.891-1.902 1.337-3.059 1.567-.73.144-2.22.075-2.294-.107-.014-.036.02-.109.076-.163.094-.09.175-.1.96-.13 1.116-.04 1.665-.164 2.495-.56.977-.466 1.642-1.009 3.231-2.635 2.84-2.908 3.735-3.982 4.414-5.299.688-1.333.941-2.488 1.347-6.127.554-4.974.502-4.583.614-4.583.068 0 .073.084.043.749-.018.411-.063 1.525-.101 2.476-.103 2.564-.15 3.223-.316 4.353-.337 2.307-1.219 4.115-3.006 6.17-.716.821-1.328 1.447-2.527 2.584l-1.075 1.02.045.203c.052.233.04 3.225-.013 3.307-.02.031-.01.049.024.041.04-.009.08.122.123.402.337 2.203 1.416 3.94 3.272 5.273 1.08.776 2.589 1.674 5.682 3.383l.234.13-.034-.155c-.057-.263-.915-2.7-1.178-3.35-.362-.894-.558-1.49-.71-2.158-.125-.55-.134-.66-.134-1.672 0-.943.014-1.142.107-1.546.145-.636.298-1.066.69-1.948.505-1.131 1.008-2.641 1.008-3.021 0-.049-.13-.006-.47.155-.821.389-1.448.536-2.124.5-.46-.025-.703-.114-.945-.342-.209-.198-.287-.411-.283-.777.005-.494.24-1.078.725-1.795.486-.72.888-1.635 1.143-2.6.064-.243.215-.95.335-1.57.432-2.24.72-2.995 1.42-3.737.754-.798 2.127-1.33 2.956-1.146.862.193 1.533.803 1.828 1.664.098.287.116.425.112.893-.004.467-.024.61-.133.92-.217.628-.407.865-.742.927-.152.029-.157.025-.156-.126 0-.132.031-.279.163-.777.162-.607.23-1.052.197-1.284-.02-.143-.04-.3-.045-.352-.014-.139-.446-.74-.646-.9a2.756 2.756 0 00-.442-.264c-.23-.109-.322-.125-.699-.123-.395 0-.466.016-.804.168-1.221.548-1.799 1.358-2.178 3.054a53.83 53.83 0 00-.296 1.474c-.3 1.603-.51 2.279-.989 3.179-.176.33-.445.765-.598.967-.432.57-.665 1.045-.692 1.41-.022.285-.015.313.115.45.336.352 1.263.243 2.345-.277a6.297 6.297 0 002.256-1.82 4.83 4.83 0 01.49-.548l.158-.127.043.19c.055.242-.056.513-.424 1.04-.236.338-.82.938-1.142 1.175-.11.081-.13.137-.158.463-.06.685-.234 1.359-.632 2.444-.125.342-.3.829-.39 1.083-.655 1.875-.718 3.37-.218 5.241.174.649.365 1.189 1.014 2.861.137.352.237.67.223.705-.014.035-.008.054.015.04.093-.055.698 2.118 1.026 3.682.248 1.186.265 1.592.06 1.462zM31.81 42.224c.06-.073.058-.075-.018-.017-.047.034-.085.07-.085.08 0 .038.04.014.103-.063zm13.404-12.898c.06-.073.058-.075-.018-.017-.047.034-.085.07-.085.08 0 .038.04.014.103-.063zm.355-.334c.048-.05.077-.092.064-.092a.376.376 0 00-.112.092c-.048.05-.076.092-.063.092a.376.376 0 00.111-.092zm-2.242-2.69c0-.01-.037-.045-.084-.08-.076-.057-.078-.055-.018.018.063.076.102.1.102.063zm3.65 27.254c-.552-1.175-1.239-3.26-1.453-4.41-.175-.934-.146-1.94.077-2.71.135-.467.325-.91.445-1.04.056-.061.076-.097.043-.08-.071.04.19-.407.46-.787.255-.359.802-1.028 1.477-1.81.993-1.146 1.466-1.85 2.137-3.178.25-.494.488-.934.53-.979.086-.092.301-.109.3-.023-.007.338-.364 1.381-.675 1.97-.338.641-1.376 2.034-1.945 2.614-.131.133-.221.242-.201.242.02 0-.06.108-.177.241-.47.53-1.433 1.909-1.55 2.219-.01.03-.076.004-.158-.064l-.139-.113.127.13.128.131-.093.202c-.213.458-.3 1.004-.3 1.883 0 1.222.192 2.175.86 4.285.304.961.391 1.446.273 1.516-.024.014-.098-.094-.166-.24zm-.172-8.89c.06-.073.058-.075-.018-.017-.047.034-.085.07-.085.08 0 .038.04.014.103-.063zm.307-.288c.048-.05.077-.092.063-.092a.376.376 0 00-.11.092c-.049.05-.077.092-.064.092a.376.376 0 00.111-.092zm.362-.345c.062-.064.102-.116.089-.116a.564.564 0 00-.137.116c-.063.063-.103.115-.09.115a.564.564 0 00.138-.115zM5.398 52.91c-.033-.02.313-.158.82-.327 3.927-1.312 5.53-1.964 7.12-2.898.973-.571 1.618-1.058 2.38-1.796 1.78-1.72 2.733-3.822 3.025-6.666.031-.307.056-1.228.054-2.068l-.003-1.515-.378-.272c-1.399-1.007-2.82-2.397-3.618-3.539-.474-.679-1.262-2.129-1.11-2.044.033.018.025-.006-.017-.056-.042-.048-.133-.244-.202-.434-.34-.943-.559-1.957-.689-3.201-.045-.43-.085-.788-.09-.794a.676.676 0 00-.175.035c-.091.025-.33.058-.531.074-.617.047-.912-.145-1.034-.674-.02-.089-.04-.928-.044-1.866-.006-1.374-.024-1.798-.09-2.188a10.777 10.777 0 00-.562-1.993c-.372-.946-.215-1.324.55-1.324.148 0 .268-.018.268-.04s-.034-.116-.074-.21c-.163-.37-.415-1.328-.512-1.938-.133-.839-.142-2.212-.022-3.086.528-3.812 2.721-7.416 5.887-9.672 2.254-1.606 5.088-2.524 7.594-2.459.515.014.637.032.844.126l.24.11-.592.06c-3.258.331-5.743 1.297-8.158 3.17-.905.703-1.996 1.875-2.772 2.98-.204.289-.407.564-.45.611-.045.047-.074.094-.066.105.008.01-.148.325-.345.698a13.59 13.59 0 00-.99 2.282c-.6 1.772-.859 3.664-.738 5.405.056.813.176 1.678.25 1.813.022.039.135.095.253.125.117.03.265.095.33.145.173.136.07.196-.406.238-.479.042-.583.086-.652.275-.062.17-.026.385.235 1.381.405 1.552.504 2.121.504 2.903 0 .392-.018 1.004-.04 1.358-.035.58-.03.662.05.807.122.224.363.334.655.3.332-.04.36-.057.45-.283.107-.267.074-.96-.102-2.136-.312-2.097-.422-3.612-.339-4.667.034-.425.042-.451.138-.438.22.03.296.65.708 5.75.266 3.307.384 4.272.634 5.228.196.747.428 1.302.812 1.938.128.214.22.388.204.388-.016 0 .025.057.091.127.067.07.248.293.404.495.805 1.047 2.13 2.405 3.207 3.288 1.465 1.202 2.907 2.075 5.193 3.145.695.326 1.34.656 1.435.735.172.144.223.272.108.272-.114 0-1.502-.37-1.82-.485-.613-.223-2.468-1.264-3.78-2.122-.13-.086-.244-.15-.25-.143-.008.007.021.188.064.402.128.635.112 2.577-.028 3.5a18.579 18.579 0 01-1.17 4.26c-.428 1.037-1.176 1.964-2.308 2.86-.64.506-.894.666-.961.603-.043-.04-.05-.036-.027.02.076.191-2.083 1.3-3.801 1.951-2.31.876-5.203 1.59-5.562 1.371zm8.953-20.526c0-.01-.038-.046-.085-.08-.076-.058-.078-.056-.018.017.063.077.103.101.103.063zm-.241-.23c0-.01-.038-.046-.085-.08-.076-.058-.078-.056-.018.017.063.076.103.1.103.063zm-1.52-5.234c.238-.228.422-.415.409-.415a6.03 6.03 0 00-.456.415c-.238.228-.421.414-.408.414.013 0 .218-.186.456-.414zm-1.132-14.432a3.35 3.35 0 00-.253-.242l-.253-.229.239.242c.222.225.267.263.267.229zm.199-2.094c.06-.074.058-.075-.018-.018-.08.06-.106.098-.067.098.01 0 .048-.036.085-.08zM42.27 46.88a6.532 6.532 0 01-.106-.764c-.086-.964.066-1.773.46-2.446.236-.403.38-.567 1.176-1.334 1.13-1.09 2.648-2.257 2.789-2.145.036.03.066.07.066.091s-.451.41-1.003.863c-.868.715-1.433 1.248-1.95 1.843-.078.09-.155.139-.188.12-.034-.02-.043-.014-.023.018.018.028-.055.174-.162.324-.265.371-.503.88-.606 1.297-.066.267-.086.558-.09 1.282-.004.87-.01.94-.098 1.002-.153.107-.205.077-.265-.152zm5.348-7.824c-.049-.056-.05-.148-.006-.449.059-.4.064-.802.013-1.012-.029-.123-.033-.12-.121.092-.215.515-.674.926-1.247 1.113-.68.224-1.828.248-2.375.05-.39-.14-.76-.495-.864-.83-.19-.61-.131-1.587.14-2.371l.16-.46.007 1.013c.01 1.493.117 1.933.522 2.125.154.073.298.086 1 .086.707 0 .875-.015 1.229-.107.225-.059.479-.148.563-.198.085-.05.276-.265.424-.478.148-.213.324-.428.39-.479.12-.089.12-.097.067-.389-.07-.384-.155-.468-.54-.532-.677-.113-.927-.039-1.6.474-.62.474-.843.582-1.21.587-.247.003-.291-.012-.426-.141-.145-.138-.15-.16-.15-.527 0-.358.012-.408.208-.785.22-.426.683-.948 1.009-1.14.15-.09.16-.106.079-.134-.05-.018-.395-.057-.767-.088-1.72-.142-2.433-.431-2.78-1.13-.195-.395-.173-.687.072-.938.097-.1.467-.31.467-.266 0 .011-.054.13-.12.266-.067.136-.12.304-.121.375-.001.29.282.69.602.85.243.122.6.192 1.23.242.331.027.928.082 1.326.122.608.062.797.065 1.188.018.494-.06 1.043-.027 1.945.118.803.129 1.027.311 1.678 1.358.544.875.689 1.18.842 1.77.114.44.12.511.066.704-.033.118-.07.225-.084.238-.066.063-.33-.395-.775-1.348-.906-1.941-1.11-2.151-2.233-2.307-1.087-.151-1.362-.138-1.989.094-.188.07-.246.074-.325.027-.089-.053-.112-.026-.337.392-.133.247-.34.615-.459.818-.347.59-.395.911-.144.972.16.038.434-.12.916-.532.675-.577 1.213-.736 2.042-.602.692.111.93.495 1.046 1.682.042.438-.044.973-.224 1.385-.15.345-.221.402-.334.272zm-6.164-6.137c.06-.073.058-.074-.018-.017-.047.035-.085.071-.085.08 0 .039.04.014.103-.063zm9.162 4.768a2.62 2.62 0 01-.078-.334c-.05-.328-.16-1.703-.138-1.739.04-.064.193-.035.276.053.107.113.206.66.25 1.377.033.55.03.569-.078.68-.145.147-.174.143-.232-.037zm-25.338-.797c-1.07-.203-1.815-.656-2.492-1.515-.083-.105-.105-.116.508.241.605.352 1.115.583 1.52.688.68.177 2.332.032 2.951-.26.114-.052.412-.264.664-.47.604-.492 1.162-.916 1.207-.916.204 0-.12.602-.647 1.203-.493.561-1.091.895-1.854 1.036-.44.08-1.415.077-1.857-.006zm24.704-1.16c-.128-.061-.3-.264-.7-.825-.667-.937-.923-1.242-1.113-1.328a5.514 5.514 0 00-.652-.187c-.435-.103-.63-.12-1.489-.136-.724-.013-1.143-.044-1.566-.116-.576-.097-2.11-.456-2.34-.548-.14-.055-.315-.18-.285-.204.236-.18.188-.18 1.357-.006.417.063.786.113.82.113.034 0-.069-.074-.228-.165-.567-.324-.74-.568-.782-1.105-.044-.547.085-.71.555-.71.294 0 .37.02 1.939.515 2.538.8 3.07 1.075 3.648 1.88.33.46 1.23 1.963 1.238 2.065a.202.202 0 01-.094.175c-.095.062-.116.044-.407-.35-.446-.605-.439-.557.031.21.261.425.398.802.291.802a.88.88 0 01-.223-.08zm-.658-1.728c-.33-.515-.582-.878-.722-1.039-.366-.42-.85-.637-3.16-1.416-1.632-.55-1.972-.617-2.145-.422l-.09.102.103-.084c.103-.082.104-.081.163.153.07.277.23.476.485.6.1.05.505.201.898.338.393.136.849.302 1.014.369.201.081.463.137.796.17 1.248.124 2.04.465 2.499 1.077.144.191.247.29.159.152zM43.672 30.8c.06-.073.058-.074-.019-.017-.046.035-.084.071-.084.08 0 .038.04.014.103-.063zm-18.605 4.21c-.272-.033-.509-.074-.526-.09-.063-.06.094-.164.335-.22.317-.072 1.335-.07 2.332.006.956.072.998.085.745.22-.18.097-.263.105-1.292.124-.739.013-1.262 0-1.594-.04zm-2.534-.894c-.158-.069-.175-.09-.12-.153.034-.04.55-.246 1.147-.46 1.269-.451 1.536-.491 2.169-.323.466.124.633.121 1.052-.019.47-.157.717-.147 1.857.071.534.103 1.102.199 1.262.215.276.026.36.068.361.178 0 .027-.15.097-.334.154l-.336.105-.472-.082a7.43 7.43 0 00-1.22-.085c-.686-.002-.78.008-1.163.124-.512.155-.685.157-1.165.01-.593-.18-.866-.152-1.756.18-.516.194-.962.223-1.282.085zm3.149-3.028a4.525 4.525 0 00-.868-.186c-.462-.035-.715-.122-.909-.313-.192-.19-.364-.592-.285-.668.04-.038.086-.017.178.08.263.28.41.327 1.01.327.489 0 .58.013.832.122.245.105.275.131.225.196-.049.062-.047.064.01.016.038-.032.194-.057.36-.057.234 0 .528-.072 1.422-.345.62-.19 1.138-.335 1.15-.323.052.049-.164.405-.335.552-.174.15-.455.256-.872.326a1.458 1.458 0 00-.41.169c-.516.313-.783.331-1.508.104zm13.405-4.22a.789.789 0 01-.137-.062c-.05-.047.118-.224.376-.397.47-.315.604-.675.744-2 .04-.38.095-1.044.121-1.474.052-.854.091-1.032.484-2.188.163-.483.242-.792.242-.954 0-.343-.075-.382-.734-.382-.602 0-.62-.018-.332-.328l.187-.202.572-.023.572-.023.07-.36c.077-.404.039-.775-.244-2.381-1.112-6.301-3.125-10.386-6.043-12.261a7.63 7.63 0 00-2.799-1.081c-.78-.138-2.185-.12-3.49.046-.867.11-1.062.123-1.222.077l-.19-.054.233-.143c.544-.332 1.372-.628 2.114-.756.525-.09 1.67-.102 2.217-.022 1.385.204 2.875.794 4.07 1.613.45.308 1.383 1.096 1.79 1.511 1.694 1.727 2.935 4.114 3.54 6.809.316 1.406.429 2.44.56 5.167.049.984.046 1.14-.021 1.336-.091.266-.195.838-.297 1.641-.04.325-.119.698-.174.83-.178.431-.367 1.208-.504 2.075-.088.556-.153.843-.186.824-.03-.017-.029-.002.004.037.065.08-.109 1.362-.269 1.983-.132.514-.367.957-.576 1.09-.176.11-.466.133-.678.052zm2.318-10.947c.06-.073.059-.075-.018-.017-.046.034-.084.07-.084.08 0 .038.04.014.102-.063zM19.931 24.82c-.02-.02-.036-.168-.036-.331v-.297l-.156.091-.446.26c-.216.126-.333.166-.459.156-.092-.007-.167-.035-.165-.06.002-.025.117-.134.255-.242.288-.224.252-.237-.282-.103-.658.164-.79.094-.449-.24.2-.195.188-.203-.15-.105-.247.071-1.068.094-1.17.032-.039-.023.038-.098.22-.218l.28-.183h-.233c-.19 0-.256-.024-.366-.129-.16-.153-.14-.172.318-.31.445-.133.793-.12 1.227.046.705.27.894.293 2.388.297l1.366.004.093.109c.05.06.092.145.092.19 0 .048-.199.237-.477.455l-.477.372-.034-.264-.035-.263-.138.262c-.156.293-.292.406-.49.406-.119 0-.133-.017-.133-.154 0-.084-.016-.168-.034-.186-.02-.018-.133.074-.254.204-.12.13-.235.22-.255.202zm12.238-.046a3 3 0 01-.202-.231c-.07-.086-.145-.157-.168-.157-.023 0-.043.083-.043.184 0 .178-.005.184-.162.184-.202 0-.38-.16-.494-.444-.096-.24-.161-.195-.163.112v.198l-.382-.283c-.56-.414-.607-.47-.552-.652.04-.131.071-.154.26-.185.119-.02.736-.031 1.373-.025 1.304.012 1.543-.018 2.214-.273.394-.15.46-.161.795-.14.207.012.486.066.643.123.246.09.272.111.228.19-.077.137-.328.241-.513.212a.53.53 0 00-.16-.012c0 .007.12.092.267.189.19.125.25.187.205.214-.104.063-.864.043-1.148-.03a6.116 6.116 0 00-.283-.068c-.01 0 .062.092.16.206.278.325.198.359-.486.206-.23-.051-.438-.087-.461-.08-.023.007.067.092.2.187.297.211.317.31.062.308-.135 0-.282-.064-.588-.252-.224-.138-.416-.242-.426-.233a1.35 1.35 0 00-.017.297c.002.303-.04.369-.159.255zm-15.456-2.577c0-.08.16-.303.295-.411.197-.158.62-.362.959-.463.406-.12 1.526-.15 1.929-.05.343.084.741.249.892.37.094.076.094.077-.025.053-.738-.147-1.557-.27-1.934-.291-.558-.032-.753.02-1.29.346-.504.305-.826.479-.826.446zm17.716-.2a90.86 90.86 0 01-.624-.36 2.506 2.506 0 00-.431-.2c-.274-.084-1.059-.028-1.928.138-.396.075-.728.13-.737.122-.037-.036.387-.264.67-.361.273-.094.39-.105 1.124-.104.77 0 .843.009 1.2.128.47.157.867.403 1.03.638.067.098.113.188.101.2-.012.01-.194-.08-.405-.2zm-12.733-2.414c-.226-.29-.516-.826-.574-1.06-.03-.116-.02-.126.116-.126.112 0 .204.054.388.23.252.24.728.934.728 1.06 0 .116-.102.184-.275.184-.14 0-.187-.036-.383-.288zm8.237.233c-.107-.103-.059-.243.229-.662.346-.506.619-.757.823-.757.08 0 .144.01.144.022 0 .087-.243.61-.403.865-.27.43-.429.587-.597.587-.076 0-.164-.025-.196-.055zm-13.642-.023c-.168-.031-.139-.18.043-.215.23-.044.568-.035.672.019.125.064.118.165-.015.2-.119.03-.527.028-.7-.005zm18.893-.007c-.2-.13.146-.27.557-.225.255.027.356.097.266.183-.072.069-.728.102-.823.042zm-13.996-.272c-.105-.108-.74-.832-.95-1.085-.05-.06-.054-.096-.016-.132.064-.061.724.315.875.498.093.112.257.486.321.729.042.16-.07.155-.23-.01zm9.604.056c0-.159.21-.652.33-.776.137-.143.74-.535.82-.535.15 0 .054.154-.454.737-.528.605-.696.743-.696.574zm-13.43-.274c-.25-.07-.505-.199-.505-.253 0-.024.04-.064.09-.09.143-.073.75.129.769.256.019.127-.106.158-.354.087zm17.197.026c-.036-.02-.057-.077-.047-.124.012-.062.114-.117.353-.19.334-.103.337-.103.43-.013.094.09.093.09-.167.202-.329.14-.487.174-.57.125zm-14.36-.23a10.523 10.523 0 01-.498-.417c-.208-.187-.239-.23-.144-.206.416.11.89.45.944.677.041.172-.024.16-.301-.053zm11.508.073c0-.153.305-.426.656-.586.164-.075.316-.136.337-.136.057 0-.397.44-.672.65-.27.208-.321.22-.321.072zm-13.374-.014c-.4-.117-.802-.417-.802-.597 0-.079.043-.064.712.24.518.237.638.341.466.404-.096.036-.094.036-.376-.047zm1.006-.055a8.948 8.948 0 01-.578-.348l-.338-.22.32.017c.37.02.645.167.79.422.132.236.078.272-.194.13zm13.261.027c.11-.345.489-.588.917-.588h.273l-.437.274c-.429.27-.697.417-.756.417-.016 0-.015-.046.003-.103zm.893.059c-.036-.021-.054-.067-.04-.101.03-.075.898-.491 1.106-.531l.146-.028-.074.136c-.156.29-.931.646-1.138.524zm-21.675-.724c-.02-.046-.048-.292-.06-.546-.044-.83.257-1.884.878-3.082.443-.853.573-1.072.995-1.676.76-1.087 1.835-2.2 2.672-2.766.88-.596 2.155-1.086 3.486-1.342 1.123-.215 1.535-.252 2.756-.25 1.189.003 1.617.047 2.387.247.406.105.945.354.977.452.01.033-.009.048-.045.035-.237-.083-2.523-.134-3.391-.075-2.277.153-3.958.614-5.309 1.455-1.248.778-2.158 1.746-3.077 3.272-.153.253-.287.47-.298.48-.011.012-.113-.06-.225-.16l-.204-.18.202.202.201.203-.173.326c-.095.18-.505 1.02-.912 1.867-.407.848-.759 1.56-.782 1.581-.024.023-.058.004-.078-.043zm13.717-9.06a.516.516 0 00-.109-.103l-.108-.088.092.104c.086.097.125.124.125.087zm13.335 8.643a20.648 20.648 0 00-.7-2.56c-.608-1.701-1.404-2.997-2.437-3.968-1.318-1.238-2.94-1.892-5.087-2.052a34.221 34.221 0 00-1.784-.05c-.65-.003-1.235-.02-1.3-.037l-.118-.032.152-.104c.235-.16.625-.31 1.049-.405.535-.12 2.127-.12 2.893-.001 1.854.289 3.397.89 4.266 1.66 1.863 1.652 3.582 5.191 3.46 7.122-.025.386-.156.829-.256.86-.03.01-.087-.168-.138-.433zm-7.573-9.087c.048-.05.076-.092.063-.092a.376.376 0 00-.111.092c-.048.05-.077.092-.064.092a.376.376 0 00.112-.092zm-16.225.553c.526-.705 3.073-1.766 5.252-2.187a10.1 10.1 0 012.48-.194c1.196.04 2.021.229 2.304.526.095.1.099.114.024.088-.111-.038-1.09-.202-1.368-.228a.698.698 0 01-.287-.084c-.067-.052-.075-.052-.043 0 .033.05-.04.056-.412.03-.756-.052-2.1.088-3.128.328-1.198.279-2.433.726-3.997 1.45-.488.225-.897.41-.908.41-.01 0 .026-.063.083-.138zm21.059-.241c-.12-.083-.385-.28-.588-.438-.86-.668-1.82-1.033-3.21-1.218-.685-.092-2.765-.076-3.466.026-.438.063-.578.068-.688.025-.176-.07-.172-.105.03-.252.419-.305 1.357-.481 2.567-.482 2.128 0 3.908.542 4.909 1.497.345.33.753.907.686.972-.012.011-.12-.047-.24-.13zm-3.261-1.82c.06-.074.058-.076-.018-.018-.047.034-.085.07-.085.08 0 .038.04.014.103-.063zM19.297 6.352c.084-.209.863-.503 1.706-.645.607-.102 1.884-.142 2.435-.077.552.066 1.08.215 1.259.356l.139.11-.217-.034c-.12-.018-.911-.033-1.76-.033-1.635.001-2.134.048-3.163.3-.445.108-.433.107-.4.023zm8.517.035c-.102-.02-.104-.028-.04-.148.04-.07.147-.193.24-.27.523-.44 1.127-.62 3.179-.952l.99-.16.455.136c.465.139.527.177.583.351.047.145-.068.167-.96.177-.958.012-1.582.14-3.462.71-.585.179-.734.202-.985.156zm-6.618-1.47c-.324-.029-.454-.064-.405-.11.112-.105.681-.332 1.041-.415.9-.206 2.243-.049 2.544.297.095.11.033.137-.4.171-.513.041-2.5.081-2.78.057zm6.894-.384c0-.025.025-.096.055-.159.043-.09.157-.148.542-.277 1.075-.357 1.719-.488 2.393-.487.347 0 .507.023.663.09.244.106.264.185.048.186-.306.001-1.416.187-1.964.33l-.965.25c-.43.111-.772.14-.772.067z"
                              />
                            </g>
                          </svg>
                        </>
                      )}
                    </Spring>

                    <div
                      className="card_border_right"
                      style={{
                        borderRight: guashaToggle
                          ? "1px solid rgba(25, 154, 202, 0.4)"
                          : "1px solid rgbA(211, 211, 211)",
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: guashaToggle
                        ? "rgba(222, 222, 222, 0.4)"
                        : "rgba(235, 235, 235, 0.1)",
                      boxShadow: guashaToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <h2 style={{ fontWeight: 400 }}>GUA SHA MASSAGE</h2>
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

export default GuaSha;
