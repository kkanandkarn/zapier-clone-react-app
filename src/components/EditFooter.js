import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

const EditFooter = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        pageNumbersHeading: '',
        FooterRow1Heading: '',
        FooterRow1Link1: '',
        FooterRow1Link2: '',
        FooterRow1Link3: '',
        FooterRow1Link4: '',
        FooterRow1Link5: '',
        FooterRow1Link6: '',
        FooterRow2Heading: '',
        FooterRow2Link1: '',
        FooterRow2Link2: '',
        FooterRow2Link3: '',
        FooterRow2Link4: '',
        FooterRow2Link5: '',
        FooterRow6Link6: '',
        FooterRow3Heading: '',
        FooterRow3Link1: '',
        FooterRow3Link2: '',
        FooterRow3Link3: '',
        FooterRow3Link4: '',
        FooterRow3Link5: '',
        FooterRow3Link6: '',
        FooterRow4Heading: '',
        FooterRow4Link1: '',
        FooterRow4Link2: '',
        FooterRow4Link3: '',
        FooterRow4Link4: '',
        FooterRow4Link5: '',
        FooterRow4Link6: '',
        FooterRow4Link7: '',
        FooterRow5Heading: '',
        FooterRow5Link1: '',
        FooterRow5Link2: '',
        FooterRow5Link3: '',
        FooterRow5Link4: '',
        FooterRow5Link5: '',
        FooterRow5Link6: '',
        FooterSocialMediaLinkText: '',
        SiteLink1Text: '',
        SiteLink2Text: '',
        SiteLink3Text: '',
        SiteLink4Text: '',
        SiteLink5Text: '',
        SiteLink6Text: '',
        SiteLink7Text: '',
        PrivacyPolicyCopyright: '',
        PrivacyPolicyLink1: '',
        PrivacyPolicyLink2: '',
        PrivacyPolicyLink3: '',
    });

    useEffect(() => {
        if (!localStorage.getItem('username')) {
            navigate('/');
        }
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/Footer')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        // Set the formData state with the data from the API response
        if (data.length > 0) {
            setFormData(data[0]);
        }
    }, [data]);

    const handleChange = (e) => {
        // Update the formData state when the user types in an input field
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send a PUT request to update the data in the backend
        axios.put('http://localhost:5000/Footer/1', formData)
            .then(res => {
                // Handle success
                console.log('Data updated successfully:', res.data);
                Swal.fire({
                    title: 'Success',
                    text: "Data Updated Successfully",
                    icon: "success",
                });
                navigate('/admin')
            })
            .catch((err) => {
                // Handle error
                console.error('Error updating data:', err);
            });
    };
    return (
        <>

            <div className="position-absolute top-0 left-0 m-4 my-3">
                <Link to="/admin" className="btn btn-primary">
                    Back
                </Link>
            </div>

            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="border shadow p-3">
                    <form className="footer-form-container" onSubmit={handleSubmit}>
                        <h2 className="text-center">Edit Footer</h2>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="pageNumbersHeading" className="form-label"><strong>Page Numbers Heading</strong></label>
                                <input type="text" className="form-control border-primary" id="pageNumbersHeading" value={formData.pageNumbersHeading} onChange={handleChange} />
                            </div>
                        </div>

                        {/* Footer Row 1 */}

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="FooterRow1Heading" className="form-label"><strong>Footer Row1 Heading</strong></label>
                                <input type="text" className="form-control border-primary" id="FooterRow1Heading" value={formData.FooterRow1Heading} onChange={handleChange} />
                            </div>
                        </div>


                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="FooterRow1Link1" className="form-label">Footer Row1 Link1</label>
                                <input type="text" className="form-control border-primary" id="FooterRow1Link1" value={formData.FooterRow1Link1} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow1Link2" className="form-label">Footer Row1 Link2</label>
                                <input type="text" className="form-control border-primary" id="FooterRow1Link2" value={formData.FooterRow1Link2} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow1Link3" className="form-label">Footer Row1 Link3</label>
                                <input type="text" className="form-control border-primary" id="FooterRow1Link3" value={formData.FooterRow1Link3} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow1Link4" className="form-label">Footer Row1 Link4 </label>
                                <input type="text" className="form-control border-primary" id="FooterRow1Link4" value={formData.FooterRow1Link4} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow1Link5" className="form-label">Footer Row1 Link5</label>
                                <input type="text" className="form-control border-primary" id="FooterRow1Link5" value={formData.FooterRow1Link5} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow1Link6" className="form-label">Footer Row1 Link6</label>
                                <input type="text" className="form-control border-primary" id="FooterRow1Link6" value={formData.FooterRow1Link6} onChange={handleChange} />

                            </div>
                        </div>

                        {/* Footer Row2 */}

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="FooterRow2Heading" className="form-label"><strong>Footer Row2 Heading</strong></label>
                                <input type="text" className="form-control border-primary" id="FooterRow2Heading" value={formData.FooterRow2Heading} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="FooterRow2Link1" className="form-label">Footer Row2 Link1</label>
                                <input type="text" className="form-control border-primary" id="FooterRow2Link1" value={formData.FooterRow2Link1} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow2Link2" className="form-label">Footer Row2 Link2</label>
                                <input type="text" className="form-control border-primary" id="FooterRow2Link2" value={formData.FooterRow2Link2} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow2Link3" className="form-label">Footer Row2 Link3</label>
                                <input type="text" className="form-control border-primary" id="FooterRow2Link3" value={formData.FooterRow2Link3} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow2Link4" className="form-label">Footer Row2 Link4 </label>
                                <input type="text" className="form-control border-primary" id="FooterRow2Link4" value={formData.FooterRow2Link4} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow2Link5" className="form-label">Footer Row2 Link5</label>
                                <input type="text" className="form-control border-primary" id="FooterRow2Link5" value={formData.FooterRow2Link5} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow2Link6" className="form-label">Footer Row2 Link6</label>
                                <input type="text" className="form-control border-primary" id="FooterRow2Link6" value={formData.FooterRow2Link6} onChange={handleChange} />
                            </div>
                        </div>

                        {/* Footer Row 3 */}

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="FooterRow3Heading" className="form-label"><strong>Footer Row3 Heading</strong></label>
                                <input type="text" className="form-control border-primary" id="FooterRow3Heading" value={formData.FooterRow3Heading} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="FooterRow3Link1" className="form-label">Footer Row3 Link1</label>
                                <input type="text" className="form-control border-primary" id="FooterRow3Link1" value={formData.FooterRow3Link1} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow3Link2" className="form-label">Footer Row3 Link2</label>
                                <input type="text" className="form-control border-primary" id="FooterRow3Link2" value={formData.FooterRow3Link2} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow3Link3" className="form-label">Footer Row3 Link3</label>
                                <input type="text" className="form-control border-primary" id="FooterRow3Link3" value={formData.FooterRow3Link3} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow3Link4" className="form-label">Footer Row3 Link4 </label>
                                <input type="text" className="form-control border-primary" id="FooterRow3Link4" value={formData.FooterRow3Link4} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow3Link5" className="form-label">Footer Row3 Link5</label>
                                <input type="text" className="form-control border-primary" id="FooterRow3Link5" value={formData.FooterRow3Link5} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow3Link6" className="form-label">Footer Row2 Link6</label>
                                <input type="text" className="form-control border-primary" id="FooterRow3Link6" value={formData.FooterRow3Link6} onChange={handleChange} />
                            </div>
                        </div>


                        {/* Footer Row 4 */}

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="FooterRow4Heading" className="form-label"><strong>Footer Row4 Heading</strong></label>
                                <input type="text" className="form-control border-primary" id="FooterRow4Heading" value={formData.FooterRow4Heading} onChange={handleChange} />
                            </div>
                        </div>


                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="FooterRow4Link1" className="form-label">Footer Row4 Link1</label>
                                <input type="text" className="form-control border-primary" id="FooterRow4Link1" value={formData.FooterRow4Link1} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow4Link2" className="form-label">Footer Row4 Link2</label>
                                <input type="text" className="form-control border-primary" id="FooterRow4Link2" value={formData.FooterRow4Link2} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow4Link3" className="form-label">Footer Row4 Link3</label>
                                <input type="text" className="form-control border-primary" id="FooterRow4Link3" value={formData.FooterRow4Link3} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow4Link4" className="form-label">Footer Row4 Link4 </label>
                                <input type="text" className="form-control border-primary" id="FooterRow4Link4" value={formData.FooterRow4Link4} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow4Link5" className="form-label">Footer Row4 Link5</label>
                                <input type="text" className="form-control border-primary" id="FooterRow4Link5" value={formData.FooterRow4Link5} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow4Link6" className="form-label">Footer Row4 Link6</label>
                                <input type="text" className="form-control border-primary" id="FooterRow4Link6" value={formData.FooterRow4Link6} onChange={handleChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow4Link7" className="form-label">Footer Row4 Link6</label>
                                <input type="text" className="form-control border-primary" id="FooterRow4Link7" value={formData.FooterRow4Link7} onChange={handleChange} />
                            </div>
                        </div>


                        {/* Footer Row 5 */}

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="FooterRow5Heading" className="form-label"><strong>Footer Row5 Heading</strong></label>
                                <input type="text" className="form-control border-primary" id="FooterRow5Heading" value={formData.FooterRow5Heading} onChange={handleChange} />
                            </div>
                        </div>


                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="FooterRow5Link1" className="form-label">Footer Row5 Link1</label>
                                <input type="text" className="form-control border-primary" id="FooterRow5Link1" value={formData.FooterRow5Link1} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow5Link2" className="form-label">Footer Row5 Link2</label>
                                <input type="text" className="form-control border-primary" id="FooterRow5Link2" value={formData.FooterRow5Link2} onChange={handleChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow5Link3" className="form-label">Footer Row5 Link3</label>
                                <input type="text" className="form-control border-primary" id="FooterRow5Link3" value={formData.FooterRow5Link3} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow5Link4" className="form-label">Footer Row5 Link4 </label>
                                <input type="text" className="form-control border-primary" id="FooterRow5Link4" value={formData.FooterRow5Link4} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow5Link5" className="form-label">Footer Row5 Link5</label>
                                <input type="text" className="form-control border-primary" id="FooterRow5Link5" value={formData.FooterRow5Link5} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="FooterRow5Link6" className="form-label">Footer Row5 Link6</label>
                                <input type="text" className="form-control border-primary" id="FooterRow5Link6" value={formData.FooterRow5Link6} onChange={handleChange} />
                            </div>
                        </div>

                        {/* Footer Social Media Link Text */}

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="FooterSocialMediaLinkText" className="form-label"><strong>Social Media Link Text</strong></label>
                                <input type="text" className="form-control border-primary" id="FooterSocialMediaLinkText" value={formData.FooterSocialMediaLinkText} onChange={handleChange} />
                            </div>
                        </div>



                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="SiteLink1Text" className="form-label">Site Link1 Text</label>
                                <input type="text" className="form-control border-primary" id="SiteLink1Text" value={formData.SiteLink1Text} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="SiteLink2Text" className="form-label">Site Link2 Text</label>
                                <input type="text" className="form-control border-primary" id="SiteLink2Text" value={formData.SiteLink2Text} onChange={handleChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="SiteLink3Text" className="form-label">Site Link3 Text</label>
                                <input type="text" className="form-control border-primary" id="SiteLink3Text" value={formData.SiteLink3Text} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="SiteLink4Text" className="form-label">Site Link4 Text </label>
                                <input type="text" className="form-control border-primary" id="SiteLink4Text" value={formData.SiteLink4Text} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="SiteLink5Text" className="form-label">Site Link5 Text</label>
                                <input type="text" className="form-control border-primary" id="SiteLink5Text" value={formData.SiteLink5Text} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="SiteLink6Text" className="form-label">Site Link6 Text</label>
                                <input type="text" className="form-control border-primary" id="SiteLink6Text" value={formData.SiteLink6Text} onChange={handleChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="SiteLink7Text" className="form-label">Site Link7 Text</label>
                                <input type="text" className="form-control border-primary" id="SiteLink7Text" value={formData.SiteLink7Text} onChange={handleChange} />
                            </div>
                        </div>


                        {/* Footer Privacy Policy */}

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="PrivacyPolicyCopyright" className="form-label"><strong>Privacy Policy Copyright Text</strong></label>
                                <input type="text" className="form-control border-primary" id="PrivacyPolicyCopyright" value={formData.PrivacyPolicyCopyright} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="PrivacyPolicyLink1" className="form-label">Privacy Policy Link1 Text</label>
                                <input type="text" className="form-control border-primary" id="PrivacyPolicyLink1" value={formData.PrivacyPolicyLink1} onChange={handleChange} />

                            </div>
                            <div className="col">
                                <label htmlFor="PrivacyPolicyLink2" className="form-label">Privacy Policy Link 2 Text</label>
                                <input type="text" className="form-control border-primary" id="PrivacyPolicyLink2" value={formData.PrivacyPolicyLink2} onChange={handleChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="PrivacyPolicyLink3" className="form-label">Privacy Policy Link3 Text</label>
                                <input type="text" className="form-control border-primary" id="PrivacyPolicyLink3" value={formData.PrivacyPolicyLink3} onChange={handleChange} />

                            </div>
                        </div>


                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>

                    </form>
                </div>
            </div>


        </>
    )
}

export default EditFooter
