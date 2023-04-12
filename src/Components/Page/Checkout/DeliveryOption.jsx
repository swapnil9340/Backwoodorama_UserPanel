import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import { Link } from 'react-router-dom';

const DeliveryOption = ({ SetShowData }) => {
    const classes = useStyles()

    const [Time, SetTime] = React.useState('');
    const [ShowDeliveryRestData, SetShowDeliveryRestData] = React.useState(true)
    const handleChange = (event) => {
        SetTime(event.target.value);
    };
    const ShowHideDeliveryOptions = () => {
        SetShowData(true)
        SetShowDeliveryRestData(false)
    }
    const AddDeliveryInstruction = () => {
        SetShowDeliveryRestData(true)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 center">
                        <div className="col-12 col-lg-12 col-md-12 col-sm-12  DeliveryOption_container">
                            <div className="col-12 height_for_inner_div fontStyle font_size_paragraph">
                                <p>Delivery Options</p>

                            </div>
                            <div className="col-12 height_for_inner_div ">
                                <p>Your address</p>

                            </div>
                            <div className="col-12 height_for_inner_div_address flex_for_delivery marginTop_deliver p-2">
                                <div className="col-6 col-sm-6 col-md-6">
                                    <p>92 Greene St, yh6edf
                                        New York, NY 10012</p>

                                </div>
                                <div className="col-6 col-sm-6 col-md-6 position_right">
                                    <p>Change</p>

                                </div>
                            </div>
                            {ShowDeliveryRestData ? "" : <div className='showagain' onClick={AddDeliveryInstruction}>
                                <p>Add delivery instructions</p>
                            </div>}

                            {ShowDeliveryRestData &&

                                <div className='show_and_hide'>
                                    <div className="col-12 height_for_inner_div ">
                                        <p>Delivery time</p>


                                    </div>
                                    <div className="col-12 height_for_time_div">
                                        <div className="col-12 col-lg-12 height_for_time_div">
                                            <FormControl className={classes.muiSelect} size="small">
                                                <InputLabel id="demo-select-small">Time</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    value={Time}
                                                    label="Time"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={"Saturday 10 to 1pm"}>
                                                        Saturday 10 to 1pm
                                                    </MenuItem>
                                                    <MenuItem value={"Saturday 10 to 1pm"}>Saturday 10 to 1pm</MenuItem>
                                                    <MenuItem value={"Saturday 10 to 1pm"}>"Saturday 10 to 1pm"</MenuItem>
                                                    <MenuItem value={"Saturday 10 to 1pm"}>"Saturday 10 to 1pm"</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>


                                    </div>
                                    <div className="col-12 height_for_delivery_instruction_div ">
                                        <p>Delivery Instruction</p>


                                    </div>
                                    <div className="col-12 height_for_delivery_instruction_textarea_div ">
                                        <div className='col-12  text_area_margin height_for_delivery_instruction_textarea_div'>

                                            <textarea class="form-control" id="textAreaExample4" rows="3"></textarea>
                                        </div>



                                    </div>
                                    <div className='col-12 flex_for_delivery'>
                                        <div className='col-2 col-sm-2 col-md-2 col-lg-2 '>
                                            <Checkbox ></Checkbox>
                                        </div>
                                        <div className='col-10  col-lg-10 col-md-10 col-sm-10  font_size_checkbox_paragraph'>
                                            <p>**Please check this box if you are available for all day delivery (8AM-7PM).</p>
                                        </div>

                                    </div>
                                    <div className='col-12 flex_for_delivery'>
                                        <div className='col-2 col-sm-2 col-md-2 col-lg-2 '>
                                            <Checkbox ></Checkbox>
                                        </div>
                                        <div className='col-10  col-lg-10 col-md-10 col-sm-10 font_size_checkbox_paragraph'>
                                            <p>Please check this box if the information entered is for a caregiver. If so, please add the patient information
                                                (first name, last name, DOB, Medical Marijuana ID number) in the delivery instructions.</p>
                                        </div>

                                    </div>
                                    <div className='col-12 flex_for_delivery'>
                                        <div className='col-2 col-sm-2 col-md-2 col-lg-2  '>
                                            <Checkbox ></Checkbox>
                                        </div>
                                        <div className='col-10  col-lg-10 col-md-10 col-sm-10 justify-content-start font_size_checkbox_paragraph'>
                                            <p>I confirm that all the customer information added is the information linked to my NYS issued medical marijuana card and agree to present
                                                my card to the driver upon arrival. I also confirm that any changes in my medical history
                                                and/or medications have been documented with Vireo Health, as there are potential medication interactions and contraindications to using cannabis
                                                (including pregnancy, breastfeeding, unstable cardiac conditions, and history of schizophrenia).
                                                If you have questions or concerns regarding whether medical cannabis is right for you,
                                                please either reach out to your physician or schedule a consultation with one of our pharmacists.*</p>
                                            {/* <p>{paragraph}</p> */}


                                        </div>

                                    </div>
                                    <div className='col-12 margin_left'>
                                        <p>Please agree to the store's required terms</p>

                                    </div>
                                    <div className='col-12 col-lg-4 height_delivery_option_buttton'>
                                        <Box
                                            className={`  ${classes.loadingBtnTextAndBack}`}
                                        >
                                            <LoadingButton onClick={ShowHideDeliveryOptions} variant="outlined">continue</LoadingButton>
                                        </Box>

                                    </div>

                                </div>
                            }
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default DeliveryOption