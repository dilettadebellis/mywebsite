import React from "react";

export default function BlogSingleModal() {
  return (
    <div
      className="blog-single modal fade"
      id="blog-single"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="blogModalScrollable"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="blogModalScrollable">
              Blog Single Modal
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="pt-4 pb-5 text-muted">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 mx-auto blog">
                    <div className="rounded">
                      <div className="text-md-left">
                        <h1 className="mb-4 h4">
                          The best way to become a good web designer
                        </h1>
                        <div className="entry-meta mb-4">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="base-color" href="blog.html">
                                <i className="fa fa-calendar" />
                                21 Jul 2020
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="base-color"
                                href="blog.html"
                                title="Posts by admin"
                                rel="author"
                              >
                                <i className="fa fa-user" />
                                admin
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="base-color"
                                href="blog.html"
                                rel="category tag"
                              >
                                <i className="fa fa-folder-open" />
                                Logo Design
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="base-color" href="blog.html">
                                <i className="fa fa-comments" />
                                No Comments.
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="entry-image image-border mb-4">
                          <img src="https://placehold.co/720x480" alt="" />
                        </div>
                        <div className="entry-content box-border p-3">
                          <p>
                            These words are here to provide the reader with a
                            basic impression of how actual text will appear in
                            its final presentation. This is dummy copy. It is
                            not meant to be read. It has been placed here solely
                            to demonstrate the look and feel of finished,
                            typeset text. These words are here to provide the
                            reader with a basic impression of how actual text
                            will appear in its final presentation. Only for
                            show.
                          </p>
                          <div className="px-md-5 px-3 py-4 quotation">
                            <i className="base-color lni-quotation size-md" />
                            <h6 className="base-color font-italic mb-0">
                              We Love Buna, lorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Vestibulum id ligula
                              felis euismod semper.
                            </h6>
                          </div>
                          <p className="my-3">
                            This is dummy copy. It is not meant to be read. It
                            has been placed here solely to demonstrate the look
                            and feel of finished, typeset text. These words are
                            here to provide the reader with a basic impression
                            of how actual text will appear in its final
                            presentation. Only for show.
                          </p>
                          <ul className="mt-4 checkmark-list mb-0">
                            <li className="mb-2">
                              <span>
                                The purpose of lorem ipsum is to create
                              </span>
                            </li>

                            <li className="mb-2">
                              <span>
                                In particular, the garbled words of lorem ipsum
                              </span>
                            </li>

                            <li className="">
                              <span>
                                occasionally circumstances occur in which toil
                              </span>
                            </li>
                          </ul>
                          <p className="mt-3 mb-0">
                            These words are here to provide the reader with a
                            basic impression of how actual text will appear in
                            its final presentation. This is dummy copy. It is
                            not meant to be read. It has been placed here solely
                            to demonstrate the look and feel of finished,
                            typeset text. These words are here to provide the
                            reader with a basic impression of how actual text
                            will appear in its final presentation. Only for
                            show.
                          </p>
                        </div>

                        <h2 className="text-left my-4">Comments</h2>
                        <div
                          id="user-comments"
                          className="comments mt-4 box-border"
                        >
                          <ul
                            className="comment even thread-even depth-1 list-unstyled comments-list m-0"
                            id="comment-1"
                          >
                            <li id="div-comment-1" className="p-3">
                              <div className="comment-wrap">
                                <div className="comment-image float-left">
                                  <div className="commnet-image-border">
                                    <img
                                      alt="/"
                                      src="https://placehold.co/85x85"
                                      className="avatar avatar-65 photo"
                                      height="65"
                                      width="65"
                                    />
                                  </div>
                                </div>
                                <div className="comment-content">
                                  <div className="comment-author">
                                    <span>Jessy Doe</span>
                                    <p className="text-muted comment-date">
                                      July 23, 2020 at 9:32 am
                                    </p>
                                    <a href="#" className="comment-reply-link">
                                      <i className="fa fa-reply" /> Reply
                                    </a>
                                  </div>
                                  <div className="comment-text">
                                    <span>
                                      Hi, this is a comment. To get started with
                                      moderating, editing, and deleting
                                      comments, please visit the Comments screen
                                      in the dashboard. Commenter avatars come
                                      from Gravatar.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              id="div-comment-1-2"
                              className="reply-comment p-3"
                            >
                              <div className="comment-wrap">
                                <div className="comment-image float-left">
                                  <div className="commnet-image-border">
                                    <img
                                      alt="/"
                                      src="https://placehold.co/85x85"
                                      className="avatar avatar-65 photo"
                                      height="65"
                                      width="65"
                                    />
                                  </div>
                                </div>
                                <div className="comment-content">
                                  <div className="comment-author">
                                    <span>Marry Doe</span>
                                    <p className="text-muted comment-date">
                                      July 23, 2020 at 9:32 am
                                    </p>
                                    <a href="#" className="comment-reply-link">
                                      <i className="fa fa-reply" /> Reply
                                    </a>
                                  </div>
                                  <div className="comment-text">
                                    <span>
                                      Hi, this is a comment. To get started with
                                      moderating, editing, and deleting
                                      comments, please visit the Comments screen
                                      in the dashboard. Commenter avatars come
                                      from Gravatar.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="comments-devider" />
                          <ul
                            className="comment even thread-even depth-1 list-unstyled comments-list m-0"
                            id="comment-2"
                          >
                            <li id="div-comment-2" className="p-3">
                              <div className="comment-wrap">
                                <div className="comment-image float-left">
                                  <div className="commnet-image-border">
                                    <img
                                      alt="/"
                                      src="https://placehold.co/85x85"
                                      className="avatar avatar-65 photo"
                                      height="65"
                                      width="65"
                                    />
                                  </div>
                                </div>
                                <div className="comment-content">
                                  <div className="comment-author">
                                    <span>Michael Anderson</span>
                                    <p className="text-muted comment-date">
                                      July 23, 2020 at 9:32 am
                                    </p>
                                    <a href="#" className="comment-reply-link">
                                      <i className="fa fa-reply" /> Reply
                                    </a>
                                  </div>
                                  <div className="comment-text">
                                    <span>
                                      Hi, this is a comment. To get started with
                                      moderating, editing, and deleting
                                      comments, please visit the Comments screen
                                      in the dashboard. Commenter avatars come
                                      from Gravatar.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="comments-devider" />
                          <ul
                            className="comment even thread-even depth-1 list-unstyled comments-list m-0"
                            id="comment-3"
                          >
                            <li id="div-comment-3" className="p-3">
                              <div className="comment-wrap">
                                <div className="comment-image float-left">
                                  <div className="commnet-image-border">
                                    <img
                                      alt="/"
                                      src="https://placehold.co/85x85"
                                      className="avatar avatar-65 photo"
                                      height="65"
                                      width="65"
                                    />
                                  </div>
                                </div>
                                <div className="comment-content">
                                  <div className="comment-author">
                                    <span>Olivia Anderson</span>
                                    <p className="text-muted comment-date">
                                      July 23, 2020 at 9:32 am
                                    </p>
                                    <a href="#" className="comment-reply-link">
                                      <i className="fa fa-reply" /> Reply
                                    </a>
                                  </div>
                                  <div className="comment-text">
                                    <span>
                                      Hi, this is a comment. To get started with
                                      moderating, editing, and deleting
                                      comments, please visit the Comments screen
                                      in the dashboard. Commenter avatars come
                                      from Gravatar.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="contact mt-4">
                          <div className="contact-form">
                            <h2 className="text-left mb-4">Leave a reply</h2>
                            <form>
                              <div className="row">
                                <div className="col-lg-6 form-item">
                                  <div className="form-group">
                                    <input
                                      name="name"
                                      id="blog-name"
                                      type="text"
                                      className="form-control"
                                      placeholder="Your Name*"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6 form-item">
                                  <div className="form-group">
                                    <input
                                      name="email"
                                      id="blog-email"
                                      type="email"
                                      className="form-control"
                                      placeholder="Your Email*"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="col-12 form-item">
                                  <div className="form-group">
                                    <textarea
                                      name="comments"
                                      id="blog-comments"
                                      rows="4"
                                      className="form-control"
                                      placeholder="Your message..."
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12 mt-4 text-left">
                                  <div className="button-border">
                                    <button
                                      type="submit"
                                      className="pill-button"
                                      id="blog-submit-btn"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
