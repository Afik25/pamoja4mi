import React from "react";
import "./dashboard.css";
import {
  MdOutlinePlayLesson,
  PiClockCountdownFill,
  MdSchool,
  FaFemale,
  FaMale,
  FaLaptop,
  FaMobileAlt,
  LuSchool,
  MdStream,
} from "../../../middlewares/icons";
import ReactApexChart from "react-apexcharts";
import { colors } from "../../../utils/utils";

const Dashboard = () => {
  return (
    // <div className="dashboard-student">
    //   <div className="section-1">
    //     <div className="section-1-left">
    //       <h1 className="title t-1">
    //         <strong>Hello</strong>, Afik 👋
    //       </h1>
    //       <p className="title t-2">
    //         Nice to have you back, what a exciting day!
    //       </p>
    //       <p className="title t-2">Get ready and continue your lesson today.</p>
    //       <p className="title t-2">
    //         You are enrolled at the <strong>Software development school</strong>
    //         , in the <strong>Mobile Development</strong> stream.
    //       </p>
    //       <p className="title t-2">
    //         You have <strong>limited access</strong> to the full content of your
    //         program.
    //       </p>
    //     </div>
    //     <div className="section-1-right">
    //       <div className="s1r-item">
    //         <div className="s1r-head">
    //           <h2 className="title t-2">Learning Overall Progress</h2>
    //           <span>88%</span>
    //         </div>
    //         <div className="progress-wrapper">
    //           <div className="progress-bar">
    //             <div className="bar"></div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="s1r-item">
    //         <div className="s1r-head">
    //           <h2 className="title t-2">Quiz Overall Progress</h2>
    //           <span>88%</span>
    //         </div>
    //         <div className="progress-wrapper">
    //           <div className="progress-bar">
    //             <div className="bar"></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="section-2">
    //     <h2 className="title t-2">School's courses</h2>
    //     <div className="section-2-wrapper">
    //       <div className="s2w-item">
    //         <div className="s2w-item-left">
    //           <div className="s2w-item-outer">
    //             <div className="s2w-item-inner">
    //               <div className="s2w-item-number" data-num="90">
    //                 48.7%
    //               </div>
    //             </div>
    //           </div>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             version="1.1"
    //             width="160px"
    //             height="160px"
    //           >
    //             <defs>
    //               <linearGradient id="GradientColor">
    //                 <stop offset={"0%"} stopColor="#e91e63"></stop>
    //                 <stop offset={"100%"} stopColor="#673ab7"></stop>
    //               </linearGradient>
    //             </defs>
    //             <circle
    //               cx={"80"}
    //               cy={"80"}
    //               r={"70"}
    //               strokeLinecap="round"
    //               strokeDashoffset={Math.floor(
    //                 472 - 440 * parseFloat(48.7 / 100)
    //               )}
    //             ></circle>
    //           </svg>
    //         </div>
    //         <div className="s2w-item-right">
    //           <h2 className="title t-2">Course's title</h2>
    //           <div className="row">
    //             <span>
    //               <MdOutlinePlayLesson className="icon" />
    //               <label>lessons</label>
    //             </span>
    //             <span>
    //               <PiClockCountdownFill className="icon" />
    //               <label>50 min.</label>
    //             </span>
    //           </div>
    //           <button className="button">Continue</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="section-3">
    //     <div className="section-3-left">
    //       <div className="section-3-left-head">
    //         <h2 className="title t-2">Learning Activity</h2>
    //         <select>
    //           <option value={"daily"}>Daily</option>
    //           <option value={"monthly"}>Monthly</option>
    //           <option value={"yearly"}>Yearly</option>
    //         </select>
    //       </div>
    //       <div className="section-3-left-content">
    //         <ReactApexChart
    //           series={[
    //             {
    //               name: "Data 1",
    //               data: [2, 4, 9, 7],
    //             },
    //             {
    //               name: "Data 2",
    //               data: [5, 3, 7, 10],
    //             },
    //           ]}
    //           options={{
    //             colors: [
    //               "#3572EF",
    //               "#5DEBD7",
    //               "#F2A51A",
    //               "#C80036",
    //               "#604CC3",
    //               "#0C0C0C",
    //             ],
    //             title: {
    //               text: "",
    //               align: "left",
    //               style: {
    //                 fontSize: "10px",
    //                 fontWeight: 700,
    //               },
    //             },
    //             chart: {
    //               height: 350,
    //               type: "area",
    //               toolbar: {
    //                 show: false,
    //               },
    //             },
    //             dataLabels: {
    //               enabled: false,
    //             },
    //             stroke: {
    //               curve: "smooth",
    //             },
    //             xaxis: {
    //               categories: ["Jan", "Fév", "Mars", "Avril"],
    //             },
    //             yaxis: {
    //               show: true,
    //             },
    //           }}
    //           type="area"
    //           height={"100%"}
    //         />
    //       </div>
    //     </div>
    //     <div className="section-3-right">
    //       <h2 className="title t-2">School Classmates</h2>
    //       <form className="s3r-search">
    //         <input type="text" placeholder="Search a classmate by name" />
    //         <button className="button">Search</button>
    //       </form>
    //       <div className="table">
    //         <table>
    //           <thead>
    //             <tr>
    //               <th className="col-3 text-align-left">Names</th>
    //               <th className="col-3 text-align-left">School</th>
    //               <th className="col-2 text-align-left">Course</th>
    //               <th className="col-2 text-align-left">Country</th>
    //               <th className="col-1 text-align-right">Actions</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr>
    //               <td className="col-3 text-align-left">Amisi Fikirini</td>
    //               <td className="col-3 text-align-left">
    //                 School of Software Development
    //               </td>
    //               <td className="col-2 text-align-left">Web Development</td>
    //               <td className="col-2 text-align-left">Republic Democratic of Congo</td>
    //               <td className="col-1 text-align-right">
    //                 <button className="button">Contact</button>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td className="col-3 text-align-left">Amisi Fikirini</td>
    //               <td className="col-3 text-align-left">
    //                 School of Software Development
    //               </td>
    //               <td className="col-2 text-align-left">Web Development</td>
    //               <td className="col-2 text-align-left">Republic Democratic of Congo</td>
    //               <td className="col-1 text-align-right">
    //                 <button className="button">Contact</button>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td className="col-3 text-align-left">Amisi Fikirini</td>
    //               <td className="col-3 text-align-left">
    //                 School of Software Development
    //               </td>
    //               <td className="col-2 text-align-left">Web Development</td>
    //               <td className="col-2 text-align-left">Republic Democratic of Congo</td>
    //               <td className="col-1 text-align-right">
    //                 <button className="button">Contact</button>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td className="col-3 text-align-left">Amisi Fikirini</td>
    //               <td className="col-3 text-align-left">
    //                 School of Software Development
    //               </td>
    //               <td className="col-2 text-align-left">Web Development</td>
    //               <td className="col-2 text-align-left">Republic Democratic of Congo</td>
    //               <td className="col-1 text-align-right">
    //                 <button className="button">Contact</button>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td className="col-3 text-align-left">Amisi Fikirini</td>
    //               <td className="col-3 text-align-left">
    //                 School of Software Development
    //               </td>
    //               <td className="col-2 text-align-left">Web Development</td>
    //               <td className="col-2 text-align-left">Republic Democratic of Congo</td>
    //               <td className="col-1 text-align-right">
    //                 <button className="button">Contact</button>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td className="col-3 text-align-left">Amisi Fikirini</td>
    //               <td className="col-3 text-align-left">
    //                 School of Software Development
    //               </td>
    //               <td className="col-2 text-align-left">Web Development</td>
    //               <td className="col-2 text-align-left">Republic Democratic of Congo</td>
    //               <td className="col-1 text-align-right">
    //                 <button className="button">Contact</button>
    //               </td>
    //             </tr>
    //             {/* {isEmpty(users?.data?.users) ? (
    //               <tr>
    //                 <td
    //                   colSpan={9}
    //                   style={{ textAlign: "center", color: "gray" }}
    //                 >
    //                   {users?.data?.message}
    //                 </td>
    //               </tr>
    //             ) : (
    //               users?.data?.users?.map((item, idx) => {
    //                 return (
    //                   <tr key={idx}>
    //                     <td className="col-05 text-align-center">
    //                       <input type="checkbox" />
    //                     </td>
    //                     <td className="col-1 text-align-left">
    //                       {moment(item?.createdAt).format("LLLL")}
    //                     </td>
    //                     <td className="col-3 text-align-left">
    //                       <div className="row">
    //                         <img
    //                           src={
    //                             !item?.thumbnails
    //                               ? process.env.PUBLIC_URL + "/user.png"
    //                               : `${process.env.REACT_APP_API_SERVER_URL}:${process.env.REACT_APP_API_SERVER_PORT}/images/${item?.thumbnails}`
    //                           }
    //                           alt={
    //                             !item?.thumbnails
    //                               ? "user-img"
    //                               : item?.thumbnails
    //                           }
    //                         />
    //                         <span>
    //                           {capitalize(item?.firstname)}{" "}
    //                           {capitalize(item?.lastname)}
    //                         </span>
    //                       </div>
    //                     </td>
    //                     <td className="col-05 text-align-left">
    //                       {capitalize(item?.gender)}
    //                     </td>
    //                     <td className="col-05 text-align-center">
    //                       {item?.telephone}
    //                     </td>
    //                     <td className="col-1 text-align-center">
    //                       {item?.mail}
    //                     </td>
    //                     <td className="col-1 text-align-left">
    //                       {item?.sys_role}
    //                     </td>
    //                     <td className="col-05 text-align-center">
    //                       <span
    //                         className={
    //                           item?.status === 1
    //                             ? "status validate"
    //                             : "status pending"
    //                         }
    //                       >
    //                         {item?.status === 1 ? "actif" : "inactif"}
    //                       </span>
    //                     </td>
    //                     <td className="col-1 text-align-right">
    //                       <button
    //                         className="button btn-action"
    //                         onClick={() => {
    //                           setIsUpdating(true);
    //                           setOnNew(true);
    //                           onUpdate(item);
    //                         }}
    //                       >
    //                         Mise à jour
    //                       </button>
    //                       <button
    //                         className="button btn-action"
    //                         onClick={() => onActivation(item?.status, item?.id)}
    //                       >
    //                         {item?.status === 1 ? "Desactiver" : "Activer"}
    //                       </button>
    //                       <button className="button btn-action">
    //                         Contacter
    //                       </button>
    //                       <button
    //                         className="button btn-action"
    //                         onClick={() => navigate('/admin/hr/details', {
    //                           state: {
    //                             item: item,
    //                           }
    //                         })}
    //                       >
    //                         Details
    //                       </button>
    //                     </td>
    //                   </tr>
    //                 );
    //               })
    //             )} */}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="dashboard-admin">
      <div className="section-1">
        <div className="s1-item">
          <div className="s1i-left">
            <div className="column">
              <div className="row">
                <MdSchool className="icon" />
                <h3 className="title t-2">Total Students</h3>
              </div>
              <h2 className="title t-2">1000</h2>
            </div>
          </div>
          <hr />
          <div className="s1i-right">
            <div className="column">
              <div className="row">
                <h3 className="title t-2">Total Females</h3>
                <FaFemale className="icon" />
              </div>
              <h2 className="title t-2">500</h2>
              <div className="progress-wrapper">
                <div className="progress-bar">
                  <div className="bar">
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="row">
                <h3 className="title t-2">Total Males</h3>
                <FaMale className="icon" />
              </div>
              <h2 className="title t-2">500</h2>
              <div className="progress-wrapper">
                <div className="progress-bar">
                  <div className="bar">
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s1-item">
          <div className="row">
            <span>Web Registrations</span>
            <FaLaptop className="icon" />
          </div>
          <div className="row">
            <div className="progress-wrapper">
              <div className="progress-bar">
                <div className="bar">
                  <span>50%</span>
                </div>
              </div>
            </div>
            <span>5000000</span>
          </div>
          <div className="row">
            <span>Mobile Registrations</span>
            <FaMobileAlt className="icon" />
          </div>
          <div className="row">
            <div className="progress-wrapper">
              <div className="progress-bar">
                <div className="bar">
                  <span>50%</span>
                </div>
              </div>
            </div>
            <span>5000000</span>
          </div>
        </div>
        <div className="s1-item">
          <div className="element">
            <span>Most registrations</span>
            <h3 className="title t-2">Software Engineering</h3>
            <div className="row">
              <div className="progress-wrapper">
                <div className="progress-bar">
                  <div className="bar">
                    <span>50%</span>
                  </div>
                </div>
              </div>
              <span>5000000</span>
            </div>
          </div>
          <div className="element">
            <span>Fewer registrations</span>
            <h3 className="title t-2">Economics</h3>
            <div className="row">
              <div className="progress-wrapper">
                <div className="progress-bar">
                  <div className="bar">
                    <span>50%</span>
                  </div>
                </div>
              </div>
              <span>5000000</span>
            </div>
          </div>
        </div>
        <div className="s1-item">
          <div className="column">
            <div className="row">
              <span>Total Schools</span>
              <LuSchool className="icon" />
            </div>
            <span>5</span>
          </div>
          <div className="column">
            <div className="row">
              <span>Total Streams</span>
              <MdStream className="icon" />
            </div>
            <span>15</span>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="s2-left">
          <div className="s2-left-head">
            <h2 className="title t-2">Signups Trend by Country</h2>
          </div>
          <div className="s2-left-body">
            <div className="column">
              <h3 className="title t-3">Republic Democratic of Congo</h3>
              <div className="row">
                <div className="progress-wrapper">
                  <div className="progress-bar">
                    <div
                      className="bar"
                      style={{
                        backgroundColor:
                          colors[Math.floor(Math.random() * colors.length)],
                      }}
                    >
                      <span>50%</span>
                    </div>
                  </div>
                </div>
                <span>1000</span>
              </div>
            </div>
            <div className="column">
              <h3 className="title t-3">Republic of Rwanda</h3>
              <div className="row">
                <div className="progress-wrapper">
                  <div className="progress-bar">
                    <div
                      className="bar"
                      style={{
                        backgroundColor:
                          colors[Math.floor(Math.random() * colors.length)],
                      }}
                    >
                      <span>50%</span>
                    </div>
                  </div>
                </div>
                <span>900</span>
              </div>
            </div>
            <div className="column">
              <h3 className="title t-3">Republic of Congo</h3>
              <div className="row">
                <div className="progress-wrapper">
                  <div className="progress-bar">
                    <div
                      className="bar"
                      style={{
                        backgroundColor:
                          colors[Math.floor(Math.random() * colors.length)],
                      }}
                    >
                      <span>50%</span>
                    </div>
                  </div>
                </div>
                <span>800</span>
              </div>
            </div>
            <div className="column">
              <h3 className="title t-3">Republic of Senegal</h3>
              <div className="row">
                <div className="progress-wrapper">
                  <div className="progress-bar">
                    <div
                      className="bar"
                      style={{
                        backgroundColor:
                          colors[Math.floor(Math.random() * colors.length)],
                      }}
                    >
                      <span>50%</span>
                    </div>
                  </div>
                </div>
                <span>700</span>
              </div>
            </div>
          </div>
          <div className="s2-left-foot">
            <button className="button">Load more</button>
          </div>
        </div>
        <div className="s2-middle">
          <div className="s2-middle-head">
            <h2 className="title t-2">Signups Overall Trending</h2>
            <select>
              <option value={"today"}>Today</option>
              <option value={"last-week"}>Last Week</option>
              <option value={"last-month"}>Last Month</option>
              <option value={"monthly"}>Monthly</option>
              <option value={"yearly"}>Yearly</option>
            </select>
          </div>
          <div className="s2-middle-item">
            <ReactApexChart
              type="bar"
              height={"100%"}
              series={[
                {
                  name: "Female",
                  data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
                },
                {
                  name: "Male",
                  data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
                },
              ]}
              options={{
                title: {
                  text: "Registration's Activity by Gender",
                  align: "left",
                  style: {
                    fontSize: "12px",
                    fontWeight: 700,
                  },
                },
                chart: {
                  type: "bar",
                  height: 350,
                },
                plotOptions: {
                  bar: {
                    horizontal: false,
                    columnWidth: "55%",
                    endingShape: "rounded",
                  },
                },
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  show: true,
                  width: 2,
                  colors: ["transparent"],
                },
                xaxis: {
                  categories: [
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                  ],
                },
                yaxis: {
                  show: false,
                  title: {
                    text: "Students",
                  },
                },
                fill: {
                  opacity: 1,
                },
                tooltip: {
                  y: {
                    formatter: function (val) {
                      return val + " students";
                    },
                  },
                },
              }}
            />
          </div>
          <div className="s2-middle-item">
            <ReactApexChart
              series={[
                {
                  name: "Data 1",
                  data: [2, 4, 9, 7],
                },
                {
                  name: "Data 2",
                  data: [5, 3, 7, 10],
                },
              ]}
              options={{
                colors: ["#3572EF", "#5DEBD7"],
                title: {
                  text: "Registration's activity by Devices",
                  align: "left",
                  style: {
                    fontSize: "10px",
                    fontWeight: 700,
                  },
                },
                chart: {
                  height: 350,
                  type: "area",
                  toolbar: {
                    show: false,
                  },
                },
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  curve: "smooth",
                },
                xaxis: {
                  categories: ["Jan", "Fév", "Mars", "Avril"],
                },
                yaxis: {
                  show: false,
                },
              }}
              type="area"
              height={"100%"}
            />
          </div>
        </div>
        <div className="s2-right">
          <div className="column">
            <h2 className="title t-3">Connected Users</h2>
            <span className="title t-2">25</span>
            <div className="row">
              <span>
                Web
                <br />
                15
              </span>
              <span>
                Mobile
                <br />
                10
              </span>
            </div>
            <div className="progress">
              <div className="progress-left"></div>
              <div className="progress-right"></div>
            </div>
          </div>
          <div className="s2-right-item">
            <ReactApexChart
              type="bar"
              height={"100%"}
              series={[
                {
                  name: "Female",
                  data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
                },
                {
                  name: "Male",
                  data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
                },
              ]}
              options={{
                title: {
                  text: "Connection's Activity by Gender",
                  align: "left",
                  style: {
                    fontSize: "10px",
                    fontWeight: 700,
                  },
                },
                chart: {
                  type: "bar",
                  height: 350,
                  toolbar: {
                    show: false,
                  },
                },
                plotOptions: {
                  bar: {
                    horizontal: false,
                    columnWidth: "55%",
                    endingShape: "rounded",
                  },
                },
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  show: true,
                  width: 2,
                  colors: ["transparent"],
                },
                xaxis: {
                  categories: [
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                  ],
                },
                yaxis: {
                  show: false,
                  title: {
                    text: "Users",
                  },
                },
                fill: {
                  opacity: 1,
                },
                tooltip: {
                  y: {
                    formatter: function (val) {
                      return val + " users";
                    },
                  },
                },
              }}
            />
          </div>
          <div className="s2-right-item">
            <ReactApexChart
              series={[
                {
                  name: "Mobile",
                  data: [3, 6, 1, 4],
                },
                {
                  name: "Web",
                  data: [7, 3, 2, 5],
                },
              ]}
              options={{
                colors: ["#604CC3", "#0C0C0C"],
                title: {
                  text: "Connection's Activity by Devices",
                  align: "left",
                  style: {
                    fontSize: "10px",
                    fontWeight: 700,
                  },
                },
                chart: {
                  height: 350,
                  type: "area",
                  toolbar: {
                    show: false,
                  },
                },
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  curve: "smooth",
                },
                xaxis: {
                  categories: ["Jan", "Fév", "Mars", "Avril"],
                },
                yaxis: {
                  show: false,
                  title: {
                    text: "Devices",
                  },
                },
              }}
              type="area"
              height={"100%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
