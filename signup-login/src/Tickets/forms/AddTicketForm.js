import React, { useEffect } from "react";
import { useState } from "react";
import "../App.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// your code here


function AddTicketForm({onCancel, onSubmit, myData}) {

  // console.log(myData);


  const [id, setId] = useState(myData ? myData.id : Math.floor(Math.random() * 10000000));
const [name, setName] = useState(myData ? myData.name : "");
const [quantity, setQuantity] = useState(myData ? myData.quantity : '');
const [count, setCount] = useState(myData ? myData.count : 0);
const [price, setPrice] = useState(myData ? myData.price : '');
const [navButton, setNavButton] = useState('Paid');
const [startDate, setStartDate] = useState(myData ? myData.startDate : null);
const [startTime, setStartTime] = useState(myData ? myData.startTime : null);
const [endDate, setEndDate]  = useState(myData ? myData.endDate : null);
const [endTime, setEndime] = useState(myData ? myData.endTime : null);
const [availability, setAvailability] = useState(myData ? myData.availability : null);

const [advancedSettings, setAdvancedSettings] = useState(myData ? myData.advancedSettings : false);
const [showTicketSale, setShowTicketSale] = useState(myData ? myData.showTicketSale : null);
const [description, setDescription] = useState(myData ? myData.description : null);
const [descriptionCount, setDescriptionCount] = useState(myData ? myData.descriptionCount : null);
const [Visibility, setVisibility] = useState(myData ? myData.Visibility : null);

const [startShowingDate, setStartShowingDate] = useState(myData ? myData.startShowingDate : null);
const [startShowingTime, setStartShowingTime] = useState(myData ? myData.startShowingTime : null);
const [endShowingDate, setEndShowingDate] = useState(myData ? myData.endShowingDate : null);
const [endShowingTime, setEndShowingTime] = useState(myData ? myData.endShowingTime : null);

const [minimumQuantity, setMinimumQuantity] = useState(myData ? myData.minimumQuantity : null);
const [maximumQuantity, setMaximumQuantity] = useState(myData ? myData.maximumQuantity : null);
const [qtyError, setQtyError] = useState(null);

const [salesChannel, setSalesChannel] = useState(myData ? myData.salesChannel : null);

const [eTicket, setETicket] = useState(myData ? myData.eTicket : null);
const [willCall, setWillCall] = useState(myData ? myData.willCall : null);



  // const [id, setId] = useState(Math.floor(Math.random() * 10000000));
  // const [name, setName] = useState("");
  // const [quantity, setQuantity] = useState('');
  // const [count, setCount] = useState(0);
  // const [price, setPrice] = useState('');
  // const [navButton, setNavButton] = useState('Paid')
  // const [startDate, setStartDate] = useState(null);
  // const [startTime, setStartTime] = useState(null);
  // const [endDate, setEndDate]  = useState(null);
  // const [endTime, setEndime] = useState(null);
  // const [availability, setAvailability] = useState(null);
  // const [advancedSettings, setAdvancedSettings] = useState(false);
  // const [showTicketSale, setShowTicketSale] = useState(null);
  // const [description, setDescription] = useState(null);
  // const [descriptionCount, setDescriptionCount] = useState(null);
  // const [Visibility, setVisibility] = useState(null)
  // const [startShowingDate, setStartShowingDate] = useState(null);
  // const [startShowingTime, setStartShowingTime] = useState(null);
  // const [endShowingDate, setEndShowingDate] = useState(null);
  // const [endShowingTime, setEndShowingTime] = useState(null);
  // const [minimumQuantity, setMinimumQuantity] = useState(null);
  // const [maximumQuantity, setMaximumQuantity] = useState(null);
  // const [qtyError, setQtyError] = useState(null);
  // const [salesChannel, setSalesChannel] = useState(null);
  // const [eTicket, setETicket] = useState(null);
  // const [willCall, setWillCall] = useState(null);


  const [formClosed, setFormClosed] = useState(false);


  useEffect(() => {setAvailability('Date & Time')},[])


useEffect(() => {
  if (availability === 'Date & Time') {
    setStartDate(new Date());
    setStartTime("12 AM");
    setEndDate(new Date());
    setEndime('12 AM');
  }
  else {
    setStartDate(null);
    setStartTime(null);
    setEndDate(null);
    setEndime(null);
    }
  
}, [availability]);


useEffect(() => {
  if (advancedSettings) {
    setShowTicketSale(false);
    setDescription("");
    setDescriptionCount(0);
    setVisibility("Visible");
    setStartShowingDate(null);
    setStartShowingTime(null);
    setMinimumQuantity(null);
    setMaximumQuantity(null);
    setSalesChannel('Everywhere');
    setETicket(false);
    setWillCall(false);
  }
}, [advancedSettings]);


useEffect(() => {
  if (Visibility === 'Custom Schedule') {
    setStartShowingDate(new Date());
    setEndShowingDate(new Date());
  }
}, [Visibility]);






function submitHandler(event){
  event.preventDefault();

  const data = {
    id: id,
    name: name,
    quantity: quantity,
    count: count,
    price: price,
    startDate: startDate,
    startTime: startTime,
    endDate: endDate,
    endTime: endTime,
    availability: availability,
    advancedSettings: advancedSettings,
    showTicketSale: showTicketSale,
    description: description,
    descriptionCount: descriptionCount,
    Visibility: Visibility,
    startShowingDate: startShowingDate,
    startShowingTime: startShowingTime,
    endShowingDate: endShowingDate,
    endShowingTime: endShowingTime,
    minimumQuantity: minimumQuantity,
    maximumQuantity: maximumQuantity,
    salesChannel: salesChannel,
    eTicket: eTicket,
    willCall: willCall
  }

  onSubmit(data);


  setName('');
  setQuantity('');
  setCount(0);
  setPrice('');
  setStartDate(new Date());
  setStartTime('12 AM');
  setEndDate(new Date());
  setEndime('12 AM');
  setAvailability('Date & Time');

  setAdvancedSettings(false);
  setShowTicketSale(null);
  setDescription(null);
  setDescriptionCount(null);
  setVisibility(null);
  setStartShowingDate(null);
  setStartShowingTime(null);
  setMinimumQuantity(null);
  setMaximumQuantity(null);
  setSalesChannel(null);
  setETicket(null);
  setWillCall(null);
  setId(Math.floor(Math.random() * 10000000));

  onCancel(true);





}


  return (
    <form style={{overflowY: 'auto', maxHeight: '100vh', width: '100%', overflowX: 'hidden', paddingRight: '1rem'}} onSubmit={submitHandler} >



<div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #ccc'}}>
    <h2>
        Add Tickets
    </h2>
    <p>
        Learn more
    </p>
</div>




{/* _______________________________________________________________________________________________________________________________ */}
        <div className="formButtons" style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>

        


              <button
                id="add-ticket-form-paid"
                type="button"
                className={
                    navButton === "Paid"
                    ? 'active'
                    : 'locationButton'
                }
                onClick={() => {
                    setNavButton("Paid");
                }}
              >
                Paid
              </button>

              <button
                id="add-ticket-form-free"
                type="button"
                className={
                    navButton === "Free"
                    ? 'active'
                    : 'locationButton'
                }
              >
                Free
              </button>

              <button
                id="add-ticket-form-donation"
                type="button"
                className={
                    navButton === "Donation"
                    ? 'active'
                    : 'locationButton'
                }
              >
                Donation
              </button>



              </div>
{/* ____________________________________________________________________________________________________________________ */}

      <div className="inputContainer" style={{marginTop: '1rem'}}>
        <label className="inputLabel">Name</label>
        <input
          id="add-ticket-form-name"
          style={{ fontSize: "0.85rem" }}
          type="text"
          maxLength="50"
          name="eventName"
          value={name}
    onChange={(e) => {
      setName(e.target.value);
      setCount(e.target.value.length);
    }}
          required
          placeholder="Ticket Name."
        />
      </div>

      <div
            style={{flexDirection: 'row', display: 'flex', justifyContent: 'flex-end'
            }}
          >
            <p style={{ color: '#8d8d8d', fontSize: 'small'}}>{count}/50</p>
          </div>


{/* _______________________________________________________________________________________________________________________________ */}
      <div className="inputContainer">
        <label className="inputLabel">Available Quantity</label>
        <input
          id="add-ticket-form-quantity"
          style={{ fontSize: "0.85rem" }}
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          required
        />
      </div>



      {/* ____________________________________________________________________________________________________________________ */}


      <div className="inputContainer" style={{display: 'flex', flexDirection: 'row', maxHeight: '3rem', alignItems:'center', marginTop: '1rem'}}>
        
            <p style={{fontSize: 'large', color: '#ccc', marginRight: '1rem'}}>
                $
            </p>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>


        
        <label className="inputLabel">Price</label>
        <input
          id="add-ticket-form-price"
          style={{ fontSize: "0.85rem" }}
          type="number"
          name="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          required
        />
        </div>
      </div>






      {/* _______________________________________________________________________________________________________________________________ */}



      <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                      marginTop: '1rem'
                    }}
                  >
                    <label className="inputLabel">When are tickets available?</label>
                    <select
                      id="add-ticket-form-availability"
                      style={{ maxHeight: "5rem", outline: 'none', border: 'none', fontSize: 'small' }}
                      onChange={(a) => setAvailability(a.target.value)}
                      name="availability"
                      value={availability}
                    >
                      <option value="Date & Time">Date & Time</option>
                      <option value="When sale ends for...">When sale ends for...</option>
                    </select>
                  </div>






{
    availability === 'Date & Time' && 

    <React.Fragment>
         <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">Sales start</label>
                    <DatePicker
                      id="add-ticket-form-sales-start"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      
                    />
                  </div>

                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">Start Time</label>
                    <select
                      id="add-ticket-form-start-time"
                      style={{ maxHeight: "5rem", outline: 'none', border: 'none' }}
                      onChange={(date) => setStartTime(date.target.value)}
                      name="startTime"
                      value={startTime}
                    >
                      <option value="12 AM">12:00 AM</option>
                      <option value="12:30 AM">12:30 AM</option>
                      <option value="1 AM">1:00 AM</option>
                      <option value="1:30 AM">1:30 AM</option>
                      <option value="2 AM">2:00 AM</option>
                      <option value="2:30 AM">2:30 AM</option>
                      <option value="3 AM">3:00 AM</option>
                      <option value="3:30 AM">3:30 AM</option>
                      <option value="4 AM">4:00 AM</option>
                      <option value="4:30 AM">4:30 AM</option>
                      <option value="5 AM">5:00 AM</option>
                      <option value="5:30 AM">5:30 AM</option>
                      <option value="6 AM">6:00 AM</option>
                      <option value="6:30 AM">6:30 AM</option>
                      <option value="7 AM">7:00 AM</option>
                      <option value="7:30 AM">7:30 AM</option>
                      <option value="8 AM">8:00 AM</option>
                      <option value="8:30 AM">8:30 AM</option>
                      <option value="9 AM">9:00 AM</option>
                      <option value="9:30 AM">9:30 AM</option>
                      <option value="10 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="1 PM">1:00 PM</option>
                      <option value="1:30 PM">1:30 PM</option>
                      <option value="2 PM">2:00 PM</option>
                      <option value="2:30 PM">2:30 PM</option>
                      <option value="3 PM">3:00 PM</option>
                      <option value="3:30 PM">3:30 PM</option>
                      <option value="4 PM">4:00 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                      <option value="5 PM">5:00 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8 PM">8:00 AM</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9 PM">9:00 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                      <option value="10 PM">10:00 PM</option>
                      <option value="10:30 PM">10:30 PM</option>
                      <option value="11 PM">11:00 PM</option>
                      <option value="11:30 PM">11:30 PM</option>
                    </select>
                  </div>
                </div>

                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    width: "100%",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">Sales end</label>
                    <DatePicker
                      id="add-ticket-form-sales-end"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                    />
                  </div>

                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">End Time</label>
                    <select
                      id="add-ticket-form-end-time"
                      onChange={(date) => setEndime(date.target.value)}
                      style={{ maxHeight: "5rem" , outline: 'none', border: 'none' }}
                      name="endTime"
                      value={endTime}
                    >
                      <option value="12 AM">12:00 AM</option>
                      <option value="12:30 AM">12:30 AM</option>
                      <option value="1 AM">1:00 AM</option>
                      <option value="1:30 AM">1:30 AM</option>
                      <option value="2 AM">2:00 AM</option>
                      <option value="2:30 AM">2:30 AM</option>
                      <option value="3 AM">3:00 AM</option>
                      <option value="3:30 AM">3:30 AM</option>
                      <option value="4 AM">4:00 AM</option>
                      <option value="4:30 AM">4:30 AM</option>
                      <option value="5 AM">5:00 AM</option>
                      <option value="5:30 AM">5:30 AM</option>
                      <option value="6 AM">6:00 AM</option>
                      <option value="6:30 AM">6:30 AM</option>
                      <option value="7 AM">7:00 AM</option>
                      <option value="7:30 AM">7:30 AM</option>
                      <option value="8 AM">8:00 AM</option>
                      <option value="8:30 AM">8:30 AM</option>
                      <option value="9 AM">9:00 AM</option>
                      <option value="9:30 AM">9:30 AM</option>
                      <option value="10 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="1 PM">1:00 PM</option>
                      <option value="1:30 PM">1:30 PM</option>
                      <option value="2 PM">2:00 PM</option>
                      <option value="2:30 PM">2:30 PM</option>
                      <option value="3 PM">3:00 PM</option>
                      <option value="3:30 PM">3:30 PM</option>
                      <option value="4 PM">4:00 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                      <option value="5 PM">5:00 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8 PM">8:00 AM</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9 PM">9:00 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                      <option value="10 PM">10:00 PM</option>
                      <option value="10:30 PM">10:30 PM</option>
                      <option value="11 PM">11:00 PM</option>
                      <option value="11:30 PM">11:30 PM</option>
                    </select>
                  </div>
                </div>

    </React.Fragment>
}



     {/* ____________________________________________________________________________________________________________________ */}


                    <div
                    onClick={() => setAdvancedSettings(!advancedSettings)}
                    // className="inputContainer"
                    style={{
                        paddingBottom: '1rem',
                        borderBottom: '1px solid #8d8d8d',
                      marginBottom: "2rem",
                      
                      width: "100%",
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <label className="inputLabel" style={{color: 'black', cursor: 'pointer'}} >Advanced Settings</label>
                    

                    
                    </div>
                    <div 
                    style={{marginBottom: '8rem'}}>


                      


                    
                    {
                        advancedSettings && 
                        
                    <React.Fragment id="add-ticket-form-advanced-settings">


<div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    width: "100%",
                    marginBottom: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  <input
                    id="add-ticket-form-show-ticket-sale"
                    onClick={() => {setShowTicketSale(!showTicketSale)}}
                    type="checkbox"
                    name="displayEndTime"
                    style={{ marginRight: "1rem", marginTop: 0 }}
                  />
                  <div
                    style={{
                      flexDirection: "column",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <label
                      style={{ color: "rgb(60, 60, 60)", fontWeight: "normal", fontSize: 'small' }}
                      htmlFor="displayEndTime"
                    >
                      Show ticket sale end dates and sale status at checkout
                    </label>
                  </div>
                </div>




{/* _______________________________________________________________________________________________________________________________ */}


<div className="inputContainer" style={{marginTop: '1rem'}}>
        <label className="inputLabel">Description</label>
        <textarea
          id="add-ticket-form-description"
          style={{ fontSize: "0.85rem" }}
          type="text"
          maxLength="2500"
          name="description"
          value={description}
    onChange={(e) => {
      setDescription(e.target.value);
      setDescriptionCount(e.target.value.length);
    }}
          placeholder="Tell attendees more about this ticket."
        />
      </div>

      <div
            style={{flexDirection: 'row', display: 'flex', justifyContent: 'flex-end'
            }}
          >
            <p style={{ color: '#8d8d8d', fontSize: 'small'}}>{descriptionCount}/2500</p>
          </div>



          {/* _______________________________________________________________________________________________________________________________ */}



          <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">Visibility</label>
                    <select
                      id="add-ticket-form-Visibility"
                      onChange={(e) => setVisibility(e.target.value)}
                      style={{ maxHeight: "5rem" , outline: 'none', border: 'none' }}
                      name="endTime"
                      value={Visibility}
                    >
                      <option value="Visible">Visible</option>
                      <option value="Hidden">Hidden</option>
                      <option value="Hidden when not on sale">Hidden when not on sale</option>
                      <option value="Custom Schedule">Custom Schedule</option>
                    </select>
                  </div>

                  <div>
                  
                    {
                        Visibility === 'Custom Schedule' && 

                    <React.Fragment id="add-ticket-form-custom-schedule">
                        <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">Start showing on</label>
                    <DatePicker
                      id="add-ticket-form-custom-st-date"
                      selected={startShowingDate}
                      onChange={(date) => setStartShowingDate(date)}
                      
                    />
                  </div>

                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">Start Time</label>
                    <select
                      id="add-ticket-form-custom-st-time"
                      style={{ maxHeight: "5rem", outline: 'none', border: 'none' }}
                      onChange={(date) => setStartShowingTime(date.target.value)}
                      name="startTime"
                      value={startShowingTime}
                    >
                      <option value="12 AM">12:00 AM</option>
                      <option value="12:30 AM">12:30 AM</option>
                      <option value="1 AM">1:00 AM</option>
                      <option value="1:30 AM">1:30 AM</option>
                      <option value="2 AM">2:00 AM</option>
                      <option value="2:30 AM">2:30 AM</option>
                      <option value="3 AM">3:00 AM</option>
                      <option value="3:30 AM">3:30 AM</option>
                      <option value="4 AM">4:00 AM</option>
                      <option value="4:30 AM">4:30 AM</option>
                      <option value="5 AM">5:00 AM</option>
                      <option value="5:30 AM">5:30 AM</option>
                      <option value="6 AM">6:00 AM</option>
                      <option value="6:30 AM">6:30 AM</option>
                      <option value="7 AM">7:00 AM</option>
                      <option value="7:30 AM">7:30 AM</option>
                      <option value="8 AM">8:00 AM</option>
                      <option value="8:30 AM">8:30 AM</option>
                      <option value="9 AM">9:00 AM</option>
                      <option value="9:30 AM">9:30 AM</option>
                      <option value="10 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="1 PM">1:00 PM</option>
                      <option value="1:30 PM">1:30 PM</option>
                      <option value="2 PM">2:00 PM</option>
                      <option value="2:30 PM">2:30 PM</option>
                      <option value="3 PM">3:00 PM</option>
                      <option value="3:30 PM">3:30 PM</option>
                      <option value="4 PM">4:00 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                      <option value="5 PM">5:00 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8 PM">8:00 AM</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9 PM">9:00 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                      <option value="10 PM">10:00 PM</option>
                      <option value="10:30 PM">10:30 PM</option>
                      <option value="11 PM">11:00 PM</option>
                      <option value="11:30 PM">11:30 PM</option>
                    </select>
                  </div>
                </div>

                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    width: "100%",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">Stop Showing on</label>
                    <DatePicker
                      id="add-ticket-form-custom-stop-date"
                      selected={endShowingDate}
                      onChange={(date) => setEndShowingDate(date)}
                    />
                  </div>

                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">End Time</label>
                    <select
                      id="add-ticket-form-custom-end-time"
                      onChange={(date) => setEndShowingTime(date.target.value)}
                      style={{ maxHeight: "5rem" , outline: 'none', border: 'none' }}
                      name="endTime"
                      value={endShowingTime}
                    >
                      <option value="12 AM">12:00 AM</option>
                      <option value="12:30 AM">12:30 AM</option>
                      <option value="1 AM">1:00 AM</option>
                      <option value="1:30 AM">1:30 AM</option>
                      <option value="2 AM">2:00 AM</option>
                      <option value="2:30 AM">2:30 AM</option>
                      <option value="3 AM">3:00 AM</option>
                      <option value="3:30 AM">3:30 AM</option>
                      <option value="4 AM">4:00 AM</option>
                      <option value="4:30 AM">4:30 AM</option>
                      <option value="5 AM">5:00 AM</option>
                      <option value="5:30 AM">5:30 AM</option>
                      <option value="6 AM">6:00 AM</option>
                      <option value="6:30 AM">6:30 AM</option>
                      <option value="7 AM">7:00 AM</option>
                      <option value="7:30 AM">7:30 AM</option>
                      <option value="8 AM">8:00 AM</option>
                      <option value="8:30 AM">8:30 AM</option>
                      <option value="9 AM">9:00 AM</option>
                      <option value="9:30 AM">9:30 AM</option>
                      <option value="10 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="1 PM">1:00 PM</option>
                      <option value="1:30 PM">1:30 PM</option>
                      <option value="2 PM">2:00 PM</option>
                      <option value="2:30 PM">2:30 PM</option>
                      <option value="3 PM">3:00 PM</option>
                      <option value="3:30 PM">3:30 PM</option>
                      <option value="4 PM">4:00 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                      <option value="5 PM">5:00 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8 PM">8:00 AM</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9 PM">9:00 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                      <option value="10 PM">10:00 PM</option>
                      <option value="10:30 PM">10:30 PM</option>
                      <option value="11 PM">11:00 PM</option>
                      <option value="11:30 PM">11:30 PM</option>
                    </select>
                  </div>
                </div>
                </React.Fragment>
                    }
                  </div>

                  <p>Tickets per order</p>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

                  <div className="inputContainer" style={{marginRight: '10%', width:'45%'}}>
        <label className="inputLabel">Minimum quantity</label>
        <input
          id="add-ticket-form-minimum"
          style={{ fontSize: "0.85rem" }}
          type="number"
          name="quantity"
          value={minimumQuantity}
          onChange={(e) => {
            setMinimumQuantity(e.target.value);
          }}
        />
      </div>


      <div className="inputContainer" style={{width:'45%'}}>
        <label className="inputLabel">Maximum quantity</label>
        <input
          id="add-ticket-form-maximum"
          style={{ fontSize: "0.85rem" }}
          type="number"
          name="quantity"
          value={maximumQuantity}
          onChange={(e) => {
            setMaximumQuantity(e.target.value);
            if (minimumQuantity > e.target.value){setQtyError(true)}
            else setQtyError(false);
          }}
        />
      </div>
     

                  </div>

                  {qtyError && <p>Min must be less than or equal to max.</p>}





                  {/* _______________________________________________________________________________________________________________________________ */}



                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                      marginTop: '1rem'
                    }}
                  >
                    <label className="inputLabel">Sales Channel</label>
                    <select
                      id="add-ticket-form-channel"
                      onChange={(e) => setSalesChannel(e.target.value)}
                      style={{ maxHeight: "5rem" , outline: 'none', border: 'none' }}
                      name="endTime"
                      value={salesChannel}
                    >
                      <option value="Everywhere">Everywhere</option>
                      <option value="Online only">Online only</option>
                      <option value="At the door only">At the door only</option>
                    </select>
                  </div>



                  <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    width: "100%",
                    marginBottom: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  <input
                    id="add-ticket-form-eticket"
                    onClick={() => {setETicket(!eTicket)}}
                    type="checkbox"
                    name="displayEndTime"
                    style={{ marginRight: "1rem", marginTop: 0 }}
                  />
                  <div
                    style={{
                      flexDirection: "column",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <label
                      style={{ color: "rgb(60, 60, 60)", fontWeight: "normal", fontSize: 'small' }}
                      htmlFor="eTicket"
                    >
                      eTicket
                    </label>
                  </div>
                </div>



                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    width: "100%",
                    marginBottom: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  <input
                    id="add-ticket-form-willcall"
                    onClick={() => {setWillCall(!willCall)}}
                    type="checkbox"
                    name="displayEndTime"
                    style={{ marginRight: "1rem", marginTop: 0 }}
                  />
                  <div
                    style={{
                      flexDirection: "column",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <label
                      style={{ color: "rgb(60, 60, 60)", fontWeight: "normal", fontSize: 'small' }}
                      htmlFor="Will Call"
                    >
                      Will Call
                    </label>
                  </div>
                </div>


                    </React.Fragment>
                    }


</div>




<div className="mainButton"
  style={{
    borderTop: "1px solid #ccc",
    padding: "1rem",
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "2rem",
    backgroundColor: "#fff",
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '5rem'
  }}
>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
    <div type="cancel" onClick={() => {
        setFormClosed(!formClosed)
        onCancel(formClosed);}} style={{height: '3rem', width: '45%', backgroundColor: 'white', border: '2px solid #ccc', color: '#555555', borderRadius: '5px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>Cancel</div>
    <button id="add-ticket-form-submit" type="submit" style={{height: '3rem', width: '45%'}} >Next</button>
    </div>
  
</div>

     


    </form>
  );
}

export default AddTicketForm;