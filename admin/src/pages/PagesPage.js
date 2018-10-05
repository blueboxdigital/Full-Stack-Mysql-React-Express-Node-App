import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "sweetalert2-react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// Components

// Font Awesome Icons
library.add(faPencilAlt, faTrashAlt);

export class PagesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: [],
      isLoading: false,
      showConfirm: false,
      currentDeletePage: ""
    };

    this.handleDeleteAlert = this.handleDeleteAlert.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.refreshPages = this.refreshPages.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("http://localhost:3001/api/pages")
      .then(res => res.json())
      .then(res => this.setState({ pages: res, isLoading: false }))
      .catch(function(error) {
        // Catch errors here
      });
  }

  refreshPages() {
    fetch("http://localhost:3001/api/pages")
      .then(res => res.json())
      .then(res => this.setState({ pages: res, isLoading: false }))
      .catch(function(error) {
        // Catch errors here
      });
  }

  handleDeleteAlert = (e, id) => {
    // console.log(`event target: ${e.target} & page id: ${id}`);
    this.setState({ showConfirm: true, currentDeletePage: id });
  };

  handleDelete = id => {
    let self = this;
    fetch(`http://localhost:3001/api/deletePage/${id}`, {
      method: "DELETE",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => console.log(res.status))
      //   .then(() => {
      //     console.log(self);
      //     self.refreshPages();
      //   })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Pages</h2>
        <div className="pages__bar">
          <Link to="/create-page" className="btn pages__action">
            Create New Page
          </Link>
        </div>
        <ul className="pages-list">
          {this.state.pages.map(page => {
            return (
              <li className="pages-list__item" key={page.pageId}>
                <h4 className="pages-list__item__title">{page.title}</h4>
                <Link
                  to={`/edit-page/${page.pageId}`}
                  //   to={{ pathname: `/edit-page/${page.pageId}`, state: { pageId: page.pageId } }}
                  className="pages-list__item__link pages-list__item__link--edit"
                >
                  <FontAwesomeIcon icon="pencil-alt" />
                </Link>
                <button
                  className="pages-list__item__link pages-list__item__link--delete"
                  onClick={e => this.handleDeleteAlert(e, page.pageId)}
                >
                  <FontAwesomeIcon icon="trash-alt" />
                </button>
                <p className={`pages-list__item__status pages-list__item__status--${page.status}`}>
                  {page.status}
                </p>
              </li>
            );
          })}
        </ul>

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
            console.log("cancel"); // eslint-disable-line no-console
            this.setState({ showConfirm: false });
          }}
        />
      </React.Fragment>
    );
  }
}

export default PagesPage;
