import React, { useState } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import AvanaLogo from "./images/avana-logo.png";
import ImageAsset from "./images/image-asset.jpeg";
import UserProfile from "./images/user-profile.jpg";
import Card from "./components/Card/Card";

function App() {
  const [avanaBranch, setAvanaBranch] = useState("Mumbai");

  const branchChangeHandler = (event) => {
    setAvanaBranch(event.target.value);
  }

  return (
    
    <div className="app">
      <Header companyLogo={AvanaLogo} profileImage={ImageAsset} />
      <div className="main">
        <div class="customer-reg__navigation">
          <div class="page_link">
            <i class="bi bi-person big-icon"></i> USER REGISTRATION
          </div>
          <span class="angle-sign">&gt;</span>
          <div class="page_link__active">
            <i class="bi bi-people big-icon"></i> CUSTOMER & VERTICAL CREATION
          </div>
        </div>

        <Card className="customer__vertical-creation">
          <div>
            <img src={UserProfile} className="customer__profile-img" />
          </div>
          <div className="customer__profile-info">
            <p>Yogesh Awasthi</p>
            <p>7765022015</p>
            <p>yogeshawasthi@hotmail.com</p>
          </div>
          <div className="vertical-line"></div>
          <div className="customer__profile-address">
            <p>Hexa Logistics Pvt.Ltd. Street</p>
            <p>Number 5645, Sapru Marg</p>
            <p>Mumbai, Maharastra</p>
            <p>India, 230532</p>
          </div>
        </Card>

        {/* Second card */}
        <div class="customer_details__navigation">
          <div class="page_link__active">
            <i class="bi bi-person big-icon"></i> CUSTOMER DETAILS
          </div>
        </div>
        <form>
          <Card className="customer__details">
            <div className="input-group">
              <label>Customer Name</label>
              <select className="form-select">
                <option>Reliance Mumbai</option>
              </select>
            </div>

            <div>
              <label>Vertical</label>
              <div className="checkbox-group">
                <label htmlFor="coastal" className="checkbox">
                  <input
                    type="checkbox"
                    id="coastal"
                    className="checkbox__input"
                  />
                  <div className="checkbox__box"></div>
                  Coastal
                </label>

                <label htmlFor="liner" className="checkbox">
                  <input
                    type="checkbox"
                    id="liner"
                    className="checkbox__input"
                  />
                  <div className="checkbox__box"></div>
                  Liner
                </label>
              </div>
            </div>

            <div className="avana_financial">
              <div className="input-group">
                <label>Avana Financial Company ID</label>
                <input type="text" className="form-input" />
              </div>

              <div className="input-group">
                <label>Avana Financial Customer ID</label>
                <input type="text" className="form-input" />
              </div>
            </div>

            <div className="input-group">
              <label>Avana Branch</label>
              <select className="form-select" onChange={branchChangeHandler}>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
            </div>

            <div className="customer_details__location">
              <div className="page_link__active">
                <i className="bi bi-geo-alt"></i> {avanaBranch}
              </div>
            </div>

            <div className="customer_details__inputs">
              <input
                type="email"
                placeholder="Sales Team Email Id(s)"
                className="form-input"
              />
              <input
                type="email"
                placeholder="Customer Service Email Id(s)"
                className="form-input"
              />
              <input
                type="email"
                placeholder="Documentation Email Id(s)"
                className="form-input"
              />
            </div>
          </Card>

          <div className="btn-group">
            <button type="submit" className="btn btn-save">
              Save
            </button>
            <button type="submit" className="btn btn-save">
              Save & Add More
            </button>
            <button type="reset" className="btn btn-cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default App;
