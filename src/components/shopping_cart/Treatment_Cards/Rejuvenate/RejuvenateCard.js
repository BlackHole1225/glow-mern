import React from "react";
import { useDispatch } from "react-redux";
import ACTION_REJUVENATE_NOT_IN_CART from "../../../../actions/InCart/Treatments/Rejuvenate/ACTION_REJUVENATE_NOT_IN_CART";
import ACTION_DECREMENT_COUNTER from "../../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import "../../CartCard.css";

const RejuvenateCard = props => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(ACTION_REJUVENATE_NOT_IN_CART());
    dispatch(ACTION_DECREMENT_COUNTER());
  };

  return (
    <div className="shopping_cart_card_wrapping">
      <div className="shopping_cart_card_image_circle">
        <svg width="100%" height="12rem" viewBox="0 0 50.006 50.006">
          <circle cx="25" cy="25" r="20" fill="rgb(241, 241, 241)" />
          <g fill="none" transform="translate(13, 12)">
            <path
              fill="rgba(177, 156, 217, 0.4)"
              stroke="black"
              strokeWidth="0.8"
              className="rejuvenate_icon_path"
              d="M12.764 36.56a11.521 11.521 0 01-2.147-.552c-.74-.279-2.073-1.064-2.738-1.611-.688-.567-1.671-1.689-2.195-2.504-.754-1.175-1.36-2.756-1.646-4.295-.184-.99-.182-2.97.003-3.971.375-2.024 1.17-3.78 2.365-5.223 1.457-1.762 3.222-2.874 5.387-3.397.564-.136.818-.156 1.972-.156 1.166 0 1.402.019 1.972.16 2.11.52 3.814 1.636 5.868 3.839 1.024 1.099 2.268 2.709 4.281 5.54 1.095 1.541 1.431 1.972 2.678 3.436 3.675 4.314 5.933 5.566 8.752 4.854 2.008-.508 3.649-1.962 4.504-3.992.414-.982.567-1.681.602-2.75.046-1.366-.158-2.417-.707-3.638-.673-1.5-1.766-2.692-3.092-3.371-1.368-.7-3.32-.75-4.94-.126-.71.275-1.167.532-1.844 1.04-.82.615-1.19.987-2.846 2.867-.87.986-1.603 1.784-1.631 1.772-.028-.011-.447-.571-.932-1.245l-.88-1.225.362-.474c.711-.93 2.318-2.75 3.071-3.476 3.047-2.94 5.803-3.892 8.977-3.1.884.221 1.558.5 2.445 1.012 2.741 1.583 4.595 4.32 5.217 7.704.188 1.022.19 2.99.004 3.992-.19 1.031-.386 1.676-.805 2.655-1.3 3.037-3.773 5.183-6.856 5.948-.683.17-.843.184-2.094.182-1.175 0-1.433-.021-1.957-.153-1.724-.432-3.236-1.305-4.843-2.794-.518-.48-2.3-2.487-2.978-3.354-.534-.682-1.401-1.855-2.495-3.374-3.386-4.704-5.957-7.249-8.12-8.039-1.704-.622-3.807-.239-5.415.988-1.03.785-1.735 1.714-2.25 2.96-.392.95-.53 1.588-.567 2.643-.051 1.396.149 2.44.704 3.677.849 1.892 2.31 3.23 4.095 3.753.755.222 2.312.218 3.191-.008 1.307-.334 2.367-.947 3.592-2.076.242-.224 1.119-1.202 1.947-2.174l1.506-1.767.878 1.262c.484.694.879 1.29.879 1.326 0 .112-1.895 2.364-2.688 3.194-2.13 2.229-3.985 3.447-5.956 3.912-.686.162-1.96.224-2.63.13z"
            />
          </g>
        </svg>
      </div>
      <div className="shopping_cart_card_description">
        <div className="cart_card_top_container">
          <h3>Rejuvenate</h3>
          <p className="shopping_cart_duration">Duration: 50 minutes</p>
        </div>
        <div className="cart_card_bottom_container">
          <div className="shopping_cart_price_container">
            <p className="shopping_cart_price">$80</p>
          </div>
          <div className="shopping_cart_remove_button" onClick={handleRemove}>
            <p>Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejuvenateCard;
