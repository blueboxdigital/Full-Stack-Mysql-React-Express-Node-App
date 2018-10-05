import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

export class CreatePagePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: [],
      user: [],
      title: "",
      status: "draft",
      content: "",
      parentPage: "",
      pageCreated: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleParentChange = this.handleParentChange.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("http://localhost:3001/api/pages")
      .then(res => res.json())
      .then(res => this.setState({ pages: res }))
      .catch(function(error) {
        // If there is any error you will catch them here
      });

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
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/api/newPage", {
      method: "POST",
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
        createdBy: this.state.user.id
      })
    }).then(res => {
      if (res.ok) {
        return this.setState({ pageCreated: true });
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
    if (this.state.pageCreated) {
      return <Redirect to="/pages" />;
    }
    return (
      <React.Fragment>
        <h2>Create Page</h2>
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
              <button className="btn btn--submit btn--submit-solo" type="submit">
                Create
              </button>
            </li>
          </ul>
        </form>
      </React.Fragment>
    );
  }
}

export default CreatePagePage;
