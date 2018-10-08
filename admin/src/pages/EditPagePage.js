import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

export class EditPagePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: [],
      user: [],
      currentPageId: this.props.match.params.id,
      currentPage: [],
      title: "",
      status: "",
      content: "",
      parentPage: "",
      redirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAltSubmit = this.handleAltSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleParentChange = this.handleParentChange.bind(this);
  }

  componentDidMount() {
    // get all pages
    fetch("http://localhost:3001/api/pages")
      .then(res => res.json())
      .then(res => this.setState({ pages: res }))
      .catch(function(error) {
        // If there is any error you will catch them here
      });

    // get current user
    fetch("http://localhost:3001/api/currentUser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => this.setState({ user: data }))
      .catch(function(error) {
        // If there is any error you will catch them here
      });

    // get current page
    fetch(`http://localhost:3001/api/currentPage/${this.state.currentPageId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          currentPage: data,
          title: data.title,
          status: data.status,
          content: data.content,
          parentPage: data.parent || "none"
        })
      )
      .catch(function(error) {
        // If there is any error you will catch them here
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/api/editPage/${this.state.currentPageId}`, {
      method: "PUT",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        status: this.state.status,
        parentPage: this.state.parentPage,
        updatedBy: this.props.currentUser.id
      })
    }).then(res => {
      if (res.ok) {
        return console.log("submitted");
      }
    });
  }

  handleAltSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/api/editPage/${this.state.currentPageId}`, {
      method: "PUT",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        status: this.state.status,
        parentPage: this.state.parentPage,
        updatedBy: this.state.user.id
      })
    }).then(res => {
      if (res.ok) {
        return this.setState({ redirect: true });
      }
    });
  }

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };
  handleStatusChange = e => {
    this.setState({ status: e.target.value });
  };
  handleContentChange = content => {
    this.setState({ content: content });
  };
  handleParentChange = e => {
    this.setState({ parentPage: e.target.value });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/pages" />;
    }
    return (
      <React.Fragment>
        <h2>Edit Page</h2>
        <form action="" onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label htmlFor="pageTitle">Title</label>
              <input
                type="text"
                name="pageTitle"
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </li>
            <li>
              <label htmlFor="pageStatus">Status</label>
              <select
                name="pageStatus"
                value={this.state.status}
                onChange={this.handleStatusChange}
              >
                <option value="draft">Draft</option>
                <option value="published">Publish</option>
                <option value="archived">Archive</option>
              </select>
            </li>
            <li>
              <label htmlFor="pageContent">Content</label>
              <Editor
                value={this.state.content}
                onEditorChange={this.handleContentChange}
                name="pageContent"
                apiKey="API_KEY"
                init={{ plugins: "link table" }}
                menubar={""}
                plugins={
                  "advlist autolink lists link image charmap preview textcolor searchreplace visualblocks code fullscreen insertdatetime media table contextmenu paste code help wordcount autolink spellchecker"
                }
                toolbar={
                  "formatselect | bold italic backcolor textcolor  | alignleft aligncenter alignright alignjustify | bullist numlist | removeformat spellchecker | link | code | image media | visualblocks"
                }
              />
            </li>
            <li>
              <label htmlFor="parentPage">Parent Page</label>
              <select
                name="parentPage"
                id=""
                value={this.state.parentPage}
                onChange={this.handleParentChange}
              >
                <option value="">None</option>
                {this.state.pages.map(page => {
                  return (
                    <option key={page.pageId} value={page.pageId}>
                      {page.title}
                    </option>
                  );
                })}
              </select>
            </li>
            <li>
              <div className="btn-group btn-group--submit">
                <button className="btn btn--submit" type="submit">
                  Save and keep editing
                </button>
                <button className="btn btn--submit" type="submit" onClick={this.handleAltSubmit}>
                  Save and leave
                </button>
              </div>
            </li>
          </ul>
        </form>
      </React.Fragment>
    );
  }
}

export default EditPagePage;
