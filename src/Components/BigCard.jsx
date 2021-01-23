import React from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { AiFillFacebook, AiFillApple, AiFillAndroid, AiFillHeart, AiOutlineCar } from 'react-icons/ai';
import { FaTwitterSquare, FaPinterestSquare, FaYoutube, FaFacebook } from 'react-icons/fa';
import { BiBed } from 'react-icons/bi';
import '../Styling/BigCard.css';

const BigCard = (props) => {
    console.log(props);
    
    return (
        <div style={{marginTop: 20}}>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                <MDBContainer id="bigcard">
                    <MDBRow>
                        <MDBCol md="12" lg="12">
                            {/* <img id="topimage" src="https://images.prop24.com/226340238/Crop528x153" alt="France president must die France hate you go to hell" /> */}
                            <img id="topimage" src={props.data && props.data.customer_photo.length && props.data.customer_photo[0]} alt="France president must die France hate you go to hell" />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="9" lg="9">
                            {/* <img id="rightimage" src="https://images.prop24.com/244177223/Crop526x328" alt="" /> */}
                            <img id="rightimage" src={props.data && props.data.photo.length && props.data.photo[0]} alt="" />
                        </MDBCol>


                        <MDBCol md="3" md="3">
                            <div id="ForDesktopSideImages">
                                {props.data && props.data.photo.length && props.data.photo.map(r1=>{

                                        return(

                                <MDBRow>
                                    <img className="leftrow" src={r1} alt="" />
                                </MDBRow>

                                        )


                                })}
                                {/* <MDBRow>
                                    <img className="leftrow" src="https://images.prop24.com/244177221/Crop162x108" alt="" />
                                </MDBRow>
                                <MDBRow>
                                    <img className="leftrow" src="https://images.prop24.com/244177223/Crop162x108" alt="" />
                                </MDBRow> */}
                            </div>
                        </MDBCol>



                        <MDBCol md="3" md="3">
                            {/* <div id="ForMobileSideImages">
                                <MDBRow>
                                    <MDBCol sm="4">
                                        <MDBRow>
                                            <img className="leftrow" src="https://images.prop24.com/244177224/Crop162x108" alt="" />
                                        </MDBRow>
                                    </MDBCol>
                                    <MDBCol sm="4">
                                        <MDBRow>
                                            <img className="leftrow" src="https://images.prop24.com/244177221/Crop162x108" alt="" />
                                        </MDBRow>
                                    </MDBCol>
                                    <MDBCol sm="4">
                                        <MDBRow>
                                            <img className="leftrow" src="https://images.prop24.com/244177223/Crop162x108" alt="" />
                                        </MDBRow>
                                    </MDBCol>
                                </MDBRow>
                            </div> */}
                            <div id="ForMobileSideImages">
                                {/* <MDBRow> */}
                                    {/* <MDBCol sm="4">
                                        <MDBRow> */}
                                            <img className="leftrow" src="https://images.prop24.com/244177224/Crop162x108" alt="" />
                                        {/* </MDBRow>
                                    </MDBCol> */}
                                    {/* <MDBCol sm="4">
                                        <MDBRow> */}
                                            <img className="leftrow" src="https://images.prop24.com/244177221/Crop162x108" alt="" />
                                        {/* </MDBRow>
                                    </MDBCol> */}
                                    {/* <MDBCol sm="4">
                                        <MDBRow> */}
                                            <img className="leftrow" src="https://images.prop24.com/244177223/Crop162x108" alt="" />
                                        {/* </MDBRow>
                                    </MDBCol> */}
                                {/* </MDBRow> */}
                            </div>
                        </MDBCol>


                    </MDBRow>
                    <MDBRow>
                        <MDBCol lg="4" md="5">
                            <h3 id="price">$ {props.data.price}</h3>
                        </MDBCol>
                        <MDBCol lg="5" md="5">
                            {/* <h6 id="title">3 Bedroom House for Sale in Lonehill</h6> */}
                            <h6 id="title">{props.data.title}</h6>
                        </MDBCol>
                        <MDBCol lg="3" md="2">
                            <div id="heart">
                                <AiFillHeart />
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBRow id="thigsRow">
                                <MDBCol md="2">
                                    <span className="things"> <AiOutlineCar /> </span> <span className="thingsText">{props.data.bedrooms}</span>
                                </MDBCol>
                                <MDBCol md="2">
                                    <span className="things"> <BiBed /> </span> <span className="thingsText">{props.data.bathrooms}</span>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="6">
                            <p id="street">106 Dennis Street, Lonehill</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Link>
        </div>
    )
}
export default BigCard;