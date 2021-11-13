import React, { useState } from "react";

import settingIcon from "../../../../Assets/assetsnew/settings-3-line.svg";
import edit_white from "../../../../Assets/assetsnew/edit_white.svg";

export default function ReviewEdit() {
  const [isEdit, setIsEdit] = useState(true);
  const letEditTheForm = () => {
    setIsEdit(!isEdit);
  };

  const IsEditedView = () => {
    return (
      <div className="pb-5">
        <div className="boxepicenter d-flex justify-content-center items-align-center mb-5">
          <div className="box_with_serivcecontrtacts_">
            <div className="row">
              <div className="col d-flex flex-row-reverse">
                <span className="ml-3">
                  <img src={settingIcon} alt="" />
                </span>
                <span className="edit_cl_contract " onClick={letEditTheForm}>
                  Done Editing
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="container">
                  <div className="service_contract mb-3">Service Contract</div>
                  <div className="fitness_app mb-2 dotted_rectangle  title_d">
                    <span className="after_hover ">
                      <span className="btns_ds">
                        {" "}
                        <span className="edit_rv_con">
                          <span>
                            <img src={edit_white} alt="" />
                          </span>
                          <span>Edit</span>
                        </span>
                        <span className="edit_rv_con_hide"></span>
                      </span>
                    </span>
                    <span className="fitapp">Fitness App</span>
                  </div>
                  <div className="text_ mb-5 dotted_rectangle">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </div>
                  <div className="row">
                    <div className="col ">
                      <div className="dotted_rectangle">
                        <div className="clientd text_ ">Client</div>
                        <div className="clientd text_">
                          <div>Hudson Agency</div>
                          <div>James Harrison</div>
                          <div>james.harrison@gmail.com</div>
                          <div>4108 Kelly Street,</div>
                          <div> Dallas NC, North Carolina, 28034</div>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="col ">
                      {" "}
                      <div className="dotted_rectangle">
                        <div className="contractor text_">Contractor</div>
                        <div className="clientd text_">
                          <div>Tap Design Studio</div>
                          <div>Mark Hannery</div>
                          <div>markhannery@yahoo.com</div>
                          <div>3948 Ersel Street,</div>
                          <div> Dallas, Texas, 20302</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fitness_app mb-3">Services </div>
                  <div className="___">
                    Contractor agrees to perform services as described in
                    Attachment A (the “Services”) and Client agrees to pay
                    Contractor as described in Attachment A.
                  </div>
                  <div className="fitness_app mb-3">Signatures </div>
                  <div className="___ mb-5">
                    In witness whereof, the Parties, have executed this
                    Agreement, inclusive of Attachment A and Attachment B, as of
                    the later of the two dates below (the “Effective Date”).
                  </div>

                  <div className="row mb-5">
                    <div className="col">
                      <div className="clientd text_">
                        Client ( James Harrison)
                      </div>
                    </div>
                    <div className="col">
                      <div className="clientd text_">
                        Client ( James Harrison)
                      </div>
                    </div>
                  </div>

                  <div className="row mb-5">
                    <div className="col-3">
                      <div className="bottom__dash"></div>
                      <div className="ss__ text_">Signature</div>
                    </div>
                    <div className="col-2">
                      <div className="bottom__dash"></div>{" "}
                      <div className="ss__ text_">Date</div>
                    </div>
                    <div className="col-3">
                      <div className="bottom__dash"></div>{" "}
                      <div className="ss__ text_">Signature</div>
                    </div>
                    <div className="col-2">
                      <div className="bottom__dash"></div>{" "}
                      <div className="ss__ text_">Date</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pb-5">
      {isEdit ? (
        <IsEditedView />
      ) : (
        <div>
          <div className="boxepicenter d-flex justify-content-center items-align-center mb-5">
            <div className="box_with_serivcecontrtacts">
              <div className="row">
                <div className="col d-flex flex-row-reverse">
                  <span className="ml-3">
                    <img src={settingIcon} alt="" />
                  </span>
                  <span className="edit_cl_contract" onClick={letEditTheForm}>
                    Edit
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="container">
                    <div className="service_contract mb-3">
                      Service Contract
                    </div>
                    <div className="fitness_app mb-2">Fitness App</div>
                    <div className="text_ mb-5">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </div>
                    <div className="row">
                      <dir className="col">
                        <div className="clientd text_">Client</div>
                        <div className="clientd text_">
                          <div>Hudson Agency</div>
                          <div>James Harrison</div>
                          <div>james.harrison@gmail.com</div>
                          <div>4108 Kelly Street,</div>
                          <div> Dallas NC, North Carolina, 28034</div>
                        </div>
                      </dir>
                      <dir className="col">
                        <div className="contractor text_">Contractor</div>
                        <div className="clientd text_">
                          <div>Tap Design Studio</div>
                          <div>Mark Hannery</div>
                          <div>markhannery@yahoo.com</div>
                          <div>3948 Ersel Street,</div>
                          <div> Dallas, Texas, 20302</div>
                        </div>
                      </dir>
                    </div>
                    <div className="fitness_app mb-3">Services </div>
                    <div className="___">
                      Contractor agrees to perform services as described in
                      Attachment A (the “Services”) and Client agrees to pay
                      Contractor as described in Attachment A.
                    </div>
                    <div className="fitness_app mb-3">Signatures </div>
                    <div className="___ mb-5">
                      In witness whereof, the Parties, have executed this
                      Agreement, inclusive of Attachment A and Attachment B, as
                      of the later of the two dates below (the “Effective
                      Date”).
                    </div>

                    <div className="row mb-5">
                      <div className="col">
                        <div className="clientd text_">
                          Client ( James Harrison)
                        </div>
                      </div>
                      <div className="col">
                        <div className="clientd text_">
                          Client ( James Harrison)
                        </div>
                      </div>
                    </div>

                    <div className="row mb-5">
                      <div className="col-3">
                        <div className="bottom__dash"></div>
                        <div className="ss__ text_">Signature</div>
                      </div>
                      <div className="col-2">
                        <div className="bottom__dash"></div>{" "}
                        <div className="ss__ text_">Date</div>
                      </div>
                      <div className="col-3">
                        <div className="bottom__dash"></div>{" "}
                        <div className="ss__ text_">Signature</div>
                      </div>
                      <div className="col-2">
                        <div className="bottom__dash"></div>{" "}
                        <div className="ss__ text_">Date</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="boxepicenter d-flex justify-content-center items-align-center mb-5">
            <div className="box_with_serivcecontrtacts">
              <div className="row">
                <div className="col">
                  <div className="container">
                    <div className="service_contract mb-5 mt-3">
                      Attachment A: Services
                    </div>
                    <div className="ter fitness_app mb-4">Terms</div>
                    <div className="Starts-08-Aug-2021">
                      <span className="text-style-1">Starts</span>
                      <span className="text-style-2">:</span>08 Aug, 2021
                    </div>
                    <div className="Line-Copy"></div>
                    <div className="ter fitness_app mb-4">Billing Schedule</div>
                    <div className="Starts-08-Aug-2021">
                      COntractor bills client once
                    </div>
                    <div className="Line-Copy"></div>
                    <div className="ter fitness_app mb-4">Final Invoice</div>
                    <div className="Starts-08-Aug-2021">
                      Invoice includes the following services
                    </div>
                    <div className="Line-Copy"></div>
                    <div className="ter fitness_app mb-4">₹0.00 · Flat fee</div>
                    <div className="Starts-08-Aug-2021"></div>
                    <div className="Line-Copy"></div>{" "}
                    <div className="ter fitness_app mb-4">Project Total</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="boxepicenter d-flex justify-content-center items-align-center mb-5 pa">
            <div className="box_with_serivcecontrtacts">
              <div className="row">
                <div className="col">
                  <div className="container">
                    <div className="service_contract mb-3">
                      Attachment B: Terms and Conditions
                    </div>
                    <div className="fitness_app mb-5">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy.{" "}
                    </div>
                    <div className="fitness_app mb-2">Acceptances</div>
                    <div className="Starts-08-Aug-2021 mb-4">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. It is a
                      long established fact that a reader will be distracted by
                      the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to
                      using 'Content here, content here', making it look like
                      readable English. Many desktop publishing packages and web
                      page editors now use Lorem Ipsum as their default model
                      text, and a search for 'lorem ipsum' will uncover many web
                      sites still in their infancy.{" "}
                    </div>
                    <div className="fitness_app mb-2">Warranty</div>
                    <div className="Starts-08-Aug-2021 mb-4">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. It is a
                      long established fact that a reader will be distracted by
                      the readable content of a page when looking at its layout.{" "}
                      <br /> <br />
                      Contractor has the experience and ability to do everything
                      Contractor agreed to for Client and will do it all in a
                      professional and timely manner. Contractor will endeavor
                      to meet every deadline that’s set and to meet the
                      expectation for Services to the best of its abilities.
                    </div>
                    <div className="fitness_app mb-2">
                      Confidentiality &amp; Non-Disclosure
                    </div>
                    <div className="Starts-08-Aug-2021 mb-4">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. It is a
                      long established fact that a reader will be distracted by
                      the readable content of a page when looking at its layout.{" "}
                      <br /> <br />
                      Contractor has the experience and ability to do everything
                      Contractor agreed to for Client and will do it all in a
                      professional and timely manner. Contractor will endeavor
                      to meet every deadline that’s set and to meet the
                      expectation for Services to the best of its abilities.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
