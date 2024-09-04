import React, { useState } from "react";
import "./users-details.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "../../../middlewares/icons";
import moment from "moment";
import swal from "sweetalert";
import { capitalize } from "../../../utils/utils";

const UserDetails = () => {
  const [isButtonSelected, setIsButtonSelected] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [isShowingMessage, setIsShowingMessage] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [imagePreview, setImagePreview] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  let item = location.state.item;
  // 

  return (
    <div className="users-details">
      <div className="ud-left">
        <button className="button" onClick={() => navigate(-1)}>
          <FaArrowLeft className="icon" />
          <span>Retour</span>
        </button>
        <div className="profile-image">
          <img
            src={
              !item?.thumbnails
                ? process.env.PUBLIC_URL + "/user.png"
                : `${process.env.REACT_APP_API_SERVER_URL}:${process.env.REACT_APP_API_SERVER_PORT}/images/${item?.thumbnails}`
            }
            alt={!item?.thumbnails ? "user-img" : item?.thumbnails}
          />
        </div>
        <div className="profile-details">
          <div className="column">
            <span className="title t-3">Prénom</span>
            <h2 className="title t-2">{item?.firstname}</h2>
          </div>
          <div className="column">
            <span className="title t-3">Nom</span>
            <h2 className="title t-2">{item?.lastname}</h2>
          </div>
          <div className="column">
            <span className="title t-3">Genre</span>
            <h2 className="title t-2">{item?.gender}</h2>
          </div>
          <div className="column">
            <span className="title t-3">Téléphone</span>
            <h2 className="title t-2">{item?.telephone}</h2>
          </div>
          <div className="column">
            <span className="title t-3">Adresse E-mail</span>
            <h2 className="title t-2">{item?.mail}</h2>
          </div>
          <div className="column">
            <span className="title t-3">Date de Naissance</span>
            <h2 className="title t-2">{item?.birth}</h2>
          </div>
          <div className="column">
            <span className="title t-3">Lieu de Naissance</span>
            <h2 className="title t-2">{item?.birth_location}</h2>
          </div>
          <div className="column">
            <span className="title t-3">Adresse Physique</span>
            <h2 className="title t-2">{item?.birth}</h2>
          </div>
          <div className="column">
            <span className="title t-3">Département</span>
            <h2 className="title t-2">{item?.birth}</h2>
          </div>
          <div className="column">
            <span className="title t-3">Rôle</span>
            <h2 className="title t-2">{item?.birth}</h2>
          </div>
          <div className="column">
            <span className="title t-3">Rôle Système</span>
            <h2 className="title t-2">{item?.sys_role}</h2>
          </div>
        </div>
      </div>
      <div className="ud-right">
        <div className="mdr-actions">
          <button
            className={isButtonSelected === 0 ? "button selected" : "button"}
            onClick={() => setIsButtonSelected(0)}
          >
            Paternité
          </button>
          <button
            className={isButtonSelected === 1 ? "button selected" : "button"}
            onClick={() => setIsButtonSelected(1)}
          >
            Ajouter Paternité
          </button>
          <button
            className={isButtonSelected === 2 ? "button selected" : "button"}
            onClick={() => setIsButtonSelected(2)}
          >
            Contacter
          </button>
          <button
            style={{ backgroundColor: "brown", color: "whitesmoke" }}
            className="button"
            onClick={() =>
              swal({
                title: `Voulez-vous créer un nouveau mot de passe pour ${capitalize(
                  item?.firstname
                )} - ${capitalize(item?.lastname)} ?`,
                text: "Une fois crée, la personne recevra le mot de passe par E-mail et lui permettra d'effectuer les actions spécifique selon son rôle système.",
                icon: "warning",
                buttons: ["Annuler", "Oui, crée le!"],
                dangerMode: false,
              }).then((isConfirm) => {
                if (isConfirm) {
                  swal({
                    title: "Processus de Création de Mot de passe",
                    text: `Nouveau mot de passe pour ${capitalize(
                      item?.firstname
                    )} - ${capitalize(item?.lastname)} crée avec succes!`,
                    icon: "success",
                  }).then(function () {
                    // form.submit(); // <--- submit form programmatically
                  });
                } else {
                  swal(
                    "Processus de Création de Mot de passe",
                    `Vous avez annulé le processus de création du nouveau mot de passe pour ${capitalize(
                      item?.firstname
                    )} - ${capitalize(item?.lastname)}`,
                    "error"
                  );
                }
              })
            }
          >
            Générer le mot de passe
          </button>
          <button
            className={isButtonSelected === 3 ? "button selected" : "button"}
            onClick={() => setIsButtonSelected(3)}
          >
            Mise à jour
          </button>
        </div>
        <div className="mdr-container">
          {isButtonSelected === 0 && (
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
                  <tr>
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
                            !item?.thumbnails ? "user-img" : item?.thumbnails
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
                    <td className="col-1 text-align-center">{item?.mail}</td>
                    <td className="col-1 text-align-left">{item?.sys_role}</td>
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
                      <button className="button btn-action">Annuler</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {isButtonSelected === 1 && (
            <>
              <div className="search-box">
                <div className="input-div">
                  <input
                    type="text"
                    className="input-form"
                    autoComplete="none"
                    placeholder=" "
                    // {...register("telephone")}
                  />
                  <label htmlFor="telephone" className="label-form">
                    Saisir le nom ou prénom ou téléphone ou e-mail...
                  </label>
                  {/* {errors.telephone && (
                    <span className="fade-in">{errors.telephone.message}</span>
                  )} */}
                </div>
                <button className="button">Rechercher</button>
              </div>
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
                      <th className="col-1 text-align-center">
                        Adresse E-mail
                      </th>
                      <th className="col-1 text-align-left">Rôle</th>
                      <th className="col-05 text-align-center">
                        Statut Compte
                      </th>
                      <th className="col-1 text-align-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
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
                              !item?.thumbnails ? "user-img" : item?.thumbnails
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
                      <td className="col-1 text-align-center">{item?.mail}</td>
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
                        <button className="button btn-action">
                          Ajouter la parenté
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
          {isButtonSelected === 2 && (
            <form className="contacts">
              <h3 className="title t-2">Choisissez le canal de contact</h3>
              <div className="contact-channels">
                <button className="button selected">
                  Contactez par E-mail
                </button>
                <button className="button">Contactez par SMS</button>
              </div>
              <div className="input-div">
                <input
                  type="text"
                  className="input-form"
                  autoComplete="none"
                  placeholder=" "
                  // {...register("title")}
                />
                <label htmlFor="title" className="label-form">
                  Sujet du Message
                </label>
                {/* {errors.title && (
                  <span className="fade-in">{errors.title.message}</span>
                )} */}
              </div>
              <div className="input-div">
                <textarea
                  type="text"
                  className="input-textarea"
                  autoComplete="none"
                  placeholder=" "
                  rows={10}
                  // {...register("description")}
                />
                <label htmlFor="description" className="label-form">
                  Contenu du Message
                </label>
                {/* {errors.description && (
                  <span className="fade-in">{errors.description.message}</span>
                )} */}
              </div>
              <div className="sending-box">
                <button className="button">Envoyer le message</button>
              </div>
            </form>
          )}
          {isButtonSelected === 3 && (
            <form className="update-box">
              {/* {isShowingMessage && (
                <MessageBox type={message.type} text={message.text} />
              )} */}
              <div className="img-wrapper">
                <img
                  // src={
                  //   imagePreview === ""
                  //     ? process.env.PUBLIC_URL + "/user.png"
                  //     : imagePreview
                  // }
                  src={process.env.PUBLIC_URL + "/user.png"}
                  alt="img-view"
                />
                <input
                  type="file"
                  className="input-file"
                  // {...register("thumbnail", {
                  //   onChange: (e) =>
                  //     setImagePreview(URL.createObjectURL(e.target.files[0])),
                  // })}
                />
                {imagePreview && (
                  <button
                    className="button"
                    // onClick={() => {
                    //   setImagePreview("");
                    //   setValue("thumbnail", "");
                    // }}
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
                    // {...register("firstname")}
                  />
                  <label htmlFor="firstname" className="label-form">
                    Prénom
                  </label>
                  {/* {errors.firstname && (
                    <span className="fade-in">{errors.firstname.message}</span>
                  )} */}
                </div>
                <div className="input-div">
                  <input
                    type="text"
                    className="input-form"
                    autoComplete="none"
                    placeholder=" "
                    // {...register("lastname")}
                  />
                  <label htmlFor="lastname" className="label-form">
                    Nom
                  </label>
                  {/* {errors.lastname && (
                    <span className="fade-in">{errors.lastname.message}</span>
                  )} */}
                </div>
              </div>
              <div className="input-div">
                <select
                  className="input-select"
                  // {...register("gender")}
                >
                  <option value={""}>--- Selectionner un genre ---</option>
                  <option value={"femme"}>Femme</option>
                  <option value={"homme"}>Homme</option>
                </select>
                {/* {errors.gender && (
                  <span className="fade-in">{errors.gender.message}</span>
                )} */}
              </div>
              <div className="row">
                <div className="input-div">
                  <input
                    type="text"
                    className="input-form"
                    autoComplete="none"
                    placeholder=" "
                    // {...register("telephone")}
                  />
                  <label htmlFor="telephone" className="label-form">
                    Téléphone
                  </label>
                  {/* {errors.telephone && (
                    <span className="fade-in">{errors.telephone.message}</span>
                  )} */}
                </div>
                <div className="input-div">
                  <input
                    type="text"
                    className="input-form"
                    autoComplete="none"
                    placeholder=" "
                    // {...register("mail")}
                  />
                  <label htmlFor="mail" className="label-form">
                    Adresse e-mail
                  </label>
                  {/* {errors.mail && (
                    <span className="fade-in">{errors.mail.message}</span>
                  )} */}
                </div>
              </div>
              <div className="row">
                <div className="input-div">
                  <input
                    type="date"
                    className="input-form"
                    autoComplete="none"
                    placeholder=" "
                    // {...register("birth")}
                  />
                  <label htmlFor="birth" className="label-form">
                    Date de Naissance
                  </label>
                  {/* {errors.birth && (
                    <span className="fade-in">{errors.birth.message}</span>
                  )} */}
                </div>
                <div className="input-div">
                  <input
                    type="text"
                    className="input-form"
                    autoComplete="none"
                    placeholder=" "
                    // {...register("birth_location")}
                  />
                  <label htmlFor="birth_location" className="label-form">
                    Lieu de Naissance
                  </label>
                  {/* {errors.birth_location && (
                    <span className="fade-in">
                      {errors.birth_location.message}
                    </span>
                  )} */}
                </div>
              </div>
              <div className="input-div">
                <select
                  className="input-select"
                  // {...register("role_id")}
                >
                  <option value={""}>--- Selectionner un rôle ---</option>
                  {/* {isEmpty(roles?.data?.roles) ? (
                    <option value={""}>{roles?.data?.message}</option>
                  ) : (
                    roles?.data?.roles?.map((item, i) => {
                      return (
                        <option value={item?.id} key={i}>
                          {item?.title}
                        </option>
                      );
                    })
                  )} */}
                </select>
                {/* {errors.role_id && (
                  <span className="fade-in">{errors.role_id.message}</span>
                )} */}
              </div>
              <div className="input-div">
                <select
                  className="input-select"
                  // {...register("department_id")}
                >
                  <option value={""}>
                    --- Selectionner un Département ---
                  </option>
                  {/* {isEmpty(departments?.data?.departments) ? (
                    <option value={""}>{departments?.data?.message}</option>
                  ) : (
                    departments?.data?.departments?.map((item, i) => {
                      return (
                        <option value={item?.id} key={i}>
                          {item?.title}
                        </option>
                      );
                    })
                  )} */}
                </select>
                {/* {errors.department_id && (
                  <span className="fade-in">
                    {errors.department_id.message}
                  </span>
                )} */}
              </div>
              <div className="input-div">
                <select
                  className="input-select"
                  // {...register("sys_role")}
                >
                  <option value={""}>--- Select System Role ---</option>
                  <option value={"n/a"}>Non Assigné</option>
                  <option value={"pastor"}>Pasteur</option>
                  <option value={"protocole"}>Protocole</option>
                  <option value={"monitor"}>Moniteur/trice</option>
                </select>
                {/* {errors.sys_role && (
                  <span className="fade-in">{errors.sys_role.message}</span>
                )} */}
              </div>
              <button type="submit" className="button">
                {isSending ? "Mise à jour des informations..." : "Mette à Jour"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
