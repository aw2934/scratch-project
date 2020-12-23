import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import ServicesDisplay from './ServicesDisplay';
import SideBar from './SideBar';


function ServicesPage() {
  return (
    <div className='d-flex'>
      <div className='col-3 px-0'>
        <SideBar />
        <div className='d-flex flex-column align-items-center'>
          <button className='btn btn-warning'>View my families</button>
        </div>
      </div>
      <div className='col-8 mt-5 pt-5 ml-5'>
        
          <ServicesDisplay />
                
        <div className='d-flex justify-content-end align-items-end'>
          <button className='btn btn-success mr-2'>+ Add Service</button>
          {/*service icon should be removed from screen once row gets deleted from db*/}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;