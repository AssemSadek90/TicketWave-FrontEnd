/**
@module EventDetails
*/
import React, { useState } from "react";
import styles from "./EventDetails.module.css";
import Popup from "../Booking-popup/Booking-popup";
import EventDescription from "./EventDescription";
import LocationAndTime from "./LocationAndTime";
import EventInfo from "./EventInfo";
import SocialShare from "./SocialShare";
import AsideBooking from "./AsideBooking";
import Banner from "./Banner/Banner";
/**
Event details component
@function
@param {object} event - Event data
@returns {JSX.Element} EventDetails component
*/
function EventDetails({ event }) {
  const isMobile = window.matchMedia("(max-width: 960px)").matches;
  const [showOverlay, setShowOverlay] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <>
      <Banner event={event} />
      <div
        className="container m-auto row mt-5"
        // className={styles.main_body}
      >
        {showOverlay && (
          <Popup
            event={event}
            closeOverlay={setShowOverlay}
            count={count}
            isMobile={isMobile}
          />
        )}

        <div
          className="col-12 col-xl-9"
          // className={styles.left_part}
        >
          <EventDescription event={event} isMobile={isMobile} />

          <LocationAndTime event={event} isMobile={isMobile} />

          <div>
            <EventInfo event={event} isMobile={isMobile} />

            <SocialShare event={event} isMobile={isMobile} />
          </div>
        </div>

        <div
          className="col-12 col-xl-3"
          // className={styles.aside_booking_container}
        >
          {event.fully_booked === false ? (
            <AsideBooking
              openOverlay={setShowOverlay}
              alterCount={setCount}
              count={count}
              event={event}
              isMobile={isMobile}
            />
          ) : (
            <a
              class="btn btn-secondary disabled w-100 sticky-top"
              role="button"
              aria-disabled="true"
              href="j"
              style={{ top: "24px" }}
            >
              Event Fully Booked
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default EventDetails;
