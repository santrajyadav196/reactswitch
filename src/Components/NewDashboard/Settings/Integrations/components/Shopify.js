import React, {useState} from "react";

import closedBtn from "../../../../../Assets/assetsnew/close-circle-line-3.svg";
import shopify from "../../../../../Assets/assetsnew/Shopify-Big.jpg";

const Shopify = () => {
  return (
    <>
      <div
        className='modal fade'
        id='ShopifyModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog modal-fullscreen Setting-Integrations-ImportData-Rectangle'>
          <div className='modal-content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col'>
                  <div className='d-flex flex-row-reverse'>
                    <img data-bs-dismiss='modal' src={closedBtn} alt='' />
                  </div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <div className='d-flex justify-content-center'>
                    <img src={shopify} alt='' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='d-flex justify-content-center'>
                    <div className='Setting-TextFontOne-BigFont'>
                      Connect Shopify
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col'>
                  <div className='Setting-TextFontTwo'>
                    <div className='d-flex justify-content-center pl-4 pr-2'>
                      <div>
                        Automatically import your sales from Shopify into
                        AND.CO. Once connected, AND.CO will file your store
                        sales as income. Making sure you’re automatically
                        prepared for tax time.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <div>
                    <label className='Setting-TextFontOne' htmlFor=''>
                      Enter your store-url:
                    </label>
                  </div>
                  <input
                    className='Setting-TextFontOne Setting-Integrations-Shopify-input-RectangleOne'
                    type='text'
                    placeholder='Shopify Domain'
                  />
                  <span
                    class='Setting-TextFontOne Setting-Integrations-Shopify-input-RectangleTwo'
                    id='basic-addon2'>
                    .myshopify.com
                  </span>
                </div>
              </div>
              <div className='row mt-5'>
                <div className='col-6'>
                  <div className='Setting-Integrations-Cancel-Rectangle'>
                    <div className='d-flex justify-content-center'>Cancel</div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='Setting-Integrations-Continue-Rectangle'>
                    <div className='d-flex justify-content-center'>Connect</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopify;
