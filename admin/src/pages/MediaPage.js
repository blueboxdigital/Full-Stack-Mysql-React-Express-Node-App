import React, {Component} from "react";
import {Link} from "react-router-dom";
import SweetAlert from "sweetalert2-react";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
//
// import {CloudinaryContext, Image} from 'cloudinary-react'; import
// {photosFetched} from '../actions'; import PhotoListContainer from
// './PhotoList'; import PhotosUploaderContainer from './PhotosUploader'; import
// {fetchPhotos} from '../utils/CloudinaryService'; Components Font Awesome
// Icons
library.add(faPencilAlt, faTrashAlt);

export class MediaPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showConfirm: false
        };
    }

    render() {
        return (
            <React.Fragment>
                <h2>Media</h2>

                <div className="media-grid">
                    <div className="media-grid__item">
                        <div className="media__item">
                            item
                        </div>
                    </div>
                    <div className="media-grid__item">
                        <div className="media__item">
                            item
                        </div>
                    </div>
                    <div className="media-grid__item">
                        <div className="media__item">
                            item
                        </div>
                    </div>
                    <div className="media-grid__item">
                        <div className="media__item">
                            item
                        </div>
                    </div>
                    <div className="media-grid__item">
                        <div className="media__item">
                            item
                        </div>
                    </div>
                    <div className="media-grid__item">
                        <div className="media__item">
                            item
                        </div>
                    </div>
                </div>

                <SweetAlert
                    show={this.state.showConfirm}
                    title="Are you sure?"
                    text="You will not be able to recover this page once deleted!"
                    type="warning"
                    showCancelButton
                    confirmButtonColor="#2ecc71"
                    cancelButtonColor="#e74c3c"
                    confirmButtonText="Yes, delete it!"
                    onConfirm={() => {
                    this.handleDelete(this.state.currentDeletePage);
                }}
                    onCancel={() => {
                    console.log("cancel");
                }}/>
            </React.Fragment>
        );
    }
}

export default MediaPage;
