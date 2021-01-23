import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Link } from 'react-router-dom';
import '../Styling/Filters.css'
import axios from 'axios';


class Filters extends Component {
    constructor() {
        super()
        this.state = {
            propertyType:
                [{ name: 'House', id: 1 },
                { name: 'Apartment/Flat', id: 2 },
                { name: 'Townhouse', id: 3 },
                { name: 'Vacant Land / Plot', id: 4 },
                { name: "Farm", id: 5 },
                { name: "Commercial Property", id: 6 },
                { name: "Industrial Property", id: 7 }],
            minPrice:
                [{ name: "R 100 000", id: 1 },
                { name: "R 150 000", id: 2 },
                { name: "R 200 000", id: 3 },
                { name: "R 250 000", id: 4 },
                { name: "R 300 000", id: 5 },
                { name: "R 350 000", id: 6 },
                { name: "R 400 000", id: 7 },
                { name: "R 450 000", id: 8 },
                { name: "R 500 000", id: 9 },
                { name: "R 600 000", id: 10 },
                { name: "R 700 000", id: 11 },
                { name: "R 800 000", id: 12 },
                { name: "R 900 000", id: 13 },
                { name: "R 1 000 000", id: 14 },
                { name: "R 1 250 000", id: 15 },
                { name: "R 1 500 000", id: 16 },
                { name: "R 1 750 000", id: 17 },
                { name: "R 2 000 000", id: 18 },
                { name: "R 2 500 000", id: 19 },
                { name: "R 3 000 000", id: 20 },
                { name: "R 3 500 000", id: 21 },
                { name: "R 4 000 000", id: 22 },
                { name: "R 4 500 000", id: 23 },
                { name: "R 5 000 000", id: 24 },
                { name: "R 6 000 000", id: 25 },
                { name: "R 7 000 000", id: 26 },
                { name: "R 8 000 000", id: 27 },
                { name: "R 9 000 000", id: 28 },
                { name: "R 10 000 000", id: 29 },
                { name: "R 15 000 000", id: 30 },],
            maxPrice:
                [{ name: "R 100 000", id: 1 },
                { name: "R 150 000", id: 2 },
                { name: "R 200 000", id: 3 },
                { name: "R 250 000", id: 4 },
                { name: "R 300 000", id: 5 },
                { name: "R 350 000", id: 6 },
                { name: "R 400 000", id: 7 },
                { name: "R 450 000", id: 8 },
                { name: "R 500 000", id: 9 },
                { name: "R 600 000", id: 10 },
                { name: "R 700 000", id: 11 },
                { name: "R 800 000", id: 12 },
                { name: "R 900 000", id: 13 },
                { name: "R 1 000 000", id: 14 },
                { name: "R 1 250 000", id: 15 },
                { name: "R 1 500 000", id: 16 },
                { name: "R 1 750 000", id: 17 },
                { name: "R 2 000 000", id: 18 },
                { name: "R 2 500 000", id: 19 },
                { name: "R 3 000 000", id: 20 },
                { name: "R 3 500 000", id: 21 },
                { name: "R 4 000 000 ", id: 22 },
                { name: "R 4 500 000", id: 23 },
                { name: "R 5 000 000", id: 24 },
                { name: "R 6 000 000", id: 25 },
                { name: "R 7 000 000", id: 26 },
                { name: "R 8 000 000", id: 27 },
                { name: "R 9 000 000", id: 28 },
                { name: "R 10 000 000", id: 29 },
                { name: "R 15 000 000", id: 30 }],
            bedrooms:
                [
                    { name: "1+", id: 1 },
                    { name: "2+", id: 2 },
                    { name: "3+", id: 3 },
                    { name: "4+", id: 4 },
                    { name: "5+", id: 5 }],
            bathrooms:
                [
                    { name: "1+", id: 1 },
                    { name: "2+", id: 2 },
                    { name: "3+", id: 3 },
                    { name: "4+", id: 4 },
                    { name: "5+", id: 5 }],
            sm: 6,
            md: 6,
            title: '',
            my_property_type: [],
            min_price: [],
            max_price: [],
            min_price: [],
            my_bedrooms: [],
            my_bathrooms: [],
            parking: [],
            floor_size: '',
            erf_size: '',
            pet_friendly: false,
            garden: false,
            pool: false,
            flatlet: false,
            retirement: false,
            repossessed: false,
            onshow: false,
            auction: false,
        };
    }


    bedroomsSelect = (selectedList, selectedItem) => {
        this.setState({ my_bedrooms: selectedList })
    }

    badthoomsSelect = (selectedList, selectedItem) => {
        this.setState({ my_bathrooms: selectedList })
    }

    propertyType = (selectedList, selectedItem) => {
        this.setState({ my_property_type: selectedList });
    }

    minPrice = (selectedList, selectedItem) => {
        this.setState({ min_price: selectedList })
    }

    maxPrice = (selectedList, selectedItem) => {
        this.setState({ max_price: selectedList })
    }

    parkingSelect = (selectedList, selectedItem) => {
        this.setState({ parking: selectedList })
    }

    floorSizeSelect = (selectedList, selectedItem) => {
        this.setState({ floor_size: selectedList })
    }

    erfsizeSelect = (selectedList, selectedItem) => {
        this.setState({ erf_size: selectedList })
    }

    onSearch = () => {
        const { title, description, my_property_type, min_price, max_price, my_bedrooms, my_bathrooms, floor_size, erf_size, price, photo
            , location, name, phone_number,parking } = this.state;
        let prop_type = [];
        let min_p = [];
        let max_p = [];
        let bed_r = [];
        let bat_r = [];
        let floor = [];
        let erf = [];
    let parking1 = [];

        my_property_type.length && my_property_type.map(r1 => {
            prop_type.push(r1.name);
        })
        min_price.length && min_price.map(r1 => {
            min_p.push(r1.name);
        })
        max_price.length && max_price.map(r1 => {
            max_p.push(r1.name);
        })
        my_bedrooms.length && my_bedrooms.map(r1 => {
            bed_r.push(r1.name);
        })
        my_bathrooms.length && my_bathrooms.map(r1 => {
            bat_r.push(r1.name);
        })
        floor_size.length && floor_size.map(r1 => {
            floor.push(r1.name);
        })
        erf_size.length && erf_size.map(r1 => {
            erf.push(r1.name);
        })
        parking.length &&
        parking.map((r1) => {
          parking1.push(r1.name);
        });

        
        if(this.state.pet_friendly){
            abc.pet_friendly = this.state.pet_friendly

        }
       

        let body = {

            title: this.state.title,
      pet_friendly: this.state.pet_friendly,
      garden: this.state.garden,
      pool: this.state.pool,
      flatlet: this.state.flatlet,
      retirement: this.state.retirement,
      repossessed: this.state.repossessed,
      auction: this.state.auction,
      onshow: this.state.onshow,
      name: this.state.name,
      price: this.state.price,
      property_type: prop_type,
      min_price: min_p,
      max_price: max_p,
      bedrooms: bed_r,
      bathrooms: bat_r,
      floor_size: floor,
      erf_size: erf,
      parking:parking1
        }


        let abc = {
            location:location,
              property_type: prop_type,
              min_price: min_p,
            max_price: max_p,
            bedrooms: bed_r,
            bathrooms: bat_r,
            floor_size: floor,
            parking:parking1,
            erf_size: erf,
          };

          if (this.state.pet_friendly) {
            abc.pet_friendly = this.state.pet_friendly;
          }
      
          if (this.state.title != '') {
            abc.title = this.state.title;
          }
      
          if (this.state.garden) {
            abc.garden = this.state.garden;
          }
          if (this.state.pool) {
            abc.pool = this.state.pool;
          }
          if (this.state.flatlet) {
            abc.flatlet = this.state.flatlet;
          }
          if (this.state.retirement) {
            abc.retirement = this.state.retirement;
          }
          if (this.state.repossessed) {
            abc.repossessed = this.state.repossessed;
          }
          if (this.state.auction) {
            abc.auction = this.state.auction;
          }
          if (this.state.onshow) {
            abc.onshow = this.state.onshow;
          }
          if (this.state.name!= '') {
            abc.name = this.state.name;
          }
          if (this.state.price) {
            abc.price = this.state.price;
          }
          
       console.log("dataa11111")
        axios.post(`http://188.166.148.8:5000/property/getsearch`, abc)
            .then(res => {
                console.log(res)
                let da1=JSON.stringify(res)
                localStorage.setItem("data",da1)
                this.props.history.push('/search')
                // console.log('asdasd',window.location.pathname)
                // this.props.history.push(`/search/${JSON.stringify(abc)}`)
                // if(window.location.pathname==="/"){

                // }
            })
            .catch(err => console.log(err))
    }

    render() {
        const styles = {
            multiselectContainer: { // To change css for multiselect (Width,height,etc..)
                width: "100%",
            },
            searchBox: { // To change search box element look
                //   border: none;
                //   font-size: 10px;

                //   min-height: 50px;
            },
            inputField: { // To change input field position or margin
                // margin: 5px;
                backgroundColor: "rgb(86, 146, 217)",
                color: "#cbdaee",
                width: "100%",
                height: "20px"
            },
            chips: { // To change css chips(Selected options)
                //   background: red;
                border: "1px solid  rgb(13, 99, 201)",
            },
            optionContainer: { // To change css for option container 
                //   border: 2px solid;
                color: "black",
                backgroundColor: "white",
                width: "100%"
            },
            option: { // To change css for dropdown options
                //   color: blue;
                marginTop: "2px",
            },
            groupHeading: { // To chanage group heading style

                //   ....
            }
        }
        return (
            <div id="filters">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12" lg="12">
                            <div id="containerForDesktop">
                                <h1 id="heading">Find Property for Sale</h1>
                                <div id="titleContainer">

                                    <MDBRow>
                                        <MDBCol lg="2" md="6" sm="6">
                                            <Link style={{ color: "white", fontSize: "13px" }} to="/">For Sale</Link>
                                        </MDBCol>
                                        <MDBCol lg="2" md="6" sm="6">
                                            <Link style={{ color: "white", fontSize: "13px" }} to="/">To Rent</Link>
                                        </MDBCol>
                                        <MDBCol lg="2" md="6" sm="6">
                                            <Link style={{ color: "white", fontSize: "13px" }} to="/">Developments</Link>
                                        </MDBCol>
                                        <MDBCol lg="2" md="6" sm="6">
                                            <Link style={{ color: "white", fontSize: "13px" }} to="/">Commercial</Link>
                                        </MDBCol>
                                        <MDBCol lg="2" md="6" sm="6">
                                            <Link style={{ color: "white", fontSize: "13px" }} to="/">Sold Prices</Link>
                                        </MDBCol>
                                    </MDBRow>

                                </div>
                                <div>
                                    <div id="searchInput">
                                        <input style={{ backgroundColor: "white" }} placeholder="Search for a City, Suburb or Web Reference" type="text" id="typeText" class="form-control" onChange={e => this.setState({ location: e.target.value })} />

                                        <button id="btnsearch" type="button" class="btn" onClick={this.onSearch}>Search</button>
                                    </div>
                                </div>

                                <div style={{ width: "100%", display: "flex" }}>
                                    {/* Row 1 of drop downs */}
                                    <div id="ROW1DROPDOWN">

                                        <MDBRow id="rowproperty1">
                                            <MDBCol lg="3" md="6" sm="6">
                                                <p className="paraRow">Property Type</p>
                                                <div className="col">

                                                    <Multiselect
                                                        style={styles}
                                                        options={this.state.propertyType} // Options to display in the dropdown
                                                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                        onSelect={this.propertyType} // Function will trigger on select event
                                                        onRemove={this.onRemove} // Function will trigger on remove event
                                                        displayValue="name" // Property name to display in the dropdown options
                                                        placeholder="Any"
                                                        showCheckbox="true"
                                                    />
                                                </div>
                                            </MDBCol>

                                            <MDBCol lg="3" md="6" sm="6">
                                                <p className="paraRow">Min Price</p>
                                                <div className="col">
                                                    <Multiselect
                                                        style={styles}
                                                        options={this.state.minPrice} // Options to display in the dropdown
                                                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                        onSelect={this.minPrice} // Function will trigger on select event
                                                        onRemove={this.onRemove} // Function will trigger on remove event
                                                        displayValue="name" // Property name to display in the dropdown options
                                                        placeholder="Any"
                                                        showCheckbox="true"
                                                    />
                                                </div>
                                            </MDBCol>

                                            <MDBCol lg="3" md="6" sm="6">
                                                <p className="paraRow">Max Price</p>
                                                <div className="col">
                                                    <Multiselect
                                                        style={styles}
                                                        options={this.state.maxPrice} // Options to display in the dropdown
                                                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                        onSelect={this.maxPrice} // Function will trigger on select event
                                                        onRemove={this.onRemove} // Function will trigger on remove event
                                                        displayValue="name" // Property name to display in the dropdown options
                                                        placeholder="Any"
                                                        showCheckbox="true"
                                                    />
                                                </div>
                                            </MDBCol>

                                            <MDBCol lg="3" md="6" sm="6">
                                                <p className="paraRow">Bedrooms</p>
                                                <div className="col">
                                                    <Multiselect
                                                        style={styles}
                                                        options={this.state.bedrooms} // Options to display in the dropdown
                                                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                        onSelect={this.bedroomsSelect} // Function will trigger on select event
                                                        onRemove={this.onRemove} // Function will trigger on remove event
                                                        displayValue="name" // Property name to display in the dropdown options
                                                        placeholder="Any"
                                                        showCheckbox="true"
                                                    />
                                                </div>
                                            </MDBCol>



                                        </MDBRow>


                                    </div>
                                    {/* Row 1 of drop downs */}
                                    <div>
                                        <button
                                            id="CollapseButton"
                                            class="btn btn-outline-light text-light"
                                            type="button"
                                            data-mdb-toggle="collapse"
                                            data-mdb-target="#collapseExample"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                        >More Filters + </button>
                                    </div>
                                </div>
                                <div style={{ marginLeft: "18%", marginTop: "2%" }}>
                                    <button
                                        id="CollapseButtonMobile"
                                        class="btn btn-outline-light text-light"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#collapseExample"
                                        aria-expanded="false"
                                        aria-controls="collapseExample"
                                    >More Filters + </button>
                                </div>

                                <br />

                                <div class="collapse mt-3" id="collapseExample">
                                    {/* Row 2 of drop downs */}
                                    <div id="ROW2DROPDOWN">

                                        <MDBRow>
                                            <MDBCol lg="3" md="6" sm="6">
                                                <p className="paraRow">Bathrooms</p>
                                                <div className="col">

                                                    <Multiselect
                                                        style={styles}
                                                        options={this.state.bathrooms} // Options to display in the dropdown
                                                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                        onSelect={this.badthoomsSelect} // Function will trigger on select event
                                                        onRemove={this.onRemove} // Function will trigger on remove event
                                                        displayValue="name" // Property name to display in the dropdown options
                                                        placeholder="Any"
                                                        showCheckbox="true"
                                                    />
                                                </div>
                                            </MDBCol>

                                            <MDBCol lg="3" md="6" sm="6">
                                                <p className="paraRow">Parking</p>
                                                <div className="col">
                                                    <Multiselect
                                                        style={styles}
                                                        options={this.state.propertyType} // Options to display in the dropdown
                                                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                        onSelect={this.parkingSelect} // Function will trigger on select event
                                                        onRemove={this.onRemove} // Function will trigger on remove event
                                                        displayValue="name" // Property name to display in the dropdown options
                                                        placeholder="Any"
                                                        showCheckbox="true"
                                                    />
                                                </div>
                                            </MDBCol>

                                            <MDBCol lg="3" md="6" sm="6">
                                                <p className="paraRow">Floor Size (m²)</p>
                                                <div className="col">
                                                    <Multiselect
                                                        style={styles}
                                                        options={this.state.propertyType} // Options to display in the dropdown
                                                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                        onSelect={this.floorSizeSelect} // Function will trigger on select event
                                                        onRemove={this.onRemove} // Function will trigger on remove event
                                                        displayValue="name" // Property name to display in the dropdown options
                                                        placeholder="Any"
                                                        showCheckbox="true"
                                                    />
                                                </div>
                                            </MDBCol>

                                            <MDBCol lg="3" md="6" sm="6">
                                                <p className="paraRow">Erf Size (m²)</p>
                                                <div className="col">
                                                    <Multiselect
                                                        style={styles}
                                                        options={this.state.propertyType} // Options to display in the dropdown
                                                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                        onSelect={this.erfsizeSelect} // Function will trigger on select event
                                                        onRemove={this.onRemove} // Function will trigger on remove event
                                                        displayValue="name" // Property name to display in the dropdown options
                                                        placeholder="Any"
                                                        showCheckbox="true"
                                                    />
                                                </div>
                                            </MDBCol>
                                        </MDBRow>

                                    </div>
                                    {/* Row 2 of drop downs */}



                                    {/* Features block */}
                                    <div id="ROW3DROPDOWN">

                                        <MDBRow>
                                            <MDBCol lg="5" md="6" sm="6">
                                                <p style={{ marginBottom: "0%", fontSize: "20px", color: "aliceblue" }} className="paraRow">Features</p>

                                                <MDBRow>
                                                    <MDBCol lg="5">
                                                        {/* <!-- Material unchecked --> */}
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="Pet_Friendly" onChange={(e) => this.setState({ pet_friendly: !this.state.pet_friendly })} value={this.state.pet_friendly} />
                                                            <label className="form-check-label" htmlFor="Pet_Friendly">Pet Friendly</label>
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol lg="5">
                                                        {/* <!-- Material unchecked --> */}
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="Garden" onChange={(e) => this.setState({ garden: !this.state.pet_friendly })} value={this.state.garden} />
                                                            <label className="form-check-label" htmlFor="Garden">Garden</label>
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol lg="5">
                                                        {/* <!-- Material unchecked --> */}
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="Pool" onChange={(e) => this.setState({ pool: !this.state.pet_friendly })} value={this.state.pool} />
                                                            <label className="form-check-label" htmlFor="Pool">Pool</label>
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol lg="5">
                                                        {/* <!-- Material unchecked --> */}
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="Flatlet" onChange={(e) => this.setState({ flatlet: !this.state.flatlet })} value={this.state.flatlet} />
                                                            <label className="form-check-label" htmlFor="Flatlet">Flatlet</label>
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>

                                            </MDBCol>
                                            <MDBCol lg="5" md="6" sm="6">
                                                <p style={{ marginBottom: "0%", fontSize: "20px", color: "aliceblue" }} className="paraRow">Other</p>
                                                <MDBRow>
                                                    <MDBCol lg="5">
                                                        {/* <!-- Material unchecked --> */}
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="Retirement" onChange={(e) => this.setState({ retirement: !this.state.retirement })} value={this.state.retirement} />
                                                            <label className="form-check-label" htmlFor="Retirement">Retirement</label>
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol lg="5">
                                                        {/* <!-- Material unchecked --> */}
                                                        <div class="form-check">
                                                            <input type="checkbox" className="form-check-input" id="Repossessed" onChange={(e) => this.setState({ repossessed: !this.state.repossessed })} value={this.state.repossessed} />
                                                            <label className="form-check-label" htmlFor="Repossessed">Repossessed</label>
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol lg="5">
                                                        {/* <!-- Material unchecked --> */}
                                                        <div class="form-check">
                                                            <input type="checkbox" className="form-check-input" id="On Show" onChange={(e) => this.setState({ onshow: !this.state.onshow })} value={this.state.onshow} />
                                                            <label className="form-check-label" htmlFor="On Show">On Show</label>
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol lg="5">
                                                        {/* <!-- Material unchecked --> */}
                                                        <div class="form-check">
                                                            <input type="checkbox" className="form-check-input" id="Auction" onChange={(e) => this.setState({ auction: !this.state.auction })} value={this.state.auction} />
                                                            <label className="form-check-label" htmlFor="Auction">Auction</label>
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBCol>
                                        </MDBRow>

                                    </div>
                                    {/* Features block */}
                                </div>

                                <button id="btnsearchMobile" type="button" class="btn">Search</button>

                                <br />

                            </div>

                            <div id="containerForMobile">
                                <br />
                                <h1 id="headingMobile">Find Property for Sale</h1>
                                <div id="titleContainerMobile">
                                    <Link className="linkMobileFilter">For Sale</Link>
                                    <Link className="linkMobileFilter">To Rent</Link>
                                    <Link className="linkMobileFilter">Developments</Link>
                                </div>
                                <div>
                                    <div id="searchInputMobile">
                                        <input style={{ borderRadius: "0%", height: "50px", backgroundColor: "white" }} placeholder="Search for a City, Suburb or Web Ref..." type="text" id="typeText" class="form-control" />

                                        <button id="btnsearch" type="button" class="btn" >Search</button>
                                    </div>
                                </div>

                                <br />

                                <div class="form-group">
                                    <label htmlFor="propertyMoile" className="labelMobileFilterSelect">Property Type</label>
                                    {/* <select class="form-control" id="propertyMoile">
                                <option defaultValue="true">Any</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select> */}
                                    <Multiselect
                                        style={styles}
                                        options={this.state.propertyType} // Options to display in the dropdown
                                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                        onSelect={this.propertyType} // Function will trigger on select event
                                        onRemove={this.onRemove} // Function will trigger on remove event
                                        displayValue="name" // Property name to display in the dropdown options
                                        placeholder="Any"
                                        showCheckbox="true"
                                    />
                                </div>

                                <br />

                                <div style={{ display: "flex" }}>
                                    <div style={{ width: "50%", padding: "1%" }}>
                                        <label htmlFor="MinPriceMobile" className="labelMobileFilterSelect">Min Price</label>
                                        <select class="form-control" id="MinPriceMobile">
                                            <option defaultValue={true}>Any</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div style={{ width: "50%", padding: "1%" }}>
                                        <label htmlFor="halfMobileSelect" className="labelMobileFilterSelect">Max Price</label>
                                        <select class="form-control" id="MaxPriceMobile">
                                            <option defaultValue={true}>Any</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>

                                <div style={{ display: "flex" }}>
                                    <div style={{ width: "50%", padding: "1%" }}>
                                        <label htmlFor="MinPriceMobile" className="labelMobileFilterSelect">Bedrooms</label>
                                        <select class="form-control" id="MinPriceMobile">
                                            <option defaultValue={true}>Any</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div style={{ width: "50%", padding: "1%" }}>
                                        <label htmlFor="halfMobileSelect" className="labelMobileFilterSelect">Bathrooms</label>
                                        <select class="form-control" id="MaxPriceMobile">
                                            <option defaultValue={true}>Any</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>


                                <br />
                                <div style={{ textAlign: "center" }}>
                                    <a
                                        style={{ fontSize: "17px" }}
                                        class="btn btn-primary btn-lg"
                                        data-mdb-toggle="collapse"
                                        href="#collapseMobileFilterView"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseMobileFilterView"
                                    >
                                        More Filters +
                        </a>
                                </div>
                                <br />

                                {/* <!-- ////////////////////////////////////////////Collapsed content///////////////////////////////////// --> */}
                                <div class="collapse mt-3" id="collapseMobileFilterView">

                                    <div>
                                        <p className="labelMobileFilterSelect">Parking / Garage</p>
                                        <hr />
                                    </div>

                                    <div style={{ display: "flex" }}>
                                        <div style={{ width: "50%", padding: "1%" }}>
                                            <label htmlFor="MinPriceMobile" className="labelMobileFilterSelect">Spaces</label>
                                            <select class="form-control" id="MinPriceMobile">
                                                <option defaultValue={true}>Any</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div style={{ width: "50%", padding: "1%" }}>
                                            <label htmlFor="halfMobileSelect" className="labelMobileFilterSelect">Type</label>
                                            <select class="form-control" id="MaxPriceMobile">
                                                <option defaultValue={true}>Any</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>


                                    <br />


                                    <div>
                                        <p className="labelMobileFilterSelect">Size</p>
                                        <hr />
                                    </div>

                                    <div style={{ display: "flex" }}>
                                        <div style={{ width: "50%", padding: "1%" }}>
                                            <label htmlFor="MinPriceMobile" className="labelMobileFilterSelect">Min Floor Size (m²)</label>
                                            <select class="form-control" id="MinPriceMobile">
                                                <option defaultValue={true}>Any</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div style={{ width: "50%", padding: "1%" }}>
                                            <label htmlFor="halfMobileSelect" className="labelMobileFilterSelect">Max Floor Size (m²)</label>
                                            <select class="form-control" id="MaxPriceMobile">
                                                <option defaultValue={true}>Any</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>


                                    <div style={{ display: "flex" }}>
                                        <div style={{ width: "50%", padding: "1%" }}>
                                            <label htmlFor="MinPriceMobile" className="labelMobileFilterSelect">Min Erf Size (m²)</label>
                                            <select class="form-control" id="MinPriceMobile">
                                                <option defaultValue={true}>Any</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div style={{ width: "50%", padding: "1%" }}>
                                            <label htmlFor="halfMobileSelect" className="labelMobileFilterSelect">Max Erf Size (m²)</label>
                                            <select class="form-control" id="MaxPriceMobile">
                                                <option defaultValue={true}>Any</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>

                                    <br />

                                    <div>
                                        <p className="labelMobileFilterSelect">Features</p>
                                        <hr />
                                    </div>




                                    <div style={{ display: "flex" }}>
                                        <div style={{ width: "50%", padding: "1%" }}>
                                            <div class="form-check">
                                                <input type="checkbox" className="form-check-input" id="Pet_Friendly" />
                                                <label className="form-check-label" htmlFor="Pet_Friendly">Pet Friendly</label>
                                            </div>
                                        </div>
                                        <div style={{ width: "50%", padding: "1%" }}>
                                            <div class="form-check">
                                                <input type="checkbox" className="form-check-input" id="Pet_Friendly" />
                                                <label className="form-check-label" htmlFor="Pet_Friendly">Pet Friendly</label>
                                            </div>
                                        </div>
                                    </div>


                                    <div style={{ display: "flex" }}>
                                        <div style={{ width: "50%", padding: "1%" }}>
                                            <div class="form-check">
                                                <input type="checkbox" className="form-check-input" id="Flatlet" />
                                                <label className="form-check-label" htmlFor="Flatlet">Flatlet</label>
                                            </div>
                                        </div>
                                        <div style={{ width: "50%", padding: "1%" }}>
                                            <div class="form-check">
                                                <input type="checkbox" className="form-check-input" id="Pool" />
                                                <label className="form-check-label" htmlFor="Pool">Pool</label>
                                            </div>

                                        </div>
                                    </div>


                                    <br />

                                    <div>
                                        <p className="labelMobileFilterSelect">Other</p>
                                        <hr />
                                    </div>

                                    <div style={{ display: "flex" }}>
                                        <div style={{ width: "50%", padding: "1%" }}>
                                            <div class="form-check">
                                                <input type="checkbox" className="form-check-input" id="Retirement" />
                                                <label className="form-check-label" htmlFor="Retirement">Retirement</label>
                                            </div>
                                        </div>
                                        <div style={{ width: "50%", padding: "1%" }}>
                                            <div class="form-check">
                                                <input type="checkbox" className="form-check-input" id="On Show" />
                                                <label className="form-check-label" htmlFor="On Show">On Show</label>
                                            </div>
                                        </div>
                                    </div>


                                    <div style={{ display: "flex" }}>
                                        <div style={{ width: "50%", padding: "1%" }}>
                                            <div class="form-check">
                                                <input type="checkbox" className="form-check-input" id="Repossessed" />
                                                <label className="form-check-label" htmlFor="Repossessed">Repossessed</label>
                                            </div>
                                        </div>
                                        <div style={{ width: "50%", padding: "1%" }}>
                                            <div class="form-check">
                                                <input type="checkbox" className="form-check-input" id="Auction" />
                                                <label className="form-check-label" htmlFor="Auction">Auction</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


                                <br />
                                <button type="button" style={{ fontSize: "20px" }} class="btn btn-danger btn-block" onClick={this.onSearch}>Search</button>

                                <br />
                                <br />

                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </div>
        )
    }
}
export default Filters;