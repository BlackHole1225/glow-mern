import React from "react";
import "./Glow.css";
import "../../treatments/card_styling.css";

const GlowRemovedNotification = props => {
  return (
    <div className="notification_removed_container">
      <svg
        width={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "25%"
              : "26%"
            : props.currentScreenSize >= 1800
            ? "25%"
            : "26%"
        }
        height={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "8rem"
              : "5rem"
            : props.currentScreenSize >= 1800
            ? "8rem"
            : "5rem"
        }
        viewBox="0 0 50.006 50.006"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="rgb(220, 191, 196)"
          strokeWidth="0.5"
          fill="white"
        />
        <g transform="translate(14, -97.5)">
          <path
            className="glow_icon_path"
            stroke="#000"
            strokeWidth="0.8"
            fill="rgba(241, 241, 241, 0.7)"
            d="M22.28 292.51c1.195-.877 2.3-1.595 2.457-1.595.156 0 1.357.792 2.67 1.76 1.378 1.017 2.465 1.683 2.574 1.577.104-.1.772-1.291 1.485-2.647 1.537-2.922 1.315-2.831 5.064-2.072 1.39.282 2.568.47 2.62.42.051-.052.146-1.446.21-3.1.065-1.653.177-3.064.25-3.136.073-.072 1.4-.465 2.948-.873s2.88-.782 2.959-.83c.078-.047-.372-1.253-1-2.678-.63-1.425-1.144-2.772-1.144-2.992 0-.252.822-1.09 2.211-2.257 1.216-1.021 2.21-1.954 2.21-2.074 0-.12-.994-1.053-2.21-2.074-1.39-1.166-2.21-2.005-2.21-2.257 0-.22.514-1.567 1.142-2.992.63-1.425 1.08-2.63 1-2.679-.078-.047-1.41-.42-2.958-.829-1.549-.408-2.875-.801-2.948-.873-.073-.072-.185-1.483-.25-3.137-.064-1.653-.159-3.047-.21-3.098-.052-.051-1.23.137-2.62.419-3.75.76-3.527.85-5.064-2.072-.713-1.356-1.381-2.547-1.485-2.648-.11-.105-1.196.56-2.575 1.578-1.312.968-2.512 1.76-2.667 1.76-.156 0-1.356-.792-2.668-1.76-1.38-1.017-2.466-1.683-2.575-1.578-.104.1-.772 1.292-1.485 2.648-1.537 2.922-1.315 2.831-5.064 2.072-1.39-.282-2.568-.47-2.62-.42-.051.052-.146 1.446-.21 3.1-.065 1.653-.177 3.064-.25 3.136-.072.072-1.399.465-2.948.873-1.548.408-2.88.782-2.958.83-.08.047.37 1.253 1 2.678.629 1.425 1.143 2.772 1.143 2.992 0 .252-.822 1.09-2.21 2.257-1.217 1.021-2.212 1.954-2.212 2.074 0 .12.995 1.053 2.211 2.074 1.39 1.166 2.211 2.005 2.211 2.257 0 .22-.514 1.567-1.143 2.992-.63 1.425-1.08 2.63-1 2.678.078.048 1.41.422 2.958.83 1.549.408 2.876.801 2.948.873.073.072.185 1.483.25 3.136.064 1.654.159 3.048.21 3.1.052.05 1.23-.138 2.62-.42 3.74-.757 3.53-.841 5.042 2.011 1.607 3.031 1.575 2.984 1.873 2.751.134-.105 1.222-.908 2.417-1.785z"
          />
          <path
            className="glow_icon_path"
            stroke="#000"
            strokeWidth="0.8"
            d="M22.779 287.564c-5.25-.7-9.61-3.737-12.053-8.39-1.225-2.334-1.712-4.372-1.712-7.161 0-6.082 3.24-11.281 8.747-14.032 4.271-2.133 9.684-2.133 13.955 0 4.14 2.068 7.155 5.736 8.31 10.108.589 2.231.589 5.617 0 7.848-.53 2.007-1.785 4.437-3.165 6.127-3.192 3.91-9 6.18-14.082 5.5z"
            fill="rgba(211, 211, 211, 0.6)"
          />
        </g>
      </svg>
      <div className="notification_text_container">
        <h3>Glow Removed</h3>
        <p>The Glow facial treatment has been removed from your cart</p>
      </div>
    </div>
  );
};

export default GlowRemovedNotification;
