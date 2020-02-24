import React from "react";
import "../SummaryReviewCards.css";

const MicrodermabrasionSummaryCard = () => {
  return (
    <div className="summary_add_ons_card_container">
      <div className="summary_card_image_circle">
        <svg width="100%" height="6rem" viewBox="0 0 56.356 56.356">
          <circle cx="28" cy="28" r="22.25" fill="rgb(241, 241, 241)" />
          <g transform="translate(12 11)">
            <path
              className="microdermabrasion_icon_path"
              stroke="#000"
              fill="#000"
              strokeWidth="0.3"
              d="M38.916 55.08c-.695-.143-1.712-.623-1.783-.841-.18-.553.322-.852.923-.55 1.242.627 2.39.585 3.34-.12.596-.444 1-.45 1.154-.017.088.245.06.328-.21.601-.74.753-2.265 1.166-3.424.927zm-13.048-.27c-1.683-.223-2.894-.593-4.436-1.356-3.19-1.577-6.227-4.538-8.422-8.211-.221-.37-.6-.834-.842-1.03-1.818-1.477-4.085-3.941-5.34-5.806-2.612-3.879-3.93-8.018-4.054-12.736-.089-3.364.253-5.81 1.2-8.595C7.387 7.052 17.86 1.106 29.855 2.384c5.04.537 9.801 2.71 13.244 6.045 4.03 3.904 6.323 9.07 6.863 15.466.07.835.137 1.53.147 1.545.011.015.333-.036.716-.114 1.022-.21 1.613-.686 2.166-1.75.468-.9.572-1.793.572-4.901v-2.836l.266-.17c.247-.157.285-.157.54.006l.275.175-.044 3.228c-.036 2.613-.079 3.343-.223 3.832-.562 1.905-1.834 3.227-3.303 3.431-.987.138-1.02.168-1.02.937 0 1.595-.353 3.63-1.019 5.865l-.36 1.207.235.502c.217.464.237.692.275 3.028.061 3.739-.165 5.327-1.002 7.027-.405.823-1.387 1.933-1.99 2.25-.387.202-.417.266-.767 1.631-.592 2.315-3.027 4.117-5.56 4.117-1.54 0-2.79-.493-4.012-1.583l-.696-.621-.445.417c-1.635 1.532-4.168 2.968-6.073 3.443-.792.197-2.207.324-2.771.25zm2.873-1.723c1.695-.583 3.535-1.682 4.925-2.942l.782-.709-.243-.673c-.328-.908-.408-2.776-.16-3.736.68-2.64 2.782-4.45 5.464-4.708l.753-.072.16-.687c.266-1.142.577-2.988.753-4.465.204-1.723.36-4.067.277-4.159-.035-.038-.589-.19-1.232-.34-3.05-.71-6.554-2.19-8.66-3.655-2.086-1.451-4.133-3.795-4.95-5.666-.162-.372-.324-.677-.36-.677-.035 0-.183.22-.329.49-.431.796-1.414 2.023-2.305 2.878-2.42 2.322-5.947 4.29-10.872 6.067l-1.525.55.064 1.557c.144 3.51 1.337 9.268 2.31 11.15.129.248.352.684.497.97.768 1.51 2.498 3.699 4.1 5.186 2.156 2 4.485 3.326 6.718 3.825 1.013.227 2.905.136 3.832-.183zm3.137-6.699c-.162-.295-.133-1.739.049-2.42.304-1.136 1.255-2.614 1.887-2.932.277-.14.336-.139.567.009.38.243.318.506-.27 1.14-.901.968-1.28 1.949-1.28 3.315 0 .515-.049.888-.127.965-.202.197-.7.15-.826-.076zm-2.018-1.347c-.548-.534-.061-2.507.848-3.438.423-.433.634-.489.893-.236.241.235.206.539-.103.897-.486.562-.708 1.118-.782 1.957-.078.881-.07.862-.404.962-.163.049-.3.006-.452-.142zm-12.726-6.539c-1.75-.285-2.555-1.072-1.717-1.678l.286-.208.867.28c1.411.454 3.186.364 4.765-.242.305-.117.665-.213.8-.213.523 0 .797.752.42 1.157-.209.225-1.858.758-2.815.909a9.059 9.059 0 01-2.606-.005zm16.495.039c-1.125-.152-2.757-.693-3.018-1-.314-.368-.032-1.1.424-1.1.105 0 .635.147 1.18.327.825.274 1.197.336 2.245.376 1.155.044 1.328.025 2.153-.236.845-.268.91-.275 1.16-.116.32.205.436.586.27.888-.336.61-2.765 1.084-4.414.861zm8.137 12.899c.704-.329 1.88-1.187 1.771-1.293-.022-.022-.228.024-.456.102-2.108.72-4.405-.256-5.391-2.291-.3-.62-.337-.799-.339-1.628-.001-1.11.208-1.788.783-2.533.83-1.076 1.887-1.633 3.298-1.738l.786-.059-.467-.235c-2.15-1.083-5.109.038-6.25 2.368-.419.853-.559 1.492-.558 2.536.003 2.311 1.425 4.339 3.513 5.01.443.142.841.183 1.555.161.848-.026 1.054-.073 1.755-.4zm1.373-2.392c.798-.391 1.265-.922 1.6-1.817.192-.513.29-.631.695-.84 1.046-.54 1.922-1.848 2.4-3.582.2-.725.235-1.187.28-3.682.059-3.348-.007-3.858-.555-4.327-1.037-.886-2.525-.635-3.167.533-.223.406-.242.602-.3 3.023-.07 2.995-.13 3.25-.958 4.133l-.519.553-.931.046c-1.059.052-1.622.272-2.297.897-1.495 1.383-1.29 3.742.43 4.919.973.666 2.153.717 3.322.144zm-32.06-8.839c-.503-1.998-.97-4.822-1.184-7.152-.107-1.165-.229-2.001-.291-2.001-.06 0-.442.093-.851.207-.937.26-.966.26-1.281-.047-.593-.578-.24-1.006 1.121-1.356a71.459 71.459 0 001.182-.311c.12-.036.226-.316.35-.925.537-2.633 1.796-5.149 3.616-7.223 2.112-2.407 5.509-4.393 9.177-5.367.898-.238 1.02-.353.688-.646-.344-.303-.971-.49-2.832-.848-1.988-.383-2.697-.61-3.429-1.1-1.455-.975-1.95-3.028-1.126-4.66.407-.805 1.232-1.647 2.048-2.092.636-.346 2.784-2.345 2.595-2.415-.064-.024-.686.124-1.382.328-7.573 2.221-12.73 7.297-14.603 14.373-.87 3.284-.966 7.204-.261 10.632.848 4.125 3.12 8.345 6.09 11.313.384.384.705.699.714.699.008 0-.145-.634-.34-1.409zm31.96-1.987l.052-2.662.301-.596c.191-.38.508-.77.868-1.074l.568-.477.035-1.172c.035-1.14.044-1.181.355-1.499.175-.18.45-.393.611-.475.215-.11.292-.227.292-.446 0-.526.416-1.627.858-2.272.264-.384.677-.801 1.064-1.072l.633-.443-.06-.984c-.282-4.66-1.378-8.468-3.362-11.69-3.425-5.56-9.033-8.936-16.03-9.65-1.173-.12-5.051-.073-5.8.069-.23.044-.423.208-.691.59-.66.939-2.68 2.89-3.44 3.323-1.884 1.074-2.55 2.625-1.706 3.974.24.384.455.565.976.822.659.326 1.065.43 3.372.861.643.12 1.448.34 1.788.49.672.293 1.296.904 1.402 1.374.062.276.097.29.882.355 5.278.438 9.289 2.001 12.232 4.767 1.35 1.268 2.23 2.437 3.042 4.042.799 1.578 1.151 2.578 1.462 4.142.124.627.237 1.154.25 1.172.013.018.375.082.805.143.9.126 1.153.292 1.153.756 0 .567-.284.714-1.22.632-.788-.07-.8-.067-.8.172 0 1.759-.865 8.09-1.234 9.026-.071.181 1.023.699 1.181.558.063-.056.128-1.183.16-2.756zm4.04-5.658c0-.423-.046-.885-.101-1.027-.133-.34-.48-.438-.809-.228-.242.154-.26.227-.26 1.038v.872l.451.04c.249.021.512.047.585.057.096.013.133-.195.133-.752zm1.319-2.903c.086-.571.179-1.336.206-1.698l.05-.66-.407.388c-.482.458-.973 1.465-1.04 2.129-.04.419-.015.492.23.648.15.097.355.327.454.511l.18.336.085-.308c.047-.17.156-.775.242-1.346zm-6.954-.37c0-.325-.375-1.788-.657-2.567-1.294-3.572-3.883-6.35-7.437-7.982-1.686-.773-4.047-1.422-5.897-1.62l-.65-.069.15.71c.615 2.945 2.016 5.266 4.322 7.169 2.137 1.761 4.749 3.053 8.095 4.005 1.644.467 2.073.54 2.073.354zm-26.737-1.51c6.58-2.724 10.755-6.644 10.83-10.172l.014-.659-.532.062c-1.977.227-5.226 1.473-7.207 2.764-1.698 1.107-3.238 2.62-4.296 4.223-.787 1.192-1.716 3.423-1.905 4.577l-.068.414.89-.319c.49-.175 1.514-.575 2.274-.89z"
            />
          </g>
        </svg>
      </div>
      <div className="summary_card_booking_description">
        <div className="summary_card_booking_description_left_section">
          <h2>Micro-Dermabrasion</h2>
          <p>15 minutes</p>
        </div>
        <div className="summary_card_booking_description_right_section">
          <p>$20</p>
        </div>
      </div>
    </div>
  );
};

export default MicrodermabrasionSummaryCard;
