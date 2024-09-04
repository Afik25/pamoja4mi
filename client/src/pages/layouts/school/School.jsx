import React, { useState } from "react";
import "./school.css";
import {
  FaPlus,
  BsFillEyeSlashFill,
  BsFillEyeFill,
} from "../../../middlewares/icons";
import { useNavigate } from "react-router-dom";

const School = () => {
  const [onOpen, setOnOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="school">
      <div className="inner">
        <div className="school-head">
          <div className="sh-left">
            <h2 className="title t-2">
              School Management <span>(5 Schools)</span>
            </h2>
            <p className="title t-3">
              From Here, school management is about creation and affecting their
              relative streams.
            </p>
          </div>
          <div className="sh-right">
            <button className="button">
              <BsFillEyeSlashFill className="icon" />
              <span>Desactivate</span>
            </button>
            <button className="button" onClick={() => setOnOpen(true)}>
              <FaPlus className="icon" />
              <span>New School</span>
            </button>
          </div>
        </div>
        <div className="school-content">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th className="col-05 text-align-center">
                    <input type="checkbox" />
                  </th>
                  <th className="col-1 text-align-left">Date Enreg.</th>
                  <th className="col-3 text-align-left">Name</th>
                  <th className="col-05 text-align-center">Total Streams</th>
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
                <tr>
                  <td className="col-05 text-align-center">
                    <input type="checkbox" />
                  </td>
                  <td className="col-1 text-align-left">Sat 24 Aug 2:07 PM</td>
                  <td className="col-3 text-align-left">School of Data</td>
                  <td className="col-05 text-align-center">5</td>
                  <td className="col-05 text-align-center">5</td>
                  <td className="col-1 text-align-center">5</td>
                  <td className="col-1 text-align-center">5</td>
                  <td className="col-05 text-align-center">5</td>
                  <td className="col-1 text-align-right">
                    <button
                      className="button"
                      onClick={() =>
                        navigate(`/admin/school/${"123456"}/details`, {
                          state: {
                            item: "item",
                          },
                        })
                      }
                    >
                      Details
                    </button>
                  </td>
                </tr>
                {/* {isEmpty(users?.data?.users) ? (
                  <tr>
                    <td
                      colSpan={9}
                      style={{ textAlign: "center", color: "gray" }}
                    >
                      {users?.data?.message}
                    </td>
                  </tr>
                ) : (
                  users?.data?.users?.map((item, idx) => {
                    return (
                      <tr key={idx}>
                        <td className="col-05 text-align-center">
                          <input type="checkbox" />
                        </td>
                        <td className="col-1 text-align-left">
                          {moment(item?.createdAt).format("LLLL")}
                        </td>
                        <td className="col-3 text-align-left">
                          <div className="row">
                            <img
                              src={
                                !item?.thumbnails
                                  ? process.env.PUBLIC_URL + "/user.png"
                                  : `${process.env.REACT_APP_API_SERVER_URL}:${process.env.REACT_APP_API_SERVER_PORT}/images/${item?.thumbnails}`
                              }
                              alt={
                                !item?.thumbnails
                                  ? "user-img"
                                  : item?.thumbnails
                              }
                            />
                            <span>
                              {capitalize(item?.firstname)}{" "}
                              {capitalize(item?.lastname)}
                            </span>
                          </div>
                        </td>
                        <td className="col-05 text-align-left">
                          {capitalize(item?.gender)}
                        </td>
                        <td className="col-05 text-align-center">
                          {item?.telephone}
                        </td>
                        <td className="col-1 text-align-center">
                          {item?.mail}
                        </td>
                        <td className="col-1 text-align-left">
                          {item?.sys_role}
                        </td>
                        <td className="col-05 text-align-center">
                          <span
                            className={
                              item?.status === 1
                                ? "status validate"
                                : "status pending"
                            }
                          >
                            {item?.status === 1 ? "actif" : "inactif"}
                          </span>
                        </td>
                        <td className="col-1 text-align-right">
                          <button
                            className="button btn-action"
                            onClick={() => {
                              setIsUpdating(true);
                              setOnNew(true);
                              onUpdate(item);
                            }}
                          >
                            Mise à jour
                          </button>
                          <button
                            className="button btn-action"
                            onClick={() => onActivation(item?.status, item?.id)}
                          >
                            {item?.status === 1 ? "Desactiver" : "Activer"}
                          </button>
                          <button className="button btn-action">
                            Contacter
                          </button>
                          <button
                            className="button btn-action"
                            onClick={() => navigate('/admin/hr/details', {
                              state: {
                                item: item,
                              }
                            })}
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )} */}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <div className="p-left">
              <select>
                <option value={5}>5 lignes</option>
                <option value={10}>10 lignes</option>
                <option value={15}>15 lignes</option>
                <option value={20}>20 lignes</option>
              </select>
              <span>1-5 de 50 resultats</span>
            </div>
            <div className="p-right">
              <button className="button btn-previous">Précedent</button>
              <button className="button btn-next">Suivant</button>
            </div>
          </div>
        </div>
      </div>
      {onOpen && (
        <div className="outer">
          <div className="wrapper">
            <div className="ow-head">
              <h3 className="title t-2">New School</h3>
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

export default School;
