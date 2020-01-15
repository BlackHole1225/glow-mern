import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spring, animated, Keyframes } from "react-spring/renderprops";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faClock,
  faSquare,
  faTag
} from "@fortawesome/free-solid-svg-icons";
import { InView } from "react-intersection-observer";
import ACTION_DERMAPLANING_TOGGLE from "../../../actions/Treatments/Dermaplaning/ACTION_DERMAPLANING_TOGGLE";
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
import ACTION_NAVBAR_IS_VISIBLE from "../../../actions/NavbarIsVisible/ACTION_NAVBAR_IS_VISIBLE";
import { store } from "react-notifications-component";
import DermaplaningNotification from "./DermaplaningNotification";
import "./Dermaplaning.css";
import "../../treatments_pages/Page_3/TreatmentsPage3.css";

const Dermaplaning = props => {
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

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!dermaplaningToggle) {
      dispatch(ACTION_DERMAPLANING_TOGGLE());
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
      if (cbdToggle) {
        dispatch(ACTION_CBD_TOGGLE_RESET());
      }
      if (microneedleToggle) {
        dispatch(ACTION_MICRONEEDLE_TOGGLE_RESET());
      }
    } else {
      dispatch(ACTION_DERMAPLANING_TOGGLE_RESET());
    }
  };

  const cardDescriptionHandler = () => {
    if (dermaplaningToggle) {
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
                <p>1 hour 15 minutes</p>
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
          Dermaplaning minimizes fine lines on skin by shaving its surface,
          removing the top layer of dead skin along with fine hair.
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

  const addToCart = () => {
    dispatch(ACTION_NAVBAR_IS_VISIBLE());
    store.addNotification({
      content: DermaplaningNotification,
      insert: "top",
      container: "bottom-right",
      dismiss: {
        duration: 5000,
        onScreen: false
      },
      isMobile: true,
      width: 400
    });
  };

  const bookButtonBounce = () => {
    if (dermaplaningToggle) {
      return (
        <SuitcaseBounce state="suitcaseBounce">
          {styles => (
            <span
              style={styles}
              className="fa-layers fa-fw"
              onClick={() => addToCart()}
            >
              <FontAwesomeIcon
                color="rgb(255, 198, 207, 0.8)"
                transform="grow-20"
                icon={faSquare}
              />
              <FontAwesomeIcon color="rgb(155, 98, 107)" icon={faSuitcase} />
            </span>
          )}
        </SuitcaseBounce>
      );
    } else {
      return (
        <span className="fa-layers fa-fw" onClick={() => addToCart()}>
          <FontAwesomeIcon
            color="rgb(255, 198, 207, 0.6)"
            transform="grow-20"
            icon={faSquare}
          />
          <FontAwesomeIcon color="rgb(175, 118, 127)" icon={faSuitcase} />
        </span>
      );
    }
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
          <p className="big_screen_duration">1 hr. 15 min.</p>
        </div>
      </div>
    );
  };

  const smallScreenBottomWrapperRender = () => {
    return (
      <div
        className="card_bottom_wrapper"
        style={{
          color: dermaplaningToggle
            ? "rgb(155, 98, 107)"
            : "rgb(175, 118, 127)",
          transition: "ease all 0.5s"
        }}
      >
        <p className="card_toggler" onClick={handleToggle}>
          {dermaplaningToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
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
    <InView
      threshold={props.initialScreenSize >= 768 ? 0.7 : 0.2}
      triggerOnce={true}
    >
      {({ inView, ref }) => (
        <div className="dermaplaning_wrapping" ref={ref}>
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
                      backgroundColor: dermaplaningToggle
                        ? "rgb(255, 198, 207)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: dermaplaningToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s"
                    }}
                  >
                    <Spring
                      from={{
                        x: 200,
                        fill1: "white",
                        fill2: "white",
                        fill3: "white",
                        fill4: "white"
                      }}
                      to={{
                        x: 0,
                        fill1: "rgba(160, 75, 58, 0.7)",
                        fill2: "rgba(193, 94, 52, 0.7)",
                        fill3: "rgba(232, 154, 74, 0.7)",
                        fill4: "rgba(231, 155, 73, 0.7)"
                      }}
                      config={{ delay: 300, duration: 4000 }}
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
                                dermaplaningToggle
                                  ? "rgb(235, 178, 187)"
                                  : "rgba(191, 191, 191)"
                              }
                              strokeWidth="0.5"
                              fill="white"
                            />
                            <animated.g
                              fill="rgba(253, 253, 150, 0.7)"
                              stroke="#000"
                              strokeLinejoin="round"
                              strokeWidth="0.5"
                              transform="translate(5, 7)"
                            >
                              <animated.path
                                fill={`${styles.fill1}`}
                                strokeDasharray="200"
                                strokeDashoffset={`${styles.x}`}
                                className="dermaplaning_icon_path"
                                d="M14.791 27.9l.55.724.706.752.81.752.785.668 1.152.752 1.36.724 1.072.39 1.02.278.89.195 1.047.167 1.125.028 1.203-.056.916-.139 1.23-.306 1.255-.418 1.15-.501.786-.446.758-.501.55-.418.758-.64.576-.585.654-.696.445-.613.497-.668-.105-.056-.288-.083-.34-.084-.418-.055-.785-.112h-.602l-.785.056-.81.111-.733.14-.68.194-.628.168-.707.222-.784.25-.759.224-.994.278-.968.195-.89.14-.863.11-.994.14-1.072.056h-.89l-1.073-.056-.915-.111-.916-.14-.837-.167-.785-.223-.628-.222-.654-.279z"
                              />
                              <animated.path
                                fill={`${styles.fill2}`}
                                strokeDasharray="200"
                                strokeDashoffset={`${styles.x}`}
                                className="dermaplaning_icon_path"
                                d="M14.791 27.9l.863.056.654.055.733.028.654.028.837-.028.916-.055.941-.084 1.1-.111.836-.167 1.099-.195.968-.14.994-.25 1.073-.25 1.124-.28 1.256-.333 1.125-.335.785-.278 1.02-.334 1.439-.53 1.308-.528 1.151-.418 1.073-.306.863-.167.288-.028-.079.25-.104.335-.157.557-.236.612-.288.557-.13.418-.157.223-.21.334-.444.807-.105-.055-.628-.168-1.203-.167h-.602l-1.203.084-1.125.223-.811.222-.602.14-.654.195-.47.194-.602.168-.393.11-1.02.307-.68.14-.707.11-.81.14-.812.084-.706.111-.628.028h-.706l-.628.028-1.073-.056-.627-.084-.838-.139-1.203-.195-.602-.195-.837-.25z"
                              />
                              <animated.path
                                fill={`${styles.fill3}`}
                                strokeDasharray="200"
                                strokeDashoffset={`${styles.x}`}
                                className="dermaplaning_icon_path"
                                d="M14.791 27.9l-.314-.473-.262-.362-.261-.418-.314-.557-.235-.446-.262-.612-.288-.724-.13-.362-.236-.724-.157-.64.13-.056.524.083.47.028h.55l.523.084.471.083.524.112.627.083.707.111.418.028.785.167.628.167 1.125.279.785.25.81.251.655.223.732.223.654.25.837.306.471.251.654.279.654.306.497.306.445.167v.028l-.55.14-.549.166-.942.223-.575.167-.785.084-.759.111-.654.14-.706.166-.863.084-.89.056-.863.055-1.177.084-.654-.028-.602-.028-.628-.024z"
                              />
                              <animated.path
                                fill={`${styles.fill4}`}
                                strokeDasharray="200"
                                strokeDashoffset={`${styles.x}`}
                                className="dermaplaning_icon_path"
                                d="M23.764 25.03l1.099-.223.968-.223.915-.222.707-.167 1.072-.14.733-.083.628-.084.941-.027.994.027.864.084.654.028.654.083.392.084-.47.195-.733.278-.654.25-.68.28-.811.278-.89.278-.785.25-.68.224-.758.194-.916.195-.445-.195-.497-.306-.706-.334z"
                              />
                              <animated.path
                                strokeDasharray="200"
                                strokeDashoffset={`${styles.x}`}
                                className="dermaplaning_icon_path"
                                d="M29.048 23.97l.392-.473.288-.362.262-.335.261-.445.183-.362.262-.64.21-.641.13-.668.026-.752-.026-.724-.078-.668-.21-.724-.287-.697-.314-.64-.445-.64-.55-.585-.366-.334-.497-.335-.418-.306-.628-.25-.759-.223-.863-.14-.706-.027-.733.055-.759.195-.627.25-.471.252-.654.473-.55.529-.523.613-.418.612-.34.696-.262.92-.13.668-.053.529v.612l.052.64.157.725.157.557.21.612.26.613.263.445.313.474.34.417.288.335.262.11.392.112.707.25.968.335 1.49-.306 1.1-.307 1.098-.222.837-.112z"
                              />
                            </animated.g>
                          </svg>
                        </>
                      )}
                    </Spring>
                    <div
                      className="card_border_right"
                      style={{
                        borderRight: dermaplaningToggle
                          ? "1px solid rgbA(155, 98, 107, 0.4)"
                          : "1px solid rgbA(211, 211, 211)"
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: dermaplaningToggle
                        ? "rgba(255, 198, 207, 0.2)"
                        : "rgba(235, 235, 235, 0.2)",
                      boxShadow: dermaplaningToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s"
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <h2 style={{ fontWeight: 400 }}>DERMAPLANING</h2>
                      <p
                        className="card_description_subheader"
                        style={{ opacity: 0.6 }}
                      >
                        Exfoliating
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

export default Dermaplaning;
