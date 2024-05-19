/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { KTSVG, toAbsoluteUrl } from '../../../../../_metronic/helpers';
import { tabItems } from './TabItemsData';

type props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const ProfileHeader: React.FC<props> = ({ activeTab, setActiveTab }) => {
  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='Metornic' />
              <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-1'>
                  <span className='text-gray-800 fs-2 fw-bolder me-1'>Generator Name</span>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-5 mb-4 pe-2'>
                  <span className='d-flex align-items-center text-gray-800 me-5 mb-2'>
                    UID: DVF001V1
                  </span>
                </div>
              </div>
            </div>

            <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap'>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <div className='fs-3 fw-bold'>2000 KV</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Capacity</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <div className='fs-3 fw-bold'>Suzuki</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Engine Brand</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr066.svg'
                        className='svg-icon-3 svg-icon-success me-2'
                      />
                      <div className='fs-3 fw-bold'>Toyota</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Alternative Engine Brand</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex overflow-auto h-55px'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            {tabItems.map((tabItem) => (
              <li key={tabItem.key} className='nav-item'>
                <a
                  href='#'
                  className={
                    `nav-link text-active-primary me-6 ` + (activeTab === tabItem.key && 'active')
                  }
                  onClick={() => setActiveTab(tabItem.key)}
                >
                  {tabItem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { ProfileHeader };
