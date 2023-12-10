import React from "react";
import { images } from "../../../assets/images";
export default function HeroSection() {
  return (
    <>
      <div className="heroSection">
        <div className="row">
          <div className="col-12">
            <div className="bg-1">
              <img src={images.bg1} className="bg bg-1" />
            </div>
            <div className="bg-2">
              <img src={images.bg2} className="bg bg-2" />
            </div>
          </div>
        </div>
        <div className="container text-white">
          <div className="row hero">
            <div className="col-12 col-md-12">
              <div className="div-1">
                <h1>
                  PAKISTAN &ensp;NO. 1 <br /> HEALTH&ensp; CARE&ensp;
                  MARKETPLACE
                </h1>
                <div className="button">
                  <div>
                    <button
                      type="button"
                      className="btn btn-secondary rounded-pill mb-3 button1 "
                    >
                      DOWNLOAD APP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
