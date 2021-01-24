import React from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { AiFillFacebook, AiFillApple, AiFillAndroid, AiFillHeart, AiOutlineCar } from 'react-icons/ai';
import { FaTwitterSquare, FaPinterestSquare, FaYoutube, FaFacebook, FaSearch } from 'react-icons/fa';
import { BiBed } from 'react-icons/bi';
import { Multiselect } from 'multiselect-react-dropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styling/Admin.css';
import Header from '../Components/Header';
import Index from '../Components/Index';
import Footer from '../Components/Footer';
import axios from 'axios';
class Admin extends React.Component {
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
            FloorSize:
                [{ name: "100", id: 1 },
                { name: "150", id: 2 },
                { name: "200", id: 3 },
                { name: "250", id: 4 },
                { name: "300", id: 5 },
                { name: "350", id: 6 },
                { name: "400", id: 7 },
                { name: "450", id: 8 },
                { name: "500", id: 9 },
                { name: "600", id: 10 },
                { name: "700", id: 11 },
                { name: "800", id: 12 },
                { name: "900", id: 13 },
                { name: "1 000", id: 14 },
                { name: "1 250", id: 15 },
                { name: "1 500", id: 16 },
                { name: "1 750", id: 17 },
                { name: "2 000", id: 18 },
                { name: "2 500", id: 19 },
                { name: "3 000", id: 20 },
                { name: "3 500", id: 21 },
                { name: "4 000", id: 22 },
                { name: "4 500", id: 23 },
                { name: "5 000", id: 24 },
                { name: "6 000", id: 25 },
                { name: "7 000", id: 26 },
                { name: "8 000", id: 27 },
                { name: "9 000", id: 28 },
                { name: "10 000", id: 29 },
                { name: "15 000", id: 30 }],
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
            description: '',
            my_property_type: [],
            min_price: [],
            max_price: [],
            min_price: [],
            my_bedrooms: [],
            my_bathrooms: [],
            my_parking: [],
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
            price: '',
            photo: [],
            location: '',
            name: '',
            phone_number: '',
            customer_photo: [],

            bethrooms_new: ''

        };
    }

    myChangeHandler = (data1, event) => {


        console.log("dat1", data1)
        console.log("event", event)
        this.setState({ [data1]: event });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { title, description, my_property_type, min_price, max_price, my_bedrooms, my_bathrooms,my_parking, floor_size, erf_size, price, photo
            , location, name, phone_number } = this.state;
        if (!title) return toast.warning("Insert Title");
        if (title.length < 5) return toast.warning("Title Min Length Is 6");
        if (!description) return toast.warning("Insert Description");
        if (description.length < 20) return toast.warning("Description Min Length Is 20");
        if (!my_property_type.length) return toast.warning("Select Property Type");
        if (!min_price.length) return toast.warning("Select Min Price");
        if (!max_price.length) return toast.warning("Select Max Price");
        if (!my_bathrooms.length) return toast.warning("Select Bathroom");
        if (!my_bedrooms.length) return toast.warning("Select Bedroom");
        if (!my_parking.length) return toast.warning("Select Parking");
        if (!floor_size.length) return toast.warning("Select Fllor Size");
        if (!erf_size.length) return toast.warning("Select Erf Size");
        if (!price) return toast.warning("Insert Price");
        if (!photo.length) return toast.warning("Select Photo");
        if (photo.length < 5) return toast.warning("Select Min 5 Pictures");
        if (!location) return toast.warning("Select Location");
        if (!name) return toast.warning("Insert Name");
        // if (!phone_number) return toast.warning("Insert Number");

        let formData = new FormData();

        formData.append('title', title);
        formData.append('description', description);
        my_property_type.length && my_property_type.map(r1 => {
            formData.append('property_type', r1.name);
        })
        min_price.length && min_price.map(r1 => {
            formData.append('minprice', r1.name);
        })
        max_price.length && max_price.map(r1 => {
            formData.append('maxprice', r1.name);
        })
        my_bedrooms.length && my_bedrooms.map(r1 => {
            formData.append('bedrooms', r1.name);
        })
        my_bathrooms.length && my_bathrooms.map(r1 => {
            formData.append('bathrooms', r1.name);
        })
        my_parking.length && my_parking.map(r1 => {
            formData.append('parking', r1.name);
        })
        floor_size.length && floor_size.map(r1 => {
            formData.append('floor_size', r1.name);
        })
        erf_size.length && erf_size.map(r1 => {
            formData.append('erf_size', r1.name);
        })
        formData.append('pet_friendly', this.state.pet_friendly);
        formData.append('garden', this.state.garden);
        formData.append('pool', this.state.pool);
        formData.append('flatlet', this.state.flatlet);
        formData.append('retirement', this.state.retirement);
        formData.append('repossessed', this.state.repossessed);
        formData.append('auction', this.state.auction);
        formData.append('onshow', this.state.onshow);
        formData.append('name', this.state.name);
        formData.append('price', this.state.price);
        formData.append('location', this.state.location);
        formData.append('customer_photo', this.state.customer_photo[0]);
        
        // this.state.photo.length && this.state.photo.forEach(p => {
        //     formData.append('photo', p);
        // }) 

       

        this.state.photo.length && this.state.photo.map(p => {
            formData.append('photo', p);
        }) 

        axios.post(`http://188.166.148.8:5000/property/add`, formData)
            .then(res => {
                console.log(res)
                toast.success('Data Insert Successfully');
              
                window.location.reload();
            })
            .catch(err => console.log(err))

    }


    onMobileImageChange = (e) => {
        if (e.target.files && e.target.files.length) {
                // Promise.all(
                //     [...e.target.files].map((fileToDataURL) => {
                //         this.setState({ photo: fileToDataURL })
                //         //   mobileImage.push(fileToDataURL);
                //     })
                // );
            // this.setState({
            //     photo: e.target.files
            // })
            const files = [...this.state.photo]; // Spread syntax creates a shallow copy
            files.push(...e.target.files); // Spread again to push each selected file individually
            this.setState({ photo:files });
        }
    };

    onCustomerImage = (e) => {
        if (e.target.files && e.target.files.length) {
            // Promise.all(
            //     [...e.target.files].map((fileToDataURL) => {
            //         this.setState({ customer_photo: fileToDataURL })
            //         //   mobileImage.push(fileToDataURL);
            //     })
            // );
            this.setState({
                customer_photo: e.target.files
            })
        }
    };
    onSelect = (selectedList, selectedItem) => {
        console.log("selectedList On select==> ", selectedList);
        console.log("selectedItem On select==> ", selectedItem);

        // this.setState({bethrooms_new:selectedList})
    }

    onRemove = (selectedList, removedItem) => {
        console.log("selectedList On remove==> ", selectedList);
        console.log("selectedItem On remove==> ", removedItem);
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
        this.setState({ my_parking: selectedList })
    }

    floorSizeSelect = (selectedList, selectedItem) => {
        this.setState({ floor_size: selectedList })
    }

    erfsizeSelect = (selectedList, selectedItem) => {
        this.setState({ erf_size: selectedList })
    }
    render() {
        const styles = {
            multiselectContainer: { // To change css for multiselect (Width,height,etc..)
                width: "150px",
            },
            searchBox: { // To change search box element look
                //   border: none;
                fontSize: "15px",

                //   min-height: 50px;
            },
            inputField: { // To change input field position or margin
                // margin: 5px;
                backgroundColor: "rgb(86, 146, 217)",
                color: "white",
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
                width: "200px"
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
            <form>
                <ToastContainer />
                <div>
                    <MDBContainer>
                        <Header />
                        <h2 className="text-center text-primary">Post Your Property Ad</h2>

                        <div id="form">

                            <h4>ENTER THE DETAILS BELOW</h4>
                            {/* <h6>Condition *</h6>

                <div style={{ paddingLeft: "2%" }}>
                    <button type="button" className="btn btn-outline-dark">New</button>
                    <button type="button" style={{ marginLeft: "2%" }} className="btn btn-outline-dark">Used</button>
                </div> */}
                            <br />
                            <label>
                                Ad Title<br />
                                <input className="form-control" type="text" placeholder="Title of your Property Ad" onChange={(e) => this.setState({ title: e.target.value })} value={this.state.title} />
                                <span className="text-info" style={{ fontSize: "12px" }}>A minimum length of 5 characters is required. Please edit the field.</span>

                            </label>

                            <br />


                            <label>
                                Description <br />
                                <textarea className="form-control text-dark" cols="51.5" style={{ marginRight: "10%" }} rows="8" onChange={(e) => this.setState({ description: e.target.value })} value={this.state.description}></textarea>
                                <span className="text-info" style={{ fontSize: "12px" }}>A minimum length of 20 characters is required. Please edit the field.</span>
                                <br />

                            </label>

                            <hr />


                            <h3 style={{ marginLeft: "2%" }}>Room Details</h3>

                            <div style={{ width: "100%", display: "flex", paddingLeft: "2%" }}>

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
                                                    singleSelect={true}

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
                                                    // Function will trigger on select event
                                                    onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="name" // Property name to display in the dropdown options
                                                    placeholder="Any"
                                                    showCheckbox="true"
                                                    singleSelect={true}

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
                                                    // Preselected value to persist in dropdown
                                                    // Function will trigger on select event
                                                    onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="name" // Property name to display in the dropdown options
                                                    placeholder="Any"
                                                    showCheckbox="true"
                                                    singleSelect={true}


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
                                                    // Function will trigger on select event
                                                    onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="name" // Property name to display in the dropdown options
                                                    placeholder="Any"
                                                    showCheckbox="true"
                                                    singleSelect={true}

                                                // onChange={(e)=>this.myChangeHandler('bedrooms',e.target.value)}

                                                />
                                            </div>
                                        </MDBCol>
                                    </MDBRow>

                                </div>
                                {/* Row 1 of drop downs */}
                            </div>


                            <br />


                            {/* Row 2 of drop downs */}
                            <div id="ROW1DROPDOWN" style={{ paddingLeft: "2%" }}>

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
                                                singleSelect={true}
                                            // onChange={(e)=>this.myChangeHandler('bethrooms_new',e.target.value)}

                                            />
                                        </div>
                                    </MDBCol>

                                    <MDBCol lg="3" md="6" sm="6">
                                        <p className="paraRow">Parking</p>
                                        <div className="col">
                                            <Multiselect
                                                style={styles}
                                                options={this.state.bedrooms} // Options to display in the dropdown
                                                onSelect={this.parkingSelect} // Function will trigger on select event
                                                // Preselected value to persist in dropdown
                                                // onSelect={this.onSelect} // Function will trigger on select event
                                                onRemove={this.onRemove} // Function will trigger on remove event
                                                displayValue="name" // Property name to display in the dropdown options
                                                placeholder="Any"
                                                showCheckbox="true"
                                                singleSelect={true}

                                            />
                                        </div>
                                    </MDBCol>

                                    <MDBCol lg="3" md="6" sm="6">
                                        <p className="paraRow">Floor Size (m²)</p>
                                        <div className="col">
                                            <Multiselect
                                                style={styles}
                                                options={this.state.FloorSize} // Options to display in the dropdown
                                                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                onSelect={this.floorSizeSelect} // Function will trigger on select event
                                                // Function will trigger on select event
                                                onRemove={this.onRemove} // Function will trigger on remove event
                                                displayValue="name" // Property name to display in the dropdown options
                                                placeholder="Any"
                                                showCheckbox="true"
                                                onChange={(e) => this.myChangeHandler('floor_size', e.target.value)}
                                                singleSelect={true}

                                            />
                                        </div>
                                    </MDBCol>

                                    <MDBCol lg="3" md="6" sm="6">
                                        <p className="paraRow">Erf Size (m²)</p>
                                        <div className="col">
                                            <Multiselect
                                                style={styles}
                                                options={this.state.FloorSize} // Options to display in the dropdown
                                                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                onSelect={this.erfsizeSelect} // Function will trigger on select event
                                                // Function will trigger on select event
                                                onRemove={this.onRemove} // Function will trigger on remove event
                                                displayValue="name" // Property name to display in the dropdown options
                                                placeholder="Any"
                                                showCheckbox="true"
                                                onChange={(e) => this.myChangeHandler('erf_size', e.target.value)}
                                                singleSelect={true}

                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>

                            </div>
                            {/* Row 2 of drop downs */}



                            {/* Features block */}
                            <div id="ROW1DROPDOWN" style={{ paddingLeft: "2%" }}>

                                <MDBRow>
                                    <MDBCol lg="5" md="6" sm="6">
                                        <p style={{ marginBottom: "0%", fontSize: "20px", fontWeight: "bold", marginLeft: "-1%" }} className="text-primary paraRow">Features</p>
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
                                        <p style={{ marginBottom: "0%", fontSize: "20px", fontWeight: "bold", marginLeft: "-1%" }} className="text-primary paraRow">Other</p>
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


                            <br />

                            <h4>SET A PRICE</h4>

                            <label>
                                <input className="form-control" type="number" placeholder="Price in Dollar" max="10000000000" min="1" onChange={(e) => this.setState({ price: e.target.value })} />
                            </label >

                            <br />

                            <hr />
                            {/* <h4>UPLOAD UP TO 12 PHOTOS</h4> */}
                            <h4>UPLOAD PHOTOS FOR YOUR PROPERTY</h4>


                            {/* Here the uploaded image will be here */}

                            <div style={{ maxWidth: "90%" }} id="logindiv">
                                <div>

                                    <div className="progress" style={{ height: '20px', marginLeft: "2%" }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                                <br />
                                <label className="form-label" for="customFile">Choose Your Property Photos</label>
                                <input style={{ width: "100%", marginLeft: "2%" }} type="file" multiple className="form-control" id="customFile" onChange={this.onMobileImageChange} />
                                {/* <button style={{ marginTop: "10px", marginLeft: "2%", marginBottom: "10px", fontSize: "18px" }} className="btn btn-light">Upload</button> */}
                                <br />
                                {this.state.photo.length ? this.state.photo.map((ele) => {
                                    // console.log(ele, 'ele');
                                
                                   return <img src={ele ? URL.createObjectURL(ele) : ''} width={100} style={{ marginLeft: 20 }} alt="Uploaded images" height="auto" /> 
                                } )  : ''}
                            </div>
                            {/* Here the uploaded image will be here */}



                            <hr />

                            <h4>CONFIRM YOUR LOCATION</h4>

                            <div style={{ paddingLeft: "2%" }} >

                                <MDBRow>
                                    {/*    <MDBCol md="1">

                                <div className="input-group-prepend">
                                    <label className="input-group-text">
                                        <FaSearch />
                                    </label>
                                </div>
                            </MDBCol> */}
                                    <MDBCol md="12">
                                        <select style={{ fontSize: "20px" }}
                                            className="custom-select" onChange={(e) => this.setState({ location: e.target.value })}>
                                            <option id="location" value="Use Current Location">Use Current Location</option>
                                            <option defaultValue="London" value="London">London </option>
                                            <option value="Birmingham">Birmingham</option>
                                            <option value="Liverpool">Liverpool</option>
                                            <option value="Sheffield ">Sheffield </option>
                                            <option value="Bristol">Bristol </option>
                                            <option value="Glasgow">Glasgow</option>
                                            <option value="Leicester">Leicester</option>
                                            <option value="Edinburgh ">Edinburgh </option>
                                            <option value="Leeds">Leeds </option>
                                            <option value="Cardiff">Cardiff</option>
                                            <option value="Manchester">Manchester</option>
                                            <option value="Stoke-on-Trent ">Stoke-on-Trent </option>
                                        </select>
                                    </MDBCol>

                                </MDBRow>

                            </div>
                            <hr />


                            <h4>REVIEW YOUR DETAILS</h4>




                            <MDBRow>

                                <MDBCol md="3">
                                    <input className="form-control" style={{marginLeft: 20}} type="file" onChange={this.onCustomerImage} />
                                    <img id="userphotohere" src={this.state.customer_photo.length ? URL.createObjectURL(this.state.customer_photo[0]):"https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"} alt="This is your image" onClick={this.onMobileprofile} />
                                    {/* </input> */}
                                </MDBCol>

                                <MDBCol md="3">
                                    <label className="text-info" style={{ marginLeft: "5%" }} htmlFor="rid">
                                        Name:
                             <input className="gettedname" value="Muhammad Bilal" className="text-dark form-control" type="text" onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} />
                                    </label>
                                </MDBCol>

                            </MDBRow>



                            <br />
                            <br />
                            <h6 className="text-info">Please agree to the terms to proceed</h6>

                            <button style={{ marginLeft: "2%", marginRight: "2%", width: "fit-content" }} className="btn btn-success">I agree to the terms and conditions</button>


                            {/* {(this.state.check1 === true && this.state.check2 && this.state.check3 && this.state.check4 && this.state.check5 && this.state.check6 && this.state.last)
                    ? ( */}

                            <div>
                                <br />
                                <h6 className="text-info"> Only One Step more(PhoneAuth) please click Next to continue *</h6>
                                <br />
                                {/* <Link to="/admin" style={{ fontSize: "16px", marginLeft: "2%" }} className="btn btn-primary" to="/"> */}
                                <button className="btn btn-primary" style={{marginLeft: 20}} onClick={this.onSubmit}>Move Next</button>
                                {/* </Link> */}
                            </div>

                            {/* <button style={{ marginLeft: "2%", marginRight: "2%", width: "fit-content" }} className="btn btn-success" onClick={this.onSubmit}>Submit data</button> */}

                            {/*) : (
                        <h6 className="text-danger">{this.props.USER_AUTH_DATA.name} Thanks Please fill all the fields and agree to the agreement to continue</h6>
                    )} */}
                            <br />
                            <br />
                        </div>

                        <Index />

                        <Footer />
                    </MDBContainer>
                </div>
            </form>
        )
    }
}
export default Admin;