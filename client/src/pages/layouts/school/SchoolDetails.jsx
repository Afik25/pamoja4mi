import React, { useState } from "react";
import "./school-details.css";
import { FaArrowLeft } from "../../../middlewares/icons";
import { useNavigate, useLocation } from "react-router-dom";
//
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

const SchoolDetails = () => {
  const [onOpen, setOnOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let item = location.state.item;

  return (
    <div className="school-details">
      <div className="inner">
        <div className="sd-left">
          <button className="button" onClick={() => navigate(-1)}>
            <FaArrowLeft className="icon" />
            <span>Back</span>
          </button>
          <div className="sd-left-head">
            <span>School Name :</span>
            <h2 className="title t-2">{"item?.code"}</h2>
          </div>
          <div className="sd-left-details">
            <div className="column">
              <span className="title t-3">Agent</span>
              <h2 className="title t-2">{"item?.user_name"}</h2>
            </div>
            <div className="column">
              <span className="title t-3">Date d'Emission</span>
              <h2 className="title t-2">
                {moment("item?.dates").format("LLLL")}
              </h2>
            </div>
            <div className="column">
              <span className="title t-3">
                Nombre total d'Articles Commandés
              </span>
              <h2 className="title t-2">{"item?.detailsOrder?.length"}</h2>
            </div>
            <div className="column">
              <span className="title t-3">Quantitée Totale Commandée</span>
              <h2 className="title t-2">{"item?.total_quantity"}</h2>
            </div>
            <div className="column">
              <span className="title t-3">Montant Total (CDF)</span>
              <h2 className="title t-2">{"item?.pay_from_discount"}</h2>
            </div>
            <div className="column">
              <span className="title t-3">Remise</span>
              <h2 className="title t-2">{"item?.discount"}</h2>
            </div>
            <div className="column">
              <span className="title t-3">Remise appliquée en (Type)</span>
              <h2 className="title t-2">
                {"item?.discount_type" === "percent"
                  ? "Pourcentage (%)"
                  : "Montant Total"}
              </h2>
            </div>
            <div className="column">
              <span className="title t-3">Mode de paiement</span>
              <h2 className="title t-2">{"item?.pay_mode"}</h2>
            </div>
            <div className="column">
              <span className="title t-3">Client</span>
              <h2 className="title t-2">{"item?.customer"}</h2>
            </div>
            <div className="column">
              <span className="title t-3">État de la commande (Statut)</span>
              <h2 className="title t-2">{"item?.status"}</h2>
            </div>
          </div>
        </div>
        <div className="sd-right">
          <div className="sdr-header">
            <h3 className="title t-2">
              School Streams <span>(5 streams)</span>
            </h3>
            <div className="sdr-search-box"></div>
            <div className="sdr-actions">
              <button className="button btn-activation" onClick={() => null}>
                Desactivate
              </button>
              <button
                className="button btn-new"
                onClick={() => setOnOpen(true)}
              >
                New Stream
              </button>
            </div>
          </div>
          <div className="sdr-container">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th className="col-05 text-align-center">
                      <input type="checkbox" />
                    </th>
                    <th className="col-1 text-align-left">Date Enreg.</th>
                    <th className="col-1 text-align-center">Name</th>
                    <th className="col-05 text-align-center">
                      Total Inscriptions
                    </th>
                    <th className="col-1 text-align-center">Total Female</th>
                    <th className="col-1 text-align-center">Total Male</th>
                    <th className="col-05 text-align-center">Status</th>
                    <th className="col-1 text-align-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {isEmpty(item?.detailsOrder) ? (
                  <tr>
                    <td
                      colSpan={6}
                      style={{ textAlign: "center", color: "gray" }}
                    >
                      La commande est vide!
                    </td>
                  </tr>
                ) : (
                  item?.detailsOrder?.map((el, idx) => {
                    let _article = articles?.data?.articles.filter(
                      (_art, _) => _art?.id === el?.article_id
                    );
                    return (
                      <tr key={idx}>
                        <td className="col-2 text-align-left">
                          {_article[0]?.title}
                        </td>
                        <td className="col-1 text-align-center">
                          {el?.quantity}
                        </td>
                        <td className="col-2 text-align-center">
                          {parseInt(_article[0]?.price).toFixed(2)}
                        </td>
                        <td className="col-1 text-align-center">
                          {el?.discount}
                          {el?.discount_type === "percent" ? " %" : " CDF"}
                        </td>
                        <td className="col-1 text-align-center">
                          {parseInt(el?.pay_from_discount).toFixed(2)}
                        </td>
                        <td className="col-2 text-align-center">
                          {parseInt(el?.total_price).toFixed(2)}
                        </td>
                        <td className="col-2 text-align-center">
                          <button
                            className="button"
                            //   onClick={() => onUpdate(el, idx)}
                          >
                            <FaEdit className="icon" />
                          </button>
                          <button
                            className="button"
                            //   onClick={() => onRemove(idx)}
                          >
                            <FaTrashAlt className="icon" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {onOpen && (
        <div className="outer">
          <div className="wrapper">
            <div className="ow-head">
              <h3 className="title t-2">New School's Stream</h3>
              <span
                onClick={() => {
                  setOnOpen(false);
                  // setIsUpdating(false);
                  // reset();
                }}
              >
                &times;
              </span>
            </div>
            <hr />
            <div className="ow-body"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolDetails;
