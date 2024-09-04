import React, { useState } from "react";
import "./user.css";
import { FaPlus, BsSearch, BsFilter } from "../../../middlewares/icons";

const User = () => {
  const [onOpen, setOnOpen] = useState(false);
  return (
    <div className="users">
      <div className="inner">
        <h2 className="title t-1">
          Users <span>(50 membres)</span>
        </h2>
        <div className="actions">
          <div className="left">
            <div className="inputs-form">
              <BsSearch className="icon" />
              <input type="text" placeholder="Recherche" />
            </div>
            <button className="button btn-validate">
              <BsFilter className="icon" /> Filtrer
            </button>
            <select>
              <option value={""}>Tous</option>
              <option value={"pasteurs"}>Pasteurs</option>
              <option value={"enfants"}>Les enfants</option>
              <option value={"protocoles"}>Protocoles</option>
              <option value={"ouvriers"}>Ouvriers</option>
            </select>
          </div>
          <div className="right">
            <button className="button btn-validate">Desactivate</button>
            <button className="button btn-new" onClick={() => setOnOpen(true)}>
              <FaPlus className="icon" /> <span>Nouveau</span>
            </button>
          </div>
        </div>
        <div className="content">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th className="col-05 text-align-center">
                    <input type="checkbox" />
                  </th>
                  <th className="col-1 text-align-left">Date Enreg.</th>
                  <th className="col-3 text-align-left">Noms</th>
                  <th className="col-05 text-align-left">Genre</th>
                  <th className="col-05 text-align-center">Téléphone</th>
                  <th className="col-1 text-align-center">Adresse E-mail</th>
                  <th className="col-1 text-align-left">Rôle</th>
                  <th className="col-05 text-align-center">Statut Compte</th>
                  <th className="col-1 text-align-right">Actions</th>
                </tr>
              </thead>
              <tbody>
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
            <div className="head">
              <h3 className="title t-2">New Employee</h3>
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
            {/* <form onSubmit={handleSubmit(onSubmit)}>
              {isShowingMessage && (
                <MessageBox type={message.type} text={message.text} />
              )}
              <div className="img-wrapper">
                <img
                  src={
                    imagePreview === ""
                      ? process.env.PUBLIC_URL + "/user.png"
                      : imagePreview
                  }
                  alt="img-view"
                />
                <input
                  type="file"
                  className="input-file"
                  {...register("thumbnail", {
                    onChange: (e) =>
                      setImagePreview(URL.createObjectURL(e.target.files[0])),
                  })}
                />
                {imagePreview && (
                  <button
                    className="button"
                    onClick={() => {
                      setImagePreview("");
                      setValue("thumbnail", "");
                    }}
                  >
                    Supprimer la photo
                  </button>
                )}
              </div>
              <div className="row">
                <div className="input-div">
                  <input
                    type="text"
                    className="input-form"
                    autoComplete="none"
                    placeholder=" "
                    {...register("firstname")}
                  />
                  <label htmlFor="firstname" className="label-form">
                    Prénom
                  </label>
                  {errors.firstname && (
                    <span className="fade-in">{errors.firstname.message}</span>
                  )}
                </div>
                <div className="input-div">
                  <input
                    type="text"
                    className="input-form"
                    autoComplete="none"
                    placeholder=" "
                    {...register("lastname")}
                  />
                  <label htmlFor="lastname" className="label-form">
                    Nom
                  </label>
                  {errors.lastname && (
                    <span className="fade-in">{errors.lastname.message}</span>
                  )}
                </div>
              </div>
              <div className="input-div">
                <select className="input-select" {...register("gender")}>
                  <option value={""}>--- Selectionner un genre ---</option>
                  <option value={"femme"}>Femme</option>
                  <option value={"homme"}>Homme</option>
                </select>
                {errors.gender && (
                  <span className="fade-in">{errors.gender.message}</span>
                )}
              </div>
              <div className="row">
                <div className="input-div">
                  <input
                    type="text"
                    className="input-form"
                    autoComplete="none"
                    placeholder=" "
                    {...register("telephone")}
                  />
                  <label htmlFor="telephone" className="label-form">
                    Téléphone
                  </label>
                  {errors.telephone && (
                    <span className="fade-in">{errors.telephone.message}</span>
                  )}
                </div>
                <div className="input-div">
                  <input
                    type="text"
                    className="input-form"
                    autoComplete="none"
                    placeholder=" "
                    {...register("mail")}
                  />
                  <label htmlFor="mail" className="label-form">
                    Adresse e-mail
                  </label>
                  {errors.mail && (
                    <span className="fade-in">{errors.mail.message}</span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="input-div">
                  <input
                    type="date"
                    className="input-form"
                    autoComplete="none"
                    placeholder=" "
                    {...register("birth")}
                  />
                  <label htmlFor="birth" className="label-form">
                    Date de Naissance
                  </label>
                  {errors.birth && (
                    <span className="fade-in">{errors.birth.message}</span>
                  )}
                </div>
                <div className="input-div">
                  <input
                    type="text"
                    className="input-form"
                    autoComplete="none"
                    placeholder=" "
                    {...register("birth_location")}
                  />
                  <label htmlFor="birth_location" className="label-form">
                    Lieu de Naissance
                  </label>
                  {errors.birth_location && (
                    <span className="fade-in">
                      {errors.birth_location.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="input-div">
                <select className="input-select" {...register("role_id")}>
                  <option value={""}>--- Selectionner un rôle ---</option>
                  {isEmpty(roles?.data?.roles) ? (
                    <option value={""}>{roles?.data?.message}</option>
                  ) : (
                    roles?.data?.roles?.map((item, i) => {
                      return (
                        <option value={item?.id} key={i}>
                          {item?.title}
                        </option>
                      );
                    })
                  )}
                </select>
                {errors.role_id && (
                  <span className="fade-in">{errors.role_id.message}</span>
                )}
              </div>
              <div className="input-div">
                <select className="input-select" {...register("department_id")}>
                  <option value={""}>
                    --- Selectionner un Département ---
                  </option>
                  {isEmpty(departments?.data?.departments) ? (
                    <option value={""}>{departments?.data?.message}</option>
                  ) : (
                    departments?.data?.departments?.map((item, i) => {
                      return (
                        <option value={item?.id} key={i}>
                          {item?.title}
                        </option>
                      );
                    })
                  )}
                </select>
                {errors.department_id && (
                  <span className="fade-in">
                    {errors.department_id.message}
                  </span>
                )}
              </div>
              <div className="input-div">
                <select className="input-select" {...register("sys_role")}>
                  <option value={""}>--- Select System Role ---</option>
                  <option value={"n/a"}>Non Assigné</option>
                  <option value={"pastor"}>Pasteur</option>
                  <option value={"protocole"}>Protocole</option>
                  <option value={"monitor"}>Moniteur/trice</option>
                </select>
                {errors.sys_role && (
                  <span className="fade-in">{errors.sys_role.message}</span>
                )}
              </div>
              <button type="submit" className="button">
                {isUpdating
                  ? isSending
                    ? "Mise à jour des informations..."
                    : "Mette à Jour"
                  : isSending
                  ? "Enregistrement..."
                  : "Enregistrer"}
              </button>
            </form> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
