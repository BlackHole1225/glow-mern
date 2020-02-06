import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spring, animated, Keyframes } from "react-spring/renderprops";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faSquare,
  faClock,
  faTag
} from "@fortawesome/free-solid-svg-icons";
import { InView } from "react-intersection-observer";
import ACTION_CBD_TOGGLE from "../../../actions/Treatments/CBD/ACTION_CBD_TOGGLE";
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
import ACTION_CBD_IN_CART from "../../../actions/InCart/Treatments/CBD/ACTION_CBD_IN_CART";
import ACTION_CBD_NOT_IN_CART from "../../../actions/InCart/Treatments/CBD/ACTION_CBD_NOT_IN_CART";
import ACTION_NAVBAR_IS_VISIBLE from "../../../actions/NavbarIsVisible/ACTION_NAVBAR_IS_VISIBLE";
import ACTION_INCREMENT_COUNTER from "../../../actions/Counter/ACTION_INCREMENT_COUNTER";
import ACTION_DECREMENT_COUNTER from "../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import ACTION_AVAILABILITY_RESET from "../../../actions/AvailabilityClicked/ACTION_AVAILABILITY_RESET";
import ACTION_SELECTED_DAY_RESET from "../../../actions/SelectedDay/ACTION_SELECTED_DAY_RESET";
import ACTION_SELECT_TIME_NOT_ACTIVE from "../../../actions/SelectTimeActive/ACTION_SELECT_TIME_NOT_ACTIVE";
import { toast } from "react-toastify";
import CBDNotification from "./CBDNotification";
import CBDRemovedNotification from "./CBDRemovedNotification";
import FacialInCartErrorNotification from "../FacialInCartErrorNotification";
import "./CBD.css";

const CBD = props => {
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
  const [bookNowButtonHovered, changeBookNowButtonHovered] = useState(false);

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!cbdToggle) {
      dispatch(ACTION_CBD_TOGGLE());
      if (calmToggle) {
        dispatch(ACTION_CALM_TOGGLE_RESET());
      }
      if (clarifyToggle) {
        dispatch(ACTION_CLARIFY_TOGGLE_RESET());
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
      if (microneedleToggle) {
        dispatch(ACTION_MICRONEEDLE_TOGGLE_RESET());
      }
    } else {
      dispatch(ACTION_CBD_TOGGLE_RESET());
    }
  };

  const cardDescriptionHandler = () => {
    if (cbdToggle) {
      return (
        <>
          <div
            className="card_description_paragraph_toggle"
            style={{ marginRight: "6.35rem" }}
          >
            <div className="card_description_icon_wrapper_container">
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faClock}
                />
                <p className="card_description_paragraph_title">Duration</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>1 hour</p>
              </div>
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faTag}
                />
                <p className="card_description_paragraph_title">Price</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>$120</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <p className="card_description_paragraph">
          Anti-inflammatory, anti-aging, anti-acne, antioxidant! This new
          CBD-enfused facial is healing for everyone!
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
            width={
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 1800
                  ? "2rem"
                  : props.initialScreenSize >= 1600
                  ? "1rem"
                  : props.initialScreenSize >= 1200
                  ? "0.5rem"
                  : "100%"
                : props.currentScreenSize >= 1800
                ? "2rem"
                : props.currentScreenSize >= 1600
                ? "1rem"
                : props.currentScreenSize >= 1200
                ? "0.5rem"
                : "100%"
            }
            height={
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 1800
                  ? "2rem"
                  : props.initialScreenSize >= 1600
                  ? "1.3rem"
                  : props.initialScreenSize >= 1200
                  ? "0.5rem"
                  : "2rem"
                : props.currentScreenSize >= 1800
                ? "2rem"
                : props.currentScreenSize >= 1600
                ? "1.3rem"
                : props.currentScreenSize >= 1200
                ? "0.5rem"
                : "2rem"
            }
            style={{
              marginTop:
                props.currentScreenSize === ""
                  ? props.initialScreenSize >= 1800
                    ? "-0.2rem"
                    : props.initialScreenSize >= 1600
                    ? "-0.2rem"
                    : props.initialScreenSize >= 1200
                    ? "-0.5rem"
                    : "-0.5rem"
                  : props.currentScreenSize >= 1800
                  ? "-0.2rem"
                  : props.currentScreenSize >= 1600
                  ? "-0.2rem"
                  : props.currentScreenSize >= 1200
                  ? "-0.5rem"
                  : "-0.5rem",
              display: cbdInCart ? "block" : "none"
            }}
            viewBox="0 0 13.229 13.229"
          >
            <path
              d="M2.851 7.56l2.45 2.482 5.36-6.958"
              fill="none"
              stroke="#000"
              strokeDasharray="100"
              strokeDashoffset={
                cartClicked ? (cbdInCart ? `${styles.x}` : 0) : 0
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
      calmInCart |
      dermaplaningInCart |
      quickieInCart |
      clarifyInCart |
      chemicalPeelInCart |
      bacialInCart |
      microneedleInCart |
      rejuvenateInCart |
      quenchInCart |
      glowInCart
    ) {
      if (!toast.isActive(inCartToastId)) {
        toast.dismiss();
        toast(
          <FacialInCartErrorNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />,
          {
            className: "toast_error_container",
            toastId: inCartToastId
          }
        );
      }
    } else {
      if (cbdInCart) {
        toast.dismiss();
        dispatch(ACTION_CBD_NOT_IN_CART());
        dispatch(ACTION_DECREMENT_COUNTER());
        dispatch(ACTION_AVAILABILITY_RESET());
        dispatch(ACTION_SELECTED_DAY_RESET());
        dispatch(ACTION_SELECT_TIME_NOT_ACTIVE());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());
        toast(
          <CBDRemovedNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />,
          {
            className: "toast_removed_container"
          }
        );
      } else {
        toast.dismiss();
        dispatch(ACTION_CBD_IN_CART());
        dispatch(ACTION_INCREMENT_COUNTER());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());
        changeCartClicked(true);
        setTimeout(() => changeCartClicked(false), 200);
        toast(
          <CBDNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />
        );
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
              cbdToggle
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
                cbdToggle
                  ? cbdInCart
                    ? "rgba(119, 221, 119, 0.6)"
                    : calmInCart |
                      dermaplaningInCart |
                      quickieInCart |
                      clarifyInCart |
                      chemicalPeelInCart |
                      bacialInCart |
                      microneedleInCart |
                      rejuvenateInCart |
                      quenchInCart |
                      glowInCart
                    ? "rgba(211, 211, 211, 0.8"
                    : "rgba(255, 198, 207, 0.8)"
                  : cbdInCart
                  ? "rgb(119, 221, 119, 0.6)"
                  : calmInCart |
                    dermaplaningInCart |
                    quickieInCart |
                    clarifyInCart |
                    chemicalPeelInCart |
                    bacialInCart |
                    microneedleInCart |
                    rejuvenateInCart |
                    quenchInCart |
                    glowInCart
                  ? "rgba(211, 211, 211, 0.8"
                  : "rgba(255, 198, 207, 0.6)"
              }
              transform="grow-20"
              icon={faSquare}
            />
            {checkMark()}
            <FontAwesomeIcon
              style={{ display: cbdInCart ? "none" : "block" }}
              color={
                calmInCart |
                dermaplaningInCart |
                quickieInCart |
                clarifyInCart |
                chemicalPeelInCart |
                bacialInCart |
                microneedleInCart |
                rejuvenateInCart |
                quenchInCart |
                glowInCart
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
          <p className="big_screen_price">$120</p>
        </div>
        <div className="big_screen_duration_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faClock}
          />
          <p className="big_screen_duration">1 hour</p>
        </div>
      </div>
    );
  };

  const smallScreenBottomWrapperRender = () => {
    return (
      <div
        className="card_bottom_wrapper"
        style={{
          color: cbdToggle ? "rgb(155, 98, 107)" : "rgb(175, 118, 127)",
          transition: "ease all 0.5s"
        }}
      >
        <p className="card_toggler" onClick={handleToggle}>
          {cbdToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
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

  const bigScreenAddToCartButton = () => {
    if (cbdInCart) {
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
            icon={faSuitcase}
          />
          <p>BOOK NOW</p>
        </>
      );
    }
  };

  return (
    <InView threshold={0.2} triggerOnce={true}>
      {({ inView, ref }) => (
        <div
          className="cbd_wrapping"
          ref={ref}
          style={{ display: props.cbdMicroneedlingRendered }}
        >
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
                      backgroundColor: cbdToggle
                        ? "rgb(255, 198, 207)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: cbdToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s"
                    }}
                  >
                    <Spring
                      from={{ x: 300, fill: "#fff" }}
                      to={{ x: 0, fill: "rgba(119, 221, 119, 0.7)" }}
                      config={{ duration: 1200 }}
                    >
                      {styles => (
                        <>
                          <div
                            className="big_screen_book_now_wrapper"
                            onClick={() => addToCart()}
                            style={{
                              background: bookNowButtonHovered
                                ? cbdInCart
                                  ? "rgba(69, 171, 69, 0.6)"
                                  : calmInCart |
                                    dermaplaningInCart |
                                    quickieInCart |
                                    clarifyInCart |
                                    chemicalPeelInCart |
                                    bacialInCart |
                                    microneedleInCart |
                                    rejuvenateInCart |
                                    quenchInCart |
                                    glowInCart
                                  ? "rgb(201, 201, 201)"
                                  : "rgb(155, 98, 107)"
                                : cbdInCart
                                ? "rgba(119, 221, 119, 0.6)"
                                : calmInCart |
                                  dermaplaningInCart |
                                  quickieInCart |
                                  clarifyInCart |
                                  chemicalPeelInCart |
                                  bacialInCart |
                                  microneedleInCart |
                                  rejuvenateInCart |
                                  quenchInCart |
                                  glowInCart
                                ? "rgb(201, 201, 201)"
                                : "transparent",
                              border: bookNowButtonHovered
                                ? cbdInCart
                                  ? "1px solid rgb(69, 171, 69, 0.8)"
                                  : calmInCart |
                                    dermaplaningInCart |
                                    quickieInCart |
                                    clarifyInCart |
                                    chemicalPeelInCart |
                                    bacialInCart |
                                    microneedleInCart |
                                    rejuvenateInCart |
                                    quenchInCart |
                                    glowInCart
                                  ? "1px solid transparent"
                                  : "1px solid rgb(155, 98, 107)"
                                : cbdInCart
                                ? "1px solid rgb(69, 171, 69, 0.8)"
                                : calmInCart |
                                  dermaplaningInCart |
                                  quickieInCart |
                                  clarifyInCart |
                                  chemicalPeelInCart |
                                  bacialInCart |
                                  microneedleInCart |
                                  rejuvenateInCart |
                                  quenchInCart |
                                  glowInCart
                                ? "1px solid transparent"
                                : "1px solid rgb(155, 98, 107)",
                              color: bookNowButtonHovered
                                ? cbdInCart
                                  ? "rgb(0, 0, 0)"
                                  : calmInCart |
                                    dermaplaningInCart |
                                    quickieInCart |
                                    clarifyInCart |
                                    chemicalPeelInCart |
                                    bacialInCart |
                                    microneedleInCart |
                                    rejuvenateInCart |
                                    quenchInCart |
                                    glowInCart
                                  ? "rgb(141, 141, 141)"
                                  : "rgb(255, 255, 255)"
                                : cbdInCart
                                ? "rgb(0, 0, 0)"
                                : calmInCart |
                                  dermaplaningInCart |
                                  quickieInCart |
                                  clarifyInCart |
                                  chemicalPeelInCart |
                                  bacialInCart |
                                  microneedleInCart |
                                  rejuvenateInCart |
                                  quenchInCart |
                                  glowInCart
                                ? "rgb(141, 141, 141)"
                                : "rgb(155, 98, 107)",
                              cursor:
                                calmInCart |
                                dermaplaningInCart |
                                quickieInCart |
                                clarifyInCart |
                                chemicalPeelInCart |
                                bacialInCart |
                                microneedleInCart |
                                rejuvenateInCart |
                                quenchInCart |
                                glowInCart
                                  ? "auto"
                                  : "pointer",
                              transition: "all 0.5s ease"
                            }}
                            onMouseEnter={() =>
                              changeBookNowButtonHovered(true)
                            }
                            onMouseLeave={() =>
                              changeBookNowButtonHovered(false)
                            }
                          >
                            {bigScreenAddToCartButton()}
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
                                cbdToggle
                                  ? "rgb(235, 178, 187)"
                                  : "rgba(191, 191, 191)"
                              }
                              strokeWidth="0.5"
                              fill="white"
                            />
                            <animated.g
                              fill={`${styles.fill}`}
                              stroke="#000"
                              strokeWidth="0.8"
                              transform="translate(14, 13)"
                            >
                              <animated.path
                                strokeDasharray="300"
                                strokeDashoffset={`${styles.x}`}
                                className="cbd_icon_path"
                                d="M25.02 41.29c.025-1.363.065-2.802.088-3.2s.01-.72-.028-.72-.181.108-.317.24c-.367.359-.674.543-.96.576a.81.81 0 00-.387.153c-.073.067-.222.123-.33.123s-.212.039-.23.087-.136.088-.265.088c-.13 0-.255.048-.28.107-.024.06-.149.108-.277.108-.128 0-.277.049-.33.109a.28.28 0 01-.251.072c-.084-.02-.212.017-.284.084s-.308.138-.524.158-.437.068-.491.108c-.055.04-.317.098-.582.128-.266.03-.502.083-.526.119-.04.06-.282.082-.906.085-.128 0-.232.033-.232.07s-.123.07-.274.071c-.636.003-1.54.105-1.645.186-.086.066-.133.06-.19-.025-.06-.092-.105-.094-.245-.014-.134.077-.206.078-.333.005-.128-.074-.19-.07-.3.014-.104.08-.156.084-.2.017-.034-.05-.173-.086-.31-.08-.44.018-1.395-.082-1.497-.156a.383.383 0 00-.246-.05c-.08.012-.147-.01-.147-.05 0-.039.054-.07.12-.07.065 0 .131-.027.147-.06.04-.085.799-.565.894-.565.044 0 .128-.052.186-.117a.407.407 0 01.265-.117c.089 0 .183-.053.21-.117.026-.064.115-.117.197-.117a.392.392 0 00.254-.117c.057-.064.17-.117.25-.117s.264-.055.409-.122c.145-.067.303-.1.35-.074.047.027.085-.006.085-.072 0-.084.08-.122.258-.122.143 0 .32-.056.393-.124a.422.422 0 01.33-.089c.129.023.197-.002.197-.071 0-.07.103-.106.295-.106.162 0 .295-.032.295-.07s.227-.096.505-.125c.278-.03.524-.083.547-.117.023-.035.278-.088.568-.12.29-.03.547-.086.573-.124s.26-.078.52-.088c.416-.017.478-.04.51-.195.034-.166.009-.176-.455-.176-.401 0-.482-.021-.442-.117.04-.096-.043-.117-.463-.117s-.503-.02-.463-.117c.04-.095-.038-.117-.423-.117-.364 0-.472-.027-.472-.117 0-.086-.096-.117-.359-.117-.267 0-.385-.04-.464-.156a.4.4 0 00-.293-.157c-.343-.002-.58-.093-.533-.204.034-.083-.06-.107-.414-.107-.372 0-.448-.022-.409-.117.037-.089-.014-.117-.208-.117-.141 0-.28-.035-.309-.078s-.124-.078-.212-.078c-.109 0-.145-.038-.113-.117.038-.092-.022-.118-.276-.12-.178 0-.398-.054-.488-.117-.09-.063-.116-.114-.058-.114s.082-.036.053-.078-.154-.079-.278-.08c-.373-.002-.619-.088-.572-.201.043-.104-.401-.264-.734-.265-.113 0-.14-.04-.1-.153.046-.134 0-.16-.372-.205-.233-.03-.467-.1-.52-.16-.073-.082-.069-.108.02-.112.063-.003-.08-.065-.32-.137-.511-.155-.615-.23-.449-.326.14-.08.121-.088-.463-.206-.274-.056-.335-.1-.33-.243.005-.132-.04-.175-.185-.175-.329 0-.637-.17-.592-.327.03-.106-.009-.141-.153-.141-.23 0-.653-.19-.578-.26.092-.085-.142-.275-.404-.328-.155-.032-.237-.09-.212-.15.024-.057-.103-.175-.297-.276-.228-.119-.305-.196-.235-.236.068-.039-.001-.095-.201-.162-.225-.075-.306-.148-.306-.273 0-.119-.066-.187-.216-.222-.12-.027-.201-.092-.182-.145.02-.052-.092-.174-.246-.273-.39-.246-.356-.335.105-.276.286.036.407.02.462-.06.053-.078.075-.081.076-.012.001.094.196.11 1.243.1.196-.002.357.032.357.075 0 .113.232.097.276-.019.028-.073.112-.061.335.047.184.09.367.124.478.091.114-.033.302.006.51.106.25.121.318.132.282.046-.032-.078.01-.114.13-.114.098 0 .178.034.178.076s.095.099.21.126c.116.027.21.08.21.118 0 .039.039.07.085.07s.084-.052.084-.115c0-.143.197-.085.563.166.314.215.363.224.363.066 0-.064.02-.117.046-.117.113 0 .592.265.653.362.09.143.227.135.227-.013 0-.104.033-.103.274.01.15.072.303.178.34.237.08.126.312.143.312.023 0-.045.151-.004.337.093.185.096.336.2.336.23s.061.077.136.104c.097.035.122.015.087-.07-.08-.19.135-.136.468.118.259.198.32.217.38.118s.12-.081.371.111c.196.15.36.215.47.188.115-.028.273.042.483.213.216.176.332.226.374.162.043-.063.171-.005.414.187.194.154.353.242.353.196 0-.149.174-.09.426.143.147.137.304.213.394.19.09-.02.251.058.408.2.166.15.259.194.259.12 0-.062-.032-.113-.07-.113s-.07-.035-.07-.078.074-.078.165-.078c.26 0 .122-.178-.273-.35-.514-.223-.838-.586-.524-.586.21 0 .142-.112-.137-.226a2.694 2.694 0 01-.549-.34c-.245-.2-.268-.246-.157-.322.11-.074.069-.13-.265-.36-.459-.319-.634-.547-.464-.604.07-.024-.008-.113-.21-.24-.512-.322-.755-.64-.49-.64.19 0 .151-.137-.056-.198-.268-.079-.78-.613-.618-.646.146-.029.173-.248.031-.248-.124 0-.83-.655-.83-.77 0-.048.066-.089.147-.09.134-.002.133-.013-.014-.116-.34-.238-.807-.687-.807-.776 0-.023.057-.042.126-.042.209 0 .143-.155-.126-.296-.14-.074-.274-.195-.3-.27-.027-.075-.083-.136-.127-.136-.043 0-.078-.05-.078-.111a.173.173 0 00-.105-.15c-.058-.022-.001-.042.126-.045.127-.003.231-.042.231-.085s-.032-.078-.072-.078c-.101 0-.853-.688-.853-.781 0-.042.074-.077.165-.077.113 0 .15-.037.117-.117-.026-.064-.082-.117-.123-.117-.095 0-.31-.199-.614-.568-.229-.278-.231-.29-.06-.29.258 0 .224-.073-.24-.508-.441-.412-.553-.68-.256-.607.221.053.215-.072-.012-.258-.266-.22-.66-.74-.66-.872 0-.094.023-.097.125-.018.265.204.125-.095-.21-.448-.34-.358-.455-.681-.21-.595.174.062.158-.092-.028-.261-.22-.201-.52-.617-.52-.723 0-.056.067-.07.176-.039.156.046.165.034.083-.109a2.224 2.224 0 00-.293-.36c-.237-.238-.335-.586-.164-.586.157 0 .145-.045-.075-.278a1.212 1.212 0 01-.245-.391c-.046-.153-.025-.19.105-.19.145 0 .135-.033-.091-.323-.278-.356-.32-.535-.127-.535.14 0 .17-.121.047-.192-.043-.025-.135-.15-.204-.278-.107-.198-.107-.232-.005-.232.152 0 .152.004-.048-.468-.211-.497-.217-.636-.021-.568.19.067.61.453.61.562 0 .117.23.105.278-.014.045-.113.268.107.396.39.093.206.252.234.252.045 0-.094.072-.056.252.131.14.144.253.31.253.37 0 .075.055.092.175.057.2-.059.39.098.572.47.097.2.127.216.201.11.08-.115.099-.115.222 0 .074.07.21.275.303.456.158.31.294.427.294.253 0-.143.232-.08.357.098.068.096.17.307.226.468.103.289.343.408.343.17 0-.241.309.167.594.786.083.18.116.202.142.097.042-.166.274-.183.274-.02 0 .065.031.118.068.118.085 0 .353.553.353.728 0 .072.057.13.127.13s.126-.053.126-.117c0-.333.332.134.599.843.095.254.126.28.21.173.09-.114.11-.114.234 0 .074.07.135.177.135.238s.038.111.084.111c.047 0 .085.08.086.176.001.258.092.527.177.527.04 0 .074-.053.074-.117 0-.065.048-.117.107-.117.124 0 .398.546.4.8 0 .182.132.432.192.368.018-.02.076-.107.128-.193.07-.115.095-.125.096-.035a.347.347 0 00.101.212c.12.11.32.626.322.827 0 .12.023.13.125.051.188-.145.345.049.462.57.055.243.113.443.13.443.016 0 .089-.056.162-.123.12-.111.132-.111.132 0 0 .067.034.123.075.123s.116.215.166.479c.105.549.132.591.294.467.095-.074.144-.04.254.176.075.147.137.391.137.543 0 .152.038.298.084.324.046.027.084.011.084-.034 0-.046.053-.083.119-.083.118 0 .386.605.386.873 0 .078.038.142.084.142.047 0 .085-.043.085-.096 0-.253.266.298.31.643.054.42.195.615.195.268 0-.183.025-.202.21-.159.151.035.21.018.21-.063 0-.062-.028-.124-.063-.138-.128-.053-.366-.567-.414-.896-.05-.342.018-.422.208-.246.142.132.138-.124-.004-.264-.116-.113-.4-.837-.4-1.02 0-.081.067-.105.232-.08.13.02.193.006.143-.03-.139-.102-.375-.746-.375-1.023 0-.244.12-.346.187-.16.02.054.079.066.143.03.06-.035.076-.085.037-.112-.222-.15-.531-1.158-.395-1.284.03-.028.112-.007.182.046.11.085.12.062.07-.172-.032-.148-.092-.289-.132-.312-.041-.024-.102-.249-.136-.5-.06-.442-.056-.455.117-.405.14.041.18.02.18-.09a.6.6 0 00-.116-.299c-.134-.177-.228-.96-.123-1.02.039-.022.07-.003.07.043 0 .045.042.082.094.082.108 0 .026-.539-.1-.66-.043-.04-.078-.242-.078-.448 0-.28.032-.374.126-.374.07 0 .127.031.127.07 0 .038.052.088.116.11.085.03.104-.004.07-.128-.025-.093-.08-.19-.121-.216-.042-.026-.098-.324-.124-.663-.039-.51-.027-.6.065-.52.061.054.145.098.186.098.087 0-.008-.474-.117-.581-.101-.1-.097-.98.005-.98.044 0 .117.062.162.137.135.223.221.034.108-.237-.058-.138-.128-.487-.156-.777-.053-.559.017-.655.292-.4.198.185.231.011.069-.365-.138-.32-.187-1.166-.067-1.166.037 0 .112.041.167.092.162.15.226 0 .118-.275a2.27 2.27 0 01-.1-.67c0-.406.004-.412.22-.362.21.05.218.04.175-.206a6.583 6.583 0 00-.103-.468.717.717 0 01.055-.445c.098-.206.127-.22.243-.124.118.1.131.046.129-.53-.003-.628 0-.64.196-.62.19.019.196.003.143-.324-.03-.189-.03-.434 0-.545.045-.17.08-.19.213-.123.15.075.16.045.16-.47 0-.55 0-.551.212-.502.192.045.21.028.195-.174-.04-.527.007-.718.168-.679.091.022.157-.005.16-.065.004-.057.048-.295.1-.529.161-.738.44-.648.55.178.046.351.087.444.182.41.15-.052.285.243.285.623 0 .254.118.368.186.18.018-.05.085.059.15.24.09.256.095.381.02.564-.092.226-.087.233.111.187.204-.048.206-.042.206.499 0 .52.01.546.19.528.174-.017.191.017.214.428.014.246-.016.518-.066.605-.07.122-.066.158.021.158a.354.354 0 00.205-.086c.143-.132.22.325.149.888-.055.436-.048.472.074.378.116-.09.149-.076.233.097.075.152.076.308.003.645-.136.626-.13.675.066.577a.851.851 0 01.21-.08c.078 0 .055.898-.025.979-.114.116-.187.581-.09.581.046 0 .106-.052.133-.117a.198.198 0 01.165-.117c.088 0 .118.124.118.492 0 .27-.034.525-.076.565-.041.041-.102.192-.134.335-.056.244-.049.255.112.176.094-.047.184-.085.2-.085.14 0-.038 1.193-.208 1.387-.126.144-.022.2.183.099.168-.084.175-.069.175.336 0 .232-.056.523-.126.646-.157.28-.175.573-.025.434.182-.169.32-.104.32.151 0 .28-.16.84-.281.988-.055.067-.05.13.015.191.074.068.097.068.097-.003 0-.051.062-.094.137-.094.117 0 .129.061.08.406-.033.222-.084.442-.116.487-.088.127-.254.59-.212.59.021 0 .111-.036.2-.08.147-.073.164-.054.164.193 0 .253-.16.757-.342 1.073-.047.082-.044.151.007.18.045.026.082.01.082-.035 0-.045.057-.083.126-.083.076 0 .127.073.127.182 0 .233-.254.934-.363 1-.045.028-.054.116-.019.196.043.095.078.111.104.047.021-.054.079-.098.127-.098.14 0 .025.656-.18 1.02l-.183.327.183-.045c.175-.042.18-.027.125.359-.032.222-.091.44-.132.485-.04.046-.111.174-.157.286-.074.18-.065.2.08.164.138-.033.162.002.162.238 0 .153-.034.297-.075.32-.04.024-.1.136-.13.249a.791.791 0 01-.178.318c-.137.128-.164.336-.043.336.044 0 .106-.04.139-.088.036-.055.1-.003.166.136.1.21.108.213.114.045.01-.251.265-.95.346-.95.038 0 .086.043.107.097.054.135.227-.293.227-.562 0-.25.19-.433.378-.366.096.034.128-.011.128-.18 0-.293.35-1.033.398-.843.019.075.089.137.155.137.084 0 .12-.095.12-.316 0-.173.077-.455.171-.627.163-.294.18-.304.316-.177s.147.118.19-.173c.066-.434.245-.814.383-.814.065 0 .118.037.118.082 0 .046.038.061.085.035.046-.027.084-.133.084-.236 0-.205.232-.718.4-.882.086-.085.105-.083.105.011 0 .063.057.135.126.16.097.034.126-.017.126-.222 0-.146.038-.287.084-.314.047-.026.086-.107.087-.18a.588.588 0 01.131-.288c.124-.15.132-.15.216-.013.083.135.095.132.192-.042.057-.102.128-.3.158-.438.066-.306.479-.764.479-.53 0 .12.022.128.126.048a.343.343 0 00.127-.235c0-.151.129-.403.361-.702.142-.182.16-.185.262-.058.15.184.218.172.218-.04 0-.172.272-.72.435-.877.053-.051.111-.028.17.07.081.133.105.117.245-.157.085-.167.157-.338.16-.381.003-.043.08-.16.17-.26.157-.175.17-.177.313-.045.142.132.15.131.175-.013.038-.223.292-.683.437-.79.1-.075.146-.07.226.028.086.104.127.07.28-.23.098-.194.251-.414.34-.49.15-.124.164-.124.164-.007 0 .218.118.142.286-.183.152-.294.385-.449.542-.36.04.024.125-.052.19-.167a1.75 1.75 0 01.263-.346c.132-.125.15-.126.22-.01.066.108.1.094.234-.1.235-.34.344-.426.48-.377.068.024.175-.022.238-.102.063-.08.256-.244.43-.365l.315-.22v.238c0 .131-.033.258-.075.282-.04.023-.1.14-.132.257-.032.118-.103.24-.157.273-.064.037-.043.058.058.059.128 0 .146.04.098.216a.914.914 0 01-.177.338c-.154.158-.152.227.007.227.069 0 .126.053.126.118 0 .064-.03.117-.066.117-.036 0-.118.114-.183.253-.064.14-.133.28-.152.312-.019.032.025.059.098.059.117 0 .116.032-.014.292-.08.161-.193.321-.251.355-.145.086-.133.211.02.211.07 0 .127.053.127.117 0 .065-.038.117-.084.117-.047 0-.084.056-.084.123 0 .068-.106.221-.236.341-.24.222-.271.42-.055.343.19-.068-.009.375-.31.686-.199.207-.225.268-.12.288.229.044.119.311-.31.752-.127.13-.228.29-.225.354.004.08.02.086.049.02.059-.136.197-.123.197.018 0 .136-.432.735-.533.74-.104.004-.31.213-.31.314 0 .056.069.07.182.036.151-.045.171-.03.122.092-.109.266-.426.645-.618.741-.215.106-.256.302-.064.302.07 0 .126.024.126.054 0 .118-.38.557-.602.696-.28.174-.384.36-.184.326.293-.048.187.179-.278.596-.405.364-.454.435-.3.435.103 0 .186.038.186.084 0 .101-.445.526-.75.715-.167.105-.184.136-.07.137.084 0 .145.058.144.137-.003.136-.271.487-.372.487-.03 0-.156.088-.28.195l-.228.195h.202c.19 0 .193.008.062.143-.076.079-.14.175-.14.215 0 .04-.113.142-.252.228-.138.086-.252.182-.252.214s-.057.059-.126.059-.127.052-.127.117c0 .064.038.117.084.117.047 0 .085.03.085.069 0 .102-.521.555-.639.555-.055 0-.123.053-.15.117-.029.071 0 .117.076.117.068 0 .123.027.123.06 0 .115-.462.525-.715.636-.197.086-.22.118-.105.142.08.018.147.058.147.09 0 .111-.464.522-.694.614-.23.092-.324.33-.132.33.169 0-.343.44-.693.595-.34.151-.429.264-.206.264.335 0 .014.344-.571.61-.219.1-.397.205-.397.234 0 .03.094.093.208.142.163.07.227.067.304-.02.054-.059.193-.108.309-.108.121 0 .3-.089.42-.208.16-.16.24-.19.343-.13.105.061.2.021.425-.181.235-.212.311-.243.411-.166.098.075.143.07.219-.026.16-.198.55-.401.682-.354.069.025.173 0 .232-.055.06-.055.212-.163.34-.24.206-.125.231-.127.231-.014 0 .174.04.161.345-.115.195-.178.321-.232.476-.204.135.024.316-.03.506-.15.239-.15.32-.167.42-.09.098.074.143.07.22-.02.09-.108.575-.387.67-.387.024 0 .056.058.071.13.024.116.043.118.154.017.386-.35.757-.479.757-.26 0 .095.059.08.274-.07.386-.267.652-.334.652-.162 0 .126.01.126.154.005.085-.07.199-.129.253-.129.054 0 .098-.035.098-.078s.095-.078.21-.078c.117 0 .211.032.211.071s.157 0 .348-.085c.283-.127.362-.136.42-.051.058.085.118.08.332-.032.287-.15.5-.177.5-.063 0 .04.13.023.291-.039.35-.135.497-.144.418-.027-.064.097.288.021.416-.089.04-.035.159-.027.263.017a.403.403 0 00.369-.009c.134-.067.179-.066.179 0 0 .064.136.075.463.037.254-.03.462-.034.462-.009 0 .024-.153.147-.34.273s-.34.25-.337.274c.015.158-.01.2-.12.2-.124 0-.359.31-.237.315.037 0-.085.068-.27.15-.185.08-.287.15-.227.153.17.01.039.145-.276.284-.158.07-.27.167-.25.217.02.05-.114.15-.3.222-.185.071-.336.18-.336.24 0 .115-.336.292-.551.292-.067 0-.122.065-.122.144 0 .15-.316.324-.588.324-.098 0-.169.065-.185.17-.026.165-.129.215-.7.34-.14.03-.206.072-.148.092.16.054.126.256-.042.258-.281.002-.736.194-.736.31 0 .081-.14.14-.449.188-.377.06-.442.094-.407.215.026.094-.005.144-.09.144-.297 0-.765.18-.724.279.029.068-.063.117-.28.15-.37.056-.725.182-.538.19.27.012-.218.234-.519.237-.215.002-.3.033-.273.1.048.12-.334.292-.651.292-.154 0-.236.041-.236.117 0 .089-.103.117-.418.117-.321 0-.408.025-.374.108.046.11-.347.283-.642.283-.081 0-.17.052-.196.117-.033.08-.17.117-.439.117-.312 0-.38.023-.342.117.04.096-.041.117-.45.117s-.492.02-.452.117c.04.095-.039.117-.424.117-.363 0-.472.027-.472.117 0 .09-.107.117-.463.117-.424 0-.463.015-.463.175 0 .16.045.178.48.195.263.01.5.05.525.088.026.038.284.095.574.125.289.031.526.084.526.118 0 .033.246.085.547.115.3.03.547.087.547.126 0 .04.133.072.295.072.162 0 .294.035.294.078s.115.078.255.078.274.045.297.1c.023.056.143.108.267.118.124.01.264.052.31.095.046.043.154.077.24.077s.24.043.341.094.235.102.297.111c.062.01.178.073.259.14s.206.124.278.124.154.052.18.117a.209.209 0 00.18.117c.071 0 .28.087.463.195.184.107.353.195.377.195.024 0 .117.061.206.136.305.257.42.332.508.332.048 0 .088.03.088.068 0 .075-.46.16-1.179.22-.254.02-.503.069-.553.107-.054.041-.126.036-.18-.013-.062-.058-.14-.052-.265.02-.132.076-.2.08-.273.012-.072-.068-.15-.067-.31 0-.167.071-.223.07-.25-.005-.043-.12-.273-.129-.273-.01 0 .053-.057.063-.147.026a1.686 1.686 0 00-.4-.08l-.881-.07c-.345-.028-.678-.087-.737-.133-.076-.059-.14-.058-.22.003-.074.057-.139.06-.195.007-.083-.076-.556-.155-.93-.154-.102 0-.208-.035-.237-.077-.028-.042-.181-.077-.34-.077-.16 0-.29-.03-.29-.068s-.194-.092-.43-.12c-.237-.03-.52-.108-.628-.174-.108-.066-.234-.099-.278-.073s-.139-.007-.209-.071c-.07-.065-.221-.118-.337-.118s-.26-.045-.322-.1a.618.618 0 00-.32-.114c-.115-.007-.222-.05-.239-.095-.016-.045-.116-.081-.222-.081a.453.453 0 01-.298-.117.47.47 0 00-.308-.117c-.227 0-.604-.223-1.02-.604-.206-.188-.289-.225-.323-.143-.025.061-.005 1.19.045 2.508.05 1.319.091 2.708.091 3.088v.69h-1.52z"
                                stroke="#000"
                              />
                            </animated.g>
                          </svg>
                        </>
                      )}
                    </Spring>
                    <div
                      className="card_border_right"
                      style={{
                        borderRight: cbdToggle
                          ? "1px solid rgbA(155, 98, 107, 0.4)"
                          : "1px solid rgbA(211, 211, 211)"
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: cbdToggle
                        ? "rgba(255, 198, 207, 0.2)"
                        : "rgba(235, 235, 235, 0.3)",
                      boxShadow: cbdToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s"
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <div className="cbd_card_new_wrapper">
                        <h2 style={{ fontWeight: 400 }}>CBD</h2>
                        <h2
                          className="cbd_card_new"
                          style={{
                            fontWeight: 600,
                            color: cbdToggle
                              ? "rgb(155, 98, 107)"
                              : "rgb(175, 118, 127)",
                            transition: "ease all 0.5s"
                          }}
                        >
                          NEW!
                        </h2>
                      </div>
                      <p
                        className="card_description_subheader"
                        style={{ opacity: 0.6 }}
                      >
                        Antioxidant
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

export default CBD;
