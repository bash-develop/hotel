import React from "react";
import { LiveCoffeToGo1 } from "../../icons/LiveCoffeToGo1";
import { NavigationCarAuto1 } from "../../icons/NavigationCarAuto1";
import { SystemWifiHigh } from "../../icons/SystemWifiHigh";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="group-wrapper">
        <div className="group">
          <div className="div">
            <div className="div-wrapper">
              <div className="group-2">
                <div className="text-wrapper">Прокат авто и парковка</div>
              </div>
            </div>
            <div className="overlap-group">
              <NavigationCarAuto1 className="navigation-car-auto" />
              <div className="div-2" />
            </div>
          </div>
          <div className="group-3">
            <div className="group-4">
              <div className="text-wrapper-2">Бесплатные напитки</div>
            </div>
            <div className="div-2">
              <LiveCoffeToGo1 className="live-coffe-to-go" />
            </div>
          </div>
          <div className="group-5">
            <div className="group-6">
              <div className="text-wrapper-3">Прачечная</div>
            </div>
            <div className="div-2">
              <img className="laundry" alt="Laundry" src="/img/laundry-1-1.png" />
            </div>
          </div>
          <div className="group-7">
            <div className="text-wrapper-4">Бесплатный Wi-Fi</div>
            <div className="div-2">
              <SystemWifiHigh className="system-wifi-high" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
